import styles from './page.module.css'
import Navigation from './components/Navigation'

import { Button, Typography } from '@mui/material'
import Article from './layout/Article'
import Footer from './components/Footer'
import { GitHub, LinkedIn } from '@mui/icons-material'
import {
	PROFILE,
	SUMMARY,
	SKILLS,
	EXPERIENCE,
	EDUCATION,
} from './constants'

export default function Home() {
	const allSkills = [
		...SKILLS.frontend,
		...SKILLS.styling,
		...SKILLS.testing,
		...SKILLS.state,
		...SKILLS.tools,
		...SKILLS.backend,
		...SKILLS.ai,
	].filter((s, i, arr) => arr.indexOf(s) === i)

	return (
		<div>
			<Navigation />
			<main className={styles.main}>
				<section className={styles.hero}>
					<Typography variant="h2" fontWeight={700} className={styles.heroTitle}>
						Hi, I&apos;m <span className={styles.nameText}>{PROFILE.name}.</span>
					</Typography>
					<Typography variant="h5" fontWeight={500} className={styles.subtitle}>
						{PROFILE.title}
					</Typography>
					<Typography variant="body1" fontWeight={500} className={styles.descriptionText}>
						{SUMMARY}
					</Typography>

					<div className={styles.aboutButtons}>
						<Button
							variant="outlined"
							target="_blank"
							href={PROFILE.resumeUrl}
							rel="noopener noreferrer"
							className={styles.resumeBtn}
						>
							Resume
						</Button>
						<Button
							variant="text"
							target="_blank"
							href={PROFILE.linkedin}
							rel="noopener noreferrer"
							aria-label="LinkedIn"
						>
							<LinkedIn fontSize="large" />
						</Button>
						<Button
							variant="text"
							target="_blank"
							href={PROFILE.github}
							rel="noopener noreferrer"
							aria-label="GitHub"
						>
							<GitHub fontSize="large" />
						</Button>
					</div>
				</section>

				<section className={styles.section}>
					<span id="experience" className={styles.scrollAnchor} aria-hidden="true" />
					<Typography variant="h5" fontWeight={600} className={styles.sectionTitle}>
						EXPERIENCE
					</Typography>
					<div className={styles.experienceList}>
						{EXPERIENCE.map((job, index) => (
							<div key={index} className={styles.experienceItem}>
								<Typography variant="subtitle1" fontWeight={600}>
									{job.role} · {job.company}
								</Typography>
								<Typography variant="body2" color="text.secondary">
									{job.period} ({job.type})
								</Typography>
							</div>
						))}
					</div>
				</section>

				<section className={styles.section}>
					<span id="projects" className={styles.scrollAnchor} aria-hidden="true" />
					<Typography variant="h5" fontWeight={600} className={styles.sectionTitle}>
						PROJECTS
					</Typography>
					<Article />
				</section>

				<section className={styles.section}>
					<span id="skills" className={styles.scrollAnchor} aria-hidden="true" />
					<Typography variant="h5" fontWeight={600} className={styles.sectionTitle}>
						SKILLS
					</Typography>
					<div className={styles.skills}>
						{allSkills.map((skill, index) => (
							<span key={index} className={styles.skillTag}>
								{skill}
							</span>
						))}
					</div>
				</section>

				<section className={styles.section}>
					<span id="education" className={styles.scrollAnchor} aria-hidden="true" />
					<Typography variant="h5" fontWeight={600} className={styles.sectionTitle}>
						EDUCATION
					</Typography>
					<div className={styles.education}>
						<Typography variant="subtitle1" fontWeight={600}>
							{EDUCATION.school}
						</Typography>
						<Typography variant="body2">{EDUCATION.degree}</Typography>
					</div>
				</section>
			</main>
			<Footer />
		</div>
	)
}
