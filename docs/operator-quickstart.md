# Operator quickstart

**`CLAUDE.md` describes what this migration landed. This is that account checked
against the tree, claim by claim, because two of its claims are inverted.**

`public-malak` is documented as the sanitized, **TLP CLEAR + GREEN only** view of
`malak.etzhayyim.com`, for SOC analysts, security researchers and journalists.
What is in this repository is the edge facade, the Svelte appview and the scaffold
metadata. Steps marked ✅ were run against this tree.

---

## 1. What the document says landed, and what is here ✅

```bash
git ls-files | wc -l                       # 18
git ls-files | grep -ci lexicon            # 0
git ls-files | grep -c 'src/app.ts'        # 1
git ls-files | grep -c 'data/ingest'       # 0
git grep -l TLP -- . | grep -v CLAUDE.md   # PROJECT.jsonld
                                           # kotodama.jsonld
```

Those are the actual outputs, run against this tree on 2026-08-15.

| `CLAUDE.md` says | Measured here | |
|---|---|---|
| "This commit lands … **and 14 lexicons**" | **0 lexicon files** | ✗ inverted |
| "The worker (`src/app.ts`) … **follow separately**" | **`src/app.ts` is present** | ✗ inverted |
| Vendor retains the 923-file `data/ingest/` corpus | **0 corpus files here** | ✓ as documented |
| TLP CLEAR + GREEN only | TLP appears in **two metadata files and no code** | ⚠ see §2 |
| etzhayyim write path is `ai.etzhayyim.apps.publicMalak.*` | the facade uses **`com.etzhayyim.apps.publicMalak.`** | ✗ different authority |

So the document's account of the split is the **reverse** of the tree on both
moving parts: it says the lexicons arrived and the worker follows, and what
actually arrived is the worker with no lexicons. Anyone planning Phase 2 from that
paragraph would plan the wrong half.

The last row is worth separating from a typo: `ai.` and `com.` are different
namespace authorities, so a record written by the deployed appview and a record
described by the substrate table are not the same collection. Which one is
intended is a decision for the app's owner.

## 2. ⚠ Nothing in this repository enforces the TLP boundary

The sanitization boundary — CLEAR and GREEN only — is the whole point of this
actor existing separately from its vendor-side parent. Measured: the string TLP
occurs in `PROJECT.jsonld` and `kotodama.jsonld`, both times inside a prose
`description`, and in **no code, no policy file and no test**.

That is consistent with the documented shape (the crawl orchestrator and the write
path are vendor-side, and Phase 2 rewrites them), and it is exactly why it should
be stated: **do not treat a deploy of this repository as a sanitized feed.** It
proxies; the sanitizing is elsewhere. If you are wiring this to a public audience,
the filtering to verify is not in this tree.

## 3. The offline check ✅

The facade uses only `Request` and `Response`, which are globals, so Node runs it
directly — no install, no wrangler, no network. Walked on Node v26.3.0, where
`--experimental-strip-types` is a no-op (default from Node 23) and required on
22.6–22.x:

```bash
cd appview/etzhayyim-wasm-public-malak-pb1ml4k0

cat > /tmp/pmwalk.mjs <<'EOF'
const app = (await import(process.argv[2])).default;
for (const [label, req] of [
  ["GET /health", new Request("https://public-malak.etzhayyim.com/health")],
  ["GET /nope  ", new Request("https://public-malak.etzhayyim.com/nope")],
  ["bad json   ", new Request("https://public-malak.etzhayyim.com/xrpc/com.etzhayyim.apps.publicMalak.listAds",
                              { method: "POST", body: "{not json" })],
]) {
  const res = await app.fetch(req, {});
  console.log(label, "->", res.status, await res.text());
}
EOF

node --experimental-strip-types /tmp/pmwalk.mjs "$PWD/src/app.ts"
```

Actual output:

```
GET /health -> 200 {"ok":true,"actor":"did:web:public-malak.etzhayyim.com","nanoid":"pb1ml4k0",...}
GET /nope   -> 404 {"error":"NotFound","message":"public-malak not found"}
bad json    -> 400 {"error":"InvalidJson"}
```

The `/health` body names its own business logic as
`kotodama/primitives/public_malak_ads.py` and its BPMN as
`00-contracts/bpmn/com/etzhayyim/public-malak` — both outside this repository, and
both consistent with §1. The third line matters for §4.

## 4. ⚠ The file you just ran is not the file that deploys

`wrangler.jsonc` deploys `svelte/.svelte-kit/cloudflare/_worker.js`; nothing
imports `src/app.ts`. The two disagree, and **this repository is one of the 89**:

| | `src/app.ts` | the deployed Svelte route |
|---|---|---|
| `/health` | yes | **no route serves it** |
| Upstream | `dispatcher.etzhayyim.com` | `mcp.etzhayyim.com` as an MCP `tools/call` |
| Malformed JSON body | `400 InvalidJson` | `.catch(() => ({}))` — **called with `{}`** |

Measured across all 329 appview repositories in `cloud-itonami` and `etzhayyim`
that carry a `wrangler.jsonc`: 89 serve `/health` only in an undeployed facade,
and 58 have request validation only there. This repository appears in **both**
lists. The standing measurement is `:verify-appview-facade` in
`manifest/orgs-detectors.edn`, so it is re-checked rather than remembered.

Practically: **do not health-check this service at `/health`**, and do not assume
a malformed request fails.

## 5. Build or deploy ⚠ NOT WALKED

`svelte/` is a SvelteKit app with no lockfile and no `node_modules` here, so a
build needs a network install. Not run while writing this, therefore not claimed
to work. Go through the resource governor rather than invoking a build directly:

```bash
node <root>/scripts/resource-guard.mjs run build -- \
  npm --prefix appview/etzhayyim-wasm-public-malak-pb1ml4k0/svelte run build
```

---

## 6. Where the rest lives

Per `CLAUDE.md`, none of it verifiable from here: the 14 `publicMalak/` lexicons
and the 923-file crawled corpus stay vendor-side (Option A — this side ingests
fresh from public ad-library APIs); the BPMN definitions `analyzeAd` and
`crawlAds` are in `etzhayyim/root` under
`00-contracts/bpmn/com/etzhayyim/public-malak/`; the crawl orchestrator is a
LangServer pod. `OWNERS` names `junkawasaki` as sole approver and reviewer.
