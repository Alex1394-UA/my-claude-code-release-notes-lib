# Змінні середовища

## API та аутентифікація

| Змінна | Опис | Версія |
|--------|------|--------|
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
| `CLOUD_ML_REGION` | Vertex AI регіон | 1.0.8 |
| `NODE_EXTRA_CA_CERTS` | Додаткові CA сертифікати | 1.0.40 |

## Таймаути та ліміти

| Змінна | Опис | Версія |
|--------|------|--------|
| `BASH_DEFAULT_TIMEOUT_MS` | Таймаут bash за замовчуванням | 1.0.108 |
| `BASH_MAX_TIMEOUT_MS` | Максимальний таймаут bash | 1.0.108 |
| `MCP_TIMEOUT` | Таймаут MCP сервера | 0.2.41 |
| `MCP_TOOL_TIMEOUT` | Таймаут MCP інструменту | 1.0.8 |
| `CLAUDE_CODE_API_KEY_HELPER_TTL_MS` | TTL для apiKeyHelper | 0.2.117 |
| `CLAUDE_CODE_EXIT_AFTER_STOP_DELAY` | Автовихід SDK після idle | 2.1.35 |
| `CLAUDE_STREAM_IDLE_TIMEOUT_MS` | Стрімінговий idle watchdog (90s) | 2.1.84 |
| `CLAUDE_CODE_SESSION_TIMEOUT_MS` | Автозавершення сесії при бездіяльності (env-based) | 2.2.3 |
| `CLAUDE_CODE_SESSIONEND_HOOKS_TIMEOUT_MS` | Таймаут SessionEnd хуків | 2.1.74 |
| `CLAUDE_CODE_PLUGIN_GIT_TIMEOUT_MS` | Git timeout для плагінів (120s) | 2.1.51 |

## Поведінка

| Змінна | Опис | Версія |
|--------|------|--------|
| `CLAUDE_CONFIG_DIR` | Директорія конфігурації | 1.0.6 |
| `XDG_CONFIG_HOME` | XDG директорія конфігурації | 1.0.28 |
| `CLAUDE_BASH_MAINTAIN_PROJECT_WORKING_DIR` | Фіксувати робочу директорію | 1.0.18 |
| `CLAUDE_BASH_NO_LOGIN` | Пропустити login shell (за замовч. з 2.1.51) | 1.0.124 |
| `CLAUDE_CODE_SHELL` | Перевизначити auto-detected shell | 2.0.65 |
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
| `ENABLE_CLAUDEAI_MCP_SERVERS` | Opt-out від claude.ai MCP (false) | 2.1.63 |
| `CLAUDE_CODE_ENABLE_TASKS` | Старі system задачі (false) | 2.1.19 |
| `NO_PROXY` | Bypass proxy для вказаних hostnames | 1.0.93 |
| `CLAUDE_CODE_PROXY_RESOLVES_HOSTS` | Proxy DNS resolution (opt-in) | 2.0.55 |

## Шляхи

| Змінна | Опис | Версія |
|--------|------|--------|
| `CLAUDE_CODE_TMPDIR` | Кастомна temp директорія | 2.1.5 |
| `CLAUDE_CODE_PLUGIN_CACHE_DIR` | Кеш плагінів | — |
| `CLAUDE_CODE_PLUGIN_SEED_DIR` | Seed директорія плагінів (`;` на Win) | 2.1.77 |
| `CLAUDE_CODE_ADDITIONAL_DIRECTORIES_CLAUDE_MD` | CLAUDE.md з --add-dir (`1`) | 2.1.20 |

## Телеметрія та OTEL

| Змінна | Опис | Версія |
|--------|------|--------|
| `OTEL_LOG_TOOL_DETAILS` | Деталі інструментів в OTEL (`1`) | 2.1.85 |
| `HTTP_PROXY` / `HTTPS_PROXY` | Proxy для OTEL | 2.0.17 |
