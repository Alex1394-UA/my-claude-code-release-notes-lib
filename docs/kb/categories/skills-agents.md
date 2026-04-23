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
| Agent frontmatter `hooks` | `hooks:` з agent frontmatter тепер спрацьовують при запуску через `--agent` | 2.1.116 |
| Non-existent `commit` skill fix | Виправлено виклик неіснуючого `commit` skill та показ "Unknown skill: commit" для користувачів без кастомної `/commit` команди | 2.1.111 |

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
| `/simplify` | Спрощення коду | 2.1.63 |
| `/batch` | Пакетна обробка | 2.1.63 |
| `/skills` | Список навичок | — |
| `/plugin` | Управління плагінами | 2.0.12 |
| `/reload-plugins` | Перезавантажити плагіни | 2.1.69 |
| `/agents` | Список агентів | 1.0.60 |
| `/doctor` | Діагностика | 1.0.51 |
| `/sandbox` | Інфо про sandbox | — |
| `/remote-control` | Remote Control | 2.1.51 |
| `/teleport` | Телепорт сесії | 2.1.0 |
| `/extra-usage` | Додаткове використання | — |
| `/feedback` | Зворотний зв'язок | — |
| `/security-review` | Аудит безпеки | 2.1.70 |
| ~~`/output-style`~~ | [ЗАСТАРІЛО] → /config | 2.1.73 |
| `/ide` | Встановлення VS Code extension | — |
| `/translate` | Переклад в чаті (40+ мов) | 2.2.0 |
| `/export-v2` | Експорт розмови (новий) | 2.2.0 |
| `/release-notes` | Реліз-ноти | 0.2.37 |
| `/powerup` | Інтерактивні уроки з анімованими демо для вивчення можливостей Claude Code | 2.1.90 |
| `/team-onboarding` | Генерація teammate ramp-up guide з локального використання Claude Code | 2.1.101 |
| `/proactive` | Аліас для `/loop` | 2.1.105 |
| `/recap` | Контекст при поверненні до сесії; також configurable через `/config` | 2.1.108 |
| `/undo` | Аліас для `/rewind` | 2.1.108 |
| `/focus` | Окремий toggle focus view (відокремлено від `Ctrl+O`) | 2.1.110 |
| Вбудовані команди через Skill tool | Модель може викликати вбудовані slash-команди (`/init`, `/review`, `/security-review`) через Skill tool | 2.1.108 |
| ~~`/tag`~~ | [ВИДАЛЕНО] | 2.1.92 |
