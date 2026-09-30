import { ImageResponse } from "next/og";
import { BRAND } from "./constants";

export const size = {
	width: 32,
	height: 32,
};
export const contentType = "image/png";

export default function Icon() {
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
				fontSize: 20,
				fontWeight: 700,
				fontFamily: "sans-serif",
			}}
		>
			CB
		</div>,
		{ ...size },
	);
}
