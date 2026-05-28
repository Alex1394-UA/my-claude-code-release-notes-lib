# Навички, Агенти та Команди

## Навички (Skills)

| Можливість | Опис | Версія |
|-----------|------|--------|
| `.claude/skills/` (user) | Директорія навичок користувача | 2.0.20 |
| `.claude/skills/` (project) | Директорія навичок проекту | — |
| Skill hot-reload | Автоматичне перезавантаження | 2.1.0 |
| `context: fork` | Виконання в forked sub-agent | 2.1.0 |
| `agent` field | Специфічний тип агента для skill | 2.1.0 |
| `effort` field | Рівень зусилля для skill | 2.1.80 |
| `allowed-tools` | Дозволені інструменти | — |
| `hooks` | Хуки для skill | 2.1.0 |
| `model` | Модель для skill | — |
| `user-invocable` | Видимість в slash-командах | — |
| `${CLAUDE_SKILL_DIR}` | Змінна шляху skill | 2.1.69 |
| YAML `allowed-tools` | Список замість рядка | 2.1.0 |
| Вкладені `.claude/skills/` | Автодискаверія в піддиректоріях | 2.1.6 |
| `paths:` frontmatter | Умовне завантаження | 2.1.0 |
| Описи skill обмежені 250 символів | Зменшення контексту в `/skills` списку | 2.1.86 |
| Описи skill cap 1536 символи | Ліміт listing піднято з 250 до 1536 символів; попередження при старті якщо описи обрізаються | 2.1.105 |
| `/skills` алфавітний порядок | Посортовано для зручного пошуку | 2.1.86 |
| Виправлення disk writes | Немає зайвих записів на диск при виклику skill | 2.1.86 |
| `/reload-plugins` skills | Підхоплює plugin-provided skills без рестарту | 2.1.98 |
| `disable-model-invocation` fix | Виправлено помилку при виклику skills з `disable-model-invocation: true` через `/<skill>` mid-message | 2.1.110 |
| `/skills` menu scroll fix | Виправлено відсутність скролінгу списку `/skills` в fullscreen mode | 2.1.110 |
| `/less-permission-prompts` | Сканує транскрипти на common read-only Bash та MCP tool calls та пропонує prioritized allowlist для `.claude/settings.json` | 2.1.111 |
| `/ultrareview` | Комплексний code review в cloud з паралельним multi-agent аналізом та critique; без аргументів — поточна гілка, `/ultrareview <PR#>` — конкретний PR | 2.1.111 |
| `/ultrareview` покращення | Прискорений запуск з parallelized checks, diffstat в launch dialog, анімований launching state | 2.1.113 |
| `/skills` sort by tokens | `/skills` menu підтримує сортування по estimated token count — натисніть `t` для toggle | 2.1.111 |
| Agent frontmatter `mcpServers` | `mcpServers` з agent frontmatter тепер завантажуються для main-thread agent sessions через `--agent` | 2.1.117 |
| `${CLAUDE_EFFORT}` в skill content | Skills можуть посилатися на поточний рівень зусилля через `${CLAUDE_EFFORT}` у своєму контенті | 2.1.120 |
| `/skills` type-to-filter | Додано текстове поле пошуку до `/skills` для швидкого пошуку в довгих списках без скролінгу | 2.1.121 |
| `claude_code.skill_activated` OTEL event | OTEL event для skill activation; включає `invocation_trigger` (`"user-slash"`, `"claude-proactive"`, `"nested-skill"`) | 2.1.126 |
| Deferred tools `context: fork` skills fix | Виправлено відсутність deferred tools (WebSearch, WebFetch, etc.) в skills з `context: fork` та інших subagents на першому turn | 2.1.126 |
| Agent frontmatter `hooks` | `hooks:` з agent frontmatter тепер спрацьовують при запуску через `--agent` | 2.1.116 |
| Non-existent `commit` skill fix | Виправлено виклик неіснуючого `commit` skill та показ "Unknown skill: commit" для користувачів без кастомної `/commit` команди | 2.1.111 |
| `/goal` command | Встановлення completion condition — Claude продовжує працювати across turns поки goal досягнуто; live overlay з elapsed/turns/tokens | 2.1.139 |
| Agent view (Research Preview) | Єдиний список всіх Claude Code сесій через `claude agents` | 2.1.139 |
| `Skill(name *)` wildcard fix | Виправлено `Skill(name *)` permission rules — wildcard form тепер працює як prefix match | 2.1.139 |
| Skill argument regex metacharacters fix | Виправлено skill argument names з regex metacharacters що breaking argument substitution | 2.1.139 |
| Agent tool `subagent_type` matching improvement | `subagent_type` matching тепер case- та separator-insensitive (напр. `"Code Reviewer"` resolves до `code-reviewer`) | 2.1.140 |
| `claude agents --cwd <path>` | Scope session list до specific directory | 2.1.141 |
| `claude agents` finished+background shell | Агенти що finished work але leave background shell running тепер move to Completed замість Working | 2.1.141 |
| `x` on subagent prompt typing fix | Виправлено `x` на selected subagent в agent panel що typing into prompt замість stopping agent | 2.1.141 |
| Subagents skill discovery fix | Виправлено subagents що не discovering project, user, або plugin skills через Skill tool | 2.1.133 |
| Plugin.json `skills` hiding default fix | Виправлено `skills` entry в `plugin.json` що ховав plugin's default `skills/` directory; listing file path тепер показує error замість silent failure | 2.1.136 |
| `AskUserQuestion` multi-select fix | Виправлено `AskUserQuestion` що discarding multi-select answers коли supplied як array | 2.1.136 |
| `CronList` output fix | Виправлено `CronList` output що missing qualifiers та scheduled prompt | 2.1.136 |
| "Chat about this" AskUserQuestion fix | Виправлено "Chat about this" на `AskUserQuestion` dialog що erasing question text | 2.1.136 |
| Skill tool headless permission error fix | Виправлено Skill tool що failing з permission error в headless mode (регресія з v2.1.141) | 2.1.144 |
| `context: fork` skill infinite loop fix | Виправлено infinite loop де skill з `context: fork` міг повторно invocate саму себе замість виконання | 2.1.145 |
| `claude agents` pinned sessions `Ctrl+T` | `Ctrl+T` в `claude agents` pin-ить background session — залишається живою при idle, рестартується in-place для оновлень, та shed-иться під memory pressure лише після non-pinned sessions | 2.1.147 |
| `CLAUDE_CODE_SUBAGENT_MODEL` teammate processes fix | Виправлено `CLAUDE_CODE_SUBAGENT_MODEL` що не застосовувався до teammate processes spawned agent teams | 2.1.147 |
| Argument-hint after Tab-completion fix | Виправлено argument-hint та progressive arg suggestions що не з'являлись після Tab-completing skill чий frontmatter `name:` відрізняється від directory basename | 2.1.149 |

