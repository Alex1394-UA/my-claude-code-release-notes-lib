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
| `CLAUDE_CODE_USE_MANTLE` | Bedrock через Mantle (`1`) | 2.1.94 |
| `CLOUD_ML_REGION` | Vertex AI регіон | 1.0.8 |
| `NODE_EXTRA_CA_CERTS` | Додаткові CA сертифікати | 1.0.40 |

## Таймаути та ліміти

| Змінна | Опис | Версія |
|--------|------|--------|
| `BASH_DEFAULT_TIMEOUT_MS` | Таймаут bash за замовчуванням | 1.0.108 |
| `BASH_MAX_TIMEOUT_MS` | Максимальний таймаут bash | 1.0.108 |
| `MCP_TIMEOUT` | Таймаут MCP сервера | 0.2.41 |
| `MCP_TOOL_TIMEOUT` | Таймаут MCP інструменту | 1.0.8 |
| `API_TIMEOUT_MS` | Таймаут API запитів (виправлено ігнорування hardcoded 5хв) | 2.1.101 |
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
| `CLAUDE_ENV_FILE` trailing comment fix | Виправлено відсутність Bash tool output коли env file (напр. `~/.zprofile`) закінчується на `#` comment | 2.1.108 |
| `CLAUDE_CODE_SHELL` | Перевизначити auto-detected shell | 2.0.65 |
| `CLAUDE_CODE_DISABLE_GIT_INSTRUCTIONS` | Прибрати git інструкції з промпту | 2.1.69 |
| `CLAUDE_CODE_DISABLE_NONESSENTIAL_TRAFFIC` | Вимкнути release notes, telemetry | 2.0.17 |
| `DISABLE_NONESSENTIAL_TRAFFIC` cross-project fix | Виправлено глобальне вимкнення usage metrics коли змінна встановлена в одному проекті | 2.1.105 |
| `DISABLE_TELEMETRY` / `DISABLE_NONESSENTIAL_TRAFFIC` telemetry fix | Виправлено неотримання ці змінні для API та enterprise користувачів | 2.1.120 |
| `NO_PROXY` native build fix | Виправлено неповагу `NO_PROXY` для всіх HTTP клієнтів під native build коли встановлено через `managed-settings.json` | 2.1.121 |
| `DISABLE_TELEMETRY` cache TTL fix | Виправлено fallback до 5-хв TTL замість 1 год для підписників з `DISABLE_TELEMETRY` | 2.1.108 |
| `CLAUDE_CODE_DISABLE_NONSTREAMING_FALLBACK` | Вимкнути non-streaming fallback | 2.1.83 |
| `CLAUDE_CODE_DISABLE_1M_CONTEXT` | Вимкнути 1M контекст | 2.1.50 |
| `CLAUDE_CODE_DISABLE_EXPERIMENTAL_BETAS` | Прибрати beta заголовки | 2.1.25 |
| `CLAUDE_CODE_DISABLE_TERMINAL_TITLE` | Не встановлювати title терміналу | — |
| `CLAUDE_CODE_DISABLE_BACKGROUND_TASKS` | Вимкнути фонові задачі | 2.1.4 |
| `CLAUDE_CODE_DISABLE_CRON` | Зупинити cron задачі | 2.1.72 |
| `CLAUDE_CODE_DISABLE_AUTOUPDATER` | Вимкнути автооновлення | 2.0.36 |
| `CLAUDE_CODE_DISABLE_DEEP_LINK_REGISTRATION` | Не реєструвати claude-cli:// | 2.1.83 |
| `CLAUDE_CODE_NO_FLICKER` | Flicker-free alt-screen rendering з virtualized scrollback (`1`) | 2.1.89 |
| `CLAUDE_CODE_SIMPLE` | Мінімальний режим (без skills/MCP/hooks) | 2.1.49 |
| `CLAUDE_CODE_SUBPROCESS_ENV_SCRUB` | Прибрати credential-їз subprocess | 2.1.83 |
| `CLAUDE_CODE_AUTO_CONNECT_IDE` | Вимкнути IDE auto-connect (false) | 1.0.61 |
| `CLAUDE_CODE_SHELL_PREFIX` | Префікс для shell команд | 1.0.54 |
| `DISABLE_INTERLEAVED_THINKING` | Вимкнути interleaved thinking | 1.0.1 |
| `CLAUDE_CODE_FILE_READ_MAX_OUTPUT_TOKENS` | Ліміт файл читання | 2.1.0 |
| `CLAUDE_CODE_MAX_OUTPUT_TOKENS` | Макс output tokens | — |
| `ENABLE_TOOL_SEARCH` | Ввімкнути ToolSearch з BASE_URL | 2.1.72 |
| `MCP_CONNECTION_NONBLOCKING` | Пропустити очікування MCP з'єднання в `-p` mode (`true`) | 2.1.89 |
| `CLAUDE_CODE_PLUGIN_KEEP_MARKETPLACE_ON_FAILURE` | Зберегти marketplace кеш при `git pull` помилці (офлайн) | 2.1.90 |
| `FORCE_HYPERLINK` | Виправлено ігнорування через `settings.json` env | 2.1.94 |
| `CLAUDE_CODE_PERFORCE_MODE` | Edit/Write/NotebookEdit помиляються на read-only файлах з `p4 edit` підказкою | 2.1.98 |
| `CLAUDE_CODE_SCRIPT_CAPS` | Обмеження скрипт-викликів за сесію (PID namespace sandbox на Linux з `CLAUDE_CODE_SUBPROCESS_ENV_SCRUB`) | 2.1.98 |
| `CLAUDE_CODE_CERT_STORE` | OS CA certificate store за замовч. (`bundled` для тільки bundled CAs) | 2.1.101 |
| `ENABLE_PROMPT_CACHING_1H` | Opt-in 1-годинний prompt cache TTL для API key, Bedrock, Vertex, Foundry | 2.1.108 |
| `FORCE_PROMPT_CACHING_5M` | Примусовий 5-хвилинний prompt cache TTL | 2.1.108 |
| `OTEL_LOG_RAW_API_BODIES` | Емітує повні API request/response bodies як OpenTelemetry log events для дебагу | 2.1.111 |
| `CLAUDE_CODE_USE_POWERSHELL_TOOL` | Opt-in/out для PowerShell tool; на Linux/macOS enable з `=1` (потрібен `pwsh` на PATH) | 2.1.111 |
| `DISABLE_UPDATES` | Повне блокування всіх update paths включаючи ручний `claude update` — строже за `DISABLE_AUTOUPDATER` | 2.1.118 |
| `CLAUDE_CODE_HIDE_CWD` | Приховує робочу директорію в стартовому лого | 2.1.119 |
| `CLAUDE_CODE_FORK_SUBAGENT` | Увімкнення forked subagents на external builds (`1`) | 2.1.117 |
| `ENABLE_PROMPT_CACHING_1H_BEDROCK` | [ЗАСТАРІЛО] → `ENABLE_PROMPT_CACHING_1H` (працює для зворотної сумісності) | 2.1.108 |
| `CLAUDE_CODE_ENABLE_AWAY_SUMMARY` | Примусове ввімкнення session recap коли телеметрія вимкнена (`0` для opt-out) | 2.1.108 |
| `ENABLE_CLAUDEAI_MCP_SERVERS` | Opt-out від claude.ai MCP (false) | 2.1.63 |
| `CLAUDE_CODE_ENABLE_TASKS` | Старі system задачі (false) | 2.1.19 |
| `NO_PROXY` | Bypass proxy для вказаних hostnames | 1.0.93 |
| `AI_AGENT` | Встановлюється для subprocesses щоб `gh` міг атрибутувати трафік до Claude Code | 2.1.120 |
| `ANTHROPIC_BEDROCK_SERVICE_TIER` | Вибір Bedrock service tier (`default`, `flex`, `priority`), відправляється як `X-Amzn-Bedrock-Service-Tier` header | 2.1.122 |
| `CLAUDE_CODE_DISABLE_EXPERIMENTAL_BETAS` OAuth fix | Виправлено OAuth 401 retry loop коли ця змінна встановлена | 2.1.123 |
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
| `OTEL_LOG_USER_PROMPTS` / `OTEL_LOG_TOOL_CONTENT` | Beta tracing тепер враховує ці змінні (sensitive span attributes не емітуются без opt-in) | 2.1.101 |
| OTEL enhanced attributes | `user_prompt` include `command_name` та `command_source`; cost/token/api spans include `effort`; custom/MCP command names redacted без `OTEL_LOG_TOOL_DETAILS=1` | 2.1.117 |
| `HTTP_PROXY` / `HTTPS_PROXY` | Proxy для OTEL | 2.0.17 |
| OTEL `tool_result`/`tool_decision` fields | `tool_result` та `tool_decision` events тепер включають `tool_use_id`; `tool_result` також `tool_input_size_bytes` | 2.1.119 |
| Status line stdin JSON | Status line stdin JSON тепер включає `effort.level` та `thinking.enabled` | 2.1.119 |
| OTEL LLM span attributes | Додано `stop_reason`, `gen_ai.response.finish_reasons` та `user_system_prompt` (за `OTEL_LOG_USER_PROMPTS`) до LLM request spans | 2.1.121 |
| OTEL numeric attributes fix | Числові атрибути в `api_request`/`api_error` log events тепер емітться як числа, не рядки | 2.1.122 |
| OTEL `claude_code.at_mention` | Новий OTEL log event для `@`-mention resolution | 2.1.122 |
| OTEL `claude_code.skill_activated` | Новий OTEL event для skill activation; включає `invocation_trigger` (`"user-slash"`, `"claude-proactive"`, `"nested-skill"`) | 2.1.126 |
