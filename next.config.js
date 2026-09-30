/** @type {import('next').NextConfig} */

// Static security headers. A script CSP is deliberately omitted: it would need
// per-request nonces (forcing dynamic rendering) and conflicts with Emotion's
// inline styles.
const securityHeaders = [
	{ key: "X-Content-Type-Options", value: "nosniff" },
	{ key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
	{ key: "X-Frame-Options", value: "DENY" },
	{
		key: "Permissions-Policy",
		value: "camera=(), microphone=(), geolocation=(), browsing-topics=()",
	},
	{
		key: "Content-Security-Policy",
		value:
			"frame-ancestors 'none'; base-uri 'self'; form-action 'self'; object-src 'none'",
	},
];

const nextConfig = {
	poweredByHeader: false,
	async headers() {
		return [{ source: "/:path*", headers: securityHeaders }];
	},
};

module.exports = nextConfig;
