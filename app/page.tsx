import styles from "./page.module.css";
import Navigation from "./components/Navigation";

import { Button, Typography } from "@mui/material";
import Article from "./layout/Article";
import Footer from "./components/Footer";
import { GitHub, LinkedIn } from "@mui/icons-material";
import { PROFILE, SUMMARY, SKILLS, EXPERIENCE, EDUCATION } from "./constants";

const allSkills = [...new Set(Object.values(SKILLS).flat())];

export default function Home() {
	return (
		<>
			<Navigation />
			<main className={styles.main}>
				<section className={styles.hero}>
					<Typography
						variant="h2"
						component="h1"
						fontWeight={700}
						className={styles.heroTitle}
					>
						Hi, I&apos;m{" "}
						<span className={styles.nameText}>{PROFILE.name}.</span>
					</Typography>
					<Typography
						variant="h5"
						component="p"
						fontWeight={500}
						className={styles.subtitle}
					>
						{PROFILE.title}
					</Typography>
					<Typography
						variant="body1"
						fontWeight={500}
						className={styles.descriptionText}
					>
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
							className={styles.iconLink}
						>
							<LinkedIn fontSize="large" />
						</Button>
						<Button
							variant="text"
							target="_blank"
							href={PROFILE.github}
							rel="noopener noreferrer"
							aria-label="GitHub"
							className={styles.iconLink}
						>
							<GitHub fontSize="large" />
						</Button>
					</div>
				</section>

				<section id="experience" className={styles.section}>
					<Typography
						variant="h5"
						component="h2"
						fontWeight={600}
						className={styles.sectionTitle}
					>
						Experience
					</Typography>
					<ul className={styles.experienceList}>
						{EXPERIENCE.map((job) => (
							<li
								key={`${job.company}-${job.period}`}
								className={styles.experienceItem}
							>
								<Typography
									variant="subtitle1"
									component="h3"
									fontWeight={600}
									className={styles.role}
								>
									{job.role} · {job.company}
								</Typography>
								<Typography variant="body2" className={styles.period}>
									{job.period} ({job.type})
								</Typography>
							</li>
						))}
					</ul>
				</section>

				<section id="projects" className={styles.section}>
					<Typography
						variant="h5"
						component="h2"
						fontWeight={600}
						className={styles.sectionTitle}
					>
						Projects
					</Typography>
					<Article />
				</section>

				<section id="skills" className={styles.section}>
					<Typography
						variant="h5"
						component="h2"
						fontWeight={600}
						className={styles.sectionTitle}
					>
						Skills
					</Typography>
					<ul className={styles.skills}>
						{allSkills.map((skill) => (
							<li key={skill} className={styles.skillTag}>
								{skill}
							</li>
						))}
					</ul>
				</section>

				<section id="education" className={styles.section}>
					<Typography
						variant="h5"
						component="h2"
						fontWeight={600}
						className={styles.sectionTitle}
					>
						Education
					</Typography>
					<div className={styles.education}>
						<Typography
							variant="subtitle1"
							component="h3"
							fontWeight={600}
							className={styles.school}
						>
							{EDUCATION.school}
						</Typography>
						<Typography variant="body2" className={styles.degree}>
							{EDUCATION.degree}
						</Typography>
					</div>
				</section>
			</main>
			<Footer />
		</>
	);
}
