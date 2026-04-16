# Основні можливості

> Режим мислення, рівні зусилля, план-режим, швидкий режим, моделі, контекст/пам'ять, інтерактивність

## Режим мислення

| Можливість | Опис | Версія |
|-----------|------|--------|
| `think` / `think harder` / `ultrathink` | Ввімкнення режиму мислення | 0.2.44 |
| Tab (sticky) | Перемикання thinking (зберігається між сесіями) | 2.0.0 |
| Alt+T | Перемикання thinking | 2.0.71 |
| `/t` | Тимчасове вимкнення thinking для одного промпту | 1.0.115 |
| `/config` | Постійне налаштування thinking | 2.0.67 |
| Увімкнено за замовч. для Opus 4.5+ | Thinking увімкнений по дефолту | 2.0.67 |
| `DISABLE_INTERLEAVED_THINKING` | Вимкнути interleaved thinking | 1.0.1 |

## Рівні зусилля

| Можливість | Опис | Версія |
|-----------|------|--------|
| `/effort auto\|low\|medium\|high` | Встановлення рівня зусилля | 2.1.72 |
| Символи: ○ (low), ◐ (medium), ● (high) | Візуальні індикатори зусилля | 2.1.72 |
| `ultrathink` | Високе зусилля для наступного повороту | 2.1.68 |
| `/effort` працює під час відповіді | Зміна зусилля поки Claude відповідає | 2.1.73 |
| Opus 4.6 default = medium | Для планів Max/Team | 2.1.68 |
| `effort:` у frontmatter skill/agent | Рівень зусилля для навички | 2.1.80 |
| Default effort = high | Для API-key, Bedrock/Vertex/Foundry, Team, Enterprise (`/effort` для зміни) | 2.1.94 |

## План-режим

| Можливість | Опис | Версія |
|-----------|------|--------|
| `/plan [опис]` | Вхід у план-режим з опціональним описом | 2.1.72 |
| Shift+Tab | Швидке "авто-прийняття редагувань" | 2.1.2 |
| Зворотний зв'язок при відхиленні | Ітеративне вдосконалення плану | 2.0.57 |
| План-режим зберігається після compact | Не зникає при стисненні контексту | 2.1.20 |
| `showClearContextOnPlanAccept: true` | Показувати "очистити контекст" | 2.1.81 |
| План-режим у remote sessions | Виправлено втрату плану після рестарту контейнера | 2.1.91 |
| Hide "Refine with Ultraplan" | Не показується коли org/auth не може досягти Claude Code на web | 2.1.101 |

## Швидкий режим

| Можливість | Опис | Версія |
|-----------|------|--------|
| Opus 4.6 Fast mode | Швидший вивід, та сама модель | 2.1.36 |
| `/fast` | Перемикання швидкого режиму | 2.1.36 |
| Alt+P (Win/Linux), Option+P (macOS) | Перемикання моделі під час вводу | 2.0.65 |

## Моделі

| Можливість | Опис | Версія |
|-----------|------|--------|
| `/model` | Вибір моделі з валідацією | 1.0.111 |
| Opus 4, 4.1 видалені | Замінені на 4.6 в first-party API | 2.1.68 |
| Sonnet 4.6 | Доступна | 2.1.45 |
| Haiku 4.5 | Автоматично Sonnet в plan mode, Haiku в execution | 2.0.17 |
| 1M контекст (Opus 4.6) | За замовчуванням для Max/Team/Enterprise | 2.1.75 |
| `modelOverrides` | Кастомні ID моделей для провайдерів | 2.1.73 |
| Bedrock/Vertex/Foundry | Opus 4.6 за замовчуванням | 2.1.73 |
| Auto mode "unavailable for plan" | Повідомлення при вимкненому через план | 2.1.86 |

## Контекст та пам'ять

