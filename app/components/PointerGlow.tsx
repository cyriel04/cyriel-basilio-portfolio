"use client";

import { useEffect, useRef, useState } from "react";
import styles from "./PageShell.module.scss";

// Soft radial glow that follows the pointer. Skipped for reduced motion and
// touch-only devices.
const PointerGlow = () => {
	const [enabled, setEnabled] = useState(false);
	const ref = useRef<HTMLDivElement>(null);

	useEffect(() => {
		const reduce = window.matchMedia("(prefers-reduced-motion: reduce)");
		const coarse = window.matchMedia("(pointer: coarse)");
		const update = () => setEnabled(!reduce.matches && !coarse.matches);
		update();
		reduce.addEventListener("change", update);
		coarse.addEventListener("change", update);
		return () => {
			reduce.removeEventListener("change", update);
			coarse.removeEventListener("change", update);
		};
	}, []);

	useEffect(() => {
		if (!enabled) return;
		const onMove = (event: PointerEvent) => {
			ref.current?.style.setProperty("--x", `${event.clientX}px`);
			ref.current?.style.setProperty("--y", `${event.clientY}px`);
		};
		window.addEventListener("pointermove", onMove, { passive: true });
		return () => window.removeEventListener("pointermove", onMove);
	}, [enabled]);

	if (!enabled) return null;
	return <div ref={ref} className={styles.glow} aria-hidden="true" />;
};

export default PointerGlow;
