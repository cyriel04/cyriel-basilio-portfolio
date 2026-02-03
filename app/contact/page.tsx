import { Typography } from '@mui/material'
import { Email, Phone, LinkedIn, GitHub } from '@mui/icons-material'
import Link from 'next/link'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'
import { PROFILE } from '../constants'
import styles from './contact.module.css'

export default function Contact() {
	return (
		<div className={styles.wrapper}>
			<Navigation />
			<main className={styles.main}>
				<Typography variant="h4" fontWeight={700} className={styles.title}>
					Get in Touch
				</Typography>
				<Typography variant="body1" className={styles.subtitle}>
					Open to new opportunities and collaborations. Let&apos;s connect!
				</Typography>

				<div className={styles.links}>
					<a
						href={`mailto:${PROFILE.email}`}
						className={styles.contactCard}
						target="_blank"
						rel="noopener noreferrer"
					>
						<Email fontSize="large" />
						<Typography variant="subtitle1" fontWeight={600}>
							Email
						</Typography>
						<Typography variant="body2">{PROFILE.email}</Typography>
					</a>

					<a
						href={`tel:${PROFILE.phone.replace(/\s/g, '')}`}
						className={styles.contactCard}
						target="_blank"
						rel="noopener noreferrer"
					>
						<Phone fontSize="large" />
						<Typography variant="subtitle1" fontWeight={600}>
							Phone
						</Typography>
						<Typography variant="body2">{PROFILE.phone}</Typography>
					</a>

					<a
						href={PROFILE.linkedin}
						className={styles.contactCard}
						target="_blank"
						rel="noopener noreferrer"
					>
						<LinkedIn fontSize="large" />
						<Typography variant="subtitle1" fontWeight={600}>
							LinkedIn
						</Typography>
						<Typography variant="body2">linkedin.com</Typography>
					</a>

					<a
						href={PROFILE.github}
						className={styles.contactCard}
						target="_blank"
						rel="noopener noreferrer"
					>
						<GitHub fontSize="large" />
						<Typography variant="subtitle1" fontWeight={600}>
							GitHub
						</Typography>
						<Typography variant="body2">github.com/cyriel04</Typography>
					</a>
				</div>

				<Link href="/" className={styles.backLink}>
					← Back to Home
				</Link>
			</main>
			<Footer />
		</div>
	)
}