| Можливість | Опис | Версія |
|-----------|------|--------|
| Автоматичне стиснення (auto-compact) | Автоматичне стиснення контексту | 0.2.47 |
| Автокомпакт thrash detection | Зупинка після 3 послідовних невдач з помилкою | 2.1.89 |
| Миттєве стиснення | Без затримки при компактуванні | 2.0.64 |
| `/compact` | Ручне стиснення контексту | 2.0.64 |
| `/context` | Діагностика з практичними порадами | 1.0.86, 2.1.74 |
| "Підсумувати звідси" | Часткове стиснення контексту | 2.1.32 |
| Автоматична пам'ять | Збереження контексту в пам'ять | 2.1.32 |
| `/memory` | Пряме редагування пам'яті | 1.0.94 |
| ~~`#`~~ | [ВИДАЛЕНО] Швидкий запис у пам'ять | 2.0.70 |
| `autoMemoryDirectory` | Кастомна директорія для пам'яті | 2.1.74 |
| Файли пам'яті з hover/click | Підсвічування та відкриття при наведенні | 2.1.86 |
| Session recap | Recap: контекст при поверненні до сесії, configurable в `/config`, `/recap` для ручного виклику | 2.1.108 |
| Session recap telemetry-disabled | Recap увімкнено для користувачів з вимкненою телеметрією (Bedrock, Vertex, Foundry); opt-out через `/config` або `CLAUDE_CODE_ENABLE_AWAY_SUMMARY=0` | 2.1.110 |

## Інтерактивність

| Можливість | Опис | Версія |
|-----------|------|--------|
| Enter | Черга повідомлень поки Claude працює | 0.2.75 |
| Реальночасне steer-повідомлення | Відправка повідомлень під час роботи Claude | 1.0.108 |
| AskUserQuestion | Інтерактивні питання користувачу | 2.0.21 |
| Ctrl+B | Фоновий запуск bash/агентів (уніфіковано) | 1.0.71, 2.1.0 |
| Ctrl+F → Ctrl+X Ctrl+K | Зупинка фонових агентів | 2.1.49 |
| Фонові агенти | Агенти працюють у фоні | 2.0.60 |
| Escape | Переривання Claude (подвійне для агентів) | 0.2.70, 2.1.83 |
| Auto mode кордони | Виправлено ігнорування явних кордонів користувача ("не пуш", "чекай X перед Y") | 2.1.90 |

## Інші команди

