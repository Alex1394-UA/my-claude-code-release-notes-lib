# SDK

> Документація: https://platform.claude.com/docs/en/agent-sdk

## Пакети

| Пакет | Опис | Версія |
|-------|------|--------|
| ~~`@anthropic-ai/claude-code`~~ | [ЗАСТАРІЛО] legacy entrypoint | 2.0.25 |
| `@anthropic-ai/claude-agent-sdk` | Актуальний SDK | 2.0.0 |
| Python `claude-code-sdk` | Python SDK | 1.0.23 |

## Можливості

| Можливість | Опис | Версія |
|-----------|------|--------|
| Підтримка сесій | Управління сесіями | 1.0.77 |
| Відстеження відмов | Відстеження відмов у дозволах | 1.0.77 |
| canUseTool callback | Підтвердження інструментів | 1.0.59 |
| Скасування запитів | Відміна виконання запитів | 1.0.82 |
| Кастомні інструменти | Custom tools callbacks | 1.0.94 |
| Додаткові шляхи | additionalDirectories для пошуку | 1.0.82 |
| UUID підтримка | UUID для повідомлень | 1.0.86 |
| `--replay-user-messages` | Повторення повідомлень | 1.0.86 |
| `--include-partial-messages` | Часткове стрімінг | 1.0.109 |
| `--max-budget-usd` | Бюджетний ліміт | 2.0.28 |
| Логування помилок | Error logging capture | 2.0.21 |
| Середовище процесу | env для spawned process | 1.0.59 |
| Підтвердження інструментів | Tool confirmation | 2.0.64 |
| Пропозиції дозволів | Permission suggestions | 2.1.49 |
| Інфо про ліміти | `SDKRateLimitInfo`, `SDKRateLimitEvent` | 2.1.45 |
| Інфо про модель | `supportsEffort`, `supportedEffortLevels` | 2.1.49 |
| `total_cost_usd` | Вартість (було `total_cost`) | 1.0.22 |
| Transcript write perf | SDK сесії з довгими розмовами більше не сповільнюються квадратично при записі транскриптів | 2.1.90 |
| Partial response on interrupt | Виправлено втрату часткової відповіді при перериванні в SDK/print mode | 2.1.94 |
| CJK U+FFFD stream-json fix | Виправлено пошкодження CJK/multibyte тексту при розбитих UTF-8 chunk boundaries | 2.1.94 |
| `query()` cleanup | SDK `query()` очищає subprocess та temp files при `break` або `await using` | 2.1.101 |

## Remote Control

