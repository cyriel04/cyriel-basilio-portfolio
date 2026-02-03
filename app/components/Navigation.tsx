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
					<Link href="/#experience">experience</Link>
				</li>
				<li>
					<Link href="/#projects">projects</Link>
				</li>
				<li>
					<Link href="/#skills">skills</Link>
				</li>
				<li>
					<Link href="/#education">education</Link>
				</li>
				<li>
					<Link href="/contact">contact</Link>
				</li>
			</ul>
		</nav>
	)
}

export default Navigation
