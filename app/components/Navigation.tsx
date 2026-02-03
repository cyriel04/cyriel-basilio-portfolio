import React from 'react'
import Link from 'next/link'
import styles from './Navigation.module.scss'
import { Typography } from '@mui/material'

const Navigation = () => {
	return (
		<nav id="navigation" className={styles.navigation}>
			<Link href="/" className={styles.logo} aria-label="Home">
				<Typography fontWeight={700} className={styles.title} variant="subtitle1">
					CB
				</Typography>
			</Link>
			<ul className={styles.links}>
				<li>
					<a href="/#experience">experience</a>
				</li>
				<li>
					<a href="/#projects">projects</a>
				</li>
				<li>
					<a href="/#skills">skills</a>
				</li>
				<li>
					<a href="/#education">education</a>
				</li>
				<li>
					<a href="/contact">contact</a>
				</li>
			</ul>
		</nav>
	)
}

export default Navigation
