# CLI команди та прапорці

> Архів (notes до 2.1.207): [archived/cli_v2.1.207.md](archived/cli_v2.1.207.md)
> Тут — notes починаючи з версії 2.1.208

## Основні команди (2.1.208)

| Можливість | Опис | Версія |
|-----------|------|--------|
| `claude --ax-screen-reader` | Увімкнути screen reader mode (простий текстовий вивід) | 2.1.208 |
| Truncated stream-json/JSON output fix | Виправлено обривання виводу stream-json/JSON та відсутність result message при piping великих відповідей з `claude -p` | 2.1.208 |
| stream-json CRLF killing session fix | Виправлено вбивство сесії на порожніх CRLF або whitespace-only рядках від Windows-style SDK hosts у stream-json input | 2.1.208 |
| stream-json non-string set_model fix | Виправлено зависання headless stream-json сесій коли `control_request` містив non-string `set_model` payload — тепер CLI відповідає error response | 2.1.208 |
| Completed agents stay in `/tasks` | Завершені background агенти залишаються в `/tasks` до очищення замість зникнення одразу | 2.1.208 |
| Background-session attach after update fix | Виправлено постійну невдачу attach до background сесії ("Couldn't start the background daemon") після update що замінив binary працюючого `claude agents` процесу | 2.1.208 |
| Daemon version mismatch fix | Старіший background daemon більше не мовчки перезапускає workers породжені новішою версією | 2.1.208 |

## Команди управління (2.1.208)

| Можливість | Опис | Версія |
|-----------|------|--------|
| `/install-github-app` / `/mcp` not in background | Команди `/install-github-app` та меню налаштувань `/mcp` більше не відкриваються у background сесіях | 2.1.208 |
| `/mcp` reclassification fix | `/mcp` повторно класифікує placeholder-сервери після редагування конфігу | 2.1.208 |
| MCP empty URL "not configured" | MCP сервери з порожнім URL тепер показуються як "not configured" у `/mcp` замість помилки конфігу | 2.1.208 |
| `/upgrade` login flow fix | Виправлено `/upgrade` що показував login flow замість upgrade URL коли браузер не відкривався | 2.1.208 |
| `/release-notes` context injection fix | Виправлено потрапляння всього changelog у контекст моделі — "Show all" раніше вставляв весь changelog у кожен наступний запит | 2.1.208 |

## Основні команди (2.1.209)

| Можливість | Опис | Версія |
|-----------|------|--------|
| /model діалоги в claude agents fix | Виправлено блокування /model та інших діалогів у background-сесіях claude agents — скасовано надто широкий guard | 2.1.209 |

## Основні команди (2.1.210)

| Можливість | Опис | Версія |
|-----------|------|--------|
| claude attach session transitions fix | Виправлено помилки «job not found» та «agent is still starting» у claude attach під час переходів сесії — attach чекає поки daemon стабілізується, а resize терміналу під час повільного attach застосовується після завершення | 2.1.210 |
| claude agents --effort ultracode fix | claude agents --effort ultracode більше не скидає значення мовчки — воно тепер доходить до розгорнутих сесій | 2.1.210 |

## Основні команди (2.1.211)

| Можливість | Опис | Версія |
|-----------|------|--------|
| `--forward-subagent-text` | Новий прапорець: включає текст та роздуми субагентів у stream-json вивід | 2.1.211 |
| `/usage-credits` confirmation | `/usage-credits` тепер питає підтвердження перед надсиланням запиту адміністраторам організації | 2.1.211 |
| Headless print-mode Windows stdin fix [Win] | Виправлено краш або мовчазний вихід headless print-mode сесій на Windows, коли stdin недоступний для читання | 2.1.211 |

## Основні команди (2.1.212)

