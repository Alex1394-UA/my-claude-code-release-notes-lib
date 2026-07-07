# MCP (Model Context Protocol)

## Транспорти

| Тип | Опис | Версія |
|-----|------|--------|
| stdio | Стандартний input/output | — |
| SSE | Server-Sent Events | 0.2.54 |
| Streamable HTTP | HTTP з підтримкою стрімінгу | 1.0.27 |
| HTTP (hooks) | HTTP-хуки замість shell | 2.1.63 |

## Налаштування

| Можливість | Опис | Версія |
|-----------|------|--------|
| `instructions` | Інструкції для MCP сервера | 1.0.52 |
| Кастомні заголовки | Заголовки для SSE | 1.0.106 |
| `headersHelper` | Скрипт для динамічних заголовків | 1.0.106 |
| `dynamicHeaders` | Динамічні заголовки (оновлення) | 1.0.64 |
| OAuth авторизація | Для SSE та HTTP | 1.0.27 |
| Pre-configured OAuth | `--client-id` / `--client-secret` | 2.1.30 |
| OAuth Authorization Server | Автоматичне відкриття discovery | 1.0.35 |
| OAuth RFC 9728 | Protected Resource Metadata | 2.1.85 |
| OAuth CIMD (SEP-991) | Client ID Metadata Document | 2.1.81 |
| OAuth step-up | Повторна авторизація при insufficient_scope | 2.1.85 |
| `oauth.authServerMetadataUrl` | Кастомний URL metadata discovery | 2.1.69 |
| `enabledTools` / `disallowedTools` | Обмеження інструментів | — |
| `list_changed` | Динамічне оновлення tools/prompts/resources | 2.1.0 |
| `structuredContent` | Структурований вміст відповідей | 2.0.21 |
| MCP tool search auto | Авто-defer при >10% контексту | 2.1.7 |
| MCP descriptions cap | Обмеження описів до 2KB | 2.1.84 |
| MCP dedup | Локальні конфіги мають пріоритет | 2.1.84 |
| `X-Claude-Code-Session-Id` | Заголовок для агрегації запитів по сесії | 2.1.86 |
| Prompt cache для 3p | Видалення динамічного контенту з tool descriptions | 2.1.86 |
| Виправлення Cowork Dispatch | Повідомлення в каналах тепер доставляються | 2.1.87 |
| MCP tool errors fix | Помилки більше не обрізаються до першого content block | 2.1.89 |
| MCP schema cache perf | Прибрано per-turn JSON.stringify MCP tool schemas при cache-key lookup | 2.1.90 |
| SSE linear time | SSE транспорт обробляє великі стріми за лінійний час (було квадратичне) | 2.1.90 |
| `_meta["anthropic/maxResultSizeChars"]` | Анотація для збільшення ліміту MCP tool result (до 500K) | 2.1.91 |
| Plugin MCP connector fix | Виправлено зависання "connecting" при дублюванні неавтентифікованого claude.ai конектора | 2.1.92 |
| Slack `#channel` header | Компактний заголовок з клікабельним посиланням на канал для send-message tool calls | 2.1.94 |
| HTTP/SSE buffer leak fix | Виправлено накопичення ~50MB/год невивільнених буферів при реконектах серверів | 2.1.97 |
| OAuth `authServerMetadataUrl` refresh fix | Конфіг працює при refresh token після рестарту (ADFS та інші IdP) | 2.1.97 |
| `maxResultSizeChars` token persist | Виправлено ігнорування анотації при token-based persist layer | 2.1.98 |
| `/mcp` OAuth для `headersHelper` | Замість OAuth-дій тепер пропонується Reconnect для серверів з `headersHelper` | 2.1.101 |
| `claude mcp serve` outputSchema fix | Виправлено помилку "Tool execution failed" для клієнтів що валідують `outputSchema` | 2.1.101 |
| `MCP large-output truncation` | Покращено промпт обрізки великого MCP output: формат-специфічні рецепти (`jq` для JSON, computed Read chunk sizes для тексту) | 2.1.105 |
| `Inbound channel notifications fix` | Виправлено мовчазне випадання inbound channel notifications після першого повідомлення для Team/Enterprise | 2.1.105 |
| `stdio MCP non-JSON hang fix` | stdio MCP сервер з malformed (non-JSON) output тепер завершується з помилкою замість зависання | 2.1.105 |
| `MCP tools missing first turn fix` | Виправлено відсутність MCP tools на першому повороті headless/remote-trigger сесій при async підключенні | 2.1.105 |
| `MCP tool calls hang SSE/HTTP fix` | Виправлено зависання MCP tool calls при розриві з'єднання на SSE/HTTP транспортах | 2.1.110 |
| `stdio MCP stray non-JSON regression` | Виправлено відключення stdio MCP сервера на першому stray non-JSON рядку (регресія з 2.1.105) | 2.1.110 |
| MCP concurrent-call timeout fix | Виправлено ситуацію де повідомлення для одного tool call мовчазно disarm іншого call's watchdog при concurrent timeout handling | 2.1.113 |
| MCP OAuth `headersHelper` fix | Виправлено `/mcp` menu що ховав OAuth Authenticate/Re-authenticate actions для серверів з `headersHelper` | 2.1.118 |
| MCP HTTP/SSE custom headers fix | HTTP/SSE MCP сервери з custom headers більше не зависають в "needs authentication" після transient 401 | 2.1.118 |
| OAuth `expires_in` missing fix | MCP сервери чий OAuth token response опускає `expires_in` більше не вимагають re-authentication щогодини | 2.1.118 |
| OAuth step-up silent refresh fix | Виправлено мовчазне refresh замість re-consent prompt при OAuth step-up authorization | 2.1.118 |
| OAuth timeout/cancel fix | Виправлено unhandled promise rejection при timeout або cancel OAuth flow | 2.1.118 |
| OAuth refresh lock fix | Виправлено OAuth refresh без cross-process lock під contention | 2.1.118 |
| macOS keychain race fix | Виправлено race де concurrent MCP token refresh міг перезаписати свіжо-refreshed OAuth token | 2.1.118 |
| OAuth token early revocation fix | Виправлено refresh що fail коли сервер revoke token до local expiry time | 2.1.118 |
| `resources/templates/list` deferred | MCP `resources/templates/list` тепер відкладено до першого `@`-mention — прискорює MCP startup | 2.1.116 |
| MCP concurrent connect | Паралельне підключення local та claude.ai MCP серверів за замовчуванням | 2.1.117 |
| MCP elicitation auto-cancel fix | Виправлено auto-cancellation MCP `elicitation/create` requests в print/SDK mode | 2.1.117 |
| Subagent/SDK MCP parallel connect | Переконфігурація MCP серверів в subagents та SDK тепер підключає сервери паралельно замість послідовно | 2.1.119 |
| `${ENV_VAR}` headers fix | Виправлено непідстановку `${ENV_VAR}` placeholders в `headers` для HTTP/SSE/WebSocket MCP серверів | 2.1.119 |
| OAuth client_secret_post fix | Виправлено відсутність відправки OAuth client secret при token exchange для `client_secret_post` серверів | 2.1.119 |
| Plugin MCP user_config fix | Виправлено падіння plugin MCP серверів коли `${user_config.*}` посилається на пустий optional field | 2.1.119 |
| `alwaysLoad` option | MCP сервер конфіг: коли `true`, всі інструменти з цього сервера пропускають tool-search deferral і завжди доступні | 2.1.121 |
| MCP startup auto-retry | MCP сервери з transient помилкою при старті тепер автоматично retry до 3 разів замість залишатися disconnected | 2.1.121 |
| claude.ai connectors dedup | Claude.ai connectors з однаковим upstream URL більше не дублюються | 2.1.121 |
| Vertex AI X.509 Workload Identity Federation | Vertex AI: підтримка X.509 certificate-based Workload Identity Federation (mTLS ADC) | 2.1.121 |
| claude.ai connectors silent disappear fix | Виправлено мовчазне зникнення claude.ai MCP connectors коли connector-list fetch отримує transient auth error при старті | 2.1.121 |
| Bedrock `thinking.type.enabled` fix | Виправлено помилку `thinking.type.enabled is not supported` при використанні Bedrock application inference profile ARNs | 2.1.121 |
| Microsoft 365 MCP OAuth fix | Виправлено Microsoft 365 MCP OAuth failing з duplicate або unsupported `prompt` parameter | 2.1.121 |
| Vertex AI tool search disabled | Tool search вимкнено за замовчуванням на Vertex AI (opt-in з `ENABLE_TOOL_SEARCH`) | 2.1.119 |
| `/mcp` hidden connectors hint | `/mcp` тепер показує claude.ai connectors приховані вручну доданим сервером з тим самим URL, з підказкою видалити дублікат | 2.1.122 |
| `/mcp` unauthorized clarification | Покращено повідомлення `/mcp` коли MCP сервер все ще неавтентифікований після browser sign-in flow | 2.1.122 |
| ToolSearch nonblocking MCP fix | Виправлено ToolSearch що пропускав MCP tools підключені після старту сесії в nonblocking mode | 2.1.122 |
| MCP connectors needs-auth suppression fix | Виправлено подавлення claude.ai MCP connectors вручну доданими серверами що застрягли в needs-auth state | 2.1.126 |
| stdio MCP Esc connection close fix | Виправлено закриття всього server connection при натисканні Esc під час stdio MCP tool call (регресія з 2.1.105) | 2.1.120 |
| Elicitation | Інтерактивні MCP-запити | 2.1.76 |
| Виправлення таймауту підключення [Win] | Виправлено на повільних мережах | 2.2.0 |
| `workspace` зарезервоване ім'я | `workspace` — зарезервоване ім'я MCP сервера; існуючі сервери з цим іменем пропускаються з попередженням | 2.1.128 |
| MCP reconnect tool summary | Перепідключення MCP серверів більше не flood-ить розмову повним списком tool names — re-announced tools підсумовуються по server prefix | 2.1.128 |
| MCP stdio corrupted args fix | Виправлено отримання corrupted arguments stdio MCP серверами коли `CLAUDE_CODE_SHELL_PREFIX` встановлено та аргумент містить пробіли або shell metacharacters | 2.1.128 |
| MCP tool results images fix | Виправлено втрату images коли MCP server повертає і structured content і content blocks | 2.1.128 |
| MCP servers 0 tools retry | MCP сервери що підключились але не пройшли `tools/list` більше не показують 0 tools — retry один раз та показують "connected · tools fetch failed" в `/mcp` | 2.1.132 |
| Unauthorized MCP connectors "needs auth" | Unauthorized claude.ai MCP connectors тепер показують "needs auth" замість "failed"; headless `-p` більше не retry non-transient 4xx | 2.1.132 |
| Bedrock/Vertex `ENABLE_PROMPT_CACHING_1H` fix | Виправлено 400 помилки на Bedrock та Vertex коли `ENABLE_PROMPT_CACHING_1H` встановлено | 2.1.132 |
| MCP OAuth proxy/mTLS fix | Виправлено `HTTP(S)_PROXY` / `NO_PROXY` / mTLS що не поважалися для повного MCP OAuth flow (discovery, DCR, token exchange, refresh) | 2.1.133 |
| MCP servers `/clear` disappearing fix | Виправлено MCP servers configured в `.mcp.json`, plugins, та claude.ai connectors що silently disappearing після `/clear` | 2.1.136 |
| MCP OAuth refresh tokens concurrent fix | Виправлено втрату MCP OAuth refresh tokens при concurrent refresh — користувачі з кількома remote MCP servers більше не потребують daily re-authentication | 2.1.136 |
| `/mcp` server list scrolling fix | Виправлено `/mcp` server list що не скролився коли servers більше ніж вміщує термінал | 2.1.136 |
| MCP tool results content blocks fix | Виправлено MCP tool results що були invisible коли server повертає content blocks | 2.1.136 |
| MCP stdio `CLAUDE_PROJECT_DIR` | MCP stdio servers тепер отримують `CLAUDE_PROJECT_DIR` в environment; plugin configs можуть reference `${CLAUDE_PROJECT_DIR}` | 2.1.139 |
| `/mcp` Reconnect `.mcp.json` edits | `/mcp` Reconnect тепер picks up `.mcp.json` edits без restart, та показує HTTP status та URL при reconnect failure | 2.1.139 |
| Remote MCP reconnect retry all users | Remote MCP server reconnect retry на transient failures тепер увімкнено для всіх користувачів | 2.1.139 |
| HTTP/SSE MCP non-protocol data cap | Виправлено unbounded memory growth коли HTTP/SSE MCP server streams non-protocol data — response bodies тепер capped at 16 MB per SSE frame | 2.1.139 |
| Silent exit 1 unwritable cache fix | Виправлено silent `exit 1` з 10+ MCP servers та unwritable cache directory — error message тепер включає underlying cause | 2.1.139 |
| MCP resources disconnected servers fix | Виправлено MCP resources від disconnected servers що lingering в `@server:` autocomplete | 2.1.139 |
| `/mcp` server list focused server fix | Виправлено `/mcp` server list що не keeping focused server visible в short terminals в fullscreen mode | 2.1.141 |
| MCP POSIX shell expansions fix | Виправлено MCP server configs що використовують POSIX shell parameter expansions (напр. `${var%pattern}`) що incorrectly flagged як missing environment variables | 2.1.141 |
| MCP HTTP/SSE 403 "needs auth" fix | Виправлено HTTP/SSE MCP servers що returning 403 on connect показували "failed" замість "needs auth" | 2.1.141 |
| Remote MCP server-events stream fix | Виправлено remote MCP servers що disconnecting unnecessarily коли optional server-events stream failed to reconnect — tool calls continue over POST | 2.1.141 |
| `MCP_TOOL_TIMEOUT` HTTP/SSE per-request fix | Виправлено `MCP_TOOL_TIMEOUT` що не підвищував per-request fetch timeout для remote HTTP та SSE MCP серверів, обмежуючи tool calls до 60 секунд незалежно від конфігурації | 2.1.142 |
| Paginated `tools/list` fix | Виправлено MCP сервери з paginated `tools/list` responses що повертали лише першу сторінку, silently dropping tools | 2.1.144 |
| MCP images unsupported MIME types fix | MCP images з unsupported MIME types (напр. SVG) більше не break conversation — тепер зберігаються на диск та referenced в tool result | 2.1.144 |
| MCP prompt slash commands validation error fix | MCP prompt slash commands тепер показують ім'я missing argument та expected usage замість raw server validation errors | 2.1.145 |
| MCP servers pagination resources/templates/prompts fix | Виправлено paginating MCP servers що dropping resources, templates та prompts past page 1 | 2.1.147 |
| Remote MCP egress proxy Remote sessions fix | Виправлено remote MCP servers що failing to connect в Claude Code Remote sessions коли egress proxy enabled | 2.1.152 |
| Об'єднане "needs authentication" повідомлення | Об'єднано окремі "needs authentication" startup notifications для MCP servers та connectors в одне повідомлення | 2.1.153 |
| Stateful MCP reconnect loop fix | Виправлено stateful MCP servers без optional GET SSE stream що зациклювалися на повторних підключеннях по `tools/list` (регресія з v2.1.147) | 2.1.153 |
| Custom API gateway OAuth credential fix | Виправлено регресію де custom API gateway міг отримувати user's Anthropic OAuth credential замість gateway's own token | 2.1.153 |
| Subagent frontmatter MCP servers `--strict-mcp-config` fix | Виправлено subagent (Agent tool) frontmatter MCP servers що ігнорували `--strict-mcp-config`, `--bare`, remote mode, enterprise managed MCP config, та managed-settings MCP server allow/deny policies | 2.1.153 |
| MCP tool progress notifications collapsed view fix | Виправлено MCP tool progress notifications що не рендерились в collapsed tool view | 2.1.153 |
| `CLAUDE_CODE_SESSION_ID` та `CLAUDECODE=1` в subprocesses | Stdio MCP server subprocesses тепер отримують `CLAUDE_CODE_SESSION_ID` та `CLAUDECODE=1` в environment | 2.1.154 |
| MCP per-server timeout <1000ms floor fix | Значення `timeout` <1000ms більше не зводяться до 1-секундного сторожового таймера що скасовує кожен tool call; sub-1000ms values ігноруються (fallback до `MCP_TOOL_TIMEOUT` або default), `claude mcp get` позначає це | 2.1.162 |
| stdio `CLAUDE_CODE_SESSION_ID` на `--resume` | Stdio MCP сервери тепер отримують `CLAUDE_CODE_SESSION_ID` при `--resume` (як hooks та Bash) | 2.1.163 |
| MCP server-level specs subagent `disallowedTools` fix | Виправлено MCP server-level specs (`mcp__server`, `mcp__server__*`, `mcp__*`) в subagent `disallowedTools` що мовчазно ігнорувалися | 2.1.178 |

