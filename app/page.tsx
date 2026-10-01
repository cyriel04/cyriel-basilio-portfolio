import styles from "./page.module.css";
import Navigation from "./components/Navigation";

import { Typography } from "@mui/material";
import Article from "./layout/Article";
import Footer from "./components/Footer";
import { Description, GitHub, LinkedIn } from "@mui/icons-material";
import {
	PROFILE,
	SUMMARY,
	SKILLS,
	EXPERIENCE,
	PROJECTS,
	PERSONAL_PROJECTS,
	EDUCATION,
} from "./constants";

const allSkills = [...new Set(Object.values(SKILLS).flat())];

const SOCIAL_LINKS = [
	{ label: "Resume", href: PROFILE.resumeUrl, Icon: Description },
	{ label: "LinkedIn", href: PROFILE.linkedin, Icon: LinkedIn },
	{ label: "GitHub", href: PROFILE.github, Icon: GitHub },
];

export default function Home() {
	return (
		<>
			<Navigation />
			<main className={styles.main}>
				<section className={styles.hero}>
					<Typography
						variant="h2"
						component="h1"
						sx={{ fontWeight: 700 }}
						className={styles.heroTitle}
					>
						Hi, I&apos;m{" "}
						<span className={styles.nameText}>{PROFILE.name}.</span>
					</Typography>
					<Typography
						variant="h5"
						component="p"
						sx={{ fontWeight: 500 }}
						className={styles.subtitle}
					>
						{PROFILE.title}
					</Typography>
					<Typography
						variant="body1"
						sx={{ fontWeight: 500 }}
						className={styles.descriptionText}
					>
						{SUMMARY}
					</Typography>

					<ul className={styles.aboutButtons}>
						{SOCIAL_LINKS.map(({ label, href, Icon }) => (
							<li key={label}>
								<a
									href={href}
									target="_blank"
									rel="noopener noreferrer"
									aria-label={label}
									data-tooltip={label}
									className={styles.iconLink}
								>
									<Icon fontSize="large" />
								</a>
							</li>
						))}
					</ul>
				</section>

				<section id="experience" className={styles.section}>
					<Typography
						variant="h5"
						component="h2"
						sx={{ fontWeight: 600 }}
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
									sx={{ fontWeight: 600 }}
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
						sx={{ fontWeight: 600 }}
						id="projects-heading"
						className={styles.sectionTitle}
					>
						Projects
					</Typography>
					<Article projects={PROJECTS} labelledBy="projects-heading" />
				</section>

				<section id="personal-works" className={styles.section}>
					<Typography
						variant="h5"
						component="h2"
						sx={{ fontWeight: 600 }}
						id="personal-works-heading"
						className={styles.sectionTitle}
					>
						Personal Works
					</Typography>
					<Article
						projects={PERSONAL_PROJECTS}
						labelledBy="personal-works-heading"
					/>
				</section>

				<section id="skills" className={styles.section}>
					<Typography
						variant="h5"
						component="h2"
						sx={{ fontWeight: 600 }}
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
						sx={{ fontWeight: 600 }}
						className={styles.sectionTitle}
					>
						Education
					</Typography>
					<div className={styles.education}>
						<Typography
							variant="subtitle1"
							component="h3"
							sx={{ fontWeight: 600 }}
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
