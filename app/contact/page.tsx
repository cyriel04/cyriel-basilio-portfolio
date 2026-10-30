import type { Metadata } from "next";
import Footer from "../components/Footer";
import CopyButton from "../components/CopyButton";
import { EXTERNAL_LINK } from "../components/externalLink";
import {
	EmailIcon,
	GitHubIcon,
	LinkedInIcon,
	PhoneIcon,
} from "../components/icons";
import PageShell from "../components/PageShell";
import { PROFILE } from "../constants";
import styles from "./contact.module.scss";

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

// Email and phone get a copy button; profiles open in a new tab.
const CONTACT_LINKS = [
	{
		label: "Email",
		value: PROFILE.email,
		href: `mailto:${PROFILE.email}`,
		Icon: EmailIcon,
		copy: true,
	},
	{
		label: "Phone",
		value: PROFILE.phone,
		href: `tel:${PROFILE.phone.replace(/\s/g, "")}`,
		Icon: PhoneIcon,
		copy: true,
	},
	{
		label: "LinkedIn",
		value: displayUrl(PROFILE.linkedin),
		href: PROFILE.linkedin,
		Icon: LinkedInIcon,
		copy: false,
	},
	{
		label: "GitHub",
		value: displayUrl(PROFILE.github),
		href: PROFILE.github,
		Icon: GitHubIcon,
		copy: false,
	},
];

export default function Contact() {
	return (
		<PageShell isHome={false} fitViewport>
			<section aria-labelledby="contact-heading" className={styles.content}>
				<h1 id="contact-heading" className={styles.title}>
					Get in Touch
				</h1>
				<p className={styles.subtitle}>
					Open to new opportunities and collaborations. Let&apos;s connect!
				</p>

				<div className={styles.actions}>
					<a href={`mailto:${PROFILE.email}`} className={styles.primary}>
						Email me
					</a>
					<a
						href={PROFILE.cvUrl}
						{...EXTERNAL_LINK}
						className={styles.secondary}
					>
						View CV ↗
					</a>
				</div>

				<ul className={styles.links}>
					{CONTACT_LINKS.map(({ label, value, href, Icon, copy }) => (
						<li key={label} className={styles.row}>
							<a
								href={href}
								className={styles.rowLink}
								{...(!copy && EXTERNAL_LINK)}
							>
								<span className={styles.icon} aria-hidden="true">
									<Icon />
								</span>
								<span className={styles.text}>
									<span className={styles.label}>{label}</span>
									<span className={styles.value}>
										{value}
										{!copy && <span className={styles.arrow}> ↗</span>}
									</span>
								</span>
							</a>
							{copy && <CopyButton value={value} label={label} />}
						</li>
					))}
				</ul>
			</section>
			<Footer />
		</PageShell>
	);
}
