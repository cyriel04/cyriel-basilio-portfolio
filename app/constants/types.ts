export type ClientProject = {
	title: string;
	url: string | null;
	/** Internal tools with no public page; rendered with an "internal" marker. */
	internal?: boolean;
	stack: string[];
	description: string;
};

export type Job = {
	company: string;
	role: string;
	period: string;
	type: string;
	projects: ClientProject[];
};

export type PersonalProject = {
	title: string;
	url: string;
	stack: string[];
	description: string;
	/** Screenshot in public/projects/; cards show a placeholder without one. */
	image?: { src: string; alt: string };
};