| Можливість | Опис | Версія |
|-----------|------|--------|
| `/export` | Експорт розмови | 1.0.44 |
| `/copy [N]` | Копіювання коду (індекс N з 2.1.77) | 2.1.59 |
| `/copy` з `w` | Запис у файл замість clipboard | 2.1.71 |
| "Завжди копіювати повну відповідь" | Опція в /copy | 2.1.63 |
| `/stats` | Статистика використання з датами (`r` для фільтру) | 2.0.64, 2.1.6 |
| `/usage` | Ліміти плану | 2.0.0 |
| `/status` | Статус сесії (працює під час відповіді) | 0.2.105, 2.1.83 |
| `/doctor` | Діагностика з валідацією | 1.0.51 |
| `/debug` | Увімкнення debug-логування посеред сесії | 2.1.30 |
| Read tool compact format | Компактний формат номерів рядків + дедублікація | 2.1.86 |
| Thinking summaries off by default | Не генеруються; `showThinkingSummaries: true` для увімкнення | 2.1.89 |
| `!command` paste → bash mode | Вставка `!command` в пустий prompt входить в bash mode | 2.1.89 |
| Зображення paste без trailing space | Вставка зображень більше не додає trailing space | 2.1.89 |
| Collapsed "Listed N directories" | ls/tree/du відображаються як "Listed N directories" | 2.1.89 |
| Edit для файлів з Bash `sed`/`cat` | Edit працює без окремого Read для файлів переглянутих через Bash | 2.1.89 |
| Bash formatter warning | Попередження коли formatter змінює раніше прочитані файли | 2.1.89 |
| Task notifications при Ctrl+B | Сповіщення задач зберігаються при backgrounding | 2.1.89 |
| Auto mode denied notification | Відмовлені команди показують нотифікацію + `/permissions` Recent tab | 2.1.89 |
| Named subagents в @-mention | Typeahead підказки для іменованих агентів | 2.1.89 |
| Зменшення токенів `@` mentions | Менше JSON-екранування для файлів | 2.1.86 |
| `/color` | Колір панелі вводу | 2.1.70 |
| `/timer` | Показує залишок часу сесії (при встановленому sessionTimeout) | 2.2.3 |
| `/statusline` | Кастомний статус-бар | 1.0.71 |
| `IS_DEMO` env | Приховування email/org для стрімінгу | 2.1.0 |
| Відображення контексту в статус-барі | Контекст window display | 2.0.65 |
| Rate-limit dialog fix | Виправлено нескінченний цикл auto-open діалогу після ліміту | 2.1.90 |
| Collapsed badge fix | Виправлено множинне відображення badge в fullscreen при автозавантаженні CLAUDE.md | 2.1.90 |
| Hover text light theme fix | Click-to-expand текст виправлено для світлих тем терміналу | 2.1.90 |
| Malformed tool input fix | Виправлено краш UI при некоректному tool input в permission dialog | 2.1.90 |
| Selection screen headers fix | Виправлено зникнення заголовків при скролі `/model`, `/config` | 2.1.90 |
| `/feedback` пояснення | `/feedback` тепер пояснює чому недоступний замість зникнення з меню | 2.1.91 |
| `stripAnsi` на Bun | Прискорено через `Bun.stripANSI` | 2.1.91 |
| Edit `old_string` anchors | Edit tool використовує коротші якорі, зменшуючи output tokens | 2.1.91 |
| `/cost` per-model breakdown | Деталізація по моделям та cache-hit для subscription користувачів | 2.1.92 |
| `/release-notes` picker | Інтерактивний вибір версії замість простого виводу | 2.1.92 |
| Cache expired footer | Footer hint при поверненні до сесії після спливання prompt cache | 2.1.92 |
| Subagent tmux fix | Виправлено постійний збій subagent spawn після kill/renumber tmux windows | 2.1.92 |
| Tool input JSON strings fix | Виправлено валідацію при streaming array/object як JSON-encoded strings | 2.1.92 |
| Whitespace thinking fix | Виправлено API 400 при whitespace-only text block в extended thinking | 2.1.92 |
| Feedback survey fix | Виправлено випадкові відправки опитування від auto-pilot keypresses | 2.1.92 |
| "esc to interrupt" hint fix | Виправлено оманливий hint при наявності text selection в fullscreen | 2.1.92 |
| `ctrl+e` fix | Виправлено перехід на кінець наступного рядка при багаторядковому промпті | 2.1.92 |
| Fullscreen duplicate fix | Виправлено дублювання повідомлення при скролі вверх (DEC 2026 термінали) | 2.1.92 |
| Idle-return tokens fix | Hint "/clear to save X tokens" показує поточний розмір контексту, не кумулятивний | 2.1.92 |
| Write tool diff perf | Прискорено diff computation для великих файлів (+60% на файлах з tabs/`&`/`$`) | 2.1.92 |
| 429 agent stuck fix | Агенти більше не зависають при 429 з довгим Retry-After — помилка показується негайно | 2.1.94 |
| Bedrock Sonnet 3.5 v2 fix | Використовує `us.` inference profile ID | 2.1.94 |
| Scrollback blank pages fix | Виправлено повторення diff та порожні сторінки в довгих сесіях | 2.1.94 |
| Multiline prompt indent fix | Загорнуті рядки відступають під текст, не під `❯` | 2.1.94 |
| Shift+Space search fix | Вставляє пробіл замість слова "space" в пошукових інпутах | 2.1.94 |
| Hyperlink two tabs fix | Виправлено відкриття двох вкладок при кліку в tmux+xterm.js | 2.1.94 |
| Alt-screen ghost lines fix | Виправлено compounding ghost lines при зміні висоти контенту | 2.1.94 |
| Cursor tab tracking fix | Нативний курсор слідує за вибраним табом (screen readers/magnifiers) | 2.1.94 |
| Focus view `Ctrl+O` | NO_FLICKER mode: prompt, one-line tool summary з diffstats, фінальна відповідь | 2.1.97 |
| Cedar syntax highlighting | Підтримка `.cedar`, `.cedarpolicy` файлів | 2.1.97 |
| 429 exponential backoff | Retry більше не спалює всі спроби за ~13с при малому Retry-After | 2.1.97 |
| Rate-limit after compaction | Options більше не зникають після context compaction | 2.1.97 |
| Messages persisted | Повідомлення надруковані під час роботи Claude зберігаються в транскрипт | 2.1.97 |
| Subagent worktree cwd fix | Worktree isolation/`cwd:` override більше не витікає в parent Bash tool | 2.1.97 |
| Compaction subagent transcripts | Виправлено дублювання multi-MB subagent файлів при prompt-too-long retries | 2.1.97 |
| NO_FLICKER URL copy fix | Виправлено вставку пробілів при копіюванні загорнутих URL | 2.1.97 |
| NO_FLICKER zellij scroll | Виправлено артефакти скролінгу | 2.1.97 |
| NO_FLICKER MCP hover crash | Виправлено краш при наведенні на MCP tool results | 2.1.97 |
| NO_FLICKER memory leak | Виправлено витік при API retries через stale streaming state | 2.1.97 |
| NO_FLICKER status line <24 rows | Кастомний status line показується на коротких терміналах | 2.1.97 |
| NO_FLICKER Warp shortcuts | Shift+Enter та Alt/Cmd+arrow працюють у Warp | 2.1.97 |
| NO_FLICKER fullscreen fixes | Crash MCP hover, wrapped URL copy, duplicate message scroll | 2.1.98 |
| Image compression | Вставлені та прикріплені зображення стискаються до того ж token budget як через Read tool | 2.1.97 |
| CJK `/` та `@` prompt | Completion працює після CJK розділових знаків без пробілу | 2.1.97 |
| Footer indicators row | Focus, notifications залишаються на mode-indicator row | 2.1.97 |
| Context-low transient | Попередження context-low як transient footer замість постійного рядка | 2.1.97 |
| Blockquotes left bar | Безперервна ліва риска при загортанні рядків | 2.1.97 |
| Transcript size optimization | Пропуск порожніх hook entries, cap pre-edit file copies | 2.1.97 |
| Transcript token accuracy | Per-block entries несуть фінальне token usage замість streaming placeholder | 2.1.97 |
| Bash OTEL `TRACEPARENT` | Subprocesses успадкують W3C `TRACEPARENT` при увімкненому tracing | 2.1.97 |
| Bedrock SigV4 empty strings | Виправлено 403 при порожніх `AWS_BEARER_TOKEN_BEDROCK`/`ANTHROPIC_BEDROCK_BASE_URL` | 2.1.97 |
| Monitor tool | Стрімінг подій з background скриптів | 2.1.98 |
| LSP `clientInfo` | Claude Code ідентифікується в language servers через `clientInfo` | 2.1.98 |
| Stalled streaming fallback | Таймаут стрімінгу переходить до non-streaming замість abort | 2.1.98 |
| Kitty keyboard capital fix | Виправлено lowercase на xterm/VS Code при kitty keyboard protocol | 2.1.98 |
| macOS text replacements fix | Виправлено видалення тригер-слова замість вставки заміни | 2.1.98 |
| `/export` paths fix | Працює з absolute paths та `~`, не переписує розширення на `.txt` | 2.1.98 |
| `/effort max` future models | Не відхиляється для невідомих або майбутніх model IDs | 2.1.98 |
| Voice mode spaces fix | Виправлено витік пробілів при повторному утриманні push-to-talk | 2.1.98 |
| Vim mode `j`/`k` history | Навігація по історії та вибір footer pill в NORMAL mode | 2.1.98 |
| OTEL interaction spans | Повні turn spans під concurrent SDK calls | 2.1.98 |
| `/compact` DISABLE_COMPACT | Hints не показуються коли `DISABLE_COMPACT` встановлено | 2.1.98 |
| `/ultraplan` auto-create | Автоматичне створення default cloud environment | 2.1.101 |
| Brief mode retry | Повторна спроба коли Claude відповідає plain text замість структурованого повідомлення | 2.1.101 |
| Focus mode summaries | Claude пише самодостатні підсумки (знає що видно лише фінальне повідомлення) | 2.1.101 |
| Tool-not-available error | Покращено: пояснює чому та як діяти | 2.1.101 |
| Rate-limit which limit | Повідомлення показує який ліміт вражено та коли скидається | 2.1.101 |
| Refusal API explanation | Повідомлення відмови включає API-пояснення | 2.1.101 |
| LSP `which` injection fix | Виправлено command injection в POSIX `which` fallback | 2.1.101 |
| Memory leak message list | Виправлено збереження копій message list в virtual scroller на довгих сесіях | 2.1.101 |
| Bedrock SigV4 AUTH_TOKEN fix | Виправлено 403 коли `ANTHROPIC_AUTH_TOKEN`/`apiKeyHelper`/`ANTHROPIC_CUSTOM_HEADERS` встановлюють Authorization header | 2.1.101 |
| `claude -w` stale worktree | Виправлено "already exists" після залишеної директорії від cleanup | 2.1.101 |
| Subagents dynamic MCP | Subagents наслідують MCP tools від dynamically-injected servers | 2.1.101 |
| Sub-agents worktree access | Sub-agents в isolated worktrees мають Read/Edit доступ до файлів свого worktree | 2.1.101 |
| `/btw` disk fix | Більше не пише повну розмову на диск при кожному виклику | 2.1.101 |
| `/context` disagreement fix | Free space та Messages breakdown тепер узгоджуються з header | 2.1.101 |
| `ctrl+]`/`ctrl+\`/`ctrl+^` fix | Працюють в терміналах що надсилають raw C0 control bytes | 2.1.101 |
| Rendering fixes | Flicker non-fullscreen, scrollback wipe, mouse-scroll text leak | 2.1.101 |
| `/insights` report link | Виправлено відсутність посилання на файл звіту | 2.1.101 |
| Background subagents progress | Subagents що помилилися повідомляють partial progress | 2.1.101 |
| `API stream abort 5min` | Сталле API стрімінг: автоматичний abort через 5 хв без даних, retry non-streaming замість зависання | 2.1.105 |
| `Мережеві помилки retry` | Повідомлення про помилку з'єднання показують retry негайно замість мовчазного спіннера | 2.1.105 |
| `Long writes truncation` | Довгі однорядкові записи (напр. minified JSON) обрізаються в UI замість пагінації | 2.1.105 |
| `/doctor` status icons | Покращено layout `/doctor` зі статус-іконками; `f` для автовиправлення | 2.1.105 |
| `WebFetch strip style/script` | `WebFetch` прибирає `<style>` та `<script>` — CSS-важкі сторінки більше не вичерпують content budget | 2.1.105 |
| `Queued images fix` | Виправлено втрату зображень прикріплених до повідомлень в черзі (під час роботи Claude) | 2.1.105 |
| `Screen blank prompt wrap fix` | Виправлено порожній екран коли prompt input переноситься на другий рядок | 2.1.105 |
| `Fullscreen whitespace selection fix` | Виправлено копіювання початкового whitespace при виділенні в fullscreen | 2.1.105 |
| `Whitespace trim fix` | Виправлено обрізання початкового whitespace з відповідей, що ламало ASCII art та діаграми | 2.1.105 |
| `Bash clickable links fix` | Виправлено пошкоджений bash output при клікабельних file links (напр. `rich`/`loguru`) | 2.1.105 |
| `Queued prompts focus fix` | Виправлено зникнення користувацьких промптів з черги в focus mode | 2.1.105 |
| `One-shot scheduled tasks fix` | Виправлено повторне спрацьовування one-shot scheduled tasks коли file watcher пропустив cleanup | 2.1.105 |
| `Feedback survey keys fix` | Виправлено спрацьовування клавіш опитування при наборі в кінці довгого промпту | 2.1.105 |
| `429 rate-limit clean message` | Виправлено сирі JSON dump замість чистого повідомлення при 429 для API-key, Bedrock, Vertex | 2.1.105 |
| `/help` short terminal fix | Виправлено випадання tab bar, заголовка Shortcuts та footer на коротких терміналах | 2.1.105 |
| `16-color palette SSH fix` | Виправлено бліду 16-кольорову палітру в сучасних терміналах через SSH/mosh | 2.1.105 |
| `Bash acceptEdits plan mode fix` | Виправлено пропозицію `acceptEdits` при виході з план-режиму що понижує рівень дозволів | 2.1.105 |
| `/model` Bedrock non-US fix | Виправлено persisting невалідних `us.*` model IDs в `settings.json` на Bedrock в non-US регіонах | 2.1.105 |
| `Thinking hints sooner` | Підказки thinking з'являються раніше під час довгих операцій | 2.1.107 |
| `/model` mid-conversation warn | `/model` попереджає про switch mid-conversation (наступна відповідь читає повну історію без кешу) | 2.1.108 |
| `Error messages improvements` | Server rate limits відрізняються від план usage limits; 5xx/529 показують status.claude.com; невідомі slash-команди пропонують найближчу | 2.1.108 |
| `Reduced memory file ops` | Зменшено споживання пам'яті для Read/Edit/syntax highlighting через lazy loading граматик | 2.1.108 |
| `Verbose indicator Ctrl+O` | Індикатор "verbose" при перегляді детального транскрипту | 2.1.108 |
| `Caching disabled warning` | Попередження при старті коли prompt caching вимкнено через `DISABLE_PROMPT_CACHING*` | 2.1.108 |
| `Paste /login fix` | Виправлено вставку в `/login` code prompt (регресія з 2.1.105) | 2.1.108 |
| `Session titles short greetings` | Виправлено показ placeholder тексту коли перше повідомлення — коротке привітання | 2.1.108 |
| `/feedback` retry fix | Виправлено `/feedback` retry: Enter для повторної відправки працює без редагування | 2.1.108 |
| `Transcript write failures` | Помилки запису транскрипту (напр. диск повний) логуються замість мовчазного ігнорування | 2.1.108 |
| `Diacritical marks fix` | Виправлено втрату діакритичних знаків (акценти, умлаути) з відповідей коли `language` налаштовано | 2.1.108 |
| `Extended-thinking indicator` | Покращено індикатор extended-thinking з обертовим прогрес-хінтом | 2.1.109 |
| `Push notification tool` | Інструмент push-повідомлень — Claude відправляє mobile push при увімкненому Remote Control | 2.1.110 |
| `Ctrl+O toggle behavior` | `Ctrl+O` тепер toggle між normal та verbose transcript; focus view окремо через `/focus` | 2.1.110 |
| `Session recap focus fix` | Виправлено непояву session recap та системних рядків в focus mode | 2.1.110 |
| `Non-streaming fallback hang fix` | Виправлено багатохвилинні зависання non-streaming fallback коли API недоступний | 2.1.110 |
| `High CPU fullscreen selection fix` | Виправлено високе CPU в fullscreen коли text виділено під час роботи tool | 2.1.110 |
| `Queued messages duplicate fix` | Виправлено подвійну появу повідомлень з черги під час multi-tool-call turns | 2.1.110 |
| `Session cleanup subagents` | Виправлено видалення повної сесійної директорії включаючи subagent транскрипти | 2.1.110 |
| `Dropped keystrokes relaunch fix` | Виправлено втрату keystrokes після перезапуску CLI (`/tui`, provider setup) | 2.1.110 |
| `Garbled startup macOS Terminal` | Виправлено пошкоджений рендеринг в терміналах без synchronized output | 2.1.110 |
| `Open in editor hardening` | Захист від command injection через ненадійні імена файлів в "Open in editor" | 2.1.110 |
| `Excessive memory piped fix` | Виправлено надмірне виділення пам'яті при piped (non-TTY) Ink output з дуже широким рядком | 2.1.110 |
| `Bash max timeout enforce` | Bash tool тепер застосовує документований максимальний таймаут замість прийняття довільних значень | 2.1.110 |