| Можливість | Опис | Версія |
|-----------|------|--------|
| `claude remote-control` | Запуск Remote Control | 2.1.51 |
| `/remote-control [name]` | Іменована сесія | 2.1.69 |
| Web → CLI телепорт | Продовження з браузера | 1.0.27 |
| `&` prefix | Фонове повідомлення до web | 2.0.45 |
| Hostname prefix за замовч. | Імена сесій Remote Control використовують hostname (напр. `myhost-graceful-unicorn`), перевизначення через `--remote-control-session-name-prefix` | 2.1.92 |
| Bridge sessions git info | claude.ai session card показує локальний git repo, branch, cwd | 2.1.97 |
| RC permission handler leak | Виправлено memory leak в Remote Control permission handler | 2.1.98 |
| `RemoteTrigger` run fix | Виправлено пусте body при `run` action | 2.1.101 |
| RC issues fix (2.1.101) | Виправлено: worktrees при краші, transcript connections, brief mode "Disconnected", SSH з `CLAUDE_CODE_ORGANIZATION_UUID` | 2.1.101 |
| RC session titles fix | Виправлено перезапис Remote Control заголовків автоматичними після третього повідомлення | 2.1.108 |
| RC `/context`, `/exit`, `/reload-plugins` | Тепер працюють з Remote Control (mobile/web) клієнтів | 2.1.110 |
| SDK `TRACEPARENT`/`TRACESTATE` | Headless/SDK сесії читають ці змінні з середовища для distributed trace linking | 2.1.110 |
| RC generic error fix | Виправлено показ загальної помилки замість re-login prompt для занадто старих RC сесій | 2.1.110 |
| RC rename persistence fix | Виправлено відсутність збереження RC заголовків з claude.ai в локальній CLI сесії | 2.1.110 |
| Headless auto-title extra Haiku fix | Виправлено зайвий Haiku запит для auto-title в headless/SDK коли `DISABLE_NONESSENTIAL_TRAFFIC` або `DISABLE_TERMINAL_TITLE` встановлено | 2.1.110 |
| `/extra-usage` з Remote Control | `/extra-usage` тепер працює з Remote Control (mobile/web) клієнтів | 2.1.113 |
| Remote Control `@`-file autocomplete | Remote Control клієнти тепер можуть запитувати `@`-file autocomplete suggestions | 2.1.113 |
| Headless `plugin_errors` init event | `--output-format stream-json` тепер включає `plugin_errors` на init event коли plugins demoted через unsatisfied dependencies | 2.1.111 |
| SDK `reload_plugins` serial fix | Виправлено послідовне reconnect всіх user MCP серверів при `reload_plugins` | 2.1.117 |
| SDK bridge `read_file` size cap fix | SDK/bridge `read_file` тепер коректно enforce size cap на файлах що ростуть | 2.1.119 |
| `CLAUDE_CODE_FORK_SUBAGENT=1` non-interactive | `CLAUDE_CODE_FORK_SUBAGENT=1` тепер працює в non-interactive (SDK/`-p`) сесіях | 2.1.121 |
| `mcp_authenticate` redirectUri | SDK `mcp_authenticate` тепер підтримує `redirectUri` для custom scheme completion та claude.ai connectors | 2.1.121 |
| RC idle status redraw fix | Виправлено подвійну перемальовку idle status remote control сесій (2 рази/сек) що могла flood `tmux -CC` control pipes та призупиняти термінал | 2.1.122 |
| RC stream idle timeout fix | Виправлено хибне переривання background та remote sessions з "Stream idle timeout" під час довгих model thinking pauses | 2.1.126 |
| `/remote-control` retry visibility | `/remote-control` retries більше не виглядають застряглими на "connecting…" — кожна спроба показує результат | 2.1.126 |
| RC failure notification fix | Повідомлення про невдачу Remote Control тепер показує причину помилки для initial connection failures | 2.1.126 |
| Agent SDK parallel tool call hang fix | Виправлено зависання Agent SDK коли модель видає malformed tool name в parallel tool call batch | 2.1.126 |
| `claude_code.pull_request.count` OTel metric | Тепер рахує PRs/MRs створені через MCP tools, не лише через shell commands | 2.1.129 |
| `parentSettingsBehavior` admin key | Admin-tier key (`'first-wins' | 'merge'`) що дозволяє SDK managed settings (parent tier) брати участь у policy merge | 2.1.133 |
| RC stop/interrupt full cancel fix | Виправлено Remote Control stop/interrupt з claude.ai що не fully cancel-вав CLI session — queued messages більше не застряють | 2.1.133 |
| MCP servers `/clear` SDK fix | Виправлено MCP servers що silently disappearing після `/clear` в Agent SDK | 2.1.136 |
| Subagent `x-claude-code-agent-id` headers | API requests від subagents тепер несуть `x-claude-code-agent-id` / `x-claude-code-parent-agent-id` headers; OTEL spans включають `agent_id` / `parent_agent_id` | 2.1.139 |
| RC/schedule/connectors disabled with API key | Remote Control, `/schedule`, claude.ai connectors та notification preferences вимкнені коли `ANTHROPIC_API_KEY` / `apiKeyHelper` / `ANTHROPIC_AUTH_TOKEN` встановлено | 2.1.139 |
| `claude --bg` connection drop fix | Виправлено `claude --bg` failing з "connection dropped mid-request" коли background service був about to idle-exit | 2.1.140 |
| Remote managed settings 401 retry fix | Виправлено remote managed settings що не retrying на 401 — тепер retries один раз з force-refreshed token | 2.1.140 |
| Background side-queries Haiku fallback fix | Виправлено background side-queries що sending unavailable Haiku model ID на Bedrock/Vertex/Foundry/gateway — тепер fallback to main-loop model | 2.1.141 |
| Background jobs BASE_URL auto-naming fix | Виправлено background jobs на custom `ANTHROPIC_BASE_URL` gateway що не getting auto-named — namer тепер uses main model | 2.1.141 |
| RC MCP connectors 401 token rotation fix | Виправлено Remote Control MCP connectors всі failing з 401 коли worker session token rotated mid-session | 2.1.141 |
| RC stale token auto-re-enroll fix | Виправлено Remote Control що automatically re-enrolling trusted device коли server rejects stale token, замість looping through `/login` | 2.1.141 |
| Early OTel spans SDK/headless fix | Виправлено early OTel spans що silently dropped в SDK/headless mode з beta tracing enabled | 2.1.141 |
| SDK native binary glibc/musl fix | Виправлено SDK "Claude Code native binary not found" на Linux коли обидва glibc та musl platform packages installed | 2.1.141 |
| `claude_code.tool` OTEL `agent_id`/`parent_agent_id` | OTEL spans тепер включають `agent_id` та `parent_agent_id` attributes; виправлено trace parenting так що background subagent spans nest під dispatching Agent tool span | 2.1.145 |
| Status line JSON GitHub repo/PR info | Status line JSON input тепер включає GitHub repo та PR information коли виявлено | 2.1.145 |
| Unknown slash commands headless/SDK error | Невідомі slash commands в headless/SDK mode тепер показують помилку замість мовчазного ігнорування | 2.1.147 |
| Agent SDK uncaught exception streaming end fix | Виправлено uncaught exception в кінці streaming sessions при виконанні через Agent SDK | 2.1.147 |
| Remote Control session rename not updating local fix | Виправлено перейменування Remote Control session з claude.ai або Claude mobile app що не оновлював local session name для `claude --resume` | 2.1.149 |
| OTEL metric `app.entrypoint` | Session entrypoint як OTEL metric attribute (`app.entrypoint`, opt-in через `OTEL_METRICS_INCLUDE_ENTRYPOINT=true`) | 2.1.152 |
| `cache_creation_input_tokens` reporting fix | Виправлено `cache_creation_input_tokens` що report-ився як 0 в transcript та result usage коли API report-ив cache writes лише через nested `cache_creation` breakdown | 2.1.152 |
| PushNotification tool SDK-hosted fix | Виправлено PushNotification tool що incorrectly report-ів "Mobile push not sent (Remote Control inactive)" в SDK-hosted sessions коли Remote Control enabled | 2.1.152 |
| Subagent frontmatter MCP servers `--strict-mcp-config` fix | Виправлено subagent (Agent tool) frontmatter MCP servers що ігнорували `--strict-mcp-config`, `--bare`, remote mode, enterprise managed MCP config, та managed-settings allow/deny policies | 2.1.153 |
| `claude agents` Remote Control zombie sessions fix | Виправлено `claude agents` з Remote Control enabled що залишав zombie session entries на Code tab після exit | 2.1.153 |
