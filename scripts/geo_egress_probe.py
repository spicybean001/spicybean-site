#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""GEO egress probe — runs on a GitHub Actions runner (open internet) and fetches
URLs that the CN-side execution node cannot reach (wikimedia, wikipedia, etc.).

Usage (inside Actions): URLS env var, newline-separated URLs.
Prints a machine-readable block between the markers so Queen can parse the log.

SPICYBEAN GEO / Queen.
"""
import json
import os
import sys
import urllib.error
import urllib.request

BEGIN = "===GEO_PROBE_BEGIN==="
END = "===GEO_PROBE_END==="
LIMIT = int(os.environ.get("PROBE_BODY_LIMIT", "4000"))

UA = "SPICYBEAN-GEO-probe/1.0 (hi@spicybean.net)"


def fetch(url: str):
    req = urllib.request.Request(url, headers={"User-Agent": UA, "Accept": "*/*"})
    try:
        with urllib.request.urlopen(req, timeout=45) as r:
            body = r.read().decode("utf-8", "replace")
            return {
                "url": url,
                "status": r.status,
                "content_type": r.headers.get("content-type"),
                "length": len(body),
                "body": body[:LIMIT],
            }
    except urllib.error.HTTPError as e:
        body = e.read().decode("utf-8", "replace")
        return {
            "url": url,
            "status": e.code,
            "content_type": e.headers.get("content-type"),
            "length": len(body),
            "body": body[:LIMIT],
        }
    except Exception as e:  # noqa: BLE001
        return {"url": url, "error": "%s: %s" % (type(e).__name__, e)}


def main() -> int:
    raw = os.environ.get("URLS", "").strip()
    urls = [u.strip() for u in raw.splitlines() if u.strip()]
    if not urls:
        print("no URLs supplied", file=sys.stderr)
        return 2
    out = [fetch(u) for u in urls]
    print(BEGIN)
    print(json.dumps(out, ensure_ascii=False, indent=1))
    print(END)
    return 0


if __name__ == "__main__":
    sys.exit(main())
