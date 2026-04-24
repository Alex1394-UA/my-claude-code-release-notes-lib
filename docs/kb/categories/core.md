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
| Auto mode без прапорця | Auto mode більше не потребує `--enable-auto-mode` для Max підписників з Opus 4.7 | 2.1.111 |

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
