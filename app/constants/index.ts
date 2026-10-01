import type { Project } from "../components/ContentCard";

export const SITE_URL = "https://cyriel-basilio.vercel.app";

// Bump when the site content changes; used for sitemap lastModified and the
// footer copyright year.
export const CONTENT_UPDATED = new Date("2026-10-01");

// Brand colours for places that can't read CSS variables (manifest, viewport,
// next/og images). Keep in sync with app/globals.css and app/theme.ts.
export const BRAND = {
	background: "#1a1d2e",
	accent: "#5ba3f5",
	text: "#e8ecf4",
};

export const PROFILE = {
	name: "Cyriel Basilio",
	title: "React JS Developer",
	phone: "+63 927 956 5916",
	email: "cyrielneil@gmail.com",
	linkedin: "https://linkedin.com/in/cyriel-basilio/",
	github: "https://github.com/cyriel04",
	repoUrl: "https://github.com/cyriel04/cyriel-basilio-portfolio",
	resumeUrl:
		"https://drive.google.com/file/d/1YbxidyF1E-JlSyvBb7CEaqaK9iPDuEIS/view?usp=drive_link",
};

export const SITE_DESCRIPTION =
	"Frontend developer with 8+ years specializing in React and TypeScript. Portfolio featuring experience, projects, and skills.";

export const SUMMARY =
	"Frontend developer with 8+ years specializing in React and TypeScript. Spent 4+ years at ProSource across three phases: building the Accelo design system (2022–2023), core platform feature development on Accelo V4 (2023–2026), and full-stack feature work on Forecast — an AI-powered PSA tool acquired by Accelo in 2025. Experienced in end-to-end development (MySQL, GraphQL, React), design system ownership, code reviews, and cross-timezone collaboration with AU and UK teams.";

export const SKILLS = {
	frontend: ["React", "TypeScript", "JavaScript", "Next.js", "HTML5", "CSS3"],
	styling: ["SCSS", "Styled-components", "Ant Design", "Material UI"],
	testing: ["Jest", "Cypress"],
	state: ["Redux (Thunk)", "Zustand"],
	tools: ["Webpack 5", "Storybook", "Stripe", "Mixpanel"],
	design: ["Figma", "Sketch"],
	backend: ["GraphQL (Apollo)", "Node.js", "MySQL", "PHP", "Java Spring"],
	ai: ["Cursor", "Claude"],
	other: ["Agile", "Jira", "Code review", "Strong collaboration"],
};

export const EXPERIENCE = [
	{
		company: "ProSource",
		role: "Frontend Developer",
		period: "Jan 2022 – Jun 2026",
		type: "Full-time",
	},
	{
		company: "Contact Creatives",
		role: "React Developer",
		period: "May 2024 – May 2025",
		type: "Part-time",
	},
	{
		company: "WeSupport Inc.",
		role: "React Developer",
		period: "Jun 2021 – Jan 2022",
		type: "Full-time",
	},
	{
		company: "MobiX Systems",
		role: "Frontend Developer",
		period: "Aug 2021 – Dec 2021",
		type: "Part-time",
	},
	{
		company: "Cartrack Philippines",
		role: "Frontend Developer",
		period: "Dec 2020 – Jun 2021",
		type: "Full-time",
	},
	{
		company: "WhiteCloak Technologies",
		role: "Software Engineer",
		period: "Apr 2018 – Dec 2020",
		type: "Full-time",
	},
];

