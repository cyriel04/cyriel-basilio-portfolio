import ContentCard, { type Project } from "../components/ContentCard";
import styles from "./Article.module.scss";

type ArticleProps = {
	projects: Project[];
	label: string;
};

const Article = ({ projects, label }: ArticleProps) => {
	return (
		// Focusable so keyboard users can scroll the carousel with arrow keys.
		<div
			className={styles.article}
			role="region"
			aria-label={label}
			tabIndex={0}
		>
			{projects.map((project) => (
				<ContentCard
					key={project.title}
					project={project}
					className={styles.articleCard}
				/>
			))}
		</div>
	);
};

export default Article;
