import { ImageResponse } from "next/og";

export const runtime = "edge";
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
				background: "#1a1d2e",
				color: "#5ba3f5",
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
