import Link from "next/link";
import { PROFILE } from "../constants";
import SectionNav from "./SectionNav";
import styles from "./Sidebar.module.scss";

const LINKS = [
	{ label: "GitHub", href: PROFILE.github },
	{ label: "LinkedIn", href: PROFILE.linkedin },
];

// The name is the page's h1 on the homepage only; other pages bring their own.
const Sidebar = ({ isHome }: { isHome: boolean }) => {
	const Name = isHome ? "h1" : "p";

	return (
		<header className={styles.sidebar}>
			<Name className={styles.name}>
				<Link href="/">{PROFILE.name}</Link>
			</Name>
			<p className={styles.role}>{PROFILE.role}</p>
			<p className={styles.tagline}>{PROFILE.tagline}</p>
			{PROFILE.openToWork && (
				<p className={styles.badge}>
					<span className={styles.dot} aria-hidden="true" />
					Open to new roles
				</p>
			)}

			<SectionNav hrefPrefix={isHome ? "" : "/"} />

			<ul className={styles.links}>
				<li>
					<a
						href={PROFILE.cvUrl}
						target="_blank"
						rel="noopener noreferrer"
						className={styles.cv}
					>
						CV ↗
					</a>
				</li>
				{LINKS.map(({ label, href }) => (
					<li key={label}>
						<a
							href={href}
							target="_blank"
							rel="noopener noreferrer"
							className={styles.link}
						>
							{label}
						</a>
					</li>
				))}
				<li>
					<a href={`mailto:${PROFILE.email}`} className={styles.link}>
						Email
					</a>
				</li>
				<li>
					<Link href="/contact" className={styles.link}>
						Contact
					</Link>
				</li>
			</ul>
		</header>
	);
};

export default Sidebar;
