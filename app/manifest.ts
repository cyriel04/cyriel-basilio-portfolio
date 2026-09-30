import type { MetadataRoute } from "next";
import { BRAND, PROFILE, SITE_DESCRIPTION } from "./constants";

export default function manifest(): MetadataRoute.Manifest {
	return {
		id: "/",
		name: `${PROFILE.name} | ${PROFILE.title}`,
		short_name: "Cyriel",
		description: SITE_DESCRIPTION,
		start_url: "/",
		scope: "/",
		display: "standalone",
		background_color: BRAND.background,
		theme_color: BRAND.background,
		icons: [
			{
				src: "/icon-192.png",
				sizes: "192x192",
				type: "image/png",
			},
			{
				src: "/icon-512.png",
				sizes: "512x512",
				type: "image/png",
			},
			{
				src: "/icon-maskable-512.png",
				sizes: "512x512",
				type: "image/png",
				purpose: "maskable",
			},
		],
	};
}
