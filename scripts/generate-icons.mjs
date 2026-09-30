// Generates the static PWA icons in public/ and the multi-size app/favicon.ico
// from the same "CB" mark used by app/icon.tsx and app/apple-icon.tsx.
// Run with `npm run icons` after changing the brand colours in app/constants.
import { writeFile } from "node:fs/promises";
import { createElement as h } from "react";
import { ImageResponse } from "next/og.js";

// Keep in sync with BRAND in app/constants/index.ts.
const BACKGROUND = "#1a1d2e";
const ACCENT = "#5ba3f5";

async function renderIcon(size, { maskable = false } = {}) {
	// Maskable icons must keep content inside the central 80% safe zone.
	const fontSize = Math.round(size * (maskable ? 0.4 : 0.55));
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
					color: ACCENT,
					fontSize,
					fontWeight: 700,
					fontFamily: "sans-serif",
				},
			},
			"CB",
		),
		{ width: size, height: size },
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

await writeFile("public/icon-192.png", await renderIcon(192));
await writeFile("public/icon-512.png", await renderIcon(512));
await writeFile(
	"public/icon-maskable-512.png",
	await renderIcon(512, { maskable: true }),
);

const icoSizes = [16, 32, 48];
const icoImages = await Promise.all(
	icoSizes.map(async (size) => ({ size, png: await renderIcon(size) })),
);
await writeFile("app/favicon.ico", buildIco(icoImages));

console.log("Generated public/icon-*.png and app/favicon.ico");
