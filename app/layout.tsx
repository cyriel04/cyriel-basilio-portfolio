import "./globals.css";
import type { ReactNode } from "react";
import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";

import { AppRouterCacheProvider } from "@mui/material-nextjs/v16-appRouter";
import theme from "./theme";
import { ThemeProvider } from "@mui/material";
import {
	BRAND,
	EDUCATION,
	PROFILE,
	SITE_DESCRIPTION,
	SITE_URL,
	SKILLS,
} from "./constants";

const inter = Inter({
	subsets: ["latin"],
	display: "swap",
	variable: "--font-inter",
});

const title = `${PROFILE.name} | ${PROFILE.title}`;

export const metadata: Metadata = {
	metadataBase: new URL(SITE_URL),
	title: {
		default: title,
		template: `%s | ${PROFILE.name}`,
	},
	description: SITE_DESCRIPTION,
	keywords: [
		"Cyriel Basilio",
		"Cyriel Neil Basilio",
		"React Developer",
		"Frontend Developer",
		"React",
		"TypeScript",
		"Next.js",
		"JavaScript",
		"Web Developer Portfolio",
		"Frontend Developer Portfolio",
	],
	authors: [{ name: PROFILE.name, url: SITE_URL }],
	creator: PROFILE.name,
	alternates: {
		canonical: "/",
	},
	openGraph: {
		type: "website",
		url: "/",
		siteName: `${PROFILE.name} Portfolio`,
		title,
		description: SITE_DESCRIPTION,
		locale: "en_US",
	},
	twitter: {
		card: "summary_large_image",
		title,
		description: SITE_DESCRIPTION,
	},
	robots: {
		index: true,
		follow: true,
	},
	verification: {
		google: "3z1SI6nj_wpVWBO7qMPPcew2NAGpmXyP-4_heEhhXQ0",
	},
};

export const viewport: Viewport = {
	themeColor: BRAND.background,
};

const jsonLd = {
	"@context": "https://schema.org",
	"@graph": [
		{
			"@type": "Person",
			"@id": `${SITE_URL}/#person`,
			name: PROFILE.name,
			jobTitle: PROFILE.title,
			description: SITE_DESCRIPTION,
			url: SITE_URL,
			image: `${SITE_URL}/opengraph-image`,
			email: PROFILE.email,
			sameAs: [PROFILE.linkedin, PROFILE.github],
			alumniOf: {
				"@type": "CollegeOrUniversity",
				name: EDUCATION.school,
			},
			// Technical skills only; SKILLS.other holds soft skills.
			knowsAbout: [
				...new Set(
					Object.entries(SKILLS)
						.filter(([category]) => category !== "other")
						.flatMap(([, skills]) => skills),
				),
			],
		},
		{
			"@type": "WebSite",
			"@id": `${SITE_URL}/#website`,
			url: SITE_URL,
			name: `${PROFILE.name} Portfolio`,
			description: SITE_DESCRIPTION,
			author: { "@id": `${SITE_URL}/#person` },
			inLanguage: "en",
		},
	],
};

export default function RootLayout({ children }: { children: ReactNode }) {
	return (
		<html lang="en" className={inter.variable}>
			<body>
				<script
					type="application/ld+json"
					dangerouslySetInnerHTML={{
						__html: JSON.stringify(jsonLd).replace(/</g, "\\u003c"),
					}}
				/>
				{/* Emits MUI styles into @layer mui so CSS Modules override them. */}
				<AppRouterCacheProvider options={{ enableCssLayer: true }}>
					<ThemeProvider theme={theme}>{children}</ThemeProvider>
				</AppRouterCacheProvider>
			</body>
		</html>
	);
}