## Поля frontmatter

| Поле | Опис | Версія |
|------|------|--------|
| `name` | Ім'я навички | — |
| `description` | Опис | — |
| `model` | Модель | — |
| `agent` | Тип агента | 2.1.0 |
| `effort` | Рівень зусилля | 2.1.80 |
| `context` | `fork` або `main` | 2.1.0 |
| `allowed-tools` | Дозволені інструменти | — |
| `user-invocable` | Видимість (за замовч. true) | 2.1.0 |
| `argument-hint` | Підказка аргументів | 1.0.54 |
| `paths:` | Glob патерни для умовного завантаження | 2.1.0 |
| `once` | Одноразове виконання (хуки) | 2.1.0 |
| `memory` | Постійна пам'ять агента | 2.1.33 |
| `maxTurns` | Макс. поворотів (агенти) | 2.1.78 |
| `disallowedTools` | Заблоковані інструменти (агенти) | 2.0.30 |
| `permissionMode` | Режим дозволів (агенти) | 2.0.43 |
| `background` | Завжди фоновий (агенти) | 2.1.49 |
| `initialPrompt` | Авто-перший промпт (агенти) | 2.1.83 |
| `skills` | Навички для субагентів | 2.0.43 |
| `tools` | Обмеження інструментів субагентів | 2.1.33 |
| `isolation` | `worktree` для ізольованої роботи | 2.1.49 |
| `keep-coding-instructions` | Зберегти coding інструкції (output style) | 2.0.37 |

## Кастомні агенти

| Можливість | Опис | Версія |
|-----------|------|--------|
| `/agents` | Список агентів | 1.0.60 |
| `.claude/agents/*.md` | Файли агентів | 1.0.60 |
| `--agent <name>` | Запуск з конкретним агентом | 2.0.59 |
| `agent` setting | Головний потік з агентом | 2.0.59 |
| Agent teams | Багатоагентна співпраця (research preview) | 2.1.32 |
| Кастомізація моделі | Кастомна модель для агента | 1.0.64 |
| Фонові агенти | Агенти працюють у фоні | 2.0.60 |
| Named subagents в @-mention | Typeahead підказки для іменованих агентів | 2.1.89 |
| `/agents` running indicator | `● N running` поруч з типами агентів що мають живі subagent instances | 2.1.97 |
| `/agents` tabbed layout | Running tab (живі subagents) + Library tab (Run agent, View running) | 2.1.98 |

## Slash команди

| Можливість | Опис | Версія |
|-----------|------|--------|
| `.claude/commands/*.md` | Кастомні slash-команди | 0.2.31 |
| Namespace | `/frontend:component` для піддиректорій | 1.0.45 |
| `$0`, `$1`, `$ARGUMENTS[0]` | Доступ до аргументів | 2.1.18, 2.1.19 |
| `@-mention` у args | Файли в аргументах | 2.1.0 |
| Thinking keywords | `think` в промпті команди | 1.0.30 |
| Bash output | Виконання bash в командах | 1.0.30 |
| Model field | Модель для команди | 1.0.57 |
| Autocomplete | `/` будь-де в input | 2.1.0 |

