import ContentCard from '../components/ContentCard'
import { PROJECTS } from '../constants'
import styles from './Article.module.scss'

const Article = () => {
	return (
		<div className={styles.article}>
			{PROJECTS.map((project, index) => (
				<ContentCard key={index} project={project} className={styles.articleCard} />
			))}
		</div>
	)
}

export default Article
