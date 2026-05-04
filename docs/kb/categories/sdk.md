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
