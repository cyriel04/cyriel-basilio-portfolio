import cx from "classnames";
import ExperienceList from "./components/ExperienceList";
import Footer from "./components/Footer";
import PageShell from "./components/PageShell";
import RecentWorks from "./components/RecentWorks";
import {
	EDUCATION,
	EXPERIENCE,
	PERSONAL_PROJECTS,
	SKILLS,
	SUMMARY,
} from "./constants";
import styles from "./page.module.scss";

const allSkills = [...new Set(Object.values(SKILLS).flat())];

const HIGHLIGHTS = [
	"8+ years",
	"ProSource",
	"Accelo design system",
	"Accelo V4",
	"Forecast",
];
const HIGHLIGHT_PATTERN = new RegExp(`(${HIGHLIGHTS.join("|")})`);

// SUMMARY splits into two paragraphs after the sentence about Forecast; if
// that sentence is ever reworded, it falls back to a single paragraph.
const SUMMARY_BREAK = "acquired by Accelo in 2025. ";
const breakAt = SUMMARY.indexOf(SUMMARY_BREAK);
const summaryParagraphs =
	breakAt === -1
		? [SUMMARY]
		: [
				SUMMARY.slice(0, breakAt + SUMMARY_BREAK.length),
				SUMMARY.slice(breakAt + SUMMARY_BREAK.length),
			].filter(Boolean);

const highlight = (text: string) =>
	text
		.split(HIGHLIGHT_PATTERN)
		.map((part, i) =>
			HIGHLIGHTS.includes(part) ? <strong key={i}>{part}</strong> : part,
		);

export default function Home() {
	return (
		<PageShell isHome>
			<section
				id="about"
				aria-labelledby="about-heading"
				className={cx(styles.section, styles.about)}
			>
				<h2 id="about-heading" className={styles.label}>
					About
				</h2>
				{summaryParagraphs.map((paragraph) => (
					<p key={paragraph}>{highlight(paragraph)}</p>
				))}
			</section>

			<section
				id="experience"
				aria-labelledby="experience-heading"
				className={styles.section}
			>
				<h2 id="experience-heading" className={styles.label}>
					Experience &amp; client work
				</h2>
				<ExperienceList jobs={EXPERIENCE} />
			</section>

			<section
				id="works"
				aria-labelledby="works-heading"
				className={styles.section}
			>
				<h2 id="works-heading" className={cx(styles.label, styles.worksLabel)}>
					Some of my recent works
				</h2>
				<RecentWorks projects={PERSONAL_PROJECTS} />
			</section>

			<section
				id="skills"
				aria-labelledby="skills-heading"
				className={styles.section}
			>
				<h2 id="skills-heading" className={styles.label}>
					Skills
				</h2>
				<ul className={styles.skills}>
					{allSkills.map((skill) => (
						<li key={skill} className={styles.skill}>
							{skill}
						</li>
					))}
				</ul>
			</section>

			<section
				id="education"
				aria-labelledby="education-heading"
				className={styles.section}
			>
				<h2 id="education-heading" className={styles.label}>
					Education
				</h2>
				<p className={styles.degree}>{EDUCATION.degree}</p>
				<p className={styles.school}>{EDUCATION.school}</p>
			</section>

			<Footer />
		</PageShell>
	);
}
