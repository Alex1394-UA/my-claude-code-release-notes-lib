# Повний гід опцій Claude Code

> **Останній оброблений реліз:** 2.1.85 (2026-03-27)
> **Створено:** 2026-03-27
> **Формат підтримки:** цей файл оновлюється вручну або через LLM

---

## Інструкція для LLM-асистента (читати при оновленні)

```
Я — файл-довідник з опціями Claude Code. Мета — дати користувачу повну картину
всіх доступних налаштувань, прапорців, змінних середовища та можливостей CLI.

ЯКЩО ТОБІ ДАЛИ НОВІ РЕЛІЗ-НОТИ ДЛЯ ОНОВЛЕННЯ:
1. Знайди поле "Останній оброблений реліз" вище — це твоя точка відліку.
2. Прочитай нові реліз-ноти (версії ПОКИ ЩО не включені).
3. Для кожної нової версії витягни:
   - Нові CLI-прапорці та команди → додай у розділ "CLI команди та прапорці"
   - Нові settings.json ключі → додай у розділ "Налаштування settings.json"
   - Нові змінні середовища → додай у розділ "Змінні середовища"
   - Нові клавіатурні скорочення → додай у розділ "Клавіатурні скорочення"
   - Нові можливості хуків → додай у розділ "Хуки"
   - Нові MCP-можливості → додай у розділ "MCP"
   - Нові можливості навичок/агентів → додай у розділ "Навички та Агенти"
   - Нові можливості плагінів → додай у розділ "Плагіни"
   - Нові VS Code / IDE функції → додай у розділ "VS Code / IDE"
   - Нові SDK-можливості → додай у розділ "SDK"
   - Усе що стосується Windows → додай у "Windows-специфічне" ТА в відповідний основний розділ
4. Онови поле "Останній оброблений реліз" на нову версію.
5. Збережи файл без зміни структури та форматування.
6. НЕ видаляй існуючі записи — лише додавай нові.
7. Якщо опцію видалено (deprecated) — додай помітку ~~закреслення~~ або [DEPRECATED].
```

---

## Зміст