## Правила (Rules)

| Можливість | Опис | Версія |
|-----------|------|--------|
| `.claude/rules/*.md` | Правила з умовним завантаженням | 2.0.64 |
| `paths:` frontmatter | Glob патерни | 2.1.83 |

## Вбудовані команди

| Команда | Опис | Версія |
|---------|------|--------|
| `/help` | Допомога | — |
| `/model` | Вибір моделі | — |
| `/config` / `/settings` | Налаштування | — |
| `/context` | Діагностика контексту | 1.0.86 |
| `/compact` | Стиснення контексту | — |
| `/clear` | Очистити сесію | — |
| `/cost` | Витрати | — |
| `/permissions` | Управління дозволами | 1.0.7 |
| `/memory` | Редагування пам'яті | 1.0.94 |
| `/mcp` | MCP управління | — |
| `/status` | Статус сесії | 0.2.105 |
| `/usage` | Ліміти плану | 2.0.0 |
| `/stats` | Статистика | 2.0.64 |
| ~~`/export`~~ | [ЗАСТАРІЛО] використовуйте `/export-v2` | 1.0.44, 2.2.0 |
| `/copy` | Копіювання коду | 2.1.63 |
| `/rewind` | Скасувати зміни коду | 2.0.0 |
| `/branch` (/fork) | Форк розмови | 2.0.64 |
| `/resume` | Відновити сесію | — |
| `/rename` | Перейменувати сесію | 2.0.64 |
| `/todos` | Список задач | 1.0.94 |
| ~~`/vim`~~ | [ВИДАЛЕНО] — перемикайте через `/config` → Editor mode | 0.2.34, 2.1.92 |
| `/theme` | Вибір теми | — |
| `/color` | Колір панелі | 2.1.70 |
| `/keybindings` | Кастомні скорочення | 2.1.18 |
| `/terminal-setup` | Налаштування терміналу | — |
| `/voice` | Голосовий ввід | — |
| `/effort` | Рівень зусилля | 2.1.76 |
| `/loop` | Повторювана задача | 2.1.71 |
| `/plan` | План-режим | 2.1.0 |
| `/debug` | Debug логування | 2.1.30 |
| `/simplify` | ~~Спрощення коду~~ → `/code-review` (тепер invoke-є `/code-review --fix`) | 2.1.63, 2.1.147, 2.1.152 |
| `/batch` | Пакетна обробка | 2.1.63 |
| `/skills` | Список навичок | — |
| `/plugin` | Управління плагінами | 2.0.12 |
| `/reload-plugins` | Перезавантажити плагіни | 2.1.69 |
| `/agents` | Список агентів | 1.0.60 |
| `/doctor` | Діагностика | 1.0.51 |
| `/sandbox` | Інфо про sandbox | — |
| `/remote-control` | Remote Control | 2.1.51 |
| `/teleport` | Телепорт сесії | 2.1.0 |
| `/extra-usage` | ~~Додаткове використання~~ → `/usage-credits` (стара назва ще працює) | — |
| `/usage-credits` | Usage credits (нова назва замість `/extra-usage`) | 2.1.144 |
| `/feedback` | Зворотний зв'язок | — |
| `/security-review` | Аудит безпеки | 2.1.70 |
| ~~`/output-style`~~ | [ЗАСТАРІЛО] → /config | 2.1.73 |
| `/ide` | Встановлення VS Code extension | — |
| `/translate` | Переклад в чаті (40+ мов) | 2.2.0 |
| `/export-v2` | Експорт розмови (новий) | 2.2.0 |
| `/release-notes` | Реліз-ноти | 0.2.37 |
| `/code-review` | Code review з обраним рівнем зусилля (напр. `/code-review high`); `--comment` для inline GitHub PR comments; `--fix` для автоматичного застосування знахідок до working tree | 2.1.152 |
| `/powerup` | Інтерактивні уроки з анімованими демо для вивчення можливостей Claude Code | 2.1.90 |
| `/team-onboarding` | Генерація teammate ramp-up guide з локального використання Claude Code | 2.1.101 |
| `/proactive` | Аліас для `/loop` | 2.1.105 |
| `/recap` | Контекст при поверненні до сесії; також configurable через `/config` | 2.1.108 |
| `/undo` | Аліас для `/rewind` | 2.1.108 |
| `/focus` | Окремий toggle focus view (відокремлено від `Ctrl+O`) | 2.1.110 |
| Вбудовані команди через Skill tool | Модель може викликати вбудовані slash-команди (`/init`, `/review`, `/security-review`) через Skill tool | 2.1.108 |
| `/reload-skills` | Перезавантаження skill directories без перезапуску сесії | 2.1.152 |
| Skill frontmatter `disallowed-tools` | Skills та slash commands можуть встановлювати `disallowed-tools` в frontmatter для видалення tools під час активного skill | 2.1.152 |
| ~~`/tag`~~ | [ВИДАЛЕНО] | 2.1.92 |
