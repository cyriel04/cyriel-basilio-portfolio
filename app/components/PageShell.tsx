import type { ReactNode } from "react";
import PointerGlow from "./PointerGlow";
import Sidebar from "./Sidebar";
import styles from "./PageShell.module.scss";

// Sticky sidebar on the left, scrolling content on the right; one column on
// narrow screens.
const PageShell = ({
	isHome,
	children,
}: {
	isHome: boolean;
	children: ReactNode;
}) => (
	<>
		<PointerGlow />
		<div className={styles.shell}>
			<Sidebar isHome={isHome} />
			<main className={styles.main}>{children}</main>
		</div>
	</>
);

export default PageShell;