| Можливість | Опис | Версія |
|-----------|------|--------|
| `/fork` → background + `/subtask` | `/fork` тепер копіює розмову у нову фонову сесію (окремий рядок у `claude agents`), поки ви продовжуєте роботу; внутрішньосесійний субагент перенесено у `/subtask` | 2.1.212 |
| `/resume` agent view picker | `/resume` в agent view тепер відкриває picker минулих сесій (включно з видаленими зі списку) і відновлює вибір як фонову сесію | 2.1.212 |
| Shell mode `!` path autocomplete fix | Виправлено невиконання shell-режимом (`!`) команд зі шляхами файлів, поки відкрито спливаюче автодоповнення шляху | 2.1.212 |
| `/ultrareview` PR refs fix | Виправлено відхилення `/ultrareview` посилань на PR (`#123`, `PR 123`, вставлені URL); підказки помилок тепер називають команду яку ви ввели | 2.1.212 |
| `/ultrareview <branch>` origin fetch fix | Виправлено неотримання гілки з origin у `/ultrareview <branch>`; пропонує найближчу назву при опечатках | 2.1.212 |
| `/ultrareview` billing after `/clear` fix | Виправлено пропуск підтвердження білінгу `/ultrareview` у новій розмові після `/clear` | 2.1.212 |
| `/ultrareview` Claude Desktop hint fix | Виправлено помилку «not a git repository» `/ultrareview` на Claude Desktop — пропонує теку репозиторію проекту замість термінальних команд | 2.1.212 |
| `/fork` name after prompt | `/fork` тепер називає копію за вашим промптом, коли сесія без заголовка, щоб рядок упізнавали в agent view | 2.1.212 |
| `/btw` reopen side-question panel | bare `/btw` тепер повторно відкриває панель side-question на останньому обміні для перегляду раніших відповідей | 2.1.212 |

## Команди управління (2.1.212)

| Можливість | Опис | Версія |
|-----------|------|--------|
| `claude auto-mode reset` | Нова підкоманда: відновлює типову конфігурацію auto-mode з промптом підтвердження (`--yes` щоб пропустити) | 2.1.212 |
| `claude agents --json` «Needs input» | `claude agents --json` та agent view показують сесії, що чекають на sandbox/MCP/managed-settings промпт, як «Needs input» замість «Working» | 2.1.212 |
| Auth panel title → «Authentication» | Заголовок панелі статусу автентифікації змінено з «Cloud authentication» на «Authentication» | 2.1.212 |
| SIGTERM Bash orphan print/SDK fix | Виправлено orphaning дерева процесів команди при SIGTERM під час Bash у print/SDK-режимі; CLI перериває хід, вбиває дерево, виходить з кодом 143 | 2.1.212 |

## Основні команди (2.1.214)

| Можливість | Опис | Версія |
|-----------|------|--------|
| Bash tool `pkill -f` self-match kill fix (Linux) | Виправлено вбивство Claude-сесії Bash tool, коли патерн `pkill -f` випадково збігався з власним процесом CLI (Linux) | 2.1.214 |
| `/ultrareview` no merge base all tracked files fix | Виправлено відмову `/ultrareview` запускатись у репо без merge base — тепер пропонує рев'ю всіх tracked files | 2.1.214 |
| `/install-github-app` + `/mcp` menu agent-view fix | Виправлено блокування `/install-github-app` та меню налаштувань `/mcp` у agent-view сесіях — тепер відмовляються лише у background-сесіях без термінала | 2.1.214 |

## Команди управління (2.1.214)

| Можливість | Опис | Версія |
|-----------|------|--------|
| `claude update`/`claude doctor` shell-config directory hang fix | Виправлено мовчазне зависання `claude update` та `claude doctor` і порожність секції System діагностики `/status`, коли shell-config path є текою | 2.1.214 |
| `claude rc` workspace-trust home dir error improvement | Покращено помилку workspace-trust `claude rc` у home directory — каже, що trust там ніколи не зберігається, і радить запуск з проектної теки | 2.1.214 |
