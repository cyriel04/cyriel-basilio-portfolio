import Link from "next/link";
import { PROFILE } from "../constants";
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
				© {new Date().getFullYear()} {PROFILE.name}
			</p>
		</footer>
	);
};

export default Footer;
