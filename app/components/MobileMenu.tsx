"use client";

import { useState } from "react";
import Link from "next/link";
import { Drawer, IconButton } from "@mui/material";
import { Close, Menu } from "@mui/icons-material";
import styles from "./Navigation.module.scss";

type NavLink = { href: string; label: string };

const MENU_ID = "mobile-menu";

const MobileMenu = ({ links }: { links: NavLink[] }) => {
	const [menuOpen, setMenuOpen] = useState(false);

	return (
		<>
			<IconButton
				className={styles.menuButton}
				aria-label="Open menu"
				aria-expanded={menuOpen}
				aria-controls={MENU_ID}
				onClick={() => setMenuOpen(true)}
			>
				<Menu />
			</IconButton>
			<Drawer
				anchor="right"
				open={menuOpen}
				onClose={() => setMenuOpen(false)}
				keepMounted
				classes={{ paper: styles.drawerPaper }}
				slotProps={{
					paper: {
						role: "dialog",
						"aria-modal": true,
						"aria-label": "Site menu",
					},
				}}
			>
				<IconButton
					className={styles.closeButton}
					aria-label="Close menu"
					onClick={() => setMenuOpen(false)}
				>
					<Close />
				</IconButton>
				<nav id={MENU_ID} aria-label="Mobile">
					<ul className={styles.drawerLinks}>
						{links.map((link) => (
							<li key={link.href}>
								<Link href={link.href} onClick={() => setMenuOpen(false)}>
									{link.label}
								</Link>
							</li>
						))}
					</ul>
				</nav>
			</Drawer>
		</>
	);
};

export default MobileMenu;
