import { PROFILE } from "../constants";
import styles from "./Footer.module.scss";

const INSPIRATIONS = [
	{ name: "Brittany Chiang", href: "https://brittanychiang.com" },
	{ name: "Adham Dannaway", href: "https://www.adhamdannaway.com" },
];

const external = { target: "_blank", rel: "noopener noreferrer" } as const;

const Footer = () => (
	<footer className={styles.footer}>
		<p>
			Built with Next.js and deployed on Vercel. Loosely inspired by{" "}
			<a href={INSPIRATIONS[0].href} {...external} className={styles.link}>
				{INSPIRATIONS[0].name}
			</a>{" "}
			and{" "}
			<a href={INSPIRATIONS[1].href} {...external} className={styles.link}>
				{INSPIRATIONS[1].name}
			</a>
			.
		</p>
		<p>
			{/* Build-time year; every deploy refreshes it. */}©{" "}
			{new Date().getFullYear()} {PROFILE.name} ·{" "}
			<a href={PROFILE.repoUrl} {...external} className={styles.link}>
				Source
			</a>
		</p>
	</footer>
);

export default Footer;
