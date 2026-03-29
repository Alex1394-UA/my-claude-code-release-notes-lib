# CLI команди та прапорці

## Основні команди

| Команда | Опис | Версія |
|---------|------|--------|
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
| `--bare` виправлення MCP tools | Не викидає MCP інструменти в інтерактивному режимі | 2.1.86 |
| `claude --session-timeout <seconds>` | Автозавершення сесії при бездіяльності | 2.2.3 |

## Запуск та аутентифікація

| Прапорець | Опис | Версія |
|----------|------|--------|
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
| `--debug` | Debug режим (до файлу з 2.0.117) | 2.0.117 |
| `--verbose` | Детальний вивід | — |
| ~~`--no-interactive`~~ | [ВИДАЛЕНО з кодової бази] використовуйте `-p` | 2.2.3 |
| `--init` / `--init-only` / `--maintenance` | Setup hook подія | 2.1.10 |
| `--name` / `-n` | Ім'я сесії при старті | 2.1.76 |
| `--channels` | Канали MCP (research preview) | 2.1.80 |
| `--plugin-dir <path>` | Директорія локальних плагінів | 2.1.69 |
| `--console` | Anthropic Console аутентифікація | 2.1.79 |
| `--teleport` | Телепорт сесії | 2.1.47 |
| `--replay-user-messages` | Повторення повідомлень користувача | 1.0.86 |
| `--include-partial-messages` | Часткове стрімінг (SDK) | 1.0.109 |

## Команди управління

| Команда | Опис | Версія |
|---------|------|--------|
| `claude mcp add` | Інтерактивне додавання MCP | 0.2.32 |
| `claude mcp add-from-claude-desktop` | Імпорт MCP з Claude Desktop | 0.2.36 |
| `claude mcp add-json <n> <json>` | MCP як JSON рядок | 0.2.36 |
| `claude mcp serve` | MCP server mode | 2.0.33 |
| `claude mcp list` | Список MCP серверів | — |
| `claude mcp get` | Інфо про MCP сервер | — |
| `claude mcp enable/disable [name]` | Увімкнути/вимкнути MCP | 2.0.60 |
| `claude mcp reconnect [name]` | Перепідключення MCP | 2.1.50 |
| `claude auth login` | Логін (CLI) | 2.1.41 |
| `claude auth login --console` | Console auth | 2.1.79 |
| `claude auth status` | Статус аутентифікації | 2.1.41 |
| `claude auth logout` | Вихід | 2.1.41 |
| `claude plugin install` | Встановити плагін | 2.0.12 |
| `claude plugin validate` | Валідація плагіна | 2.0.12 |
| `claude agents` | Список всіх агентів | 2.1.49 |
| ~~`claude config`~~ | [ЗАСТАРІЛО] використовуйте settings.json | 1.0.7 |
| `claude install` | Встановлення/оновлення | — |
| `claude install --force` | Примусове оновлення | 2.1.0 |
| `c` shortcut OAuth URL | Виправлено копіювання повного URL | 2.1.86 |
| `claude doctor` | Діагностика | 1.0.51 |
| `claude update` | Оновлення | — |
| `claude remote-control` | Remote Control підсистема | 2.1.51 |
