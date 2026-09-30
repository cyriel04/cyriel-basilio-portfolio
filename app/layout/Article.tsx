import ContentCard from "../components/ContentCard";
import { PROJECTS } from "../constants";
import styles from "./Article.module.scss";

const Article = () => {
	return (
		// Focusable so keyboard users can scroll the carousel with arrow keys.
		<div
			className={styles.article}
			role="region"
			aria-label="Projects"
			tabIndex={0}
		>
			{PROJECTS.map((project) => (
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
