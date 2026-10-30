import type { ReactNode } from "react";
import cx from "classnames";
import PointerGlow from "./PointerGlow";
import Sidebar from "./Sidebar";
import styles from "./PageShell.module.scss";

// Sticky sidebar on the left, scrolling content on the right; one column on
// narrow screens.
const PageShell = ({
	isHome,
	fitViewport = false,
	children,
}: {
	isHome: boolean;
	/** Size the content column to one screen, for short pages. */
	fitViewport?: boolean;
	children: ReactNode;
}) => (
	<>
		<PointerGlow />
		<div className={styles.shell}>
			<Sidebar isHome={isHome} />
			<main className={cx(styles.main, fitViewport && styles.fit)}>
				{children}
			</main>
		</div>
	</>
);

export default PageShell;
