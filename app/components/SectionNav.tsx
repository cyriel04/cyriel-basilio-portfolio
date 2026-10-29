"use client";

import { useEffect, useState } from "react";
import cx from "classnames";
import styles from "./Sidebar.module.scss";

export const SECTIONS = [
	{ id: "about", label: "About" },
	{ id: "experience", label: "Experience" },
	{ id: "works", label: "Recent Works" },
	{ id: "skills", label: "Skills" },
	{ id: "education", label: "Education" },
] as const;

// Off the homepage the links point back at "/#id" and nothing is observed.
const SectionNav = ({ hrefPrefix }: { hrefPrefix: "" | "/" }) => {
	const [active, setActive] = useState<string | null>(null);

	useEffect(() => {
		if (hrefPrefix !== "") return;
		const observer = new IntersectionObserver(
			(entries) => {
				for (const entry of entries) {
					if (entry.isIntersecting) setActive(entry.target.id);
				}
			},
			// A section is "current" while it crosses the band 40–45% down the viewport.
			{ rootMargin: "-40% 0px -55% 0px" },
		);
		const sections = document.querySelectorAll("main section[id]");
		sections.forEach((section) => observer.observe(section));

		// The last section is too short to reach the band, so claim it once the
		// page is scrolled to the bottom.
		const last = sections[sections.length - 1];
		const onScroll = () => {
			const { scrollHeight } = document.documentElement;
			if (last && window.innerHeight + window.scrollY >= scrollHeight - 2) {
				setActive(last.id);
			}
		};
		window.addEventListener("scroll", onScroll, { passive: true });
		return () => {
			observer.disconnect();
			window.removeEventListener("scroll", onScroll);
		};
	}, [hrefPrefix]);

	return (
		<nav aria-label="Sections" className={styles.nav}>
			<ul>
				{SECTIONS.map(({ id, label }) => (
					<li key={id}>
						<a
							href={`${hrefPrefix}#${id}`}
							className={cx(styles.navLink, active === id && styles.active)}
							aria-current={active === id ? "true" : undefined}
						>
							{label}
						</a>
					</li>
				))}
			</ul>
		</nav>
	);
};

export default SectionNav;
