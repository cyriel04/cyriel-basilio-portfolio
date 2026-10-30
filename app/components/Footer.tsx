import { PROFILE } from "../constants";
import { EXTERNAL_LINK } from "./externalLink";
import styles from "./Footer.module.scss";

const INSPIRATIONS = [
	{ name: "Brittany Chiang", href: "https://brittanychiang.com" },
	{ name: "Adham Dannaway", href: "https://www.adhamdannaway.com" },
];

const Footer = () => (
	<footer className={styles.footer}>
		<p>
			Built with Next.js and deployed on Vercel. Loosely inspired by{" "}
			<a href={INSPIRATIONS[0].href} {...EXTERNAL_LINK} className={styles.link}>
				{INSPIRATIONS[0].name}
			</a>{" "}
			and{" "}
			<a href={INSPIRATIONS[1].href} {...EXTERNAL_LINK} className={styles.link}>
				{INSPIRATIONS[1].name}
			</a>
			.
		</p>
		<p>
			{/* Build-time year; every deploy refreshes it. */}©{" "}
			{new Date().getFullYear()} {PROFILE.name} ·{" "}
			<a href={PROFILE.repoUrl} {...EXTERNAL_LINK} className={styles.link}>
				Source
			</a>
		</p>
	</footer>
);

export default Footer;
