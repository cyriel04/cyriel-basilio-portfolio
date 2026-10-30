import type { Job } from "../constants/types";
import { EXTERNAL_LINK } from "./externalLink";
import StackPills from "./StackPills";
import styles from "./ExperienceList.module.scss";

const ExperienceList = ({ jobs }: { jobs: Job[] }) => (
	<ol className={styles.list}>
		{jobs.map((job) => (
			<li key={`${job.company}-${job.period}`} className={styles.row}>
				<p className={styles.period}>{job.period}</p>
				<div>
					<h3 className={styles.role}>
						{job.role} <span className={styles.company}>· {job.company}</span>
					</h3>
					<p className={styles.type}>{job.type}</p>

					{job.projects.map((project) => (
						<article key={project.title} className={styles.project}>
							<h4 className={styles.projectTitle}>
								{project.url ? (
									<a href={project.url} {...EXTERNAL_LINK}>
										{project.title} ↗
									</a>
								) : (
									project.title
								)}
								{project.internal && (
									<span className={styles.internal}> · internal</span>
								)}
							</h4>
							<p className={styles.description}>{project.description}</p>
							<StackPills items={project.stack} />
						</article>
					))}
				</div>
			</li>
		))}
	</ol>
);

export default ExperienceList;
