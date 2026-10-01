import Link from "next/link";
import { CONTENT_UPDATED, PROFILE } from "../constants";
import styles from "./Footer.module.scss";

const Footer = () => {
	return (
		<footer className={styles.footer}>
			<ul className={styles.links}>
				<li>
					<Link href="/contact" className={styles.link}>
						Contact
					</Link>
				</li>
				<li>
					<a
						href={PROFILE.repoUrl}
						target="_blank"
						rel="noopener noreferrer"
						className={styles.link}
					>
						Source
					</a>
				</li>
			</ul>
			<p className={styles.copyright}>
				© {CONTENT_UPDATED.getUTCFullYear()} {PROFILE.name}
			</p>
		</footer>
	);
};

export default Footer;
