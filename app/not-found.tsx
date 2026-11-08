import type { Metadata } from "next";
import Link from "next/link";
import styles from "./contact/contact.module.scss";
import Footer from "./components/Footer";
import PageShell from "./components/PageShell";

export const metadata: Metadata = {
	title: "Page not found",
	description: "The page you are looking for does not exist.",
	// A 404 must not inherit the root layout's canonical "/" or "index" robots.
	alternates: { canonical: null },
	robots: { index: false },
};

export default function NotFound() {
	return (
		<PageShell isHome={false} fitViewport>
			<section aria-labelledby="not-found-heading" className={styles.content}>
				<h1 id="not-found-heading" className={styles.title}>
					Page not found
				</h1>
				<p className={styles.subtitle}>
					This page doesn&apos;t exist or may have moved.
				</p>

				<div className={styles.actions}>
					<Link href="/" className={styles.primary}>
						Back to homepage
					</Link>
					<Link href="/contact" className={styles.secondary}>
						Contact me
					</Link>
				</div>
			</section>
			<Footer />
		</PageShell>
	);
}
