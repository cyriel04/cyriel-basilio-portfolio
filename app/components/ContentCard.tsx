import cx from "classnames";

import styles from "./ContentCard.module.scss";

export type Project = {
	title: string;
	url: string | null;
	company: string;
	stack: string[];
	description: string;
};

const ContentCard = ({
	project,
	className,
}: {
	project: Project;
	className?: string;
}) => (
	<article
		className={cx(styles.contentCard, className, !project.url && styles.noLink)}
	>
		<h3 className={styles.title}>
			{project.url ? (
				<a
					href={project.url}
					target="_blank"
					rel="noopener noreferrer"
					className={styles.link}
				>
					{project.title}
				</a>
			) : (
				project.title
			)}
		</h3>
		<p className={styles.company}>{project.company}</p>
		<p className={styles.description}>{project.description}</p>
		<ul className={styles.projectStack} aria-label="Tech stack">
			{project.stack.map((tech) => (
				<li key={tech} className={styles.tech}>
					{tech}
				</li>
			))}
		</ul>
	</article>
);

export default ContentCard;