## Налаштування (2.1.181)

| Можливість | Опис | Версія |
|-----------|------|--------|
| MCP OAuth browser page покращення | MCP OAuth browser page оновлено до візуального стилю Claude Code, автоматично закривається при успіху | 2.1.181 |
| `claude mcp get`/`list` tools/list fail status fix | `claude mcp get`/`list` більше не показують `✓ Connected` коли tools/list не вдався — тепер `! Connected · tools fetch failed` з деталями помилки | 2.1.181 |

## Налаштування (2.1.183)

| Можливість | Опис | Версія |
|-----------|------|--------|
| MCP auth-stub tools не передаються моделі в headless/SDK | Виправлено MCP сервери що вимагають автентифікації та відкривали auth-stub інструменти моделі в headless/SDK режимі | 2.1.183 |

## Налаштування (2.1.186)

| Можливість | Опис | Версія |
|-----------|------|--------|
| `claude mcp login <name>` / `claude mcp logout <name>` | Автентифікація MCP серверів з CLI; `--no-browser` для завершення через SSH (stdin redirect) | 2.1.186 |
| MCP server disconnected notice retired tools fix | Виправлено оманливе повідомлення "MCP server disconnected" для навмисно прибраних інструментів при відновленні старіших сесій | 2.1.186 |
| `claude mcp get`/`remove` typo suggestion | Пропонує найближче налаштоване ім'я сервера при помилці, обрізає довгі списки | 2.1.186 |

