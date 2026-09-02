import type { MetadataRoute } from "next";

const siteUrl = "https://cyriel-basilio.vercel.app";

export default function sitemap(): MetadataRoute.Sitemap {
	return [
		{
			url: siteUrl,
			lastModified: new Date(),
			changeFrequency: "monthly",
			priority: 1,
		},
		{
			url: `${siteUrl}/contact`,
			lastModified: new Date(),
			changeFrequency: "yearly",
			priority: 0.5,
		},
	];
}
