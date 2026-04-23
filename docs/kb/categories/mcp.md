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
| Elicitation | Інтерактивні MCP-запити | 2.1.76 |
| Виправлення таймауту підключення [Win] | Виправлено на повільних мережах | 2.2.0 |

## Області видимості

| Область | Файл | Версія |
|---------|------|--------|
| User | `~/.claude.json` | — |
| Project | `.mcp.json` (committed) | 0.2.50 |
| Local | `.claude/settings.local.json` | 0.2.49 |

## claude.ai MCP Connectors

| Можливість | Опис | Версія |
|-----------|------|--------|
| Канали | claude.ai MCP connectors | 2.1.46 |
| `--channels` | Push повідомлення від MCP серверів | 2.1.80 |
| `allowedChannelPlugins` | Allowlist (managed) | 2.1.80 |