## Налаштування (2.1.187)

| Можливість | Опис | Версія |
|-----------|------|--------|
| Remote MCP tool idle timeout | Remote MCP tool calls що не відповідають 5 хвилин тепер abort з помилкою замість нескінченного зависання; налаштовується через `CLAUDE_CODE_MCP_TOOL_IDLE_TIMEOUT` | 2.1.187 |

## Налаштування (2.1.191)

| Можливість | Опис | Версія |
|-----------|------|--------|
| MCP capability discovery retry | Capability discovery (`tools/list`, `prompts/list`, `resources/list`) тепер повторює при transient network помилках з коротким backoff | 2.1.191 |
| MCP OAuth transient retry | MCP OAuth discovery та token requests тепер повторюють один раз при transient network помилках; headless середовища пропускають browser popup та переходять одразу до paste-the-URL промпту | 2.1.191 |
| MCP HTTP 404 error messages improvement | HTTP 404 помилки тепер показують URL та вказують на MCP конфіг замість generic error message | 2.1.191 |

## Налаштування (2.1.193)

| Можливість | Опис | Версія |
|-----------|------|--------|
| `headersHelper` auto re-run on 401/403 | `headersHelper` тепер автоматично повторно запускається та перепідключається коли tool call повертає 401 або 403 | 2.1.193 |

