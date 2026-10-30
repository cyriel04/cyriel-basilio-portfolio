"use client";

import { useEffect, useRef, useState } from "react";
import cx from "classnames";
import styles from "./Sidebar.module.scss";

export const SECTIONS = [
	{ id: "about", label: "About" },
	{ id: "experience", label: "Experience" },
	{ id: "works", label: "Recent Works" },
	{ id: "skills", label: "Skills" },
	{ id: "education", label: "Education" },
] as const;

// Off the homepage the links point back at "/#id" and nothing is tracked.
const SectionNav = ({ hrefPrefix }: { hrefPrefix: "" | "/" }) => {
	const [active, setActive] = useState<string | null>(null);
	// A clicked link names its own target; hold it until that jump settles so
	// the scroll position (e.g. a short section near the bottom) can't override it.
	const pinned = useRef<string | null>(null);
	const unpinTimer = useRef<ReturnType<typeof setTimeout>>(undefined);

	// Release the pin once scrolling has been quiet for a moment. Restarted on
	// every scroll event, so long smooth scrolls stay pinned until they finish.
	const unpinSoon = (delay = 200) => {
		clearTimeout(unpinTimer.current);
		unpinTimer.current = setTimeout(() => {
			pinned.current = null;
		}, delay);
	};

	useEffect(() => {
		if (hrefPrefix !== "") return;
		const sections = [
			...document.querySelectorAll<HTMLElement>("main section[id]"),
		];
		if (sections.length === 0) return;

		let frame = 0;

		// Current section: the first at the very top, the last at the very
		// bottom, otherwise the last one whose top has passed 45% down the screen.
		const update = () => {
			frame = 0;
			if (pinned.current) return;
			const { scrollY, innerHeight } = window;
			const { scrollHeight } = document.documentElement;
			if (scrollY <= 0) return setActive(sections[0].id);
			if (innerHeight + scrollY >= scrollHeight - 2) {
				return setActive(sections[sections.length - 1].id);
			}
			let current = sections[0].id;
			for (const section of sections) {
				if (section.getBoundingClientRect().top <= innerHeight * 0.45) {
					current = section.id;
				}
			}
			setActive(current);
		};

		const onScroll = () => {
			if (pinned.current) unpinSoon();
			else if (!frame) frame = requestAnimationFrame(update);
		};
		update();
		window.addEventListener("scroll", onScroll, { passive: true });
		return () => {
			cancelAnimationFrame(frame);
			clearTimeout(unpinTimer.current);
			window.removeEventListener("scroll", onScroll);
		};
	}, [hrefPrefix]);

	const onNavigate = (id: string) => {
		if (hrefPrefix !== "") return;
		setActive(id);
		pinned.current = id;
		// Covers the case where the target is already in view and nothing scrolls.
		unpinSoon(400);
	};

	return (
		<nav aria-label="Sections" className={styles.nav}>
			<ul>
				{SECTIONS.map(({ id, label }) => (
					<li key={id}>
						<a
							href={`${hrefPrefix}#${id}`}
							className={cx(styles.navLink, active === id && styles.active)}
							aria-current={active === id ? "true" : undefined}
							onClick={() => onNavigate(id)}
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
