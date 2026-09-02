import "./globals.css";
import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";

import { AppRouterCacheProvider } from "@mui/material-nextjs/v15-appRouter";
import theme from "./theme";
import { ThemeProvider } from "@mui/material";
import { PROFILE } from "./constants";

const inter = Inter({
	subsets: ["latin"],
	display: "swap",
});

const siteUrl = "https://cyriel-basilio-portfolio.vercel.app";
const title = `${PROFILE.name} | ${PROFILE.title}`;
const description =
	"Frontend developer with 7+ years specializing in React and TypeScript. Portfolio featuring experience, projects, and skills.";

export const metadata: Metadata = {
	metadataBase: new URL(siteUrl),
	title: {
		default: title,
		template: `%s | ${PROFILE.name}`,
	},
	description,
	keywords: [
		"Cyriel Basilio",
		"React Developer",
		"Frontend Developer",
		"React",
		"TypeScript",
		"Next.js",
		"JavaScript",
		"Web Developer Portfolio",
		"Frontend Developer Portfolio",
		"Fullstack Developer",
		"Cyriel Neil Basilio",
		"Cyriel",
		"Basilio",
	],
	authors: [{ name: PROFILE.name, url: siteUrl }],
	creator: PROFILE.name,
	alternates: {
		canonical: "/",
	},
	openGraph: {
		type: "website",
		url: "/",
		siteName: `${PROFILE.name} Portfolio`,
		title,
		description,
		locale: "en_US",
	},
	twitter: {
		card: "summary_large_image",
		title,
		description,
	},
	robots: {
		index: true,
		follow: true,
	},
};

export const viewport: Viewport = {
	themeColor: "#1a1d2e",
};

const personJsonLd = {
	"@context": "https://schema.org",
	"@type": "Person",
	name: PROFILE.name,
	jobTitle: PROFILE.title,
	url: siteUrl,
	email: `mailto:${PROFILE.email}`,
	sameAs: [PROFILE.linkedin, PROFILE.github],
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en">
			<body className={inter.className}>
				<script
					type="application/ld+json"
					dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
				/>
				<AppRouterCacheProvider>
					<ThemeProvider theme={theme}>{children}</ThemeProvider>
				</AppRouterCacheProvider>
			</body>
		</html>
	);
}
