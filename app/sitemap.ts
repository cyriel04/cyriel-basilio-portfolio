import type { MetadataRoute } from "next";
import { CONTENT_UPDATED, SITE_URL } from "./constants";

export default function sitemap(): MetadataRoute.Sitemap {
	return [
		{
			url: SITE_URL,
			lastModified: CONTENT_UPDATED,
		},
		{
			url: `${SITE_URL}/contact`,
			lastModified: CONTENT_UPDATED,
		},
	];
}
