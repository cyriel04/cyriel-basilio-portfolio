import { Card, CardContent, Typography } from '@mui/material'
import cx from 'classnames'
import Link from 'next/link'

import styles from './ContentCard.module.scss'

export type Project = {
	title: string
	url: string | null
	company: string
	stack: string[]
	description: string
}

const ContentCard = ({ project, className }: { project: Project; className?: string }) => (
	<Card className={cx(styles.contentCard, className, !project.url && styles.noLink)}>
		<CardContent>
			{project.url ? (
				<Link href={project.url} target="_blank" rel="noopener noreferrer" className={styles.link}>
					<Typography gutterBottom variant="h6" component="div" className={styles.title}>
						{project.title}
					</Typography>
				</Link>
			) : (
				<Typography gutterBottom variant="h6" component="div" className={styles.title}>
					{project.title}
				</Typography>
			)}
				<Typography variant="caption" className={styles.company}>
					{project.company}
				</Typography>
				<Typography variant="body2" className={styles.description}>
					{project.description}
				</Typography>
				<div className={styles.projectStack}>
					{project.stack.map((tech) => (
						<span key={tech} className={styles.tech}>
							{tech}
						</span>
					))}
				</div>
			</CardContent>
	</Card>
)

export default ContentCard
