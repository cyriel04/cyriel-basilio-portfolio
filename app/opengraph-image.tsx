import { ImageResponse } from "next/og";
import { PROFILE } from "./constants";

export const runtime = "edge";
export const alt = `${PROFILE.name} | ${PROFILE.title}`;
export const size = {
	width: 1200,
	height: 630,
};
export const contentType = "image/png";

export default async function OpengraphImage() {
	return new ImageResponse(
		<div
			style={{
				width: "100%",
				height: "100%",
				display: "flex",
				flexDirection: "column",
				alignItems: "center",
				justifyContent: "center",
				background: "#1a1d2e",
				color: "#e8ecf4",
				fontFamily: "sans-serif",
			}}
		>
			<div style={{ fontSize: 72, fontWeight: 700, display: "flex" }}>
				{PROFILE.name}
			</div>
			<div
				style={{
					fontSize: 36,
					fontWeight: 500,
					color: "#5ba3f5",
					marginTop: 24,
					display: "flex",
				}}
			>
				{PROFILE.title}
			</div>
		</div>,
		{
			...size,
		},
	);
}
