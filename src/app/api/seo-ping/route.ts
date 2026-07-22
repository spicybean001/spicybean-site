import { NextResponse } from "next/server";

export async function GET() {
  const siteUrl = "https://spicybean.net";
  const sitemapUrl = "https://spicybean.net/sitemap.xml";
  
  const results: { engine: string; status: string; note: string }[] = [];
  
  // Ping Google
  try {
    const googleRes = await fetch(
      `https://www.google.com/ping?sitemap=${encodeURIComponent(sitemapUrl)}`,
      { signal: AbortSignal.timeout(10000) }
    );
    results.push({
      engine: "Google",
      status: googleRes.ok ? "submitted" : "failed",
      note: `HTTP ${googleRes.status}`,
    });
  } catch (e: any) {
    results.push({
      engine: "Google",
      status: "error",
      note: e.message || "timeout or blocked",
    });
  }
  
  // Ping Bing (covers Yahoo Japan as well, since Yahoo Japan uses Bing index)
  try {
    const bingRes = await fetch(
      `https://www.bing.com/ping?sitemap=${encodeURIComponent(sitemapUrl)}`,
      { signal: AbortSignal.timeout(10000) }
    );
    results.push({
      engine: "Bing + Yahoo Japan",
      status: bingRes.ok ? "submitted" : "responded",
      note: `HTTP ${bingRes.status}`,
    });
  } catch (e: any) {
    results.push({
      engine: "Bing + Yahoo Japan",
      status: "error",
      note: e.message || "timeout or blocked",
    });
  }
  
  // Ping Naver
  try {
    const naverRes = await fetch(
      `https://searchadvisor.naver.com/site/register?url=${encodeURIComponent(siteUrl)}`,
      { signal: AbortSignal.timeout(10000) }
    );
    results.push({
      engine: "Naver",
      status: naverRes.ok ? "submitted" : "responded",
      note: `HTTP ${naverRes.status}`,
    });
  } catch (e: any) {
    results.push({
      engine: "Naver",
      status: "error",
      note: e.message || "timeout or blocked",
    });
  }

  return NextResponse.json({
    site: siteUrl,
    sitemap: sitemapUrl,
    timestamp: new Date().toISOString(),
    results,
    manualSteps: {
      googleSearchConsole: "https://search.google.com/search-console/inspect?resource_id=https://spicybean.net",
      yahooJapan: "https://search.yahoo.co.jp/submit",
      naver: "https://searchadvisor.naver.com/",
    },
  });
}
