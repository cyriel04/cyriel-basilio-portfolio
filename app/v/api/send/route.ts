// First-party proxy for Umami events, so content blockers don't drop them.
// The neutral "/v" path is deliberate: blocklists match words like "umami".
const UMAMI_SEND_URL = "https://gateway.umami.is/api/send";

const FORWARDED_HEADERS = [
	"content-type",
	"user-agent",
	// Keeps the visitor's own IP, which Umami uses for location and uniqueness.
	"x-forwarded-for",
	"x-umami-cache",
	"x-umami-website-id",
	"x-umami-hostname",
];

export async function POST(request: Request) {
	const headers = new Headers();
	for (const name of FORWARDED_HEADERS) {
		const value = request.headers.get(name);
		if (value) headers.set(name, value);
	}

	try {
		const upstream = await fetch(UMAMI_SEND_URL, {
			method: "POST",
			headers,
			body: await request.text(),
		});
		return new Response(await upstream.text(), {
			status: upstream.status,
			headers: {
				"Content-Type":
					upstream.headers.get("content-type") ?? "application/json",
			},
		});
	} catch {
		return new Response(null, { status: 502 });
	}
}
