import type { Metadata } from "next";
import { Typography } from "@mui/material";
import { Email, Phone, LinkedIn, GitHub } from "@mui/icons-material";
import Link from "next/link";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import { PROFILE } from "../constants";
import styles from "./contact.module.css";

const title = "Contact";
// Page-level openGraph/twitter replace the root ones rather than merging, so
// the root opengraph-image has to be referenced explicitly.
const ogImage = {
	url: "/opengraph-image",
	width: 1200,
	height: 630,
	alt: `${PROFILE.name} | ${PROFILE.title}`,
};
const description = `Get in touch with ${PROFILE.name}, ${PROFILE.title}. Reach out via email, phone, LinkedIn, or GitHub.`;

export const metadata: Metadata = {
	title,
	description,
	alternates: {
		canonical: "/contact",
	},
	openGraph: {
		type: "website",
		url: "/contact",
		siteName: `${PROFILE.name} Portfolio`,
		title: `${title} | ${PROFILE.name}`,
		description,
		locale: "en_US",
		images: [ogImage],
	},
	twitter: {
		card: "summary_large_image",
		title: `${title} | ${PROFILE.name}`,
		description,
		images: [ogImage],
	},
};

// "https://github.com/cyriel04" -> "github.com/cyriel04"
const displayUrl = (url: string) =>
	url.replace(/^https?:\/\/(www\.)?/, "").replace(/\/$/, "");

const CONTACT_LINKS = [
	{
		label: "Email",
		value: PROFILE.email,
		href: `mailto:${PROFILE.email}`,
		icon: <Email fontSize="large" />,
		external: false,
	},
	{
		label: "Phone",
		value: PROFILE.phone,
		href: `tel:${PROFILE.phone.replace(/\s/g, "")}`,
		icon: <Phone fontSize="large" />,
		external: false,
	},
	{
		label: "LinkedIn",
		value: displayUrl(PROFILE.linkedin),
		href: PROFILE.linkedin,
		icon: <LinkedIn fontSize="large" />,
		external: true,
	},
	{
		label: "GitHub",
		value: displayUrl(PROFILE.github),
		href: PROFILE.github,
		icon: <GitHub fontSize="large" />,
		external: true,
	},
];

export default function Contact() {
	return (
		<div className={styles.wrapper}>
			<Navigation />
			<main className={styles.main}>
				<Typography
					variant="h4"
					component="h1"
					sx={{ fontWeight: 700 }}
					className={styles.title}
				>
					Get in Touch
				</Typography>
				<Typography variant="body1" className={styles.subtitle}>
					Open to new opportunities and collaborations. Let&apos;s connect!
				</Typography>

				<ul className={styles.links}>
					{CONTACT_LINKS.map((link) => (
						<li key={link.label}>
							<a
								href={link.href}
								className={styles.contactCard}
								{...(link.external && {
									target: "_blank",
									rel: "noopener noreferrer",
								})}
							>
								{link.icon}
								<Typography
									variant="subtitle1"
									component="span"
									sx={{ fontWeight: 600 }}
									className={styles.cardLabel}
								>
									{link.label}
								</Typography>
								<Typography
									variant="body2"
									component="span"
									className={styles.cardValue}
								>
									{link.value}
								</Typography>
							</a>
						</li>
					))}
				</ul>

				<Link href="/" className={styles.backLink}>
					← Back to Home
				</Link>
			</main>
			<Footer />
		</div>
	);
}