## Налаштування (2.1.196)

| Можливість | Опис | Версія |
|-----------|------|--------|
| MCP OAuth `scopes_supported` catalog fix | Виправлено MCP OAuth що запитував повний `scopes_supported` catalog від authorization server коли scope не вказано, спричиняючи `invalid_scope` помилки на GitLab self-hosted та інших enterprise IdPs | 2.1.196 |

## Області видимості та додавання серверів

| Область | Файл | Версія |
|---------|------|--------|
| User | `~/.claude.json` → розділ `mcpServers` | — |
| Project | `.mcp.json` (committed) | 0.2.50 |
| Local | `.claude/settings.local.json` | 0.2.49 |
| `claude mcp add` | CLI-обгортка для інтерактивного додавання (пише те саме що ручне редагування `.json`) | 0.2.32 |

> MCP сервери можна додавати як через CLI-команду `claude mcp add`, так і **безпосередньо через редагування відповідного `.json` файлу** — результат ідентичний. CLI-команда просто запускає інтерактивні промпти для заповнення полів (type, url, command, headers тощо).

## claude.ai MCP Connectors

| Можливість | Опис | Версія |
|-----------|------|--------|
| Канали | claude.ai MCP connectors | 2.1.46 |
| `--channels` | Push повідомлення від MCP серверів | 2.1.80 |
| `allowedChannelPlugins` | Allowlist (managed) | 2.1.80 |
