import type { MetadataRoute } from "next";
import { PROFILE } from "./constants";

export default function manifest(): MetadataRoute.Manifest {
	return {
		name: `${PROFILE.name} | ${PROFILE.title}`,
		short_name: PROFILE.name,
		description: `Portfolio of ${PROFILE.name}, ${PROFILE.title}.`,
		start_url: "/",
		display: "standalone",
		background_color: "#1a1d2e",
		theme_color: "#1a1d2e",
		icons: [
			{
				src: "/favicon.ico",
				sizes: "any",
				type: "image/x-icon",
			},
		],
	};
}
