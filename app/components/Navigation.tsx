"use client";

import React, { useState } from "react";
import Link from "next/link";
import styles from "./Navigation.module.scss";
import { Drawer, IconButton, Typography } from "@mui/material";
import { Close, Menu } from "@mui/icons-material";

const NAV_LINKS = [
	{ href: "/#experience", label: "experience" },
	{ href: "/#projects", label: "projects" },
	{ href: "/#skills", label: "skills" },
	{ href: "/#education", label: "education" },
	{ href: "/contact", label: "contact" },
];

const Navigation = () => {
	const [menuOpen, setMenuOpen] = useState(false);

	return (
		<nav id="navigation" className={styles.navigation}>
			<Link href="/" className={styles.logo} aria-label="Home">
				<Typography
					fontWeight={700}
					className={styles.title}
					variant="subtitle1"
				>
					CB
				</Typography>
			</Link>
			<ul className={styles.links}>
				{NAV_LINKS.map((link) => (
					<li key={link.href}>
						<Link href={link.href}>{link.label}</Link>
					</li>
				))}
			</ul>
			<IconButton
				className={styles.menuButton}
				aria-label="Open menu"
				onClick={() => setMenuOpen(true)}
			>
				<Menu />
			</IconButton>
			<Drawer
				anchor="right"
				open={menuOpen}
				onClose={() => setMenuOpen(false)}
				classes={{ paper: styles.drawerPaper }}
			>
				<IconButton
					className={styles.closeButton}
					aria-label="Close menu"
					onClick={() => setMenuOpen(false)}
				>
					<Close />
				</IconButton>
				<ul className={styles.drawerLinks}>
					{NAV_LINKS.map((link) => (
						<li key={link.href}>
							<Link href={link.href} onClick={() => setMenuOpen(false)}>
								{link.label}
							</Link>
						</li>
					))}
				</ul>
			</Drawer>
		</nav>
	);
};

export default Navigation;
