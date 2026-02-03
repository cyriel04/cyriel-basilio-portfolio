import Link from 'next/link'
import styles from './Footer.module.scss'

const Footer = () => {
	return (
		<footer className={styles.footer}>
			<div className={styles.links}>
				<Link href="/contact" className={styles.link}>
					Contact
				</Link>
				<a
					href="https://github.com/cyriel04/cyriel-basilio-portfolio"
					target="_blank"
					rel="noopener noreferrer"
					className={styles.link}
				>
					Source
				</a>
			</div>
			<p className={styles.copyright}>© {new Date().getFullYear()}</p>
		</footer>
	)
}

export default Footer