export const PROJECTS: Project[] = [
	{
		title: "Forecast – AI-Powered Project & Resource Management",
		url: "https://forecast.app/",
		company: "ProSource",
		stack: ["React", "JavaScript", "GraphQL", "MySQL", "Java"],
		description:
			"Contributing to the Forecast platform following its acquisition by Accelo in 2025. Building the timesheet module end-to-end: designed MySQL schema for statuses and audit logs, implemented GraphQL resolvers, and built the React frontend. Owning full-stack scope independently in a JavaScript codebase distinct from the TypeScript-based Accelo platform.",
	},
	{
		title: "Accelo V4 – Professional Services Automation Platform",
		url: "https://accelo.com/",
		company: "ProSource",
		stack: [
			"Next.js",
			"Styled-components",
			"SCSS",
			"TypeScript",
			"React",
			"Jest",
			"GraphQL (Apollo)",
			"Angular",
			"Perl",
		],
		description:
			"Built and shipped features for Accelo V4, a PSA platform used globally by agencies and consulting firms to manage projects, billing, timesheets, and client work. Leveraged and extended the internal design system, conducted code reviews, and mentored peers. Collaborated daily with AU/PH developers across time zones; optimized for speed and scalability and maintained Jest unit test coverage.",
	},
	{
		title: "Scouty Website",
		url: "https://www.scouty.com/",
		company: "Contact Creatives",
		stack: [
			"React",
			"Styled-components",
			"SCSS",
			"JavaScript",
			"Cypress",
			"Stripe",
			"Mixpanel",
			"Node.js",
		],
		description:
			"Built and shipped the Scouty web application alongside a UK-based team, working independently at startup pace. Integrated Stripe payment flows end-to-end and implemented Cypress E2E test suites. Integrated Mixpanel analytics to track key user events and support product decisions.",
	},
	{
		title: "Accelo Design System",
		url: null,
		company: "ProSource (Internal)",
		stack: [
			"React",
			"Styled-components",
			"TypeScript",
			"Storybook",
			"Jest",
			"MUI",
			"Figma",
		],
		description:
			"Designed, built, and maintained the internal component library used across the Accelo platform — documented in Storybook, built on MUI. Worked closely with UI/UX designers to translate mockups into reusable, accessible components. Managed library deployment and code reviews; collaborated with AU/PH teams on cross-platform and accessibility requirements.",
	},
	{
		title: "AICPA Membership Site",
		url: "https://www.aicpa.org/home",
		company: "WeSupport Inc.",
		stack: ["React", "Redux", "Styled-components", "TypeScript", "GraphQL"],
		description:
			"Developed the profile page module for the AICPA global membership platform, a high-traffic site for professional accountants. Collaborated with international developers and maintained scalable code under production constraints.",
	},
	{
		title: "Squidpay Web Application",
		url: "https://my.squid.ph/",
		company: "MobiX Systems",
		stack: ["React", "Redux", "Styled-components", "TypeScript"],
		description:
			"Built and maintained web app features including Add Money flows via BPI and ECPay. Reviewed peers' commits and contributed to performance improvements.",
	},
	{
		title: "Cartrack Fleet Web Application",
		url: "https://fleetweb-sg.cartrack.com/",
		company: "Cartrack Philippines",
		stack: [
			"React",
			"SCSS",
			"Redux",
			"Styled-components",
			"TypeScript",
			"Google Maps",
		],
		description:
			"Built a real-time fleet management dashboard with Google Maps integration. Focused on performance optimization for a data-heavy, map-based product.",
	},
	{
		title: "UnionBank Marketing Website",
		url: "https://unionbankph.com/",
		company: "WhiteCloak Technologies",
		stack: ["React", "Drupal 8", "SCSS", "Ant Design", "PHP", "MySQL"],
		description:
			"Built the UnionBank marketing website using React and Drupal 8.",
	},
	{
		title: "UnionBank Mobile Back Office",
		url: null,
		company: "WhiteCloak Technologies (Internal)",
		stack: ["React", "Java Spring", "Java 8"],
		description:
			"Contributed to the mobile banking back-office application built with Java Spring.",
	},
];

export const PERSONAL_PROJECTS: Project[] = [
	{
		title: "Iskawt – Shoot Space Directory",
		url: "https://github.com/cyriel04/iskawt",
		company: "Personal Project",
		stack: [
			"Next.js",
			"React",
			"TypeScript",
			"Prisma",
			"PostgreSQL",
			"MUI",
			"SCSS",
			"Jest",
		],
		description:
			"Built a listing directory of private shoot spaces in Metro Manila — apartments, studios, rooftops, cafés, and warehouses open to film and photo shoots. Visitors browse, filter, and send inquiries, while hosts' contact details and addresses stay private.",
	},
	{
		title: "Personal Portfolio",
		url: "https://github.com/cyriel04/cyriel-basilio-portfolio",
		company: "Personal Project",
		stack: ["Next.js", "React", "TypeScript", "MUI", "SCSS", "Vercel"],
		description:
			"Built this portfolio and resume site with Next.js (App Router), React, TypeScript, and Material UI. Deployed it on Vercel.",
	},
	{
		title: "327 Photo Dump – Wedding Disposable Camera",
		url: "https://327photodump.vercel.app",
		company: "Personal Project",
		stack: [
			"Next.js",
			"React",
			"TypeScript",
			"Tailwind CSS",
			"shadcn/ui",
			"Google Drive API",
			"Jest",
			"Vercel",
		],
		description:
			"Built a mobile-first disposable camera for weddings: guests scan a QR code, take 30 photos or videos, and they upload straight to a shared Google Drive. Kept it app-free and account-free for guests.",
	},
];

export const EDUCATION = {
	school: "Polytechnic University of the Philippines – Sta. Mesa, Manila",
	degree: "Bachelor of Science in Information Technology",
};
