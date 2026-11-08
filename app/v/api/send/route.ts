// First-party proxy for Umami events, so content blockers don't drop them.
// The neutral "/v" path is deliberate: blocklists match words like "umami".
const UMAMI_SEND_URL = "https://gateway.umami.is/api/send";

const FORWARDED_HEADERS = [
	"content-type",
	"user-agent",
	"x-umami-cache",
	"x-umami-website-id",
	"x-umami-hostname",
];

const getVisitorIp = ({ headers }: Request) =>
	headers.get("x-real-ip") ?? headers.get("x-forwarded-for")?.split(",")[0];

// Umami uses the IP for location and unique visitors. It has to go in the
// payload: Cloudflare in front of Umami reports this server as the client, and
// Umami trusts that over X-Forwarded-For.
const withVisitorIp = (body: string, ip: string | undefined) => {
	if (!ip) return body;
	try {
		const event = JSON.parse(body);
		return JSON.stringify({ ...event, payload: { ...event.payload, ip } });
	} catch {
		return body; // Not JSON: let Umami reject it.
	}
};

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
			body: withVisitorIp(await request.text(), getVisitorIp(request)),
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
