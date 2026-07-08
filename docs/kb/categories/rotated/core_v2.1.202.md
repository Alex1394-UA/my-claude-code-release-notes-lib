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
| `Claude Opus 4.7 xhigh` | Новий рівень зусилля `xhigh` для Opus 4.7 — між `high` та `max`, доступний через `/effort`, `--effort` та model picker; інші моделі fallback до `high` | 2.1.111 |
| `/effort` інтерактивний слайдер | `/effort` без аргументів відкриває інтерактивний слайдер з навігацією стрелками та Enter для підтвердження | 2.1.111 |
| Default effort high Pro/Max | Default effort для Pro/Max підписників на Opus 4.6 та Sonnet 4.6 тепер `high` (було `medium`) | 2.1.117 |
| `/effort` слайдер "Faster"/"Smarter" | Мітки слайдера `/effort` перейменовані з "Speed"/"Intelligence" на "Faster"/"Smarter" | 2.1.154 |

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
| Plan файли з іменами промптів | Файли планів називаються за вашою назвою промпту (напр. `fix-auth-race-snug-otter.md`) замість випадкових слів | 2.1.111 |

## Швидкий режим

| Можливість | Опис | Версія |
|-----------|------|--------|
| Opus 4.6 Fast mode | Швидший вивід, та сама модель | 2.1.36 |
| Fast mode Opus 4.7 default | Fast mode тепер використовує Opus 4.7 за замовчуванням (було Opus 4.6) | 2.1.142 |
| `/fast` | Перемикання швидкого режиму | 2.1.36 |
| Opus 4.8 fast mode | Fast mode на Opus 4.8 за 2x стандартної ціни з 2.5x швидкістю (було значно дорожче) | 2.1.154 |
| Alt+P (Win/Linux), Option+P (macOS) | Перемикання моделі під час вводу | 2.0.65 |
| `/fast` + `availableModels` | `/fast` відмовляється перемикати коли цільова модель поза `availableModels` allowlist | 2.1.176 |

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
| Auto mode без прапорця | Auto mode більше не потребує `--enable-auto-mode` для Max підписників з Opus 4.7 | 2.1.111 |
| Opus 4.8 | Нова модель — default effort встановлено на `high`; підтримує `/effort xhigh` та fast mode за 2x стандартної ціни | 2.1.154 |
| Claude Fable 5 | Mythos-клас модель, безпечна для загального використання; можливості перевершують будь-яку раніше загальнодоступну модель | 2.1.170 |
| Claude Sonnet 5 | Нова модель — дефолтна в Claude Code з нативним 1M-токеновим контекстом; промоціональне ціноутворення $2/$10 за Mtok до 31 серпня | 2.1.197 |

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
| Opus 4.7 context window fix | Виправлено завищені `/context` відсотки та передчасний autocompact для Opus 4.7 — рахував проти 200K замість нативного 1M | 2.1.117 |
| Lean system prompt за замовчуванням | Скорочений системний промпт тепер використовується за замовчуванням для всіх моделей крім Haiku, Sonnet та Opus 4.7 і старіших | 2.1.154 |

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
| Subagent stall timeout | Subagents що зависають mid-stream тепер fail з чіткою помилкою після 10 хвилин замість мовчазного зависання | 2.1.113 |
| Platform binary spawn | CLI тепер запускає нативний Claude Code binary (через per-platform optional dependency) замість bundled JavaScript | 2.1.113 |
| AskUserQuestion зарезервовано для реальних рішень | Claude тепер використовує AskUserQuestion лише для рішень що дійсно не може прийняти самостійно, замість запитів коли вже достатньо контексту | 2.1.154 |

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
| `"Auto (match terminal)" тема` | Опція теми що автоматично підбирає dark/light режим терміналу — доступна з `/theme` | 2.1.111 |
| `Auto mode "$defaults"` | Включення `"$defaults"` в `autoMode.allow`, `autoMode.soft_deny` або `autoMode.environment` додає кастомні правила поруч зі вбудованим списком | 2.1.118 |
| Auto mode "Don't ask again" | Опція "Don't ask again" в діалозі auto mode opt-in | 2.1.118 |
| Merged `/cost` + `/stats` → `/usage` | `/cost` та `/stats` об'єднані в `/usage`; обидва залишаються як typing-скорочення | 2.1.118 |
| Custom themes | Створення та перемикання named кастомних тем з `/theme`, або ручне редагування JSON в `~/.claude/themes/`; плагіни можуть постачати теми через `themes/` директорію | 2.1.118 |
| Thinking spinner з прогресом | Thinking spinner показує прогрес inline ("still thinking", "thinking more", "almost done thinking"), замість окремого рядка підказок | 2.1.116 |
| `Advisor Tool` експериментальний | Діалог з "experimental" міткою, learn-more посиланням, та startup-сповіщенням; виправлено зависання сесій з "Advisor tool result content could not be processed" | 2.1.117 |
| `cleanupPeriodDays` розширення | Retention sweep тепер також охоплює `~/.claude/tasks/`, `~/.claude/shell-snapshots/`, та `~/.claude/backups/` | 2.1.117 |
| Native builds `bfs`/`ugrep` | macOS/Linux native builds: `Glob` та `Grep` замінені на вбудовані `bfs` та `ugrep` — швидший пошук без окремого tool round-trip (Windows та npm без змін) | 2.1.117 |
| Non-streaming retry revert | Відкочено обмеження v2.1.110 на non-streaming fallback retries — замінило довгі очікування на більше помилок при API перевантаженні | 2.1.111 |
| Spurious errors suppressed | Придушено помилкові decompression, network та transient error повідомлення в TUI під час нормальної роботи | 2.1.111 |
| iTerm2+tmux tearing fix | Виправлено розриви терміналу (випадкові символи, drifting input) в iTerm2 + tmux при термінальних сповіщеннях | 2.1.111 |
| Clickable wrapped URLs fix | Голі URL в bash/PowerShell/MCP output залишаються клікабельними при перенесенні через рядки | 2.1.111 |
| `@` file suggestions perf fix | Виправлено повторне сканування всього проекту при кожному повороті в non-git директоріях, та показ лише config файлів в свіжих git repos без tracked файлів | 2.1.111 |
| LSP diagnostics stale fix | Виправлено появу LSP diagnostics з до редагування після нього, що змушувало модель перечитувати щойно відредаговані файли | 2.1.111 |
| `/resume` tab-complete fix | Виправлено миттєве відновлення довільної сесії замість показу session picker при tab-complet'і `/resume` | 2.1.111 |
| `/context` grid fix | Виправлено зайві порожні рядки між рядками в `/context` grid | 2.1.111 |
| `/clear` session name fix | Виправлено втрату імені сесії встановленого через `/rename` при `/clear`, що ламало statusline output | 2.1.111 |
| 429 Bedrock/Vertex status fix | Виправлено 429 rate-limit помилки на Bedrock/Vertex/Foundry що посилали на status.claude.com | 2.1.111 |
| Feedback survey back-to-back fix | Виправлено появу опитувань one-by-one після відхилення | 2.1.111 |
| `"+N lines"` full-width rule | Marker для truncated long pastes тепер full-width rule для легшого сканування | 2.1.111 |
| `Bash tool comment multiline fix` | Багаторядкові команди що починаються з коментару тепер показують повну команду в транскрипті, закриваючи UI-spoofing вектор | 2.1.113 |
| Session recap auto-fire fix | Виправлено автоматичний спрацьовування session recap під час набору тексту в промпті | 2.1.113 |
| `/copy` markdown table fix | `/copy` "Full response" тепер вирівнює колонки markdown таблиць для вставки в GitHub, Notion або Slack | 2.1.113 |
| Parent messages hidden fix | Виправлено приховування повідомлень набраних під час перегляду subagent з його транскрипту та хибне приписування parent AI | 2.1.113 |
| `dangerouslyDisableSandbox` fix | Виправлено виконання команд поза sandbox без permission prompt через `dangerouslyDisableSandbox` | 2.1.113 |
| `/effort auto` label fix | Виправлено `/effort auto` підтвердження — тепер каже "Effort level set to max" для відповідності status bar | 2.1.113 |
| "Copied N chars" toast fix | Виправлено завищення лічильника для emoji та інших multi-code-unit символів | 2.1.113 |
| Exit confirmation dialog fix | Виправлено хибне позначення one-shot scheduled tasks як recurring — тепер показує countdown | 2.1.113 |
| Slash/@ completion border fix | Виправлено nonsitting flush completion menu проти prompt border в fullscreen mode | 2.1.113 |
| `CLAUDE_CODE_EXTRA_BODY` effort fix | Виправлено 400 помилки на subagent викликах до моделей без effort підтримки та на Vertex AI | 2.1.113 |
| Prompt cursor NO_COLOR fix | Виправлено зникнення prompt cursor коли `NO_COLOR` встановлено | 2.1.113 |
| `ToolSearch` ranking fix | Виправлено ranking так що вставлені MCP tool names знаходять фактичний tool замість description-matching siblings | 2.1.113 |
| Long context compact fix | Виправлено compaction відновленої long-context сесії з помилкою "Extra usage is required for long context requests" | 2.1.113 |
| `untrustedPlugin` permission crash | Виправлено краш в permission dialog коли agent teams teammate запитує tool permission | 2.1.114 |
| Devanagari rendering fix | Виправлено зламану column alignment для Devanagari та інших Indic scripts | 2.1.116 |
| `/resume` large sessions perf | Прискорено `/resume` на великих сесіях (до 67% на 40MB+ сесіях) та ефективніша обробка dead-fork entries | 2.1.116 |
| Fullscreen scroll VS Code | Плавніший скролінг в fullscreen в VS Code, Cursor та Windsurf терміналах — `/terminal-setup` тепер налаштовує scroll sensitivity редактора | 2.1.116 |
| `/config` search values | `/config` пошук тепер match значення опцій (напр. пошук "vim" знаходить Editor mode setting) | 2.1.116 |
| `/doctor` під час відповіді | `/doctor` можна відкрити поки Claude відповідає, без очікування завершення поточного turn | 2.1.116 |
| Bash `gh` rate limit hint | Bash tool показує підказку коли `gh` команди влучають в GitHub API rate limit | 2.1.116 |
| Usage tab immediate data | Usage tab в Settings показує 5-годинний та тижневий usage одразу | 2.1.116 |
| No-commands-match message | Slash command menu показує "No commands match" коли фільтр не має результатів замість зникнення | 2.1.116 |
| Ctrl+- undo fix | Виправлено `Ctrl+-` що не trigerr undo в терміналах з Kitty keyboard protocol (iTerm2, Ghostty, kitty, WezTerm, Windows Terminal) | 2.1.116 |
| Cmd+Left/Right fix | Виправлено Cmd+Left/Right що не переходили на початок/кінець рядка в терміналах з Kitty keyboard protocol | 2.1.116 |
| Ctrl+Z wrapper fix | Виправлено зависання термінала при запуску через wrapper процес (напр. `npx`, `bun run`) | 2.1.116 |
| Inline scrollback fix | Виправлено дублювання scrollback в inline mode при зміні розміру терміналу або великому output | 2.1.116 |
| Modal search overflow fix | Виправлено переповнення екрану modal search dialogs на коротких терміналах | 2.1.116 |
| VS Code scroll cells fix | Виправлено розсипані blank cells та зникнення composer chrome в VS Code integrated terminal при скролі | 2.1.116 |
| API 400 cache TTL fix | Виправлено періодичний API 400 помилку пов'язану з cache control TTL ordering при паралельних запитах | 2.1.116 |
| `/branch` 50MB fix | Виправлено відхилення `/branch` для розмов з транскриптом >50MB | 2.1.116 |
| `/resume` empty fix | Виправлено мовчазний показ пустої розмови при великих session files замість повідомлення про помилку | 2.1.116 |
| `/plugin` duplicate tab fix | Виправлено подвійне показ одного плагіна в Installed tab коли він з'являється під Needs attention або Favorites | 2.1.116 |
| `/update`/`/tui` worktree fix | Виправлено `/update` та `/tui` що не працювали після входу в worktree mid-session | 2.1.116 |
| Fork subagents external builds | Forked subagents можна увімкнути на external builds через `CLAUDE_CODE_FORK_SUBAGENT=1` | 2.1.117 |
| `/resume` summarize stale | `/resume` пропонує підсумувати застарілі великі сесії перед повторним читанням | 2.1.117 |
| `/model` persist across restarts | `/model` selections persist через рестарти навіть коли project pin іншу модель; startup header показує коли model з project або managed-settings pin | 2.1.117 |
| Login token refresh fix | Виправлено смерть Plain-CLI OAuth сесій з "Please run /login" коли token expire mid-session — token тепер реактивно refresh на 401 | 2.1.117 |
| `/login` env token fix | Виправлено `/login` без ефекту при запуску з `CLAUDE_CODE_OAUTH_TOKEN` та expiry цього token | 2.1.117 |
| `NO_PROXY` Bun fix | Виправлено ігнорування `NO_PROXY` для remote API запитів під Bun | 2.1.117 |
| Rare key coalesced fix | Виправлено рідкісні хибні escape/return triggers коли key names приходять як coalesced text через повільні з'єднання | 2.1.117 |
| `WebFetch` hang fix | Виправлено зависання `WebFetch` на дуже великих HTML сторінках шляхом truncation input перед конвертацією | 2.1.117 |
| HTTP 204 crash fix | Виправлено краш коли proxy повертає HTTP 204 No Content — тепер чітка помилка замість `TypeError` | 2.1.117 |
| Prompt undo fix | Виправлено prompt-input undo (`Ctrl+_`) що нічого не робив одразу після набору | 2.1.117 |
| Idle render loop fix | Виправлено idle re-render loop при наявності background tasks, зменшуючи зростання пам'яті на Linux | 2.1.117 |
| SDK image content degrade | SDK image content blocks що не вдалося обробити більше не крашать сесію — degrade до text placeholder | 2.1.117 |
| RC archived on exit | Remote Control sessions тепер архівуються при виході Claude Code | 2.1.117 |
| RC subagent streaming | Remote Control sessions тепер стрімлять subagent транскрипти | 2.1.117 |
| Bedrock thinking disabled fix | Виправлено 400 помилку для Bedrock application-inference-profile запитів з Opus 4.7 та вимкненим thinking | 2.1.117 |
| Vim visual mode `v`/`V` | Vim visual mode (`v`) та visual-line mode (`V`) з selection, operators та візуальним feedback | 2.1.118 |
| `Ctrl+A`/`Ctrl+E` multiline | `Ctrl+A` та `Ctrl+E` тепер переходять на початок/кінець поточного логічного рядка в multiline input (readline behavior) | 2.1.118 |
| `Alt+K`/`Alt+X`/`Alt+^`/`Alt+_` freeze fix | Виправлено заморожування keyboard input при цих комбінаціях | 2.1.118 |
| `/color` RC sync | `/color` тепер синхронізує session accent color до claude.ai/code при підключеному Remote Control | 2.1.118 |
| Credential save crash fix | Виправлено краш збереження credential на Linux/Windows що пошкоджував `~/.claude/.credentials.json` | 2.1.118 |
| Unreadable text fix | Виправлено непридатний для читання текст в "new messages" scroll pill та `/plugin` badges | 2.1.118 |
| Plan auto mode label fix | Виправлено план acceptance dialog що пропонував "auto mode" замість "bypass permissions" при `--dangerously-skip-permissions` | 2.1.118 |
| Agent hook messages fix | Виправлено помилку "Messages are required for agent hooks" для hook типів інших ніж `Stop` або `SubagentStop` | 2.1.118 |
| Prompt hooks re-fire fix | Виправлено повторне спрацьовування `prompt` хуків на tool calls зроблених agent-hook verifier subagent | 2.1.118 |
| `/fork` disk write fix | Виправлено запис повної parent розмови на диск при кожному fork — тепер записує pointer та hydrates on read | 2.1.118 |
| Remote session local model fix | Виправлено перезапис локального `model` setting в `~/.claude/settings.json` при підключенні до remote session | 2.1.118 |
| Typeahead `/` path fix | Виправлено typeahead що показував "No commands match" при вставці файл шляхів що починаються з `/` | 2.1.118 |
| File watcher errors fix | Виправлено unhandled errors від file watcher на invalid paths або fd exhaustion | 2.1.118 |
| RC archived blip fix | Виправлено архівування Remote Control sessions на transient CCR initialization blips під час JWT refresh | 2.1.118 |
| Subagent `cwd` fix | Виправлено non-відновлення явного `cwd` при resuming subagents через `SendMessage` | 2.1.118 |
| Vim Esc INSERT queue fix | Esc в INSERT mode більше не підтягує чергове повідомлення назад в input; натисніть Esc ще раз для interrupt | 2.1.119 |
| Slash command suggestions highlight | Slash command suggestions тепер підсвічуують символи що збіглися з запитом | 2.1.119 |
| Slash command picker wrap | Slash command picker переносить довгі описи на другий рядок замість обрізання | 2.1.119 |
| `owner/repo#N` remote host | Shorthand links використовують хост з git remote замість github.com | 2.1.119 |
| List item number wrapping fix | Виправлено перенесення числа в кінці речення на окремий рядок в list items | 2.1.119 |
| Auto mode plan conflict fix | Виправлено auto mode що перезаписував plan mode з конфліктуючими інструкціями | 2.1.119 |
| Async PostToolUse empty entry fix | Async `PostToolUse` хуки без payload більше не пишуть пусті записи в транскрипт | 2.1.119 |
| Rewind overlay image fix | Rewind overlay більше не показує "(no prompt)" для повідомлень з image attachments | 2.1.119 |
| Skills re-execution fix | Виправлено повторне виконання skills викликаних до auto-compaction проти наступного повідомлення | 2.1.119 |
| `TaskList` sort fix | `TaskList` повертає задачі відсортовані по ID замість файлового порядку | 2.1.119 |
| `@`-file Tab completion fix | Виправлено заміну всього prompt при `@`-file Tab completion з абсолютним шляхом в slash-команді | 2.1.119 |
| `/plan`/`/plan open` fix | Виправлено `/plan` та `/plan open` що не діяли на існуючий план | 2.1.119 |
| `/export` model fix | `/export` тепер показує фактичну модель розмови замість дефолтної | 2.1.119 |
| Verbose persist fix | Виправлено скидання verbose output setting після рестарту | 2.1.119 |
| `/usage` progress bar fix | Виправлено перекриття progress bar з "Resets …" labels | 2.1.119 |
| `/reload-plugins`/`/doctor` disabled fix | Виправлено звіти про помилки для disabled плагінів | 2.1.119 |
| Agent worktree stale fix | Agent tool з `isolation: "worktree"` більше не повторно використовує застарілі worktrees | 2.1.119 |
| Disabled MCP "failed" fix | Disabled MCP сервери більше не показуються як "failed" в `/status` | 2.1.119 |
| Spurious rate limit hint fix | Виправлено хибні "GitHub API rate limit exceeded" підказки | 2.1.119 |
| PR worktree link fix | Виправлено неприв'язаний PR при роботі в git worktree | 2.1.119 |
| `/doctor` override warning fix | Виправлено попередження `/doctor` про overridden MCP entries | 2.1.119 |
| Subagent orphan spinner fix | Виправлено spinner що зависав при orphaned subagent notification | 2.1.119 |
| Fullscreen scroll snap fix | Виправлено відскок вгору при скролі в fullscreen mode щоразу коли tool завершується | 2.1.119 |
| Multi-line paste kitty fix | Виправлено втрату newlines в multi-line paste в терміналах з kitty keyboard protocol sequences в bracketed paste | 2.1.119 |
| `/skills` Enter key fix | Виправлено `/skills` Enter key що закривав діалог замість pre-fill `/<skill-name>` в prompt | 2.1.119 |
| `/agents` detail view fix | Виправлено `/agents` detail view що помилково маркував built-in tools недоступні субагентам як "Unrecognized" | 2.1.119 |
| Spinner tips hidden when available | Spinner tips що рекомендують desktop app або skills/agents приховані коли вони вже встановлені | 2.1.120 |
| PgUp/PgDn scroll hint | Показується підказка "use PgUp/PgDn to scroll" коли термінал надсилає arrow keys замість scroll events | 2.1.120 |
| Auto mode denial config link | Повідомлення відмови auto mode тепер містить посилання на документацію конфігурації | 2.1.120 |
| Auto-compact `auto` display | Auto-compact в auto mode тепер показує `auto` (lowercase, без token count) замість оманливого значення токенів | 2.1.120 |
| `/rewind` overlay `--resume` fix | Виправлено `/rewind` та інші інтерактивні overlays що не реагували на клавіатуру після запуску з `claude --resume` | 2.1.120 |
| Scrollback duplication non-fullscreen | Виправлено дублювання scrollback в non-fullscreen mode (resize, dialog dismiss, довгі сесії) | 2.1.120 |
| Long selection menus fullscreen fix | Довгі меню вибору що виходили за межі терміналу в fullscreen — фокусований option залишається на екрані при скролі | 2.1.120 |
| Write tool output collapse fix | Write tool output розгортається замість згортання при кліку "+N lines" в fullscreen | 2.1.120 |
| Slash command picker/highlight fix | Виправлено стрибання slash command picker при наборі та покращено highlight для contiguous substring matching в blue | 2.1.120 |
| `find` FD exhaustion fix | Виправлено вичерпання open file descriptors при `find` на великих directory trees, що призводило до host-wide crashes (macOS/Linux native builds) | 2.1.120 |
| Fullscreen typing scroll fix | Набір в prompt більше не скролить назад вниз після скролу вверх в fullscreen mode | 2.1.121 |
| Dialogs scrollable | Діалоги що перевищують термінал тепер скроляться (arrow keys, PgUp/PgDn, home/end, mouse wheel) в обох modes | 2.1.121 |
| Clickable wrapped URL fullscreen | Клік на будь-який рядок довгого URL що переноситься через рядки в fullscreen відкриває повний URL | 2.1.121 |
| `/terminal-setup` iTerm2 clipboard | `/terminal-setup` тепер вмикає iTerm2 "Applications in terminal may access clipboard" для `/copy` (включаючи з tmux) | 2.1.121 |
| Terminal tab title language | Заголовок термінальної таб-сесії тепер генерується в налаштованій `language` мові | 2.1.121 |
| Швидший startup після оновлення | Видалено Recent Activity panel з release-notes splash — швидший запуск після оновлення | 2.1.121 |
| LSP diagnostics expand on click | LSP diagnostic summaries тепер розгортаються при кліку/ctrl+o та показують expand hint | 2.1.121 |
| Unbounded memory growth images fix | Виправлено необмежене зростання пам'яті (multi-GB RSS) при обробці багатьох зображень в сесії | 2.1.121 |
| `/usage` memory leak fix | Виправлено витік пам'яті до ~2GB на машинах з великою історією транскриптів | 2.1.121 |
| Memory leak long-running tools | Виправлено витік пам'яті коли long-running tools не emit clear progress event | 2.1.121 |
| Bash tool deleted CWD fix | Bash tool більше не стає непридатним коли директорію Claude було запущено з видалено або перемещено mid-session | 2.1.121 |
| `--resume` crash startup external builds fix | Виправлено краш `--resume` при старті в external builds | 2.1.121 |
| `--resume` corrupted transcript line | Виправлено відмову `--resume` на великих сесіях коли рядок транскрипту пошкоджений при unclean shutdown — пошкоджений рядок пропускається | 2.1.121 |
| Scrollback duplication Ctrl+L fix | Виправлено дублювання scrollback при Ctrl+L або redraw в non-fullscreen mode на tmux, GNOME Terminal, Windows Terminal та Konsole | 2.1.121 |
| `/usage` stale OAuth token fix | Виправлено "/usage rate limited" після stale OAuth token — тепер refresh автоматично | 2.1.121 |
| `/usage` dialog clipping fix | Виправлено обрізання вмісту `/usage` dialog коли no-flicker mode вимкнено | 2.1.121 |
| `/focus` fullscreen renderer fix | `/focus` більше не показує "Unknown command" коли fullscreen renderer вимкнений — пояснює як увімкнути | 2.1.121 |
| Embedded grep/find/rg wrappers fix | Embedded grep/find/rg shell wrappers більше не падають коли running binary видалено mid-session — fallback до installed tools | 2.1.121 |
| Reduced FD usage `find` | Зменшено peak file descriptor usage під час `find` в Bash tool на великих directory trees | 2.1.121 |
| PowerShell як заміна Git Bash [Win] | Git for Windows (Git Bash) більше не потрібен — при відсутності Claude Code використовує PowerShell як shell tool | 2.1.120 |
| `/resume` PR URL paste | Вставка PR URL в `/resume` search box знаходить сесію що створила цей PR (GitHub, GitHub Enterprise, GitLab, Bitbucket) | 2.1.122 |
| `/branch` rewound timeline fix | Виправлено `/branch` що створював forks з помилкою "tool_use ids were found without tool_result blocks" коли source session містила entries з rewound timelines | 2.1.122 |
| `/model` Bedrock ARN effort fix | Виправлено відсутність Effort опції для Bedrock application inference profile ARNs в `/model`, та відсутність `output_config.effort` в цих ARNs | 2.1.122 |
| Vertex AI/Bedrock `output_config` fix | Виправлено помилку `invalid_request_error: output_config: Extra inputs are not permitted` на Vertex AI та Bedrock для session-title generation та інших structured-output запитів | 2.1.122 |
| Vertex AI `count_tokens` 400 fix | Виправлено 400 помилки Vertex AI `count_tokens` endpoint для користувачів за proxy gateways | 2.1.122 |
| `!exit` / `!quit` bash mode fix | Виправлено `!exit` / `!quit` в bash mode що завершував CLI замість виконання як shell command | 2.1.122 |
| Image resize 2576px fix | Виправлено зміну розміру зображень до 2576px замість правильних 2000px для новіших моделей | 2.1.122 |
| Blank messages stale preference fix | Виправлено порожні повідомлення помічника в деяких сесіях через застарілу view preference | 2.1.122 |
| `/model` gateway models | `/model` picker тепер показує моделі з gateway `/v1/models` endpoint коли `ANTHROPIC_BASE_URL` вказує на Anthropic-compatible gateway | 2.1.126 |
| Auto mode spinner red on stall | Спіннер auto mode тепер червоніє коли permission check затримується, замість вигляду як tool працює | 2.1.126 |
| Read tool malware reminder removed | Прибрано per-file malware-assessment reminder в Read tool що міг викликати spurious refusals на старих моделях | 2.1.126 |
| Oversized image paste fix | Виправлено поломку сесії при вставці зображення >2000px — зображення тепер downscale при вставці, зайві з історії автоматично видаляються з повторною спробою | 2.1.126 |
| API retry countdown fix | Виправлено застрягання API retry countdown на "0s" замість зворотного відліку між спробами | 2.1.126 |
| Stream idle timeout Mac wake fix | Виправлено "Stream idle timeout" після пробудження Mac зі сну mid-request | 2.1.126 |
| Empty output after thinking fix | Виправлено зависання де модель завершує thinking але не показує output після серії пустих turns | 2.1.126 |
| Plan-mode tools `--channels` fix | Виправлено недоступність plan-mode tools в інтерактивних сесіях запущених з `--channels` | 2.1.126 |
| File-modified reminders bounded | Обмежено загальний розмір file-modified reminders коли linter змінює багато файлів одночасно | 2.1.126 |
| `/color` без аргументів | Випадковий колір сесії при bare `/color` (без аргументів) | 2.1.128 |
| `/model` picker оновлення | Згорнуто дублікати Opus 4.7; поточний Opus показується як "Opus" замість "Opus 4.7" | 2.1.128 |
| `/mcp` tool count | `/mcp` показує кількість інструментів для підключених серверів та позначає сервери з 0 tools | 2.1.128 |
| `workspace` зарезервоване ім'я MCP | `workspace` тепер зарезервоване ім'я MCP сервера — існуючі сервери з цим іменем пропускаються з попередженням | 2.1.128 |
| MCP reconnect summary | Перепідключення MCP серверів більше не flood-ить розмову повним списком tool names — re-announced tools підсумовуються по server prefix | 2.1.128 |
| EnterWorktree local HEAD | `EnterWorktree` тепер створює гілку від local HEAD як задокументовано, замість `origin/<default-branch>` — unpushed коміти більше не втрачаються | 2.1.128 |
| OTEL env var scrub | Subprocesses (Bash, hooks, MCP, LSP) більше не успадковують `OTEL_*` змінні середовища | 2.1.128 |
| Parallel shell tool calls fix | Failed read-only shell command (grep, git diff, ls) більше не скасовує sibling calls | 2.1.128 |
| Banner "with X effort" fix | Виправлено показ "with X effort" на моделях що не підтримують effort | 2.1.128 |
| `/fast` 3P provider fix | `/fast` на third-party providers більше не відображав fuzzy-match з неспорідненим skill замість повідомлення "not available" | 2.1.128 |
| Vim `Space` NORMAL mode | `Space` в vim NORMAL mode тепер рухає курсор вправо, як у стандартному vi/vim | 2.1.128 |
| Terminal progress indicator fix | Прогрес-індикатор (OSC 9;4) більше не вимикається між tool calls — залишається видимим протягом всього turn | 2.1.128 |
| `/rename` resumed sessions fix | `/rename` без аргументів більше не ламається на відновлених сесіях де останній entry — compact boundary | 2.1.128 |
| Stale "remote-control is active" fix | Застарілі рядки статусу "remote-control is active" з попередніх сесій більше не з'являються після `--resume`/`--continue` | 2.1.128 |
| Sub-agent progress summaries fix | Прогрес-підсумки sub-agent-ів більше не missing prompt cache (~3× `cache_creation` reduction) | 2.1.128 |
| Sub-agent summaries idle fix | Підсумки sub-agent-ів що стрілять повторно поки транскрипт статичний — cap worst-case token cost на idle sub-agents | 2.1.128 |
| Long URLs fullscreen clickable fix | Довгі URL в fullscreen mode тепер клікабельні на кожному перенесеному рядку | 2.1.128 |
| Markdown links fallback rendering | Markdown links на терміналах без OSC 8 hyperlink підтримки рендеряться як `label (url)` замість лише URL | 2.1.128 |
| Fenced code blocks clipboard fix | Форматування fenced code blocks всередині list items більше не додає leading whitespace при копіюванні | 2.1.128 |
| Drag-and-drop image upload fix | Виправлено зависання "Pasting text…" коли image read не вдається при drag-and-drop | 2.1.128 |
| Focus mode dimming fix | Виправлено краткочасне затемнення попередньої відповіді при відправці нового промпту в focus mode | 2.1.128 |
| `/config` tab navigation fix | Tab навігація в `/config` більше не втрачає фокус — tab header залишається сфокусованим | 2.1.128 |
| Stray "4;0;" notification fix | Виправлено випадкове desktop сповіщення "4;0;" при кожному `/exit` в Kitty та інших терміналах | 2.1.128 |
| 1M-context models false "Prompt too long" fix | Сесії на 1M-контекст моделях з меншим autocompact window більше не хибно блокуються перед досягненням API ліміту | 2.1.128 |
| Auto mode classifier error hint | Коли classifier не може оцінити action, помилка тепер включає підказку (retry, `/compact`, або `--debug`) | 2.1.128 |
| Piped stdin >10MB crash fix | Виправлено crash loop при piping дуже великого input (>10 MB) до `claude -p` через stdin | 2.1.128 |
| 3rd-party spinner tips fix | Third-party deployments (Bedrock, Vertex, Foundry, `ANTHROPIC_BASE_URL` gateway) більше не бачать spinner tips з посиланнями на first-party Anthropic surfaces | 2.1.129 |
| Ctrl+R history default | Ctrl+R history picker тепер шукає по всіх промптах всіх проектів за замовчуванням; `Ctrl+S` для звуження до поточного проекту/сесії | 2.1.129 |
| `/clear` terminal title fix | `/clear` тепер скидає заголовок термінальної таб-сесії | 2.1.129 |
| Session title chip dialog fix | Title chip від `/rename` більше не зникає поки активний permission або інший dialog | 2.1.129 |
| Agent panel hidden fix | Agent panel під prompt більше не ховається коли subagents працюють (регресія з 2.1.122) | 2.1.129 |
| External-editor blanking fix | Ctrl+G external-editor handoff більше не очищає історію розмови над prompt | 2.1.129 |
| `/context` grid dump fix | `/context` більше не виводить ASCII grid в розмову (~1.6k tokens за виклик) | 2.1.129 |
| `/agents` arrow-key navigation fix | Highlighted agent в `/agents` Library list залишається видимим при скролі списка що перевищує viewport | 2.1.129 |
| `/branch` session id fix | `/branch` success message тепер включає session id нової гілки для `/resume` | 2.1.129 |
| Bold headers emoji fix | Bold headers з keycap/ZWJ/skin-tone emoji більше не втрачають trailing characters в fullscreen mode | 2.1.129 |
| Policy refusal API Request ID | Повідомлення policy refusal тепер включає API Request ID для полегшеного дебагу | 2.1.129 |
| API 400 error message fix | API помилки з нерозпізнаними 400 status codes показують підлеглу помилку замість сирого JSON | 2.1.129 |
| 1h prompt cache TTL fix | Виправлено мовчазне пониження 1-годинного prompt cache TTL до 5 хвилин | 2.1.129 |
| Cache-miss warning after `/clear` fix | Хибне попередження cache-miss після `/clear` або compaction при зміні `/effort` або `/model` виправлено | 2.1.129 |
| OAuth refresh race fix | Виправлено race умову OAuth refresh після пробудження від сну що могла розлогінити всі активні сесії | 2.1.129 |
| Server-managed settings policy fix | Server-managed settings policy тепер застосовується для enterprise/team користувачів чий stored OAuth credentials не мав `user:inference` scope | 2.1.129 |
| Slash command autocomplete scaling | Slash command autocomplete popup тепер масштабується з висотою терміналу замість обмеження ~3–5 команд | 2.1.129 |
| Statusline `context_window` fix | Statusline `context_window` token counts тепер відображають поточне використання контексту замість кумулятивних підсумків сесії | 2.1.129 |
| `CLAUDE_CODE_SESSION_ID` env var | Змінна середовища `CLAUDE_CODE_SESSION_ID` доступна в subprocesses Bash tool, відповідає `session_id` в hooks | 2.1.132 |
| `CLAUDE_CODE_DISABLE_ALTERNATE_SCREEN` | Опт-out від fullscreen alternate-screen renderer — розмова залишається в нативному scrollback терміналу | 2.1.132 |
| Image paste "Pasting…" footer | Footer підказка "Pasting…" поки Ctrl+V image paste читається з clipboard | 2.1.132 |
| SIGINT graceful shutdown | Зовнішній SIGINT (IDE stop button, `kill -INT`) тепер виконує graceful shutdown — відновлює термінальні режими та друкує `--resume` підказку | 2.1.132 |
| Fullscreen blank after sleep fix | Fullscreen mode більше не показує blank screen після laptop sleep/wake або Ctrl+Z/`fg` | 2.1.132 |
| Cursor mid-grapheme fix | Курсор більше не_landить mid-grapheme при Ctrl+E/A/K/U/arrow keys з Indic conjunct або ZWJ emoji | 2.1.132 |
| Vim NFD accented chars fix | Vim operators більше не пошкоджують текст з decomposed (NFD) акцентованими символами | 2.1.132 |
| Paste `/` fix | Вставка тексту що починається з `/` більше не мовчазно поглинається або trigerra unknown-command | 2.1.132 |
| Paste escape sequences fix | Вставка більше не додає stray escape sequences коли focus events або mouse-tracking interleave з bracketed paste | 2.1.132 |
| `/effort` picker env var fix | `/effort` picker тепер відображає `CLAUDE_CODE_EFFORT_LEVEL` env var override | 2.1.132 |
| `/status` wrong default model fix | `/status` більше не показує неправильну дефолтну модель для деяких користувачів | 2.1.132 |
| Alt+T macOS fix | Alt+T (thinking toggle) тепер працює на macOS терміналах без "Option as Meta" (iTerm2, Terminal.app defaults) | 2.1.132 |
| Dead keyboard input Windows fix | Виправлено dead keyboard input на Windows при повторному відкритті фоновой сесії з `claude agents` | 2.1.132 |
| `/tui fullscreen` banner update | Оновлено `/tui fullscreen` startup banner з описом додаткових переваг renderer (менша пам'ять, mouse support, auto-copy on select) | 2.1.132 |
| Visual consistency dialogs | Покращено візуальну узгодженість в slash command dialogs, `/login`, `/upgrade`, `/extra-usage` dialog spacing | 2.1.132 |
| Uncaught exception terminal close fix | Виправлено uncaught exception при закритті терміналу або SSH disconnect mid-session під native build | 2.1.132 |
| `--resume` emoji crash fix | Виправлено `--resume` з помилкою `no low surrogate in string` коли tool error truncation розділив emoji; pre-corrupted sessions sanitize on load | 2.1.132 |
| `--permission-mode` resume fix | `--permission-mode` flag більше не ігнорується при resume plan-mode session з `-p --continue`/`--resume` | 2.1.132 |
| Mouse wheel Cursor/VS Code fix | Виправлено надто швидке mouse wheel scrolling в Cursor та VS Code 1.92–1.104 через upstream xterm.js bug | 2.1.132 |
| Scroll-wheel JetBrains fix | Виправлено scroll-wheel handling в JetBrains IDE 2025.2 terminals (spurious arrow keys, wrong-direction events) | 2.1.132 |
| `/usage` Ctrl+S Linux fix | Виправлено зависання `/usage` Ctrl+S при копіюванні stats screenshot в clipboard на Linux/X11 | 2.1.132 |
| `/terminal-setup` Win Terminal fix | Виправлено суперечливе повідомлення `/terminal-setup` в Windows Terminal — Shift+Enter нативно підтримується | 2.1.132 |
| Unbounded memory MCP server fix | Виправлено необмежене зростання пам'яті (10GB+ RSS) коли stdio MCP server пише non-protocol data в stdout | 2.1.132 |
| Uninitialized native build exit | Виправлено падіння нативного build при закритті терміналу або SSH disconnect mid-session | 2.1.132 |
| Improved focus mode behavior | Покращено поведінку focus mode | 2.1.133 |
| Memory usage warm-spare workers | Звільнення warm-spare background workers під memory pressure | 2.1.133 |
| Parallel sessions 401 fix | Виправлено зупинку всіх паралельних сесій з 401 після refresh-token race що стирав shared credentials | 2.1.133 |
| ECOMPROMISED file lock fix | Виправлено unhandled rejection (`ECOMPROMISED`) коли history або session-log file lock компрометується clock skew або повільним диском | 2.1.133 |
| Esc compaction notification fix | Виправлено spurious "Error compacting conversation" notification при натисканні Esc під час compaction | 2.1.133 |
| `/effort` cross-session fix | Виправлено `/effort` в одній сесії що неочікувано змінював effort level інших concurrent сесій, та related issue де IDE effort change міг бути silently dropped | 2.1.133 |
| Login loop concurrent credential fix | Виправлено рідкісний login loop де concurrent credential write перезаписував freshly-rotated OAuth token | 2.1.136 |
| API 400 redacted thinking fix | Виправлено API помилку (400) коли extended thinking emit redacted thinking block після tool call | 2.1.136 |
| Visual consistency slash dialogs | Покращено візуальну узгодженість slash command dialogs: стандартизовані footer hints, dialog spacing, arrow-key styling; dialog frame з'являється одразу | 2.1.136 |
| Colors bash/markdown fix | Виправлено кольори що з'являлися на неправильних позиціях в bash output та markdown code blocks | 2.1.136 |
| ReasonML diffs "undefined" fix | Виправлено ReasonML diffs що рендерили пошкоджені "undefined" text artifacts на word-diff boundaries | 2.1.136 |
| `@` file picker mid-session fix | Виправлено `@` file picker що не знаходив файли створені mid-session в small non-git директоріях | 2.1.136 |
| `@` file picker >100 entries fix | Виправлено `@`-mention file picker що не знаходив файли в директоріях з більш ніж 100 entries | 2.1.136 |
| Failed tool calls fullscreen expand fix | Виправлено failed tool calls що не були click-to-expand в fullscreen mode коли output truncated | 2.1.136 |
| Welcome banner CJK ellipsis fix | Виправлено welcome banner ellipsis що спричиняв column overflow на CJK терміналах | 2.1.136 |
| Renderer crash collapsibility fix | Виправлено краш renderer коли tool's collapsibility classification змінюється mid-session | 2.1.136 |
| Trailing whitespace copied output fix | Виправлено trailing whitespace в copied terminal output під час streaming | 2.1.136 |
| Tool error truncation negative count fix | Виправлено truncation marker що показував negative count для surrogate-pair strings | 2.1.136 |
| Stray leading space wrapped text fix | Виправлено stray leading space на другому рядку wrapped text на column boundary | 2.1.136 |
| "Jump to bottom" CJK artifacts fix | Виправлено "Jump to bottom" overlay що залишав color artifacts на CJK characters в fullscreen mode | 2.1.136 |
| Wide markdown tables stale render fix | Виправлено wide markdown tables що залишали stale bordered render в terminal scrollback під час streaming | 2.1.136 |
| Pasted text auto-truncation fix | Виправлено pasted text що мовчазно відкидався коли long prompt з pasted-text placeholder автообрізався | 2.1.136 |
| Auto-follow re-engaging fix | Виправлено scrolling to bottom що re-engage-вав auto-follow з `autoScrollEnabled: false` | 2.1.136 |
| Prompt suggestions auto-submit fix | Виправлено prompt suggestions що auto-submit-валися Enter на empty input замість вимоги Tab або arrow для accept | 2.1.136 |
| Agent view (Research Preview) | Єдиний список всіх Claude Code сесій — running, blocked on you, або done. Запуск через `claude agents` | 2.1.139 |
| `/goal` command | Встановлення completion condition — Claude продовжує працювати across turns поки goal не досягнуто. Працює в interactive, `-p`, та Remote Control. Показує live elapsed/turns/tokens overlay panel | 2.1.139 |
| `/scroll-speed` command | Налаштування швидкості mouse wheel scroll з live preview | 2.1.139 |
| Compaction preserves sensitive instructions | Compaction prompt тепер просить модель зберегти sensitive user instructions | 2.1.139 |
| `/context all` per-skill token estimates | Токен-оцінки per-skill тепер враховують model's tokenizer та показують rounded values | 2.1.139 |
| `/context` plugin name | `/context` тепер показує ім'я плагіна що надає plugin-sourced skill | 2.1.139 |
| RC/schedule/connectors disabled with API key | Remote Control, `/schedule`, claude.ai MCP connectors та notification preferences вимкнені коли `ANTHROPIC_API_KEY` / `apiKeyHelper` / `ANTHROPIC_AUTH_TOKEN` встановлено, навіть при наявності Claude.ai login | 2.1.139 |
| `forceRemoteSettingsRefresh` deadlock fix | Виправлено deadlock де expired credentials + `forceRemoteSettingsRefresh` блокували `claude auth login`/`logout`/`status` без можливості recovery | 2.1.139 |
| `/model` picker Default overrides fix | Виправлено `/model` picker "Default" row що не reflecting `ANTHROPIC_DEFAULT_OPUS_MODEL`/`ANTHROPIC_DEFAULT_SONNET_MODEL` overrides | 2.1.139 |
| Stream idle timeout spurious fix | Виправлено spurious "stream idle timeout" 5 хвилин після завершення response — watchdog timer не clearing на stream cancellation | 2.1.139 |
| Typing cursor dialogs fix | Виправлено typing cursor blinking на tab names, list pointers та select rows в dialogs | 2.1.139 |
| Bash-mode up-arrow history fix | Виправлено Bash-mode up-arrow history що repeating first entry та clobbering in-progress draft | 2.1.139 |
| Multiple images paste/drop fix | Виправлено вставку або drop кількох зображень — вставлялося лише останнє | 2.1.139 |
| Hyperlinks dark themes fix | Виправлено hyperlinks з unreadable dark navy на dark themes — тепер adapt до active theme | 2.1.139 |
| Model picker redundant "Current model" 3P fix | Виправлено model picker що показував redundant "Current model" row для third-party users чи model set на `opus` alias | 2.1.139 |
| Legacy Opus PAYG 3P fix | Виправлено legacy Opus picker entry на PAYG 3P providers що resolving до тієї ж моделі що і default entry | 2.1.139 |
| Mouse wheel scrolling Cursor/VS Code fix | Виправлено mouse wheel scrolling speed в Cursor та VS Code 1.92–1.104; trackpad тепер scrolls steady rate, mouse wheel ~3 lines per notch | 2.1.139 |
| Two-file diff snippets truncation fix | Виправлено two-file diff snippets що over-reporting кількість truncated lines на один | 2.1.139 |
| Border-embedded text CJK/emoji fix | Виправлено overflow border-embedded text на CJK/emoji через visual cell width miscalculation | 2.1.139 |
| Fuzzy-match emoji/astral fix | Виправлено fuzzy-match highlighting що splitting emoji та astral-plane characters mid-pair | 2.1.139 |
| ProgressBar fractional cell fix | Виправлено ProgressBar що rendering full block для almost-full fractional cell | 2.1.139 |
| Task polling resurrected fix | Виправлено task polling та `fs.watch` що resurrected коли останній subscriber leave-вав під час in-flight fetch | 2.1.139 |
| Insights Time-of-Day skewing fix | Виправлено Insights Time-of-Day chart skewing коли session має unparseable timestamp | 2.1.139 |
| Agent color palette update | Оновлено кольорову палітру агентів | 2.1.140 |
| `/goal` silent hang fix | Виправлено `/goal` що silently hanging коли `disableAllHooks` або `allowManagedHooksOnly` встановлено — тепер показує clear message замість indicator що never resolves | 2.1.140 |
| `/loop` redundant wakeups fix | Виправлено `/loop` scheduling redundant wakeups для poll за background tasks що вже notify on completion | 2.1.140 |
| Windows missing executable event-loop stall fix [Win] | Виправлено recurring event-loop stall на Windows коли missing executable (напр. `gh`) triggering synchronous `where.exe` re-spawns на кожному check | 2.1.140 |
| `Read` tool offset validation fix | Виправлено `Read` tool calls що failing validation коли `offset` передається як whitespace-padded або `+`-prefixed string | 2.1.140 |
| Terminal cursor focus loss fix | Виправлено native terminal cursor що не staying на input caret коли terminal втрачає focus | 2.1.140 |
| `/feedback` recent sessions | `/feedback` тепер може включати recent sessions (останні 24 години або 7 днів) для issues що spanning більше за поточну сесію | 2.1.141 |
| Rewind "Summarize up to here" | Rewind menu: додано "Summarize up to here" для compress раннього контексту з збереженням recent turns | 2.1.141 |
| Auto mode `permissions.ask` explanation | Auto mode permission dialog тепер explains коли `permissions.ask` rule caused prompt | 2.1.141 |
| IDE diff view restored on permission prompts | Відновлено опцію "view diff in your IDE" на file-edit permission prompts коли IDE підключено | 2.1.141 |
| Background agents preserve permission mode | Background agents запущені через `/bg` або `←←` тепер preserve поточний permission mode замість revert to default | 2.1.141 |
| Spinner amber 10s | Покращено spinner feedback під час довгого thinking — spinner тепер warm to amber after 10s для signal що Claude працює | 2.1.141 |
| `/model` autocompact cross-session fix | Виправлено `/model` в одній сесії що silently changing autocompact threshold в інших concurrent sessions | 2.1.141 |
| Permission mode switch auto-dismiss fix | Виправлено переключення permission mode поки tool-permission prompt відкритий — новий setting тепер auto-dismiss prompt коли permit tool | 2.1.141 |
| Enter permission dialog prompt submit fix | Виправлено Enter поки permission/dialog prompt відкритий що also submitting text в input box | 2.1.141 |
| Markdown tables cell wrapping fix | Виправлено markdown tables з cell wrapping що falling back до vertical key-value layout замість bordered grid (регресія з 2.1.136) | 2.1.141 |
| Cancelled prompts Up-arrow history fix | Виправлено cancelled prompts що removed from Up-arrow history коли auto-restored в input box, та Ctrl+C/Esc cancelled prompts dropped | 2.1.141 |
| Ctrl+C vim INSERT/VISUAL interrupt fix | Виправлено Ctrl+C що не interrupting running turn поки в vim INSERT/VISUAL mode | 2.1.141 |
| Prompt suggestions output style fix | Виправлено prompt suggestions що silently disabled коли output style configured | 2.1.141 |
| AskUserQuestion last line hiding fix | Виправлено AskUserQuestion popup що hiding last line of preceding chat content | 2.1.141 |
| Web Search "Did 0 searches" fix | Виправлено Web Search status що showing "Did 0 searches" коли searches returned errors | 2.1.141 |
| Web Search географічне обмеження | WebSearch працює лише в США — за межами США повертає помилки API або "Did 0 searches". Використовувати Perplexity (pplx), crawl4ai або web-reader як альтернативи | — |
| Multi-line statusline corruption fix | Виправлено multi-line statusline output що dropping або corrupting rows коли line exceeds terminal width | 2.1.141 |
| Light-ansi theme diff context fix | Виправлено light-ansi theme що використовував invisible white для diff context lines на light backgrounds — тепер black | 2.1.141 |
| Error overlay minified source fix | Виправлено error overlay що dumping minified bundle source що hid original error message | 2.1.141 |
| Feedback survey Enter submit fix | Виправлено Enter після typing feedback survey rating digit що submitting як chat message замість rating | 2.1.141 |
| `x` on subagent types into prompt fix | Виправлено `x` на selected subagent в agent panel що typing into prompt замість stopping agent | 2.1.141 |
| Session title plugin monitor fix | Виправлено session title що derived from plugin monitor notifications перед first user prompt | 2.1.141 |
| Welcome banner third-party provider name | Виправлено welcome banner що showing "API Usage Billing" на Bedrock/Vertex/Foundry/3P — тепер shows provider name | 2.1.141 |
| `/feedback` redaction invalid JSON fix | Виправлено redaction в `/feedback` bundles що producing invalid JSON для quoted values як session IDs | 2.1.141 |
| Early analytics events dropped fix | Виправлено early analytics events що silently dropped коли fired before logger initialization | 2.1.141 |
| Background sessions pre-existing worktrees fix | Виправлено background sessions що не розпізнавали pre-existing git worktrees, блокуючи Edit поки EnterWorktree відмовлявся створювати дублікат | 2.1.142 |
| Background sessions macOS sleep/wake fix | Виправлено зникнення background sessions та помилку daemon reconnect після macOS sleep/wake — daemon тепер виявляє стрибки годинника замість обробки як idle time | 2.1.142 |
| Background agents Chrome extension fix | Виправлено crash-loop background agents коли Claude-in-Chrome extension підключено без shared tab | 2.1.142 |
| Session titles URL fix | Виправлено отримання session titles з URL коли перше повідомлення є посиланням | 2.1.142 |
| Redundant `set_model` requests fix | Виправлено надлишкові `set_model` запити від remote клієнтів що додавали дублікати `/model` breadcrumbs в транскрипт | 2.1.142 |
| Reactive compaction improvement | Покращено reactive compaction: перша спроба summarize тепер починає з overflow size оригінального запиту, уникаючи марної near-full-context спроби | 2.1.142 |
| Stale `/model` suggestion removed | Видалено застарілу підказку `/model claude-sonnet-4-20250514` з повідомлень відмови Usage Policy | 2.1.142 |
| Background sessions preserve model/effort after idle | Background sessions тепер зберігають model та effort level після пробудження від idle | 2.1.143 |
| Shift+Tab attached agent auto mode | Shift+Tab в attached agent sessions тепер включає auto mode в цикл | 2.1.143 |
| Stop hooks block loop fix | Stop hooks що блокують повторно більше не зациклюються нескінченно — turn завершується з warning після 8 послідовних блоків (override через `CLAUDE_CODE_STOP_HOOK_BLOCK_CAP`) | 2.1.143 |
| `/bg` without prompt fix | `/bg` без промпту більше не відправляє "continue" до fork-сесії — fork тепер чекає на input | 2.1.143 |
| `/bg` preserves configuration flags | `/bg` тепер зберігає `--mcp-config`, `--settings`, `--add-dir`, `--plugin-dir`, `--strict-mcp-config` через respawn | 2.1.143 |
| `/bg`/←-detach preserve `--fallback-model` | Backgrounded workers тепер degrade до fallback model при overload замість hard-failure | 2.1.143 |
| `/bg`/←-detach preserve `--allow-dangerously-skip-permissions` | Forked worker зберігає bypass-permissions в Shift+Tab cycle | 2.1.143 |
| Background sessions honor `permissions.defaultMode` | Background sessions запущені з `claude agents` тепер поважають `permissions.defaultMode` з settings.json (раніше override на auto mode) | 2.1.143 |
| Background daemon spawn binary fallback | Background daemon spawn тепер відступає до running binary коли `~/.local/bin/claude` launcher відсутній або non-executable | 2.1.143 |
| Elapsed duration subagent notifications | Background subagent completion notifications тепер показують elapsed duration (напр. "Agent completed · 3h 2m 5s") | 2.1.144 |
| Startup hanging unreachable API fix | Виправлено зависання startup до 75s коли `api.anthropic.com` недоступний (captive portal, firewall, VPN) — side-channel API calls тепер timeout 15s | 2.1.144 |
| Terminal resize garbled output fix | Виправлено пошкоджений термінальний вивід після пропущеного window-resize event (напр. перетягування VS Code split-pane) — self-heals на наступному frame замість Ctrl+L | 2.1.144 |
| Progressive terminal display corruption fix | Виправлено progressive corruption (stale/garbled glyphs) в дуже довгих сесіях що clearing лише при terminal resize або restart | 2.1.144 |
| VS Code spinner animation color reduction | Зменшено кількість кольорів spinner animation для зменшення rendering glitches в VS Code | 2.1.144 |
| macOS background sessions Full Disk Access crash fix | Виправлено crash macOS background sessions з "exit 1 before init" коли project під Full Disk Access-захищеною папкою (регресія з 2.1.143) | 2.1.144 |
| Unreadable image extension fallback | Файл з image extension що не відповідає вмісту (напр. HTML збережений як .png) тепер відступає до text замість unrecoverable conversation | 2.1.144 |
| `head`/`tail` read-before-edit | `head`/`tail` file views тепер satisfy read-before-edit check | 2.1.144 |
| `egrep`/`fgrep`/`git grep`/`git diff` exit 1 fix | "No matches" result (exit code 1) від `egrep`, `fgrep`, `git grep` або `git diff` більше не reported як command failure | 2.1.144 |
| AskUserQuestion Escape notes field fix | Натискання Escape в AskUserQuestion notes field більше не abortує turn — повертається до answer selection | 2.1.144 |
| Model selection IDE/applyFlagSettings fix | Виправлено model selection що не застосовувався при зміні через IDE model picker або `applyFlagSettings` після startup | 2.1.144 |
| Resumed sessions model persistence | Відновлені сесії тепер зберігають модель яку використовували замість підхоплення `/model` choice іншої сесії | 2.1.144 |
| Pre-response stream stall recovery | Покращено відновлення від рідкісних pre-response stream stalls — тепер retries streaming once замість fallback до повільнішого non-streaming request | 2.1.144 |
| SDK/headless MCP startup overlap | Pre-wait тепер перекривається з MCP startup замість блокування перед першим turn (до 2s швидше з повільними MCP серверами) | 2.1.144 |
| Post-survey follow-up hint | Після survey response тепер з'являється follow-up hint з context-aware copy для детальнішого feedback через `/feedback` | 2.1.144 |
| Permission-prompt bypass bare variable assignment fix | Виправлено bypass permission-prompt де bare variable assignments до non-allowlisted env vars в Bash auto-approved | 2.1.145 |
| Spinner/elapsed-time freeze after resize/refocus fix | Виправлено spinner та elapsed-time display що freezing до keypress після terminal resize або refocus | 2.1.145 |
| Slash/@-mention mouse hover/click fullscreen | Slash command та @-mention suggestion list тепер підтримує mouse hover та click в fullscreen mode | 2.1.145 |
| Voice push-to-talk agent view fix | Виправлено voice push-to-talk що не працював в agent view reply pane | 2.1.145 |
| Task lists random order fix | Виправлено task lists що rendering в random order коли кілька tasks створюються одночасно | 2.1.145 |
| PR badge footer not updating fix | Виправлено PR badge в footer що не оновлювався негайно після `gh pr create` та інших PR-state-changing commands | 2.1.145 |
| Agent Teams non-ASCII names header encoding fix | Виправлено Agent Teams teammates з non-ASCII names що failing кожен API call через invalid header encoding | 2.1.145 |
| Read tool truncated "PARTIAL view" | Read tool тепер повертає truncated first page з "PARTIAL view" notice замість hard error коли whole-file read перевищує token limit | 2.1.145 |
| Background agents worker-stall detection fix | Виправлено false-positive worker-stall detection storm у background agents після host sleep або macOS App Nap | 2.1.143 |
| 5xx error messages gateway/provider fix | 5xx помилки тепер показують configured gateway або cloud provider замість status.claude.com | 2.1.143 |
| Corrupt `.credentials.json` scopes fix | Виправлено corrupt `.credentials.json` з non-array `scopes` що hang-ав CLI на startup або silently abort-ав OAuth token refresh | 2.1.143 |
| Background sessions macOS protected dirs fix | Виправлено background-job sessions на macOS що отримували "Operation not permitted" при читанні файлів під `~/Documents`, `~/Desktop` або `~/Downloads` навіть з Full Disk Access | 2.1.143 |
| Worktree cleanup no `rm -rf` fallback | Worktree cleanup більше не відступає до `rm -rf` коли `git worktree remove` fails — запобігає втраті gitignored або in-progress файлів | 2.1.143 |
| Auto-updater retries transient network failures | Покращений auto-updater: retries transient помилки, specific error categories та OS error codes при невдачі, показує current version | 2.1.147 |
| Diff rendering performance large file edits | Покращена продуктивність diff rendering для великих файлових редагувань | 2.1.147 |
| Prompt history no consecutive duplicates | Prompt history більше не записує послідовні дублікати — arrow-up recall та повторна відправка не додає ще один запис | 2.1.147 |
| `&` in `!` command `&amp;` fix | Виправлено `&` в `!` command output що відображався як `&amp;`, що ламало copy-paste URL (напр. `gcloud auth login`) на headless machines | 2.1.147 |
| Unknown slash commands headless/SDK error | Невідомі slash commands в headless/SDK mode тепер показують помилку замість мовчазного ігнорування | 2.1.147 |
| `/help` tab header and single command per page fix | Виправлено `/help` що показував зламаний tab header та лише одну команду на сторінці на малих терміналах поза fullscreen mode | 2.1.147 |
| Shell snapshot underscore user functions fix | Виправлено shell snapshot що dropping user functions з іменами що починаються з одного underscore, ламаючи aliases що посилаються на них | 2.1.147 |
| PowerShell tool default formatter output fix | Виправлено PowerShell tool що dropping output для команд що покладаються на default formatter | 2.1.147 |
| `/effort` slider wrong level fix | Виправлено `/effort` що відкривався зі слайдером на неправильному рівні — тепер починає на поточному рівні | 2.1.147 |
| `/background` skill/slash-command-only sessions fix | Виправлено `/background` що відмовлявся від сесій де єдиним input була skill або кастомна slash команда | 2.1.147 |
| Auto mode `AskUserQuestion` suppression fix | Виправлено auto mode що suppressing `AskUserQuestion` коли користувач або skill явно на нього покладаються — auto-mode classifier тепер бачить відповіді користувача як intent signal | 2.1.147 |
| `/theme` Esc not responding fix | Виправлено `/theme` "New custom theme" та color editor dialogs що не реагували на Esc | 2.1.147 |
| Pasted text `[Pasted text #N]` placeholder fix | Виправлено pasted text що доставлявся агентам як непридатний `[Pasted text #N]` placeholder замість фактичного контенту | 2.1.147 |
| Backgrounded sessions re-prompting permissions fix | Виправлено backgrounded sessions що повторно запитували tool permissions вже надані з "don't ask again" | 2.1.147 |
| GNOME Terminal right-click/middle-click paste fix | Виправлено вставку правим та середнім кліком в GNOME Terminal | 2.1.147 |
| Slash commands tab/newline unknown command fix | Виправлено slash commands з tab або newline що трактуються як unknown command | 2.1.147 |
| Spacing/layout menus fix | Виправлено кілька spacing та layout проблем в `/plugin`, `/status`, `/mobile`, `/sandbox`, `/permissions` menus | 2.1.147 |
| Stripped images re-read absent media fix | Виправлено stripped images що prompting модель повторно читати media що більше не присутній | 2.1.147 |
| Bash tool exit code 127 regression fix | Виправлено Bash tool що повертав exit code 127 на кожній команді для деяких користувачів (регресія з 2.1.147) | 2.1.148 |
| `/usage` per-category breakdown | `/usage` тепер показує per-category розбивку що використовує ліміти — skills, subagents, plugins, та per-MCP-server cost | 2.1.149 |
| GFM task list checkboxes | Markdown output тепер рендерить GFM task list checkboxes (`- [ ] todo` / `- [x] done`) замість звичайних bullets | 2.1.149 |
| Thinking spinner amber across tool calls fix | Виправлено thinking spinner що залишався amber між tool calls та на fresh thinking bursts | 2.1.149 |
| Status bar baseline effort fix | Виправлено status bar що показував baseline `/effort` setting замість effort level застосованого через skill/agent `effort:` frontmatter | 2.1.149 |
| Ctrl+O transcript view freeze fix | Виправлено Ctrl+O transcript view що freezing на момент відкриття замість tailing нових повідомлень | 2.1.149 |
| Prompt-history edit losing fix | Виправлено редагування recalled prompt-history entry що втрачалось при навігації вгору/вниз arrow keys | 2.1.149 |
| Up-arrow history race fix | Виправлено race де щойно відправлений промпт міг з'явитись двічі в up-arrow history | 2.1.149 |
| "Jump to bottom" pill fullscreen dismiss fix | Виправлено tap на "Jump to bottom" pill в fullscreen mode що не dismiss-ав негайно | 2.1.149 |
| Collapsed Bash output wrong hidden-line count fix | Виправлено collapsed Bash output що reporting неправильну кількість hidden lines для outputs з багатьма короткими рядками | 2.1.149 |
| Argument-hint clipping trailing characters fix | Виправлено slash-command argument-hint що обрізав trailing typed characters коли hint переливався через input box | 2.1.149 |
| Auto mode no opt-in consent | Auto mode більше не потребує попереднього згоди користувача | 2.1.152 |
| npm global auto-update notice | One-time notice коли npm global install не може auto-update; `/doctor` показує варіанти виправлення | 2.1.153 |
| Status line `COLUMNS`/`LINES` | Status line команди тепер отримують `COLUMNS` та `LINES` змінні середовища для sizing output під ширину терміналу | 2.1.153 |
| macOS background agents Privacy & Security | macOS: background agents тепер appear як "Claude Code" в Privacy & Security та зберігають permission grants через оновлення | 2.1.153 |
| Resume by transcript path excessive memory fix | Виправлено надмірне споживання пам'яті (multiple GB) при відновленні сесії по transcript file path на машинах з багатьма stored sessions | 2.1.153 |
| Stream-json stdin hang fix | Виправлено hang де CLI не міг exit коли stdin закритий без EOF в stream-json mode, залишаючи stale session marker | 2.1.153 |
| Malformed `file://` links clickable fix | Виправлено некоректні `file://` посилання в відповідях Claude що не були клікабельними в терміналі | 2.1.153 |
| `Agent` tool `subagent_type: 'claude'` worktree fix | Виправлено `Agent` tool з `subagent_type: 'claude'` що працював в недокументованому temporary worktree, міг мовчазно discard outputs записані в gitignored paths | 2.1.153 |
| `/bg` while responding continues | `/bg` поки Claude відповідає тепер продовжує відповідь в background session замість відкидання | 2.1.153 |
| `/btw` background sessions keyboard shortcuts fix | Виправлено `/btw` keyboard shortcuts що ставали unresponsive в background sessions поки task running | 2.1.153 |
| Background sessions `$CLAUDE_JOB_DIR` sensitive prompt fix | Виправлено background sessions що писали temp файли в `$CLAUDE_JOB_DIR` triggering "sensitive file" permission prompt | 2.1.153 |
| Background agent deleted cwd error fix | Виправлено recovering background agent чиї working directory була видалена — показував truncated stack trace замість clear error message | 2.1.153 |
| `EnterWorktree` background sessions immediate fix | Виправлено `EnterWorktree` що не був доступний одразу в background sessions (потребував `ToolSearch` першим) | 2.1.153 |
| `cmd+k` iTerm2/Terminal.app repaint fix | Виправлено `cmd+k` в iTerm2/Terminal.app що не перемальовував attached background sessions | 2.1.153 |
| Background-color bleed 256-color terminals fix | Виправлено background-color bleed при attaching до background agent з 256-color-only терміналів після рендерингу file diffs | 2.1.153 |
| `/copy` clipboard tmux background fix | Виправлено `/copy` та copy-on-select що мовчазно не оновлювали system clipboard при attached до background session в tmux | 2.1.153 |
| `/rename` background sessions banner fix | Виправлено `/rename` в background sessions що не оновлював session banner негайно | 2.1.153 |
| `/model` saves default for new sessions | `/model` тепер зберігає вибір як default для нових сесій (matching IDE behavior); натисніть `s` в picker для switch лише для поточної сесії | 2.1.153 |
| Thinking summaries collapsed readability | Thinking summaries в collapsed group залишаються читабельними мінімум 3 секунди, рендеряться як markdown та cap на 10 рядків; `Ctrl+O` показує повний thinking | 2.1.152 |
| Fullscreen thinking live counter | В fullscreen mode індикатор "Thinking for Ns" тепер рахує в реальному часі під час thinking; зберігає значення при interrupt mid-thought | 2.1.152 |
| Workflow tool inline progress simplified | Workflow tool inline progress display спрощено — live agent counts тепер лише в persistent workflow status row під prompt | 2.1.152 |
| Post-response timer background agents | Post-response timer тепер показує "Waiting for N background agents/workflows to finish" та звітує cumulative time коли результати оброблені | 2.1.152 |
| Terminal styling long sessions fix | Виправлено деградацію terminal styling в дуже довгих сесіях — renderer style pool тепер recycled | 2.1.152 |
| Sandbox-enabled warning condensed startup fix | Виправлено sandbox-enabled warning що не показувався в condensed startup mode | 2.1.152 |
| Thinking spinner tool running fix | Виправлено thinking spinner що показував "still thinking"/"almost done thinking" поки tool running; thinking status скидається до "thinking" після кожного tool | 2.1.152 |
| Focus mode spurious hidden count fix | Виправлено focus mode що показував спurious "N messages hidden" на turns без hidden activity | 2.1.152 |
| Expanded tool result link click fix | Виправлено clicking link в expanded tool result що collapse-ав section замість відкриття link | 2.1.152 |
| Markdown table cell borders fix | Виправлено table cell borders що успадковували колір inline code, continuation lines що втрачали стиль, та empty header cells що показували label в narrow-terminal stacked layout | 2.1.152 |
| Effort-change confirmation dialog fix | Виправлено effort-change confirmation dialog що з'являвся коли conversation не мала повідомлень або при switch між effort levels що resolve до того ж значення | 2.1.152 |
| Agent tool description `--bare` fix | Виправлено Agent tool description що reference-ав agent list який ніколи не доставляється з `--bare` або attachments disabled | 2.1.152 |
| Stale thinking-block signatures fix | Виправлено sessions що застрягали після model/login switch через stale thinking-block signatures в history — тепер stripped proactively з retry safety-net | 2.1.152 |
| Streaming tool execution завжди увімкнено | Streaming tool execution тепер завжди увімкнено, включаючи коли телеметрія вимкнена або на Bedrock/Vertex/Foundry (раніше за feature flag) | 2.1.154 |
| Auto mode exfiltration detection | Покращено виявлення data exfiltration в auto mode класифікаторі, особливо bulk transfers репозиторію | 2.1.154 |
| `rm -rf $HOME` trailing slash fix | Виправлено `rm -rf $HOME` що не блокувався як dangerous path коли `HOME` мав trailing slash | 2.1.154 |
| `$TMPDIR` sandbox inconsistency fix | Виправлено `$TMPDIR` що розв'язувався до різних директорій в sandboxed vs unsandboxed Bash командах в межах однієї сесії | 2.1.154 |
| `claude agents` unreadable highlighted-row fix | Виправлено непридатний для читання текст highlight-рядків в `claude agents` коли тема Claude Code не збігається з фоном терміналу | 2.1.154 |
| Background agent notifications "out of context" fix | Виправлено notifications завершення background-агента що спрацьовували передчасне "out of context" на деяких 1M-контекст моделях | 2.1.154 |
| Background session classifier goal loss fix | Виправлено втрату цілі користувача в background session коли scheduled `/command` spaw-иться | 2.1.154 |
| Pinned background sessions respawn fix | Виправлено повторний spawn pinned background sessions щохвилини після оновлення Claude Code, що спричиняв повторні notification та process churn на idle | 2.1.154 |
| Background sessions stuck status retirement fix | Виправлено background sessions застряглі в "blocked", "running" або "working" що не retire-ились після idle grace period | 2.1.154 |
| Subagents background sessions worktree isolation fix | Виправлено subagents в background sessions що обходили worktree-isolation guard та писали в спільну робочу копію | 2.1.154 |
| Orphaned `claude --bg-pty-host` 100% CPU fix [macOS] | Виправлено orphaned `claude --bg-pty-host` процеси що споживали 100% CPU після завершення daemon на macOS | 2.1.154 |
| Number key shortcuts divider fix | Виправлено number key shortcuts що не працювали для опцій відображених під divider в option dialogs | 2.1.154 |
| `worktree.baseRef: "head"` linked worktree fix | Виправлено `worktree.baseRef: "head"` що розв'язувався до HEAD основного чекауту замість HEAD поточного worktree при spawn subagent або `EnterWorktree` з linked worktree | 2.1.154 |
| Stray leading space wrapped lines fix | Виправлено зайвий leading space на перенесених рядках коли попередній рядок закінчувався точно на ширині терміналу | 2.1.154 |
| VS Code thinking spinner color cap fix | Виправлено періодичну пошкодження рендерингу терміналу в VS Code обмеженням кількості кольорів thinking spinner | 2.1.154 |
| Plan file names placeholders fix | Виправлено імена файлів планів що включали `[Image #N]` / `[Pasted text #N]` placeholders коли prompt починався з pasted images або text | 2.1.154 |
| Phantom expand/click affordance fix | Виправлено уявну expand/click affordance на кольоровому tool output: короткі ANSI-colored рядки що вміщуються на екрані більше не показують "ctrl+o to expand" | 2.1.154 |
| Stale "& for background" hint removed | Видалено застарілу підказку "& for background" з панелі скорочень | 2.1.154 |
| Opus 4.8 thinking blocks API error fix | Виправлено помилку API при використанні Opus 4.8 — thinking blocks модифікувалися, спричиняючи 400 помилки | 2.1.156 |
| Unprocessable images text placeholder | Непридатні зображення (zero-byte, corrupt) вставлені через paste, MCP або dialog тепер стають текстовим placeholder замість крашу сесії | 2.1.157 |
| Sandbox network prompts auto/bypass fix | Виправлено появу sandbox network permission prompts в auto та bypass-permissions mode при використанні desktop app, IDE extensions або SDK | 2.1.157 |
| `/model` picker "Newer version available" fix | Виправлено `/model` picker що показував хибну підказку "Newer version available" коли обрана модель вже найновіша; рядок pinned-моделі тепер показує опис замість raw ID | 2.1.157 |
| Fullscreen markdown markers in-progress fix | Виправлено літерні markdown-маркери (backticks, asterisks) що з'являлися в тексті in-progress повідомлення в fullscreen mode | 2.1.157 |
| Terminal freeze managed-settings dialog fix | Виправлено замерзання терміналу після прийняття managed-settings security dialog при старті | 2.1.157 |
| Scrollback duplicate line after redraw fix | Виправлено рідкісний дублікат рядка що з'являвся в scrollback після перемальовування термінального UI | 2.1.157 |
| Long/resumed conversations performance | Покращено продуктивність довгих та відновлених розмов шляхом усунення надлишкових повторних обчислень рендерингу повідомлень | 2.1.157 |
| Feature of the Week notification | Feature of the Week credit-claim статус тепер з'являється як сповіщення в статусній області замість рядка над prompt | 2.1.157 |
| "Bash sandboxed" startup banner removed | Видалено банер "bash commands will be sandboxed" при старті — sandbox статус показується в `/status` та при блокуванні команди | 2.1.157 |
| "/ide for …" startup hint removed | Видалено startup hint toast "/ide for …" | 2.1.157 |
| Backspace dismisses workflow trigger | Натискання Backspace одразу після workflow trigger keyword відхиляє workflow request (як alt+w) замість видалення символу | 2.1.157 |
| Auto mode Bedrock/Vertex/Foundry | Auto mode тепер доступний на Bedrock, Vertex та Foundry для Opus 4.7 та Opus 4.8; ввімкнути через `CLAUDE_CODE_ENABLE_AUTO_MODE=1` | 2.1.158 |
| `grep`/`egrep`/`fgrep` read-before-edit | Single-file `grep`/`egrep`/`fgrep` команди задовольняють read-before-edit перевірку (як `head`/`tail`) | 2.1.160 |
| Dynamic-workflow ключове слово `ultracode` | Слово "workflow" більше не запускає dynamic workflow; нове ключове слово "ultracode"; підсвічується фіолетовим в prompt input | 2.1.160 |
| Auto mode класифікатор latency | Зменшено reasoning на routine actions, нижчий шанс блокування "could not evaluate this action" | 2.1.160 |
| Voice mode non-ASCII fix | Виправлено voice mode що не підключався коли project directory або branch name містить non-ASCII або special characters | 2.1.160 |
| `/effort ultracode` model fix | Виправлено `/effort ultracode` що хибно звинувачував setting dynamic workflows коли модель не підтримує xhigh; ultracode більше не пропонується на моделях без підтримки | 2.1.160 |
| Auto mode 3p provider message fix | Виправлено повідомлення недоступності auto mode на Bedrock/Vertex/Foundry — тепер вказує на `CLAUDE_CODE_ENABLE_AUTO_MODE` opt-in замість хибного звинувачення моделі | 2.1.160 |
| Brief mode scrollback fix | Виправлено зникнення попередніх відповідей Claude зі scrollback при відновленні сесії brief mode з вимкненим brief mode | 2.1.160 |
| Parallel tool calls: failed Bash no cancel siblings | Помилка в одному Bash command в parallel tool calls більше не скасовує інші виклики в тому ж batch — кожен tool повертає свій результат незалежно | 2.1.161 |
| Fullscreen clipboard Linux `wl-copy`/`xclip`/`xsel` | Fullscreen clipboard на Linux тепер використовує `wl-copy`/`xclip`/`xsel` коли доступні, копіює в clipboard та PRIMARY selection для middle-click paste; підказка "hold {key}" тепер показує правильну клавішу | 2.1.161 |
| Reduce motion fix | Виправлено `/effort` dialog, workflow animations та prompt keyword shimmer що не поважали setting "Reduce motion" | 2.1.161 |
| Write tool results crash after resume fix | Виправлено потенційний краш при рендерингу результатів Write tool після відновлення сесії | 2.1.161 |
| Terminal rendering JIT perf | Покращено продуктивність термінального рендерингу стабілізацією JIT compilation profile layout engine | 2.1.161 |
| Large file writes rendering perf | Покращено продуктивність рендерингу для записів великих файлів | 2.1.161 |
| `/effort` confirm persist default | `/effort` тепер підтверджує коли обраний рівень збережеться як default для нових сесій | 2.1.162 |
| Slash command autocomplete fill | Клік на slash command в autocomplete меню тепер вставляє його в prompt замість негайного запуску; натисніть Enter для запуску | 2.1.162 |
| API 400 surrogate fix (classifier/MCP) | Виправлено API 400 `no low surrogate in string` для classifier side-queries та MCP server descriptions з emoji біля truncation boundary | 2.1.162 |
| `SendMessage` deep TMPDIR fix | Виправлено cross-session messaging (`SendMessage`) що мовчазно ламався коли `CLAUDE_CODE_TMPDIR` або `$TMPDIR` вказує на глибокий шлях | 2.1.162 |
| LSP `workspaceSymbol` query parameter | LSP tool операція `workspaceSymbol` тепер приймає параметр `query` та передає його language server; раніше повертала 0 results | 2.1.162 |
| Quieter startup | Стартові нотифікації групуються за severity; session info та announcements займають один рядок | 2.1.162 |
| Startup warnings rewritten | Стартові warnings переписані — коротші та зрозуміліші, кожен з конкретним fix | 2.1.162 |
| Launch-prompt warnings pinned | Попередження запущеного промпту (deep link/pre-filled) тепер закріплені під input замість scroll-away | 2.1.162 |
| Failed turns compact warning | Помилкові turn-и тепер показують компактний warning рядок замість multi-line червоного error block | 2.1.162 |
| Removed startup messages | Прибрано "Claude in Chrome enabled" та "marketplace installed" startup messages; model auto-updates та team-onboarding tip тепер quiet notices під logo | 2.1.162 |

## Cross-session messaging

| Можливість | Опис | Версія |
|-----------|------|--------|
| Cross-session messaging hardened | Повідомлення передані через `SendMessage` з інших сесій Claude більше не несуть повноважень користувача — отримувачі відхиляють relay-запити дозволів, auto mode їх блокує | 2.1.166 |

## Режим мислення — відключення

| Можливість | Опис | Версія |
|-----------|------|--------|
| `MAX_THINKING_TOKENS=0` disables thinking | `MAX_THINKING_TOKENS=0`, `--thinking disabled` та per-model toggle тепер вимикають thinking на моделях що думають за замовчуванням через Claude API (3P providers без змін) | 2.1.166 |

## Fallback retry

| Можливість | Опис | Версія |
|-----------|------|--------|
| API error fallback retry | Claude Code тепер повторює turn один раз на fallback-моделі коли API відхиляє з неочікуваною non-retryable помилкою; auth, rate-limit, request-size та transport помилки досі показуються негайно | 2.1.166 |

## Виправлення (2.1.166)

| Можливість | Опис | Версія |
|-----------|------|--------|
| Image processing error fix | Виправлено recurring помилку "image could not be processed" та зайве використання токенів коли непридатне зображення надсилалось в сесії | 2.1.166 |
| Remote sessions stuck fix | Виправлено remote sessions що назавжди зависали при короткому backend збої під час реєстрації worker на startup | 2.1.166 |
| Voice mode `/login` fix | Виправлено voice mode що вимагав `/login` для очистки застарілого auth check після перемикання `/voice` | 2.1.166 |
| Background agent worktree crash-loop fix | Виправлено background agent sessions в git worktree що crash-loop-или з "No conversation found" при повторному відкритті з `claude agents` | 2.1.166 |
| Duplicated thinking Ctrl+O fix | Виправлено дублювання thinking text в Ctrl+O transcript view під час стрімінгу | 2.1.166 |

## Виправлення (2.1.169)

| Можливість | Опис | Версія |
|-----------|------|--------|
| ~30-50ms UI stall macOS fix | Виправлено ~30-50ms затримку UI на початку кожного turn для macOS користувачів з claude.ai credentials | 2.1.169 |
| Remote Control reconnecting fix | Виправлено Remote Control що зависав на "reconnecting" після відновлення сесії коли OAuth token refresh стався одночасно | 2.1.169 |
| Footer hints custom statusline fix | Виправлено відсутність footer hints (напр. "esc to interrupt") для користувачів з кастомним statusline | 2.1.169 |
| Stale permission prompts remote reattach fix | Виправлено stale permission та dialog prompts що з'являлись знову при повторному підключенні до remote session чий worker помер поки очікував на них | 2.1.169 |
| Background agents project-level `env` fix | Виправлено background agents що ігнорували project-level `env` values (напр. `ANTHROPIC_MODEL`) при dispatch на pre-warmed worker | 2.1.169 |
| Background sessions preserve flags | Background sessions тепер зберігають `--ide`, `--chrome`, `--bare`, `--remote-control` та інші прапорці через retire→wake; respawn state validation посилено | 2.1.169 |
| Background sessions shared-checkout edit block | Background sessions тепер повідомляються що shared-checkout edits заблоковані до входу в worktree, уникаючи відхиленого edit перед `EnterWorktree` | 2.1.169 |
| "CLAUDE.md is too long" scales with context | Порог попередження "CLAUDE.md is too long" тепер масштабується з context window моделі | 2.1.169 |
| CPU usage reduction streaming | Зменшено CPU використання під час стрімінгу відповідей та spinner animations | 2.1.169 |
| `TaskCreate` reliability | Покращено надійність `TaskCreate`: malformed inputs автоматично виправляються, помилки валідації для ненавантажених tools включають schema | 2.1.169 |
| Org disabled API key auth error message | Покращено повідомлення помилки коли організація вимкнула API key аутентифікацію, з підказками залежно від джерела активного API key | 2.1.169 |
| Idle timeout Vertex/Foundry restored | Відновлено дефолтний 5-хвилинний idle timeout на Vertex/Foundry щоб stalled stream переривався замість нескінченного зависання; opt-out через `API_FORCE_IDLE_TIMEOUT=0` | 2.1.169 |
| Skill tags color contrast fix | Покращено кольоровий контраст для skill tags в slash-command menu | 2.1.169 |
| Promo credit claims guidance | Promo credit claims для Apple/Google-billed підписників без методу оплати тепер пояснюють де додати метод | 2.1.169 |
| Tip: `claude agents` для concurrent sessions | Додано підказку що пропонує `claude agents` при запуску кількох паралельних сесій | 2.1.169 |
| Sessions not saving transcripts inherited env fix | Виправлено сесії що не зберігали транскрипти (і не появлялись в `--resume`) коли запущені з VS Code integrated terminal або shell що успадкував змінні середовища Claude Code | 2.1.170 |

## Моделі (2.1.172–2.1.173)

| Можливість | Опис | Версія |
|-----------|------|--------|
| `availableModels` allowlists hiding 1M model rows fix | Виправлено `availableModels` що ховав `/model` picker's Opus та Sonnet 1M rows коли entries використовують version-specific IDs як `claude-opus-4-8` | 2.1.172 |
| `/model` picker Bedrock wrong models fix | Виправлено `/model` picker на Bedrock що пропонував моделі які provider не обслуговує — вибір мовчки змінював модель сесії та підсвічував кілька рядків | 2.1.172 |
| Model IDs doubled 1M suffix fix | Виправлено подвоєння 1M-context суфіксу (напр. `[1M][1m]`) коли `ANTHROPIC_DEFAULT_OPUS_MODEL` вже включає один | 2.1.172 |
| `opusplan` 1M context in plan mode fix | Виправлено `opusplan` model setting що не мав 1M context в plan mode для entitled users; `opusplan[1m]` workaround тепер також правильно перемикається на Opus в plan mode | 2.1.172 |
| Fable 5 `[1m]` suffix normalization | Виправлено normalization model names з `[1m]` suffix для Fable 5 — Fable 5 включає 1M context за замовчуванням, suffix тепер автоматично прибирається | 2.1.173 |
| `[1m]` suffix leak third-party providers | Відомий клас багів: `[1m]` suffix може просочуватись в API-запит до non-Anthropic провайдерів (Bedrock [#49781](https://github.com/anthropics/claude-code/issues/49781), third-party адаптери); при використанні GLM/z.ai адаптерів суфікс відображається в UI але не відповідає реальному контекстному вікну моделі — косметичний metadata mismatch | — |

## Контекст та пам'ять (2.1.172)

| Можливість | Опис | Версія |
|-----------|------|--------|
| 1M context sessions auto-compact without credits | Сесії що використовують 1M context без usage credits більше не застрягають назавжди — автоматичне стиснення назад під стандартний ліміт контексту | 2.1.172 |
| Memory recall `CLAUDE_MEMORY_STORES` remote sessions fix | Виправлено memory recall що не знаходив mounted team memory stores (`CLAUDE_MEMORY_STORES`) в remote sessions | 2.1.172 |

## Інтерактивність (2.1.172)

| Можливість | Опис | Версія |
|-----------|------|--------|
| Multiple images processing error fix | Виправлено повторювану помилку "an image in the conversation could not be processed and was removed" коли розмова містила кілька зображень | 2.1.172 |
| Performance improvements long conversations | Покращено продуктивність в довгих розмовах шляхом видалення надлишкової нормалізації повідомлень та уникнення повних трансформацій історії коли streaming tool-use state не змінився | 2.1.172 |
| Reduced idle CPU `/goal` status chip | Зменшено idle CPU: `/goal` status chip більше не перемальовує термінал на 5 Hz поки idle, та менше UI перемальовувань під час паралельної роботи subagentів | 2.1.172 |
| Chrome tool loading batched | Покращено завантаження Claude in Chrome tools — browser tools тепер завантажуються в одному batched виклику замість одного за раз | 2.1.172 |
| Non-interactive refusal message improvement | Покращено повідомлення відмови Usage Policy в non-interactive mode — тепер пропонує розпочати нову сесію або змінити модель | 2.1.172 |
| RC footer shortened | Скоротено Remote Control footer indicator до "/rc active"; ховається на вузьких терміналах | 2.1.172 |

## Інші (2.1.176)

| Можливість | Опис | Версія |
|-----------|------|--------|
| Session titles language | Заголовки сесій тепер генеруються мовою розмови; `language` setting фіксує конкретну мову | 2.1.176 |
| Auto mode Fable 5 fallback | Виправлено auto mode на Fable 5 для організацій без Opus 4.8 — класифікатор тепер відступає до найкращої доступної Opus моделі | 2.1.176 |
| Linux sandbox symlink fix | Виправлено запуск sandbox на Linux коли `.claude/settings.json` є symlink з абсолютною ціллю | 2.1.176 |

## Основні можливості (2.1.178)

| Можливість | Опис | Версія |
|-----------|------|--------|
| Auto mode subagent classifier | Покращено auto mode: spawn subagent-ів тепер оцінюється класифікатором перед запуском, закриваючи gap де subagent міг запитати заблоковану дію без review | 2.1.178 |
| Crash fix stale websocket/OAuth FD env var | Виправлено краш (out-of-memory) коли CLI наслідував застарілий websocket/OAuth file-descriptor environment variable від батьківського процесу | 2.1.178 |
| Chrome OAuth different account fix | Виправлено Claude in Chrome що мовчазно не підключався коли OAuth token належав іншому акаунту ніж Claude Code login | 2.1.178 |
| Auth refresh stale cache fix | Виправлено model requests що продовжували fail з auth errors після refresh credentials поза сесією, через stale cached request configuration | 2.1.178 |
| Nested `.claude/` directory collision resolution | При збігу імен в nested `.claude/` directories — agent, workflow та output-style найближчий до робочої директорії тепер пріоритетний; project-scope workflow saves тепер цілить найближчий існуючий `.claude/workflows/` | 2.1.178 |
| `/copy` tmux SSH clipboard fix | Виправлено `/copy` та mouse-selection copy що не досягали system clipboard всередині tmux over SSH; tmux paste buffer не завантажувався на версіях старіших за 3.2 | 2.1.176 |
| Cloud sessions auth method fix | Виправлено cloud sessions що failing з "Could not resolve authentication method" при тривалому простої перед claim | 2.1.176 |

## Основні можливості (2.1.179)

| Можливість | Опис | Версія |
|-----------|------|--------|
| Mid-stream connection drops partial response fix | Виправлено mid-stream connection drops: часткові відповіді тепер зберігаються замість показу сирої помилки, spinner більше не зависає на "running tool" | 2.1.179 |
| Feedback survey single-digit capture fix | Виправлено feedback survey що захватував однозначну цифру як session rating одразу після завершення turn | 2.1.179 |
| Welcome screen promo banner stacking fix | Виправлено welcome screen що показував кілька промо-банерів — тепер максимум один promo за сесію | 2.1.179 |
| Ctrl+O subagent transcript fix | Виправлено Ctrl+O що не показував транскрипт subagent при його перегляді | 2.1.179 |
| Prompt input focus return from subagent/footer fix | Виправлено клік на prompt input що не повертав фокус з subagent/footer panel | 2.1.179 |
| Remote session background tasks stuck fix | Виправлено remote session background tasks що показувались застряглими "still running" між turns | 2.1.179 |

## Основні можливості (2.1.181)

| Можливість | Опис | Версія |
|-----------|------|--------|
| Bundled Bun 1.4 | Оновлено вбудований Bun runtime до версії 1.4 | 2.1.181 |
| Покращення стрімінгу довгих абзаців | Текст довгих абзаців тепер з'являється рядок за рядком замість очікування першого line break | 2.1.181 |
| Автоматичний повтор під час mid-thinking розриву | Розрив API-з'єднання під час thinking тепер автоматично повторюється замість показу "Connection closed while thinking" | 2.1.181 |
| Покращення панелі субагентів | Idle субагенти автоховаються через 30с, список обмежений 5 рядками з підказками скролінгу, підказки клавіш у footer | 2.1.181 |
| Fullscreen URL відкриття через Cmd+click/Ctrl+click | Відкриття URL у fullscreen mode тепер вимагає Cmd+click (macOS) / Ctrl+click, відповідаючи нативній поведінці терміналу | 2.1.181 |
| "Improved N memories" без переліку файлів | Рядок "Improved N memories" більше не перелічує окремі файли поза verbose mode | 2.1.181 |
| Prompt caching на кастомному BASE_URL/Foundry fix | Виправлено непрацювання prompt caching при кастомному `ANTHROPIC_BASE_URL` та на Foundry через per-request attestation token що змінюється кожен turn | 2.1.181 |
| Write/Edit 0-байт/обрізані файли на network drives fix | Виправлено Write/Edit що створювали 0-байт або обрізані файли на network drives та cloud-synced папках | 2.1.181 |
| macOS `open`/`osascript`/browser auth error -600 fix | Виправлено помилку -600 при виклику `open`, `osascript` та browser-based auth flows на macOS додаванням Apple Events entitlement | 2.1.181 |
| Startup regression ~120ms fix | Виправлено regression (~120ms за запуск у свіжих середовищах, введений в 2.1.169) — перший промпт більше не чекає на managed-settings fetch коли немає MCP серверів | 2.1.181 |
| Startup блокування 15с на повільній мережі fix | Виправлено блокування startup з пустим терміналом до 15 секунд коли account settings fetch повільний на деградованій мережі | 2.1.181 |
| Startup crash corrupted `.claude.json` fix | Виправлено краш startup (`TypeError: Cannot read properties of null`) коли `.claude.json` містить пошкоджені null project entries | 2.1.181 |
| macOS TUI freezing при старті fix | Виправлено заморожування TUI на macOS на початку сесії (Ctrl+C unresponsive) коли Spotlight зайнятий реіндексацією | 2.1.181 |
| Idle сесії втрача історії fix | Виправлено втрату історії тривалих idle сесій коли інший процес Claude Code запускав 30-денне очищення транскриптів | 2.1.181 |
| `/recap` та conversation forks попередня модель fix | Виправлено `/recap` та conversation forks що використовували попередню модель одразу після перемикання моделі | 2.1.181 |
| Субагент "Thinking" тривалість батьківського агента fix | Виправлено відображення тривалості "Thinking" субагента що показувало elapsed time батьківського агента замість власного | 2.1.181 |
| Заблоковані субагенти "waiting" замість ticking fix | Виправлено субагентів заблокованих на nested agent що показували ticking elapsed time замість "waiting" в панелі агентів | 2.1.181 |
| API retry indicator залишається на екрані fix | Виправлено індикатор повтору API ("Retrying in 0s · attempt N/10") що залишався на екрані після успішного повтору | 2.1.181 |
| Ctrl+C fullscreen clipboard overwrite fix | Виправлено Ctrl+C у fullscreen після нативної вибірки терміналу (modifier+drag) що перезаписував clipboard попереднім виділенням | 2.1.181 |
| Ctrl+V "No image found" замість вставки тексту fix | Виправлено Ctrl+V що показував "No image found in clipboard" замість вставки коли clipboard містить текст | 2.1.181 |
| AskUserQuestion preview обрізання fix | Виправлено обрізання preview контенту AskUserQuestion на краю діалогу замість word-wrapping | 2.1.181 |
| AskUserQuestion multi-select "Other" drop fix | Виправлено мовчазне скидання введеного "Other" free-text при відправці multi-select AskUserQuestion | 2.1.181 |
| Tab-indented код рендеринг Write preview fix | Виправлено некоректний відступ коду з tab-ами при рендерингу прев'ю Write (create-file) | 2.1.181 |
| Промпти в черзі без підсвітки fix | Виправлено відсутність full-width background highlight для промптів поставлених в чергу mid-turn | 2.1.181 |
| Spinner pulse incorrect glyph in Ghostty fix | Виправлено dwelling activity spinner на неправильному розмірі glyph у Ghostty | 2.1.181 |
| `/copy` та copy-on-select Linux clipboard detection fix | Виправлено `/copy` та copy-on-select на Linux що не виявляли clipboard utility встановлений після старту Claude Code | 2.1.181 |

## Основні можливості (2.1.183)

| Можливість | Опис | Версія |
|-----------|------|--------|
| Auto mode безпека: блокування деструктивних git команд | `git reset --hard`, `git checkout -- .`, `git clean -fd`, `git stash drop` блокуються коли користувач не просив відкидати локальні зміни | 2.1.183 |
| Auto mode безпека: блокування `git commit --amend` | `git commit --amend` блокується коли коміт не був зроблений агентом в поточній сесії | 2.1.183 |
| Auto mode безпека: блокування infra-destroy команд | `terraform destroy`, `pulumi destroy`, `cdk destroy` блокуються якщо не запитано конкретний стек | 2.1.183 |
| Попередження про застарілу модель | Попередження на stderr коли запитана модель застаріла або автоматично оновлена до новішої; працює в print mode (`-p`) та тепер охоплює моделі з agent frontmatter | 2.1.183 |
| Прибрано рядок "setup issues" при старті | Рядок "setup issues" під логотипом прибрано — для перевірки конфігурації запустіть `/doctor` або `--debug` | 2.1.183 |
| Виправлено `thinking.disabled.display` 400 помилки | Виправлено API 400 помилки при конфігурації `thinking.disabled.display` під час spawn subagent-ів та генерації заголовків сесій | 2.1.183 |
| Виправлено WebSearch пусті результати в subagent-ах | Виправлено WebSearch що повертав порожні результати в subagent-ах | 2.1.183 |
| Виправлено курсор stranded у vim mode | Виправлено курсор терміналу що залишався над prompt після навігації по історії в vim mode з увімкненим нативним курсором | 2.1.183 |
| Повторний запит при thinking-only відповіді | Виправлено ходи що завершувалися без видимого виводу коли модель повертала лише thinking block — Claude тепер повторно запитує один раз | 2.1.183 |
| Фонові задачі teammate не вбиваються | Виправлено фонові задачі розпочаті teammate що завершувалися коли teammate закінчував хід | 2.1.183 |
| Scheduled/webhook тригери не класифікуються як клавіатурний ввід | Виправлено доставку scheduled task та webhook тригерів що трактуються як клавіатурний ввід — тепер класифікуються як task notifications та не можуть затвердити pending action або встановити заголовок сесії в auto mode | 2.1.183 |
| Focus mode без timing lines хуків | Виправлено focus mode що показував "Ran N PostToolUse hooks" timing рядки під кожною відповіддю | 2.1.183 |

## Основні можливості (2.1.185)

| Можливість | Опис | Версія |
|-----------|------|--------|
| Stream-stall hint 20s замість 10s | Підказка stream-stall тепер читає "Waiting for API response · will retry in …" замість "No response from API · Retrying in …", та спрацьовує після 20с тиші замість 10с | 2.1.185 |

## Основні можливості (2.1.186)

| Можливість | Опис | Версія |
|-----------|------|--------|
| `!` bash команди автоматична відповідь | `!` bash команди тепер змушують Claude автоматично відповідати на вивід; для попередньої поведінки встановіть `"respondToBashCommands": false` в settings.json | 2.1.186 |
| Виправлено streaming після пробудження від сну | Виправлено streaming-запити що failing з "Content block not found" або JSON parse errors після пробудження машини від сну | 2.1.186 |
| Виправлено transcript scroll субагента | Виправлено позицію прокрутки транскрипту субагента що витікала в основний транскрипт при виході | 2.1.186 |
| Виправлено background task previews з raw tool names | Виправлено мерехтіння raw tool names у прев'ю фонових задач перед завантаженням плану агента | 2.1.186 |
| Виправлено Chrome tab-group isolation | Виправлено ізоляцію Chrome tab-group що не застосовувалась коли permissions gate вимкнений для паралельних CLI сесій | 2.1.186 |
| Виправлено дублювання recaps фонових сесій | Виправлено дублювання recap-ів фонових сесій — підсумовок агента в кінці ходу тепер показується як рядок recap | 2.1.186 |
| Виправлено Esc/Ctrl+C з фоновими агентами | Виправлено Esc та Ctrl+C що не реагували поки фонові агенти ще працюють після завершення основного ходу | 2.1.186 |
| Виправлено номера опцій в permission prompts | Виправлено зміщені номери опцій в permission prompts коли текст опції перевищує ширину | 2.1.186 |
| Виправлено `~~strikethrough~~` літеральні тильди | Виправлено `~~strikethrough~~` що показував літеральні тильди в повідомленнях помічника замість закресленого тексту | 2.1.186 |
| Виправлено відсутність вартості сесії | Виправлено відсутність відображення вартості сесії для Enterprise та Team підписників з usage-based оплатою | 2.1.186 |
| Покращення пам'яті: компактний MEMORY.md | Агент тепер нагадує компактити індекс `MEMORY.md` при наближенні до ліміту розміру | 2.1.186 |
| Фонові субагенти показують permission prompts | Фонові субагенти тепер відображають permission prompts в основній сесії замість автоматичної відмови; діалог показує який агент запитує, Esc відмовляє лише цей tool | 2.1.186 |

## Основні можливості (2.1.187)

| Можливість | Опис | Версія |
|-----------|------|--------|
| Org-configured model restrictions | Org-налаштовані обмеження моделей в model picker, `--model`, `/model` та `ANTHROPIC_MODEL`; повідомлення "restricted by your organization's settings" при виборі заблокованої моделі | 2.1.187 |
| Mouse click select menus fullscreen | Клік мишею тепер працює в select menus (permission prompts, `/model`, `/config` тощо) в fullscreen mode | 2.1.187 |
| Paste Korean/CJK mojibake fix [Win] | Виправлено вставлений Korean/CJK текст що перетворювався на mojibake в терміналах що доставляють paste як per-byte extended-key events | 2.1.187 |
| Channel connections drop fix | Виправлено розрив channel connections після навігації до agents view та назад, а також після `/bg`, `/tui` або `/update` | 2.1.187 |
| Cmd+click URLs fullscreen Ghostty fix | Виправлено Cmd+click що не відкривав URL в fullscreen mode в Ghostty на macOS | 2.1.187 |
| Remote sessions startup speed fix | Виправлено Claude Code Remote sessions що стартували на ~2.7с довше після додавання agent proxy CA system-trust install | 2.1.187 |
| `/btw` ←/→ arrow navigation | `/btw` тепер підтримує ←/→ arrow навігацію для перегляду попередніх відповідей | 2.1.187 |

## Основні можливості (2.1.191)

| Можливість | Опис | Версія |
|-----------|------|--------|
| Scroll position jump fix during streaming | Виправлено стрибок позиції скролу вниз під час читання раніше output під час стрімінгової відповіді | 2.1.191 |
| `/voice` policy restriction message | Виправлено `/voice` що показував generic "not available" замість пояснення обмеження коли вимкнений через організаційну політику | 2.1.191 |
| Cmd+click fullscreen Ghostty ssh/tmux fix | Виправлено Cmd+click що не відкривав посилання в fullscreen mode в Ghostty через ssh або tmux | 2.1.191 |
| Welcome splash art overflow 80×24 fix | Виправлено overflow welcome splash art в стандартному macOS Terminal (80×24) | 2.1.191 |
| Streaming CPU reduction ~37% | Зменшено використання CPU на ~37% під час стрімінгових відповідей шляхом коалесценції текстових оновлень до 100ms | 2.1.191 |
| Long-session memory growth fix | Виправлено зростання пам'яті в довгих сесіях від кешу термінального output | 2.1.191 |

## Основні можливості (2.1.195)

| Можливість | Опис | Версія |
|-----------|------|--------|
| Remote session provisioning checklist | Покращено старт remote sessions — provisioning checklist відображається поки контейнер запускається | 2.1.195 |

## Основні можливості (2.1.193)

| Можливість | Опис | Версія |
|-----------|------|--------|
| Auto-mode причини відмови | Причини відмови auto mode тепер відображаються в транскрипті, toast-повідомленні та `/permissions` Recently-denied tab | 2.1.193 |
| Autocomplete шляхів файлів у bash mode (`!`) | Bash mode (`!`) тепер має живий autocomplete шляхів файлів | 2.1.193 |
| Сповіщення при старті про MCP автентифікацію | Стартове повідомлення з підказкою `/mcp` коли MCP сервери потребують автентифікації | 2.1.193 |
| Memory-pressure reaping фонових shell команд | Автоматичне звільнення простоючих фонових shell команд під memory pressure; вимкнути через `CLAUDE_CODE_DISABLE_BG_SHELL_PRESSURE_REAP=1` | 2.1.193 |

## Моделі (2.1.196)

| Можливість | Опис | Версія |
|-----------|------|--------|
| Organization default models | Адміни встановлюють модель за замовчуванням в org console; в `/model` відображається як "Org default" або "Role default" коли користувач не обрав власну | 2.1.196 |

## Інтерактивність (2.1.196)

| Можливість | Опис | Версія |
|-----------|------|--------|
| Зрозумілі імена сесій при старті | Сесії отримують зрозумілі назви за замовчуванням, що полегшує ідентифікацію та обмін повідомленнями | 2.1.196 |
| Клікабельні вкладення файлів | Прикріплені файли в чаті відкриваються в Finder (Cmd+click) або Explorer (Ctrl+click) | 2.1.196 |
| Mid-turn crash recovery Remote sessions | Сесії перервані рестартом сервера тепер автоматично відновлюються на наступному worker | 2.1.196 |
| Remote Control вимкнений для non-Anthropic BASE_URL | Remote Control автоматично вимикається коли `ANTHROPIC_BASE_URL` вказує на non-Anthropic хост, узгоджуючись з поведінкою Bedrock/Vertex/Foundry | 2.1.196 |

## Інші команди (2.1.196)

| Можливість | Опис | Версія |
|-----------|------|--------|
| `/context` 0 токенів на Bedrock fix | Виправлено `/context` що показував 0 токенів для всіх груп інструментів на Bedrock | 2.1.196 |
| `/deep-research` verifier failures fix | Виправлено `/deep-research` що помилково звітував невірені твердження як "all claims refuted" замість `unverified` | 2.1.196 |

## Контекст та пам'ять (2.1.196)

| Можливість | Опис | Версія |
|-----------|------|--------|
| Дублікати recap-рядки background сесій fix | Виправлено дублювання recap-рядків після ходу background сесії — schema-rejected спроба StructuredOutput більше не рендериться поруч з повтором | 2.1.196 |

## Основні можливості (2.1.196)

| Можливість | Опис | Версія |
|-----------|------|--------|
| Rate-limit warning flickering fix | Виправлено миготіння попередження rate-limit та перерахування rate-limit телеметрії коли кілька паралельних запитів потрапляли на usage limit одночасно | 2.1.196 |
| Перевірка rendering streaming UI | Зменшено навантаження на rendering: пропускається no-op subtree walks під час стрімінгу в термінальному UI | 2.1.196 |
| Streaming idle watchdog увімкнений за замовчуванням | Watchdog що перериває та повторює запит коли стрім відповіді не має подій 5 хвилин — тепер увімкнений для всіх провайдерів за замовчуванням; вимкнути через `CLAUDE_ENABLE_STREAM_WATCHDOG=0` | 2.1.196 |

## Моделі (2.1.197)

| Можливість | Опис | Версія |
|-----------|------|--------|
| Claude Sonnet 5 — дефолтна модель | Claude Sonnet 5 тепер є моделлю за замовчуванням в Claude Code, заміняючи попередню дефолтну модель | 2.1.197 |

## Режим мислення (2.1.198)

| Можливість | Опис | Версія |
|-----------|------|--------|
| Subagents успадковують extended thinking | Субагенти та контекстне стиснення тепер успадковують конфігурацію extended thinking сесії, покращуючи якість делегованих задач | 2.1.198 |

## План-режим (2.1.198)

| Можливість | Опис | Версія |
|-----------|------|--------|
| Plan mode auto-allow read-only | Plan mode тепер автоматично дозволяє read-only tool calls при старті сесії в план-режимі | 2.1.198 |

## Інтерактивність (2.1.198)

| Можливість | Опис | Версія |
|-----------|------|--------|
| Subagents у фоні за замовчуванням | Субагенти тепер запускаються у фоні за замовчуванням — Claude продовжує працювати поки вони виконуються та отримує сповіщення при завершенні | 2.1.198 |
| Claude in Chrome GA | Claude в Chrome розширенні тепер загальнодоступне (generally available) | 2.1.198 |
| Focus mode покращення | Субагенти запущені в ході тепер відображаються в підсумку діяльності; завершені фонові сповіщення групуються в один лічильник | 2.1.198 |
| Markdown таблиці fullscreen overflow fix | Виправлено переповнення markdown таблиць з обривом правого кордону при рендерингу в fullscreen mode | 2.1.198 |
| Cmd+click fullscreen Warp macOS fix | Виправлено Cmd+click що не відкривав URL в fullscreen mode в Warp на macOS | 2.1.198 |
| Double-click word selection fullscreen fix | Виправлено подвійне клацання для виділення слова в fullscreen mode — тепер виділяє весь URL включаючи схему | 2.1.198 |
| macOS background agent local-network fix | Виправлено "no route to host" для локальних мережевих хостів у фонових агент-сесіях на macOS — додано Local Network entitlements | 2.1.198 |
| macOS background agent reconnecting fix | Виправлено періодичне показ "Reconnecting…" кожні ~52 секунди у фонових агентів на macOS коли agents view відкритий | 2.1.198 |

## Інші команди (2.1.198)

| Можливість | Опис | Версія |
|-----------|------|--------|
| Syntax highlighting highlight.js 11 | Покращено точність підсвітки синтаксису в блоках коду, дифах та прев'ю файлів оновленням до highlight.js 11 | 2.1.198 |
| API retry UX покращення | Причина помилки тепер показується після другої спроби; посилання на status page заміщає spinner-підказку коли API перевантажений | 2.1.198 |
| Мережеві помилки transient retry | Короткі розриви мережі mid-response більше не переривають хід — transient помилки як ECONNRESET тепер повторюються з backoff замість відмови | 2.1.198 |

## Основні можливості (2.1.199)

| Можливість | Опис | Версія |
|-----------|------|--------|
| SSL certificate errors immediate fail | SSL помилки (TLS-inspecting proxies, missing `NODE_EXTRA_CA_CERTS`, expired certs) більше не спалюють retries — тепер негайно fail з підказкою як виправити | 2.1.199 |
| Streaming responses partial on mid-stream error | Виправлено streaming відповіді що відкидались при mid-stream overloaded/server error — partial response тепер зберігається з повідомленням про неповну відповідь | 2.1.199 |
| Background sessions memory-starved machines fix | Виправлено фонові сесії на машинах з нестачею пам'яті що показували generic помилку — тепер вказують на low memory та рекомендують звільнити ресурси | 2.1.199 |
| Backgrounding session `/color` preservation fix | Виправлено втрату `/color` при backgrounding сесії через `←` або `/background` в агент-панелі | 2.1.199 |
| Transient server 429 auto-retry | Transient server rate-limit помилки (429s unrelated до usage limit) тепер автоматично повторюються з backoff для підписників | 2.1.199 |
| Claude in Chrome reconnect page fix | Виправлено повторне відкриття сторінки reconnect в Claude in Chrome коли сесії запущені з різних builds або config directories | 2.1.199 |

## План-режим (2.1.199)

| Можливість | Опис | Версія |
|-----------|------|--------|
| Plan mode browser tool call prompting | Виправлено план-режим що не запитував підтвердження для state-changing browser tool calls; read-only `browser_batch` виклики тепер коректно auto-allowed | 2.1.199 |

## Моделі (2.1.199)

| Можливість | Опис | Версія |
|-----------|------|--------|
| `/model` або `/fast` під час перегляду субагента fix | Виправлено набір `/model` або `/fast` під час перегляду субагента що мовчки відкривав model picker лідера — тепер показується пояснення що команда застосовується до лідера | 2.1.199 |

## Основні можливості (2.1.200)

| Можливість | Опис | Версія |
|-----------|------|--------|
| `AskUserQuestion` без автопродовження за замовчуванням | Діалоги `AskUserQuestion` більше не автоматично продовжуються; idle timeout можна увімкнути через `/config` | 2.1.200 |
| Background sessions sleep/wake fix | Виправлено зупинку background sessions під час сну/пробудження або повторного відкриття застарілої сесії | 2.1.200 |
| Background sessions stall respawn re-run fix | Виправлено повторний запуск відміненого повороту (Esc) після перезапуску застарілої сесії | 2.1.200 |
| tmux 3.4+ flicker fix | Виправлено мерехтіння рендерингу під tmux 3.4+ увімкненням synchronized terminal output | 2.1.200 |

## Моделі (2.1.201)

| Можливість | Опис | Версія |
|-----------|------|--------|
| Sonnet 5: прибрано mid-conversation system role | Сесії Claude Sonnet 5 більше не використовують роль `system` посередині розмови для нагадувань harness | 2.1.201 |

## Основні можливості (2.1.202)

| Можливість | Опис | Версія |
|-----------|------|--------|
| Ctrl+R history search crash fix | Виправлено краш inline Ctrl+R history search при прийнятті або скасуванні під час сканування файлу історії | 2.1.202 |
| Remote Control commands fix | Виправлено команди надіслані з Remote Control (mobile/web) в інтерактивну сесію що failing з "Unknown command" | 2.1.202 |
| Remote Control images/files without caption fix | Виправлено зображення та файли надіслані з Remote Control без caption що мовчки відкидались | 2.1.202 |
| `/remote-control` permission mode fix | Виправлено `/remote-control` сесії що показували неправильний permission mode в mobile/web apps | 2.1.202 |
| Voice dictation unbounded loop fix | Виправлено voice dictation що повторювався в безмежному циклі коли мікрофон або аудіо-рекордер failing — повторні невдалі спроби запису тепер призупиняють voice input | 2.1.202 |
