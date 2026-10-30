// Generates every favicon and app icon from one "CB" mark: app/favicon.ico,
// app/icon.png, app/apple-icon.png and the PWA icons in public/.
// Run with `npm run icons` after changing the brand colours in app/constants.
// Needs network access: it downloads Inter (the site font) from Google Fonts.
import { writeFile } from "node:fs/promises";
import { createElement as h } from "react";
import { ImageResponse } from "next/og.js";

// Keep in sync with BRAND in app/constants/index.ts.
const BACKGROUND = "#12152a";
const TEXT = "#e8ecf4";

// Google Fonts serves TTF (which ImageResponse needs) to clients that don't
// advertise WOFF2 support, such as Node's fetch.
async function loadInter() {
	const css = await (
		await fetch("https://fonts.googleapis.com/css2?family=Inter:wght@800")
	).text();
	const url = css.match(/src: url\((.+?\.ttf)\)/)?.[1];
	if (!url) throw new Error("Couldn't find the Inter TTF URL");
	return (await fetch(url)).arrayBuffer();
}

const inter = await loadInter();

// rounded: transparent rounded corners, for tabs and "any"-purpose icons.
// Full-bleed (rounded: false) is for iOS and Android maskable icons, which
// apply their own shape. Maskable icons keep the letters inside the central
// 80% safe zone, hence the smaller text.
async function renderIcon(size, { rounded = true, textScale = 0.46 } = {}) {
	const response = new ImageResponse(
		h(
			"div",
			{
				style: {
					width: "100%",
					height: "100%",
					display: "flex",
					alignItems: "center",
					justifyContent: "center",
					background: BACKGROUND,
					borderRadius: rounded ? size * 0.22 : 0,
					color: TEXT,
					fontFamily: "Inter",
					fontSize: Math.round(size * textScale),
					fontWeight: 800,
					letterSpacing: "-0.06em",
				},
			},
			"CB",
		),
		{
			width: size,
			height: size,
			fonts: [{ name: "Inter", data: inter, weight: 800, style: "normal" }],
		},
	);
	return Buffer.from(await response.arrayBuffer());
}

// ICO files can embed PNG images directly: a 6-byte header, a 16-byte
// directory entry per image, then the PNG data.
function buildIco(images) {
	const header = Buffer.alloc(6);
	header.writeUInt16LE(0, 0);
	header.writeUInt16LE(1, 2);
	header.writeUInt16LE(images.length, 4);

	let offset = 6 + 16 * images.length;
	const entries = images.map(({ size, png }) => {
		const entry = Buffer.alloc(16);
		entry.writeUInt8(size >= 256 ? 0 : size, 0);
		entry.writeUInt8(size >= 256 ? 0 : size, 1);
		entry.writeUInt16LE(1, 4);
		entry.writeUInt16LE(32, 6);
		entry.writeUInt32LE(png.length, 8);
		entry.writeUInt32LE(offset, 12);
		offset += png.length;
		return entry;
	});

	return Buffer.concat([header, ...entries, ...images.map(({ png }) => png)]);
}

// Small favicons get slightly larger letters so they stay legible.
const icoImages = await Promise.all(
	[
		[16, 0.56],
		[32, 0.52],
		[48, 0.5],
	].map(async ([size, textScale]) => ({
		size,
		png: await renderIcon(size, { textScale }),
	})),
);
await writeFile("app/favicon.ico", buildIco(icoImages));
await writeFile("app/icon.png", await renderIcon(512));
await writeFile(
	"app/apple-icon.png",
	await renderIcon(180, { rounded: false, textScale: 0.44 }),
);
await writeFile("public/icon-192.png", await renderIcon(192));
await writeFile("public/icon-512.png", await renderIcon(512));
await writeFile(
	"public/icon-maskable-512.png",
	await renderIcon(512, { rounded: false, textScale: 0.34 }),
);

console.log(
	"Generated app/favicon.ico, app/icon.png, app/apple-icon.png and public/icon-*.png",
);
