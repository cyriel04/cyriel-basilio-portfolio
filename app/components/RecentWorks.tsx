import Image from "next/image";
import type { PersonalProject } from "../constants/types";
import { EXTERNAL_LINK } from "./externalLink";
import StackPills from "./StackPills";
import styles from "./RecentWorks.module.scss";

// The first project is featured across both columns.
const RecentWorks = ({ projects }: { projects: PersonalProject[] }) => (
	<ul className={styles.grid}>
		{projects.map((project) => (
			<li key={project.title} className={styles.item}>
				<a href={project.url} {...EXTERNAL_LINK} className={styles.card}>
					<div className={styles.shot}>
						{project.image ? (
							<Image
								src={project.image.src}
								alt={project.image.alt}
								fill
								sizes="(max-width: 599px) 100vw, (max-width: 1023px) 720px, 680px"
								className={styles.image}
							/>
						) : (
							<span className={styles.placeholder} aria-hidden="true">
								{project.title}
							</span>
						)}
					</div>
					<div className={styles.body}>
						<h3 className={styles.title}>
							{project.title} <span className={styles.arrow}>↗</span>
						</h3>
						<p className={styles.description}>{project.description}</p>
						<StackPills items={project.stack} />
					</div>
				</a>
			</li>
		))}
	</ul>
);

export default RecentWorks;
