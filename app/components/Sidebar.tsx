import Link from "next/link";
import cx from "classnames";
import { PROFILE } from "../constants";
import { EXTERNAL_LINK } from "./externalLink";
import SectionNav from "./SectionNav";
import styles from "./Sidebar.module.scss";

const PROFILE_LINKS = [
	{ label: "GitHub", href: PROFILE.github },
	{ label: "LinkedIn", href: PROFILE.linkedin },
];

// The name is the page's h1 on the homepage only; other pages bring their own.
// Off the homepage (i.e. /contact) the links row is left out: the page itself
// carries the CV, email and profile links.
const Sidebar = ({ isHome }: { isHome: boolean }) => {
	const Name = isHome ? "h1" : "p";
	const badgeContent = (
		<>
			<span className={styles.dot} aria-hidden="true" />
			Open to new roles
		</>
	);

	return (
		<header className={cx(styles.sidebar, !isHome && styles.compact)}>
			<Name className={styles.name}>
				<Link href="/">{PROFILE.name}</Link>
			</Name>
			<p className={styles.role}>{PROFILE.role}</p>
			<p className={styles.tagline}>{PROFILE.tagline}</p>
			{PROFILE.openToWork &&
				// Leads to /contact; plain text when already there.
				(isHome ? (
					<Link href="/contact" className={cx(styles.badge, styles.badgeLink)}>
						{badgeContent} <span aria-hidden="true">→</span>
					</Link>
				) : (
					<p className={styles.badge}>{badgeContent}</p>
				))}

			<SectionNav hrefPrefix={isHome ? "" : "/"} />

			{isHome && (
				<ul className={styles.links}>
					<li>
						<a href={PROFILE.cvUrl} {...EXTERNAL_LINK} className={styles.cv}>
							CV ↗
						</a>
					</li>
					{PROFILE_LINKS.map(({ label, href }) => (
						<li key={label}>
							<a href={href} {...EXTERNAL_LINK} className={styles.link}>
								{label}
							</a>
						</li>
					))}
					<li>
						<Link href="/contact" className={styles.link}>
							Contact
						</Link>
					</li>
				</ul>
			)}
		</header>
	);
};

export default Sidebar;
