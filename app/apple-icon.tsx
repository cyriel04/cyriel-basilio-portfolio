import { ImageResponse } from "next/og";
import { BRAND } from "./constants";

export const size = {
	width: 180,
	height: 180,
};
export const contentType = "image/png";

export default function AppleIcon() {
	return new ImageResponse(
		<div
			style={{
				width: "100%",
				height: "100%",
				display: "flex",
				alignItems: "center",
				justifyContent: "center",
				background: BRAND.background,
				color: BRAND.accent,
				fontSize: 96,
				fontWeight: 700,
				fontFamily: "sans-serif",
			}}
		>
			CB
		</div>,
		{ ...size },
	);
}