1. [Основні можливості](#1-основні-можливості)
2. [CLI команди та прапорці](#2-cli-команди-та-прапорці)
3. [Налаштування settings.json](#3-налаштування-settingsjson)
4. [Змінні середовища](#4-змінні-середовища)
5. [Клавіатурні скорочення](#5-клавіатурні-скорочення)
6. [MCP (Model Context Protocol)](#6-mcp-model-context-protocol)
7. [Хуки (Hooks)](#7-хуки-hooks)
8. [Навички, Агенти та Команди](#8-навички-агенти-та-команди)
9. [Плагіни (Plugins)](#9-плагіни-plugins)
10. [VS Code / IDE](#10-vs-code--ide)
11. [SDK](#11-sdk)
12. [Windows-специфічне](#12-windows-специфічне)

---

## 1. Основні можливості

### Режими мислення (Thinking Mode)
- `think` / `think harder` / `ultrathink` — ввімкнення thinking mode (з 0.2.44)
- Tab — перемикання thinking (sticky між сесіями, з 2.0.0)
- Alt+T — перемикання thinking (з 2.0.71)
- `/t` — тимчасове вимкнення thinking для одного промпту (з 1.0.115)
- `/config` — постійне налаштування thinking (з 2.0.67)
- За замовчуванням увімкнено для Opus 4.5+ (з 2.0.67)
- `DISABLE_INTERLEAVED_THINKING` — вимкнути interleaved thinking (з 1.0.1)

### Рівні зусилля (Effort Levels)
- `/effort auto|low|medium|high` — встановлення рівня зусилля (з 2.1.72)
- Символи: ○ (low), ◐ (medium), ● (high) (з 2.1.72)
- `ultrathink` — high effort для наступного повороту (з 2.1.68)
- `/effort` працює поки Claude відповідає (з 2.1.73)
- За замовчанням Opus 4.6 = medium для Max/Team (з 2.1.68)
- Підтримка в skill/agent/command frontmatter (`effort:`) (з 2.1.80)

### План-режим (Plan Mode)
- `/plan [опис]` — вхід у план-режим з опціональним описом (з 2.1.72)
- Shift+Tab — швидкий вибір "auto-accept edits" (з 2.1.2)
- Зворотний зв'язок при відхиленні плану (з 2.0.57)
- План-режим виживає після compact (з 2.1.20)
- `showClearContextOnPlanAccept: true` — показувати "clear context" (з 2.1.81)

### Fast Mode
- Опус 4.6 Fast mode — швидший вивід, та сама модель (з 2.1.36)
- `/fast` — ввімкнення (з 2.1.36)
- Alt+P (Win/Linux), Option+P (macOS) — перемикання моделі під час вводу (з 2.0.65)

### Моделі
- `/model` — вибір моделі (з 1.0.111, валідація з 1.0.111)
- Opus 4, 4.1 — видалені з першого API, замінені на 4.6 (з 2.1.68)
- Sonnet 4.6 доступна (з 2.1.45)
- Haiku 4.5 — автоматично Sonnet в plan mode, Haiku в execution (з 2.0.17)
- 1M контекст для Opus 4.6 за замовчуванням для Max/Team/Enterprise (з 2.1.75)
- `modelOverrides` — кастомні ID моделей для провайдерів (з 2.1.73)
- Bedrock/Vertex/Foundry — Opus 4.6 за замовчуванням (з 2.1.73)

### Контекст та пам'ять
- Auto-compacting — автоматичне стиснення контексту (з 0.2.47, миттєве з 2.0.64)
- `/compact` — ручне стиснення (з 2.0.64, Ctrl+O транскрипт з 1.0.113)
- `/context` — діагностика контексту з порадами (з 1.0.86, actionable suggestions з 2.1.74)
- "Summarize from here" — часткове стиснення (з 2.1.32)
- Auto memory — автоматичне збереження контексту в пам'ять (з 2.1.32)
- `/memory` — пряме редагування пам'яті (з 1.0.94)
- `#` — [DEPRECATED] швидкий запис у пам'ять (видалено з 2.0.70)
- `autoMemoryDirectory` — кастомна директорія для auto-memory (з 2.1.74)

### Інтерактивність
- Enter — черга повідомлень поки Claude працює (з 0.2.75)
- Реальнечасне steer-повідомлення під час роботи (з 1.0.108)
- AskUserQuestion — інтерактивні питання (з 2.0.21)
- Ctrl+B — фоновий запуск bash/агентів (з 1.0.71, уніфіковано з 2.1.0)
- Ctrl+F → Ctrl+X Ctrl+K — зупинка фонових агентів (з 2.1.49)
- Background agents — агенти працюють у фоні (з 2.0.60)
- Escape — переривання Claude (з 0.2.70, подвійний для агентів з 2.1.83)

### Інше
- `/export` — експорт розмови (з 1.0.44)
- `/copy [N]` — копіювання коду (з 2.1.59), індекс N з 2.1.77
- `/copy` з `w` — запис у файл замість clipboard (з 2.1.71)
- "Always copy full response" опція в /copy (з 2.1.63)
- `/stats` — статистика використання з датами (з 2.0.64, `r` для фільтру з 2.1.6)
- `/usage` — ліміти плану (з 2.0.0)
- `/status` — статус сесії (працює під час відповіді з 2.1.83)
- `/doctor` — діагностика проблем з валідацією (з 1.0.51)
- `/debug` — увімкнення debug-логування посеред сесії (з 2.1.30)
- `/color` — колір панелі вводу (з 2.1.70)
- `/statusline` — кастомний статус-бар (з 1.0.71)
- IS_DEMO env — приховування email/org для стрімінгу (з 2.1.0)
- Context window display у статус-барі (з 2.0.65)

---

## 2. CLI команди та прапорці

### Основні команди
| Команда | Опис | З релізу |
|---------|------|----------|
| `claude` | Інтерактивний запуск | — |
| `claude -p` / `--print` | Одноразовий вивід (non-interactive) | — |
| `claude -p --output-format=stream-json` | Стрімінговий JSON вивід | 0.2.66 |
| `claude --continue` / `-c` | Продовжити останню сесію | 0.2.93 |
| `claude --resume` / `-r` | Вибір сесії для продовження | 0.2.93 |
| `claude --resume <name>` | Продовжити іменовану сесію | 2.0.64 |
| `claude --resume <session-id>` | Продовжити за ID | 2.0.64 |
| `claude --fork-session` | Форк сесії | 2.1.32 |
| `claude --session-id` | Кастомний ID сесії | 2.1.73 |
| `claude --from-pr <N>` | Сесія пов'язана з PR | 2.1.27 |
| `claude --worktree` / `-w` | Ізольований git worktree | 2.1.49 |
| `claude --bare -p` | Скриптовий режим без hooks/MCP/skills | 2.1.81 |

### Запуск та аутентифікація
| Прапорець | Опис | З релізу |
|-----------|------|----------|
| `--model <model>` | Вибір моделі | — |
| `--effort <level>` | Рівень зусилля | 2.1.31 |
| `--agent <name>` | Використати конкретного агента | 2.0.59 |
| `--agents <json>` | Додаткові агенти | 2.0.0 |
| `--dangerously-skip-permissions` | Пропустити всі дозволи | — |
| `--settings <file>` | Завантажити налаштування з файлу | 1.0.61 |
| `--setting-sources` | Обмежити джерела налаштувань | — |
| `--system-prompt` | Кастомний системний промпт | 1.0.55 |
| `--system-prompt-file` | Файл системного промпту | 1.0.55 |
| `--append-system-prompt` | Додати до системного промпту | 1.0.55 |
| `--append-system-prompt-file` | Файл для додавання | 1.0.55 |
| `--add-dir <path>` | Додаткова робоча директорія | 1.0.18 |
| `--mcp-config <file>` | Файл MCP конфігурації | 0.2.75 |
| `--mcp-config file1 file2` | Кілька MCP конфігів | 2.0.73 |
| `--tools` | Обмежити інструменти (інтерактивний) | 2.1.0 |
| `--disallowedTools` | Заблокувати інструменти | 0.2.82 |
| `--disable-slash-commands` | Вимкнути slash-команди | 2.0.60 |
| `--mcp-debug` | MCP debug режим | 0.2.31 |
| `--debug` | Debug режим (з 2.0.117 → файл) | 2.0.117 |
| `--verbose` | Детальний вивід | — |
| `--no-interactive` | [DEPRECATED] використовуйте `-p` | — |
| `--init` / `--init-only` / `--maintenance` | Setup hook подія | 2.1.10 |
| `--name` / `-n` | Ім'я сесії при старті | 2.1.76 |
| `--channels` | Канали MCP (research preview) | 2.1.80 |
| `--plugin-dir <path>` | Директорія локальних плагінів | 2.1.69 |
| `--console` | Anthropic Console аутентифікація | 2.1.79 |
| `--teleport` | Телепорт сесії | 2.1.47 |
| `--replay-user-messages` | Повторення повідомлень користувача | 1.0.86 |
| `--include-partial-messages` | Часткове стрімінг (SDK) | 1.0.109 |

### Команди управління
| Команда | Опис | З релізу |
|---------|------|----------|
| `claude mcp add` | Інтерактивне додавання MCP | 0.2.32 |
| `claude mcp add-from-claude-desktop` | Імпорт MCP з Claude Desktop | 0.2.36 |
| `claude mcp add-json <n> <json>` | MCP як JSON рядок | 0.2.36 |
| `claude mcp serve` | MCP server mode | 2.0.33 |
| `claude mcp list` | Список MCP серверів | — |
| `claude mcp get` | Інфо про MCP сервер | — |
| `claude mcp enable/disable [name]` | Увімкнути/вимкнути MCP | 2.0.60 |
| `claude mcp reconnect [name]` | Перепідключення MCP | 2.1.50 |
| `claude auth login` | Логін (клі) | 2.1.41 |
| `claude auth login --console` | Console auth | 2.1.79 |
| `claude auth status` | Статус аутентифікації | 2.1.41 |
| `claude auth logout` | Вихід | 2.1.41 |
| `claude plugin install` | Встановити плагін | 2.0.12 |
| `claude plugin validate` | Валідація плагіна | 2.0.12 |
| `claude agents` | Список всіх агентів | 2.1.49 |
| `claude config` | [DEPRECATED] використовуйте settings.json | 1.0.7 |
| `claude install` | Встановлення/оновлення | — |
| `claude install --force` | Примусове оновлення | 2.1.0 |
| `claude doctor` | Діагностика | 1.0.51 |
| `claude update` | Оновлення | — |
| `claude remote-control` | Remote Control підсистема | 2.1.51 |

---

## 3. Налаштування settings.json

> Розташування: `~/.claude/settings.json` (user), `.claude/settings.json` (project), `.claude/settings.local.json` (local)
> Зміни набувають чинності миттєво (з 1.0.90)

### Загальні налаштування
| Ключ | Опис | З релізу |
|------|------|----------|
| `language` | Мова відповідей Claude (напр. "japanese", "ukrainian") | 2.1.0 |
| `theme` | Тема інтерфейсу | — |
| `model` | Модель за замовчуванням | — |
| `verbose` | Детальний вивід | — |
| `showTurnDuration` | Показувати тривалість повороту | 2.1.7 |
| `spinnerVerbs` | Кастомні дієслова спіннера | 2.1.23 |
| `spinnerTipsEnabled` | Підказки в спіннері | 1.0.112 |
| `spinnerTipsOverride` | Кастомні підказки (`{tips: [], excludeDefault: true}`) | 2.1.45 |
| `reduceMotion` | Режим зменшення анімації | 2.1.48 |
| `releaseChannel` | "stable" або "latest" | 2.1.3 |
| `IS_DEMO` | Приховати email/org | 2.1.0 |
| `attribution` | Кастомний текст замість "Co-Authored-By" | 2.0.62 |
| `companyAnnouncements` | Оголошення при старті | 2.0.32 |
| `feedbackSurveyRate` | Частота опитування якості (enterprise) | 2.1.76 |
| `includeGitInstructions` | Показувати git інструкції | 2.1.69 |
| `promptSuggestions` | Підказки промптів | 2.0.71 |
| `forceLoginMethod` | Обійти вибір методу логіну | 1.0.32 |
| `disableAllHooks` | Вимкнути всі хуки | 2.0.30 |
| `disabledTools` | [DEPRECATED] → `disallowedTools` | — |
| `autoMemoryDirectory` | Кастомна директорія пам'яті | 2.1.74 |

### Налаштування дозволів
| Ключ | Опис | З релізу |
|------|------|----------|
| `permissions.defaultMode` | Режим за замовчуванням | 0.2.67 |
| `permissions.disableBypassPermissionsMode` | Заблокувати bypass режим | — |
| `permissions.deny` | Правила відмови | — |
| `permissions.allow` | Правила дозволу | — |
| `disallowedTools` | Заблоковані інструменти | 0.2.82 |

### Налаштування контексту
| Ключ | Опис | З релізу |
|------|------|----------|
| `autoCompact` | Автоматичне стиснення | 0.2.47 |
| `cleanupPeriodDays` | Дні до очищення | 0.2.117 |
| `plansDirectory` | Директорія планів | 2.1.9 |

### Налаштування MCP
| Ключ | Опис | З релізу |
|------|------|----------|
| `enabledPlugins` | Увімкнені плагіни | — |
| `extraKnownMarketplaces` | Додаткові marketplace-джерела | 2.0.12 |
| `allowedMcpServers` | [Managed] Дозволені MCP сервери | 2.0.21 |
| `deniedMcpServers` | [Managed] Заблоковані MCP сервери | 2.1.85 |
| `strictKnownMarketplaces` | Обмеження marketplace (hostPattern, pathPattern) | 2.1.69 |

### Налаштування bash/sandbox
| Ключ | Опис | З релізу |
|------|------|----------|
| `sandbox.enabled` | Увімкнути sandbox (Linux/Mac) | 2.0.24 |
| `sandbox.failIfUnavailable` | Помилка якщо sandbox недоступний | 2.1.83 |
| `sandbox.allowWrite` | Дозволити запис у `denyRead` зонах | 2.1.77 |
| `sandbox.allowRead` | Дозволити читання у `denyRead` зонах | 2.1.78 |
| `sandbox.excludedCommands` | Команди поза sandbox | 2.0.30 |
| `sandbox.enableWeakerNetworkIsolation` | Слабша network ізоляція (macOS MITM) | 2.1.69 |
| `allowUnsandboxedCommands` | Дозволити команди поза sandbox | 2.0.30 |

### Налаштування MCP Search
| Ключ | Опис | З релізу |
|------|------|----------|
| `auto` / `auto:N` | Автоматичне ввімкнення при N% контексту | 2.1.7, 2.1.9 |

### Налаштування для Managed/Enterprise
| Ключ | Опис | З релізу |
|------|------|----------|
| `pluginTrustMessage` | Повідомлення довіри плагінів | 2.1.69 |
| `allowedChannelPlugins` | Allowlist канал-плагінів | 2.1.80 |
| `permissions.defaultMode` | Не застосовується в Remote Control | 2.1.70 |

---

## 4. Змінні середовища

### API та аутентифікація
| Змінна | Опис | З релізу |
|--------|------|----------|
| `ANTHROPIC_API_KEY` | API ключ | — |
| `ANTHROPIC_BASE_URL` | Базовий URL (проксі) | — |
| `ANTHROPIC_AUTH_TOKEN` | Auth токен (без Proxy-Authorization з 1.0.37) | — |
| `ANTHROPIC_BETAS` | Beta-заголовки (працює з Haiku з 2.1.78) | — |
| `ANTHROPIC_LOG` | Рівень логування (`debug` замість `DEBUG=true`) | 0.2.125 |
| `ANTHROPIC_DEFAULT_SONNET_MODEL` | Кастомна Sonnet модель | 1.0.88 |
| `ANTHROPIC_DEFAULT_OPUS_MODEL` | Кастомна Opus модель | 1.0.88 |
| `ANTHROPIC_DEFAULT_HAIKU_MODEL` | Кастомна Haiku модель | 2.0.17 |
| `ANTHROPIC_DEFAULT_*_MODEL_SUPPORTS` | Перевизначення можливостей моделей (3p) | 2.1.84 |
| `ANTHROPIC_DEFAULT_*_MODEL_NAME` | Кастомна назва в /model picker | 2.1.84 |
| `ANTHROPIC_DEFAULT_*_MODEL_DESCRIPTION` | Кастомний опис в /model picker | 2.1.84 |
| `ANTHROPIC_CUSTOM_MODEL_OPTION` | Кастомний запис в /model picker | 2.1.78 |
| `ANTHROPIC_CUSTOM_MODEL_OPTION_NAME` | Назва кастомного запису | 2.1.78 |
| `ANTHROPIC_CUSTOM_MODEL_OPTION_DESCRIPTION` | Опис кастомного запису | 2.1.78 |
| `AWS_BEARER_TOKEN_BEDROCK` | Bedrock API ключ | 1.0.51 |
| `ANTHROPIC_BEDROCK_BASE_URL` | Bedrock базовий URL | 2.1.32 |
| `CLOUD_ML_REGION` | Vertex AI регион | 1.0.8 |
| `NODE_EXTRA_CA_CERTS` | Додаткові CA сертифікати | 1.0.40 |

### Таймаути та ліміти
| Змінна | Опис | З релізу |
|--------|------|----------|
| `BASH_DEFAULT_TIMEOUT_MS` | Таймаут bash за замовчуванням | 1.0.108 |
| `BASH_MAX_TIMEOUT_MS` | Максимальний таймаут bash | 1.0.108 |
| `MCP_TIMEOUT` | Таймаут MCP сервера | 0.2.41 |
| `MCP_TOOL_TIMEOUT` | Таймаут MCP інструменту | 1.0.8 |
| `CLAUDE_CODE_API_KEY_HELPER_TTL_MS` | TTL для apiKeyHelper | 0.2.117 |
| `CLAUDE_CODE_EXIT_AFTER_STOP_DELAY` | Автовихід SDK після idle | 2.1.35 |
| `CLAUDE_STREAM_IDLE_TIMEOUT_MS` | Стрімінговий idle watchdog (90s) | 2.1.84 |
| `CLAUDE_CODE_SESSIONEND_HOOKS_TIMEOUT_MS` | Таймаут SessionEnd хуків | 2.1.74 |
| `CLAUDE_CODE_PLUGIN_GIT_TIMEOUT_MS` | Git timeout для плагінів (120s) | 2.1.51 |

### Поведінка та функціональність
| Змінна | Опис | З релізу |
|--------|------|----------|
| `CLAUDE_CONFIG_DIR` | Директорія конфігурації | 1.0.6 |
| `XDG_CONFIG_HOME` | XDG директорія конфігурації | 1.0.28 |
| `CLAUDE_BASH_MAINTAIN_PROJECT_WORKING_DIR` | Фіксувати робочу директорію | 1.0.18 |
| `CLAUDE_BASH_NO_LOGIN` | Пропустити login shell | 1.0.124 |
| `CLAUDE_CODE_SHELL` | Перевизначити auto-detected shell | 2.0.65 |
| `CLAUDE_BASH_NO_LOGIN` | Skip login shell (за замовч. з 2.1.51) | 1.0.124 |
| `CLAUDE_CODE_DISABLE_GIT_INSTRUCTIONS` | Прибрати git інструкції з промпту | 2.1.69 |
| `CLAUDE_CODE_DISABLE_NONESSENTIAL_TRAFFIC` | Вимкнути release notes, telemetry | 2.0.17 |
| `CLAUDE_CODE_DISABLE_NONSTREAMING_FALLBACK` | Вимкнути non-streaming fallback | 2.1.83 |
| `CLAUDE_CODE_DISABLE_1M_CONTEXT` | Вимкнути 1M контекст | 2.1.50 |
| `CLAUDE_CODE_DISABLE_EXPERIMENTAL_BETAS` | Прибрати beta заголовки | 2.1.25 |
| `CLAUDE_CODE_DISABLE_TERMINAL_TITLE` | Не встановлювати title терміналу | — |
| `CLAUDE_CODE_DISABLE_BACKGROUND_TASKS` | Вимкнути фонові задачі | 2.1.4 |
| `CLAUDE_CODE_DISABLE_CRON` | Зупинити cron задачі | 2.1.72 |
| `CLAUDE_CODE_DISABLE_AUTOUPDATER` | Вимкнути автооновлення | 2.0.36 |
| `CLAUDE_CODE_DISABLE_DEEP_LINK_REGISTRATION` | Не реєструвати claude-cli:// | 2.1.83 |
| `CLAUDE_CODE_SIMPLE` | Мінімальний режим (без skills/MCP/hooks) | 2.1.49 |
| `CLAUDE_CODE_SUBPROCESS_ENV_SCRUB` | Прибрати credential-їз subprocess | 2.1.83 |
| `CLAUDE_CODE_AUTO_CONNECT_IDE` | Вимкнути IDE auto-connect (false) | 1.0.61 |
| `CLAUDE_CODE_SHELL_PREFIX` | Префікс для shell команд | 1.0.54 |
| `DISABLE_INTERLEAVED_THINKING` | Вимкнути interleaved thinking | 1.0.1 |
| `CLAUDE_CODE_FILE_READ_MAX_OUTPUT_TOKENS` | Ліміт файл читання | 2.1.0 |
| `CLAUDE_CODE_MAX_OUTPUT_TOKENS` | Макс output tokens | — |
| `ENABLE_TOOL_SEARCH` | Ввімкнути ToolSearch з BASE_URL | 2.1.72 |
| `ENABLE_CLAUDEAI_MCP_SERVERS` | Оп-out від claude.ai MCP (false) | 2.1.63 |
| `CLAUDE_CODE_ENABLE_TASKS` | Старий system задач (false) | 2.1.19 |
| `NO_PROXY` | Bypass proxy для вказаних hostnames | 1.0.93 |
| `CLAUDE_CODE_PROXY_RESOLVES_HOSTS` | Proxy DNS resolution (opt-in) | 2.0.55 |

### Шляхи та директорії
| Змінна | Опис | З релізу |
|--------|------|----------|
| `CLAUDE_CODE_TMPDIR` | Кастомна temp директорія | 2.1.5 |
| `CLAUDE_CODE_PLUGIN_CACHE_DIR` | Кеш плагінів | — |
| `CLAUDE_CODE_PLUGIN_SEED_DIR` | Seed директорія плагінів (`;` on Win) | 2.1.77 |
| `CLAUDE_CODE_ADDITIONAL_DIRECTORIES_CLAUDE_MD` | CLAUDE.md з --add-dir (`1`) | 2.1.20 |

### Телеметрія та OTEL
| Змінна | Опис | З релізу |
|--------|------|----------|
| `OTEL_LOG_TOOL_DETAILS` | Деталі інструментів в OTEL (`1`) | 2.1.85 |
| `HTTP_PROXY` / `HTTPS_PROXY` | Proxy для OTEL | 2.0.17 |

---

## 5. Клавіатурні скорочення

### Навігація та управління
| Скорочення | Дія | З релізу |
|------------|-----|----------|
| `Tab` | Автозаповнення файлів/команд | 0.2.47 |
| `Shift+Tab` | Auto-accept file edits (Alt+mode switch Win) | 0.2.47 |
| `Enter` | Черга повідомлень / прийняття підказки | 0.2.75, 2.0.70 |
| `Escape` | Переривання Claude | 0.2.70 |
| `Ctrl+C` | Переривання / вихід з -p | 2.1.79 |
| `Ctrl+D` | Вихід | — |
| `Ctrl+L` | Очистити екран + повний перемальовування | 2.1.83 |
| `Ctrl+U` | Видалити до початку рядка | 1.0.44→2.1.0 |
| `Ctrl+Y` | Вставити з kill ring | 2.0.49 |
| `Alt+Y` | Цикл через kill ring | 2.0.49 |
| `Ctrl+W` | Видалити слово назад | — |
| `Alt+B/F` | Навігація по словах | 2.0.11 |
| `Alt+Delete` | Видалити слово вперед | — |
| `Ctrl+K` | Видалити до кінця рядка | — |

### Інструменти та режими
| Скорочення | Дія | З релізу |
|------------|-----|----------|
| `Tab` (sticky) | Перемикання thinking mode | 2.0.0 |
| `Alt+T` | Перемикання thinking mode | 2.0.71 |
| `Alt+P` / `Option+P` | Перемикання моделі | 2.0.65 |
| `Alt+M` (Win) | Перемикання mode | — |
| `Shift+Enter` | Новий рядок | — |
| `Ctrl+B` | Фоновий запуск | 1.0.71 |
| `Ctrl+F` → `Ctrl+X Ctrl+K` | Зупинка фонових агентів | 2.1.49 |
| `Ctrl+G` / `Ctrl+X Ctrl+E` | Зовнішній редактор | 2.0.10, 2.1.83 |
| `Ctrl+Z` | Suspend (fg для відновлення) | 1.0.44 |
| `Ctrl+S` | Prompt stash | 2.0.30 |
| `Ctrl+R` | Історія команд (bash-стиль) | 2.1.17 |
| `Ctrl+O` | Транскрипт mode (was Ctrl+R до 1.0.113) | 1.0.113 |
| `/` в Ctrl+O | Пошук в транскрипті | 2.1.83 |
| `n`/`N` | Наступний/попередній результат пошуку | 2.1.83 |
| `↑`/`↓` | Історія повідомлень | — |
| `←`/`→` | Навігація в табах діалогів | 2.1.0 |

### Vim Mode
| Скорочення | Дія | З релізу |
|------------|-----|----------|
| `/vim` або `/config` | Увімкнути vim mode | 0.2.34 |
| `j`/`k` | Навігація меню | 0.2.61 |
| `c`, `f/F`, `t/T` | Vim motions | 1.0.48 |
| `;` / `,` | Повторити f/F/t/T | 2.1.0 |
| `y`/`Y`, `yy` | Yank | 2.1.0 |
| `p`/`P` | Paste | 2.1.0 |
| `>>` / `<<` | Indent/dedent | 2.1.0 |
| `J` | Join lines | 2.1.0 |
| Text objects | `iw`, `aw`, `i"`, `a"`, `i(`, `a(`, `i[`, `a[`, `i{`, `a{` | 2.1.0 |
| `u` | Undo в vim normal mode | 1.0.33 |
| `←`/`→` | Історія в vim normal mode | 2.1.20 |

### Voice Mode
| Скорочення | Дія | З релізу |
|------------|-----|----------|
| Space (push-to-talk) | Голосовий ввід | — |
| `voice:pushToTalk` | Перемикання клавіші через keybindings.json | 2.1.71 |

### Налаштування keybindings
- `/keybindings` — кастомізація скорочень (з 2.1.18)
- Файл: `~/.claude/keybindings.json`
- `chat:killAgents`, `chat:fastMode` — перемикуються (з 2.1.83)
- `chat:newline` — перемикається (з 2.1.47)
- `null` для скидання чордових прив'язок (з 2.1.84)

---

## 6. MCP (Model Context Protocol)

### Транспорти
| Тип | Опис | З релізу |
|-----|------|----------|
| stdio | Стандартний input/output | — |
| SSE | Server-Sent Events | 0.2.54 |
| Streamable HTTP | HTTP з підтримкою стрімінгу | 1.0.27 |
| HTTP (hooks) | HTTP-хуки замість shell | 2.1.63 |

### MCP налаштування
| Можливість | Опис | З релізу |
|------------|------|----------|
| `instructions` | Інструкції для MCP сервера | 1.0.52 |
| Custom headers | Заголовки для SSE | 1.0.106 |
| `headersHelper` | Скрипт для динамічних заголовків | 1.0.106 |
| `dynamicHeaders` | Динамічні заголовки (оновлення) | 1.0.64 |
| OAuth авторизація | Для SSE та HTTP | 1.0.27 |
| Pre-configured OAuth | `--client-id` / `--client-secret` | 2.1.30 |
| OAuth Authorization Server | Автоматичне відкриття | 1.0.35 |
| OAuth RFC 9728 | Protected Resource Metadata | 2.1.85 |
| OAuth CIMD (SEP-991) | Client ID Metadata Document | 2.1.81 |
| OAuth step-up | Повторна авторизація при insufficient_scope | 2.1.85 |
| `oauth.authServerMetadataUrl` | Кастомний URL metadata discovery | 2.1.69 |
| `enabledTools` / `disallowedTools` | Обмеження інструментів | — |
| `list_changed` | Динамічне оновлення tools/prompts/resources | 2.1.0 |
| `structuredContent` | Структурований вміст відповідей | 2.0.21 |
| MCP tool search auto mode | Авто-defer при >10% контексту | 2.1.7 |
| MCP descriptions cap | Обмеження описів до 2KB | 2.1.84 |
| MCP dedup | Локальні конфіги мають пріоритет | 2.1.84 |
| Elicitation | Інтерактивні MCP-запити | 2.1.76 |

### MCP scopes
| Scope | Файл | З релізу |
|-------|------|----------|
| User | `~/.claude.json` | — |
| Project | `.mcp.json` (committed) | 0.2.50 |
| Local | `.claude/settings.local.json` | 0.2.49 |

### claude.ai MCP Connectors
| Можливість | Опис | З релізу |
|------------|------|----------|
| Канали | claude.ai MCP connectors | 2.1.46 |
| `--channels` | Push повідомлення від MCP серверів | 2.1.80 |
| `allowedChannelPlugins` | Allowlist (managed) | 2.1.80 |

---

## 7. Хуки (Hooks)

> З документації: https://code.claude.com/docs/en/hooks

### Типи хуків
| Подія | Опис | З релізу |
|-------|------|----------|
| `PreToolUse` | Перед викликом інструменту | 1.0.38 |
| `PostToolUse` | Після виклику інструменту | 1.0.38 |
| `Stop` | При зупинці повороту | 1.0.41 |
| `SubagentStop` | При зупинці субагента | 1.0.41 |
| `Notification` | Сповіщення | 1.0.37 |
| `UserPromptSubmit` | При відправці промпту | 1.0.54 |
| `SessionStart` | При старті нової сесії | 1.0.59 |
| `SessionEnd` | При завершенні сесії | 1.0.85 |
| `PreCompact` | Перед стисненням контексту | 1.0.48 |
| `PostCompact` | Після стиснення | 2.1.76 |
| `ConfigChange` | При зміні конфігурації | 2.1.49 |
| `Setup` | При --init/--init-only/--maintenance | 2.1.10 |
| `InstructionsLoaded` | При завантаженні CLAUDE.md | 2.1.69 |
| `PermissionRequest` | При запиті дозволу | 2.0.45 |
| `TaskCreated` | При створенні задачі | 2.1.84 |
| `StopFailure` | При помилці API | 2.1.78 |
| `Elicitation` | При MCP elicitation запиті | 2.1.76 |
| `ElicitationResult` | При відповіді на elicitation | 2.1.76 |
| `CwdChanged` | При зміні робочої директорії | 2.1.83 |
| `FileChanged` | При зміні файлів | 2.1.83 |
| `TeammateIdle` | При idle teammate | 2.1.33 |
| `TaskCompleted` | При завершенні задачі | 2.1.33 |
| `SubagentStart` | При старті субагента | 2.0.43 |
| `WorktreeCreate` | При створенні worktree | 2.1.50 |
| `WorktreeRemove` | При видаленні worktree | 2.1.50 |
| `AgentOutput` | [UNSHIPPED] Вивід агента | 2.0.64 |

### Налаштування хуків
| Параметр | Опис | З релізу |
|----------|------|----------|
| `timeout` | Таймаут хука (default 10 min) | 1.0.41 |
| `once: true` | Одноразовий хук | 2.1.0 |
| `if` | Умова запуску (правила дозволів) | 2.1.85 |
| `model` | Кастомна модель для хука | 2.0.41 |
| `systemMessage` | Системне повідомлення хука | 1.0.64 |
| `type: "http"` | HTTP хук замість shell | 2.1.63 |

### Вихідні дані хуків
| Поле | Опис | З релізу |
|------|------|----------|
| `permissionDecision` | "allow" / "deny" / "ask" | 1.0.59 |
| `updatedInput` | Модифіковані інпути інструментів | 2.0.10 |
| `additionalContext` | Додатковий контекст для моделі | 2.1.9 |
| `hook_event_name` | Ім'я події хука | 1.0.41 |
| `tool_use_id` | ID виклику інструменту | 2.0.43 |
| `agent_id` / `agent_type` | Ідентифікатор агента | 2.1.69 |
| `transcript_path` | Шлях до транскрипту | — |
| `last_assistant_message` | Остання відповідь Claude | 2.1.47 |

---

## 8. Навички, Агенти та Команди

### Skills (Навички)
| Можливість | Опис | З релізу |
|------------|------|----------|
| `.claude/skills/` | Директорія навичок (user) | 2.0.20 |
| `.claude/skills/` | Директорія навичок (project) | — |
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
| Nested `.claude/skills/` | Автодискаверія в піддиректоріях | 2.1.6 |
| `paths:` frontmatter | Умовне завантаження | 2.1.0 |

### Frontmatter поля
| Поле | Опис | З релізу |
|------|------|----------|
| `name` | Ім'я навички | — |
| `description` | Опис | — |
| `model` | Модель | — |
| `agent` | Тип агента | 2.1.0 |
| `effort` | Рівень зусилля | 2.1.80 |
| `context` | `fork` або `main` | 2.1.0 |
| `allowed-tools` | Дозволені інструменти | — |
| `user-invocable` | Видимість (default true) | 2.1.0 |
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

### Custom Agents (Кастомні агенти)
| Можливість | Опис | З релізу |
|------------|------|----------|
| `/agents` | Список агентів | 1.0.60 |
| `.claude/agents/*.md` | Файли агентів | 1.0.60 |
| `--agent <name>` | Запуск з конкретним агентом | 2.0.59 |
| `agent` setting | Головний потік з агентом | 2.0.59 |
| Agent teams | Багатоагентна співпраця (research preview) | 2.1.32 |
| Model customization | Кастомна модель для агента | 1.0.64 |
| Background agents | Фонові агенти | 2.0.60 |

### Slash Commands (Кастомні команди)
| Можливість | Опис | З релізу |
|------------|------|----------|
| `.claude/commands/*.md` | Кастомні slash-команди | 0.2.31 |
| Namespace | `/frontend:component` для піддиректорій | 1.0.45 |
| `$0`, `$1`, `$ARGUMENTS[0]` | Доступ до аргументів | 2.1.18, 2.1.19 |
| `@-mention` у args | Файли в аргументах | 2.1.0 |
| Thinking keywords | `think` в промпті команди | 1.0.30 |
| Bash output | Виконання bash в командах | 1.0.30 |
| Model field | Модель для команди | 1.0.57 |
| Autocomplete | `/` будь-де в input | 2.1.0 |

### Rules
| Можливість | Опис | З релізу |
|------------|------|----------|
| `.claude/rules/*.md` | Правила з умовним завантаженням | 2.0.64 |
| `paths:` frontmatter | Glob патерни | 2.1.83 |

### Built-in Commands
| Команда | Опис | З релізу |
|---------|------|----------|
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
| `/export` | Експорт розмови | 1.0.44 |
| `/copy` | Копіювання коду | 2.1.63 |
| `/rewind` | Скасувати зміни коду | 2.0.0 |
| `/branch` (/fork) | Форк розмови | 2.0.64 |
| `/resume` | Відновити сесію | — |
| `/rename` | Перейменувати сесію | 2.0.64 |
| `/todos` | Список задач | 1.0.94 |
| `/vim` | Vim mode | 0.2.34 |
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
| `/output-style` | [DEPRECATED] → /config | 2.1.73 |
| `/ide` | Встановлення VS Code extension | — |
| `/release-notes` | Реліз-ноти | 0.2.37 |

---

## 9. Плагіни (Plugins)

> Документація: https://code.claude.com/docs/en/plugins

### Основні команди
| Команда | Опис | З релізу |
|---------|------|----------|
| `/plugin install` | Встановити плагін | 2.0.12 |
| `/plugin enable` | Увімкнути плагін | 2.0.12 |
| `/plugin disable` | Вимкнути плагін | 2.0.12 |
| `/plugin uninstall` | Видалити плагін | 2.0.12 |
| `/plugin validate` | Валідація структури | 2.0.12 |
| `/plugin marketplace` | Marketplace | 2.0.12 |
| `/plugin marketplace add` | Додати marketplace джерело | — |
| `/plugin marketplace update` | Оновити marketplace | — |
| `/plugin discover` | Огляд плагінів | — |
| `/reload-plugins` | Перезавантажити | 2.1.69 |

### Типи джерел плагінів
| Тип | Опис | З релізу |
|-----|------|----------|
| npm | npm пакет | — |
| git | Git репозиторій | — |
| git-subdir | Піддиректорія git репозиторію | 2.1.69 |
| file | Локальна директорія | — |
| settings | `source: 'settings'` в settings.json | 2.1.80 |
| branch/tag | `owner/repo#branch` синтаксис | 2.0.28 |
| pinned | Pin до конкретного git commit SHA | 2.1.14 |

### Плагін-можливості
| Можливість | Опис | З релізу |
|------------|------|----------|
| Custom commands | Команди з плагіна | 2.0.12 |
| Custom agents | Агенти з плагіна | — |
| MCP servers | MCP сервери з плагіна | 2.0.12 |
| Hooks | Хуки з плагіна | 2.0.12 |
| Skills | Навички з плагіна | — |
| Output styles | Стилі виводу | 2.0.12 |
| Settings | `settings.json` для дефолтів | 2.1.49 |
| `manifest.userConfig` | Опції конфігурації при enable | 2.1.83 |
| `sensitive: true` | Зберігання в keychain | 2.1.83 |
| `${CLAUDE_PLUGIN_ROOT}` | Шлях до плагіна | — |
| `${CLAUDE_PLUGIN_DATA}` | Persistent state плагіна | 2.1.78 |
| Auto-update | Автооновлення плагінів | 2.1.0 |
| `FORCE_AUTOUPDATE_PLUGINS` | Примусове автооновлення | 2.1.2 |
| `pluginTrustMessage` | Повідомлення довіри (managed) | 2.1.69 |
| Managed block | Блокування організаційною політикою | 2.1.85 |

---

## 10. VS Code / IDE

### Встановлення та підключення
| Можливість | Опис | З релізу |
|------------|------|----------|
| Native VS Code extension | Нова нативна розширеність | 2.0.0 |
| Secondary sidebar | Права бік-панель (VS Code 1.97+) | 2.0.56 |
| Session spark icon | Іконка сесій в activity bar | 2.1.70 |
| `CLAUDE_CODE_AUTO_CONNECT_IDE` | Вимкнути auto-connect (`false`) | 1.0.61 |
| `/ide` | Автовстановлення extension | — |

### Функції VS Code
| Можливість | Опис | З релізу |
|------------|------|----------|
| Drag & drop файлів | Перетягування файлів і папок | 2.0.8 |
| Cmd/Alt+V paste images | Вставка зображень | 1.0.48 |
| Session tabs | Вкладки сесій з AI-заголовками | 2.1.79 |
| Permission picker | Вибір місця збереження дозволів | 2.1.47 |
| Compaction display | Згортаний "Compacted chat" | 2.1.32 |
| Plan preview | План з коментарями | 2.1.47 |
| Rewind picker | Keyboard-navigable picker | 2.1.84 |
| Rate limit banner | Попередження про ліміти | 2.1.84 |
| Multi-terminal | Кілька терміналів (reverted 2.0.61) | 2.0.60 |
| Python venv | Автозавантаження venv | 2.1.21 |
| `respectGitIgnore` | Включення .gitignored файлів | 2.0.8 |
| `initialPermissionMode` | Початковий режим дозволів | 2.0.34 |
| `chat.fontSize` / `chat.fontFamily` | Шрифти інтерфейсу | 2.0.35 |
| `vscode://anthropic.claude-code/open` | URI handler | 2.1.72 |
| `/remote-control` | Remote Control з VS Code | 2.1.79 |

### Win32 ARM64
| Можливість | Опис | З релізу |
|------------|------|----------|
| Native ARM64 binary | Підтримка Windows ARM64 | 2.1.41 |
| VSCode ARM64 fallback | x64 через emualtion | 1.0.48 |

---

## 11. SDK

> Документація: https://platform.claude.com/docs/en/agent-sdk

### Пакети
| Пакет | Опис | З релізу |
|-------|------|----------|
| `@anthropic-ai/claude-code` | [DEPRECATED] legacy entrypoint | 2.0.25 |
| `@anthropic-ai/claude-agent-sdk` | Актуальний SDK | 2.0.0 |
| Python `claude-code-sdk` | Python SDK | 1.0.23 |

### SDK можливості
| Можливість | Опис | З релізу |
|---------|------|----------|
| Session support | Підтримка сесій | 1.0.77 |
| Permission denial tracking | Відстеження відмов | 1.0.77 |
| canUseTool callback | Підтвердження інструментів | 1.0.59 |
| Request cancellation | Скасування запитів | 1.0.82 |
| Custom tools callbacks | Кастомні інструменти | 1.0.94 |
| additionalDirectories | Додаткові шляхи пошуку | 1.0.82 |
| UUID support | UUID для повідомлень | 1.0.86 |
| `--replay-user-messages` | Повторення повідомлень | 1.0.86 |
| `--include-partial-messages` | Часткове стрімінг | 1.0.109 |
| `--max-budget-usd` | Бюджетний ліміт | 2.0.28 |
| Error logging capture | Логування помилок | 2.0.21 |
| env для spawned process | Середовище процесу | 1.0.59 |
| Tool confirmation | Підтвердження інструментів | 2.0.64 |
| Permission suggestions | Пропозиції дозволів | 2.1.49 |
| Rate limit info | `SDKRateLimitInfo`, `SDKRateLimitEvent` | 2.1.45 |
| Model info | `supportsEffort`, `supportedEffortLevels` | 2.1.49 |
| `total_cost_usd` | Вартість (was `total_cost`) | 1.0.22 |

### Remote Control
| Можливість | Опис | З релізу |
|------------|------|----------|
| `claude remote-control` | Запуск Remote Control | 2.1.51 |
| `/remote-control [name]` | Іменована сесія | 2.1.69 |
| Web → CLI teleport | Продовження з браузера | 1.0.27 |
| `&` prefix | Фонове повідомлення до web | 2.0.45 |

---

## 12. Windows-специфічне

> **Окремий розділ** — всі опції, що безпосередньо стосуються користувачів Windows.
> Також дивіться загальні розділи, де Windows-особливості позначені окремо.

### Встановлення та запуск
| Можливість | Опис | З релізу |
|------------|------|----------|
| Native Windows support | Потребує Git for Windows | 1.0.51 |
| winget installation | Windows Package Manager | 2.1.2 |
| Windows ARM64 binary | Нативна підтримка | 2.1.41 |
| Native installer | CLI installer з PowerShell/cmd | — |
| `CLAUDE_CODE_DISABLE_NONSTREAMING_FALLBACK` | Виправлення web search | 2.1.70 |

### Шлях та файлової системи
| Можливість | Опис | З релізу |
|------------|------|----------|
| POSIX path format | `/c/Users/...` для permissions | 1.0.106 |
| PATH case-insensitive | Незалежне від регістру порівняння | 1.0.117 |
| Drive letter casing | Робота з різним регістром (C: vs c:) | 2.1.47 |
| `.bashrc` support | Підтримка .bashrc файлів | 1.0.65 |
| CWD temp files | Тимчасові файли в робочій директорії | 2.1.47 |
| ENAMETOOLONG fix | Довгі шляхи | 2.1.44 |
| Worktree file copy | Копіювання файлів worktree | 2.1.33 |
| Global `.claude` detection | Виявлення глобальної .claude папки | 2.1.33 |

### Термінал та рендеринг
| Можливість | Опис | З релізу |
|------------|------|----------|
| `os.EOL` (`\r\n`) rendering | Виправлення display на Windows | 2.1.47 |
| Line counting fix | Правильний підрахунок рядків | 2.1.47 |
| Bold/color shift fix | Вирівнювання стилів тексту | 2.1.47 |
| Right Alt key | Виправлення `[25~` escape sequences | 2.1.47 |
| Console windows flash | Виправлення спалаху при spawn | 2.1.29 |
| Rendering fix | Виправлення некоректного display | 2.1.74 |
| RTL text | Виправлення Arabic/Hebrew в терміналі | 2.1.74 |
| CJK timestamps | Виправлення відображення | 2.1.47 |
| Line-by-line streaming disabled | Вимкнено через проблеми рендерингу | 2.1.81 |
| Keyboard mode exit | Виправлення залипання Enhanced Keyboard | 2.1.85 |
| Input lag | Виправлення затримки вводу | 1.0.117, 1.0.119, 1.0.120 |

### Alt/Shift комбінації
| Скорочення | Опис | З релізу |
|------------|------|----------|
| Shift+Tab | Перемикання mode (замість Alt+M) | 1.0.56 |
| Alt+V | Вставка зображень | 1.0.93 |
| Alt+M | Перемикання mode | — |

### PowerShell
| Можливість | Опис | З релізу |
|------------|------|----------|
| PowerShell tool | Opt-in preview | 2.1.84 |
| Dangerous command detection | Виявлення небезпечних команд | 2.1.84, 2.1.85 |
| MSYS2/Cygwin support | Виправлення втрати output | 2.1.47 |

### Git Bash / Shell
| Можливість | Опис | З релізу |
|------------|------|----------|
| Hooks via Git Bash | Хуки виконуються через Git Bash, не cmd.exe | 2.1.47 |
| Bash on Windows | Виправлення виконання команд | 2.1.53, 2.1.55 |
| Subprocess spawning | Виправлення "No such file or directory" | 1.0.68 |
| `cmd /c npx` wrapper | Для MCP серверів у .mcp.json | — |
| Bash permission checks | Виправлення permission matching | 1.0.68 |
| Homebrew PATH | Виправлення знайдення бінарників | 2.1.78 |
| nul file creation | Виправлення `2>nul` redirection | 2.1.33 |

### MCP на Windows
| Можливість | Опис | З релізу |
|------------|------|----------|
| Plugin MCP colon paths | Виправлення шляхів з `:` | 2.0.67 |
| LSP file URIs | Виправлення malformed URI | 2.1.74 |
| npm installs | `EEXIST` в OneDrive папках | 2.1.72 |

### Managed Settings
| Можливість | Опис | З релізу |
|------------|------|----------|
| `C:\Program Files\ClaudeCode\managed-settings.json` | Основний шлях | 2.1.2 |
| ~~`C:\ProgramData\ClaudeCode`~~ | [DELETED] старий шлях | 2.1.75 |
| Registry support | Managed settings через Windows Registry | 2.1.51 |
| Config corruption | Виправлення конкурентних записів | 2.1.61 |

### VS Code на Windows
| Можливість | Опис | З релізу |
|------------|------|----------|
| File search | Виправлення пошуку файлів | 2.1.21 |
| .claude.json location | Виправлення шляху конфігу | 2.0.59 |
| PATH inheritance | Виправлення Git Bash шляху | 2.1.47, 2.1.81 |
| Windows ARM64 | Fallback до x64 | 1.0.48 |
| Crash fix | "command not found" | 2.1.52, 2.1.56 |
| Sidebar view container | Race condition fix | 1.0.89 |
| `/extra-usage` | Підтримка в VS Code | 2.1.50 |
| Session diff button | Виправлення | 2.1.33 |

### Інше Windows-специфічне
| Можливість | Опис | З релізу |
|------------|------|----------|
| Cloud sync false modify | Виправлення з Antivirus/OneDrive | 2.1.7 |
| Sandbox temp paths | Виправлення escape sequences в temp | 2.1.7 |
| Credential corruption | Виправлення при багатьох сесіях | 2.1.59 |
| Config backups | Збереження в `~/.claude/backups/` | 2.1.47 |
| Bash temp directory | Виправлення пробілів у шляху | 2.1.47 |
| `C:\Windows`, `C:\` detection | Захист від небезпечних видалень | 2.1.85 |
| WSL IDE detection | Виправлення визначення IDE | 1.0.48, 1.0.56 |
| WSL voice mode | WSL1 — clear error, WSL2 — підтримка | 2.1.73, 2.1.78 |
| WSL worktree | Підтримка Chrome extension | 2.1.41 |
| WSL image paste | BMP fallback для Windows copies | 2.1.47 |
| Voice native binary | Виправлення на Windows native | 2.1.74 |
| /voice npm install | Виправлення на Windows npm | 2.1.76 |
| Clipboard CJK/emoji | PowerShell Set-Clipboard | 2.1.70 |
| Clipboard tmux | tmux clipboard integration | 2.1.76 |
| Git for Windows required | Необхідний для native build | 1.0.51 |
| Symlink .claude | Виправлення повторного завантаження | 2.0.62 |
| `managed-settings.d/` | Drop-in для Windows Registry | 2.1.83 |
| Remote Control | Підтримка Windows (2.1.51+) | 2.1.51 |
| `disableDeepLinkRegistration` | Не реєструвати claude-cli:// | 2.1.83 |
| `/heapdump` | Виправлення EEXIST error | 2.1.70 |
| Native install | Виправлення silent failure | 2.1.0 |
| Input method (IME) | Покращена підтримка | 1.0.108 |
| File write permissions | Write tool з umask | 2.1.0 |
| Symlink escape | Захист від bypass через symlinks | 2.1.47 |

---

## Додаток: Історія версій

| Версія | Ключові зміни |
|--------|---------------|
| 0.2.21–0.2.93 | Фундамент: fuzzy matching, custom commands, vim, MCP, web fetch, thinking, auto-compact |
| 1.0.0 | GA release, Sonnet 4, Opus 4 |
| 1.0.1–1.0.58 | Зрілість: hooks, SDK, Bedrock/Vertex, agents, PDF, /memory |
| 2.0.0 | Major: native VS Code, /rewind, /usage, plugins, skills, agents |
| 2.0.1–2.0.85 | Стабілізація, Haiku 4.5, ChatGPT-style UI, MCP improvements |
| 2.1.0 | Skills hot-reload, language setting, fork context, voice, worktree |
| 2.1.1–2.1.47 | Оптимізація пам'яті, performance, баги |
| 2.1.49–2.1.85 | MCP improvements, hooks system, managed settings, security fixes |

---

> Цей файл є living document. Оновлюйте з кожним новим релізом Claude Code.
> Для оновлення передайте LLM нові release notes — інструкція на початку файлу.
