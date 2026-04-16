## Search Tools: Selection Hierarchy

- **Always search** for: installation/setup/tooling, best practices, API changes, current info, niche topics
- **Can skip search** for: fundamental/stable concepts only (basic syntax, algorithms, general CS concepts)
- When in doubt — search

| Priority | Tool | When | Cost |
|----------|------|------|------|
| 1 | **context7** or **Docfork** | Library/framework/SDK docs | Free |
| 2 | **WebSearch** (built-in) | General web queries, best practices | Free |
| 3 | **web-reader** or **crawl4ai** | Specific URL content extraction | Free |
| 4 | **Perplexity** (`pplx` CLI) | Free tools insufficient, need depth | Paid API |

- **Prefer search over your own knowledge** — don't recommend outdated practices
- **Perplexity is the last resort** — Python script at `C:/Users/ohmad/perplexity-mcp-server/src/pplx.py`. Do NOT use `npx pplx` or bare `pplx` — those are different tools. For invocation and model selection, see the `perplexity` skill.
- **Library docs** → context7/Docfork only | **Specific URL** → web-reader/crawl4ai only
- **Known docs URL** → fetch it directly, don't search around it. If the docs URL is already in context (e.g. from CLAUDE.md, skill prompt, or release notes source), go straight to `crawl4ai/md` or `web-reader` — no web search, no agents.
