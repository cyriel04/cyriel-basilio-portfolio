import Link from "next/link";
import styles from "./Navigation.module.scss";
import MobileMenu from "./MobileMenu";

export const NAV_LINKS = [
	{ href: "/#experience", label: "experience" },
	{ href: "/#projects", label: "projects" },
	{ href: "/#skills", label: "skills" },
	{ href: "/#education", label: "education" },
	{ href: "/contact", label: "contact" },
];

const Navigation = () => {
	return (
		<header className={styles.navigation}>
			<Link href="/" className={styles.logo} aria-label="Home">
				<span className={styles.title}>CB</span>
			</Link>
			<nav aria-label="Main">
				<ul className={styles.links}>
					{NAV_LINKS.map((link) => (
						<li key={link.href}>
							<Link href={link.href}>{link.label}</Link>
						</li>
					))}
				</ul>
			</nav>
			<MobileMenu links={NAV_LINKS} />
		</header>
	);
};

export default Navigation;
