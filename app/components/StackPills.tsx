import styles from "./StackPills.module.scss";

const StackPills = ({ items }: { items: string[] }) => (
	<ul className={styles.pills} aria-label="Tech stack">
		{items.map((item) => (
			<li key={item} className={styles.pill}>
				{item}
			</li>
		))}
	</ul>
);

export default StackPills;
