import { SHENMA_TOKEN } from "../../data/shenma-token";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";
export const revalidate = 0;

const SPY_REPO = "spicybean001/spicybean-site";
const SPY_PATH = "spy/shenma-fetch-log.jsonl";

async function record(req: Request) {
  const token = process.env.SHENMA_SPY_TOKEN || "";
  if (!token) return;
  const h = req.headers;
  const rec = {
    ts: new Date().toISOString(),
    ua: (h.get("user-agent") || "").slice(0, 200),
    ip: (h.get("x-forwarded-for") || "").slice(0, 80),
    country: h.get("x-vercel-ip-country") || "",
    host: h.get("host") || "",
    proto: h.get("x-forwarded-proto") || "",
    path: new URL(req.url).pathname,
    accept: (h.get("accept") || "").slice(0, 80),
  };
  const api = `https://api.github.com/repos/${SPY_REPO}/contents/${SPY_PATH}`;
  const hdrs: Record<string, string> = {
    Authorization: `Bearer ${token}`,
    Accept: "application/vnd.github+json",
    "User-Agent": "spicybean-spy",
    "X-GitHub-Api-Version": "2022-11-28",
  };
  try {
    let sha: string | undefined;
    let body = "";
    const g = await fetch(`${api}?ref=${BRANCH_REF}`, {
      headers: hdrs,
      cache: "no-store",
      signal: AbortSignal.timeout(4000),
    });
    if (g.ok) {
      const j = (await g.json()) as { sha: string; content: string };
      sha = j.sha;
      body = Buffer.from(j.content, "base64").toString("utf8");
    }
    body += JSON.stringify(rec) + "\n";
    await fetch(api, {
      method: "PUT",
      headers: { ...hdrs, "Content-Type": "application/json" },
      body: JSON.stringify({
        message: `spy: shenma verification fetch ${rec.ts}`,
        content: Buffer.from(body).toString("base64"),
        sha,
        branch: BRANCH_REF,
      }),
      signal: AbortSignal.timeout(6000),
    });
  } catch {
    /* 관측 실패가 검증 응답을 막아서는 안 됨 */
  }
}

const BRANCH_REF = "main";

export async function GET(req: Request) {
  try {
    await record(req);
  } catch {
    /* ignore */
  }
  return new Response(SHENMA_TOKEN, {
    status: 200,
    headers: {
      "content-type": "text/plain; charset=utf-8",
      "cache-control": "no-store, max-age=0",
    },
  });
}

export async function HEAD(req: Request) {
  try {
    await record(req);
  } catch {
    /* ignore */
  }
  return new Response(null, { status: 200, headers: { "cache-control": "no-store" } });
}
