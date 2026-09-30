import { Card, CardContent, Typography } from "@mui/material";
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
	<Card
		component="article"
		className={cx(styles.contentCard, className, !project.url && styles.noLink)}
	>
		<CardContent>
			<Typography
				gutterBottom
				variant="h6"
				component="h3"
				className={styles.title}
			>
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
			</Typography>
			<Typography variant="caption" component="p" className={styles.company}>
				{project.company}
			</Typography>
			<Typography variant="body2" className={styles.description}>
				{project.description}
			</Typography>
			<ul className={styles.projectStack} aria-label="Tech stack">
				{project.stack.map((tech) => (
					<li key={tech} className={styles.tech}>
						{tech}
					</li>
				))}
			</ul>
		</CardContent>
	</Card>
);

export default ContentCard;
