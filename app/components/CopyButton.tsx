"use client";

import { useEffect, useState } from "react";
import styles from "./CopyButton.module.scss";

const CopyButton = ({ value, label }: { value: string; label: string }) => {
	const [copied, setCopied] = useState(false);

	useEffect(() => {
		if (!copied) return;
		const timer = setTimeout(() => setCopied(false), 2000);
		return () => clearTimeout(timer);
	}, [copied]);

	const copy = async () => {
		try {
			await navigator.clipboard.writeText(value);
			setCopied(true);
		} catch {
			// Clipboard blocked (insecure context or denied); the link still works.
		}
	};

	return (
		<button
			type="button"
			onClick={copy}
			className={styles.button}
			aria-label={copied ? `${label} copied` : `Copy ${label.toLowerCase()}`}
		>
			{copied ? "Copied" : "Copy"}
			<span className={styles.status} role="status">
				{copied ? `${label} copied to clipboard` : ""}
			</span>
		</button>
	);
};

export default CopyButton;
