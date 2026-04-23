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
| `-p --resume` deferred tools | Re-evaluation deferred tools + `--mcp-config` bounded at 5s | 2.1.89 |
| `--resume` prompt-cache fix | Виправлено повний cache-miss для deferred tools/MCP (регресія з 2.1.69) | 2.1.90 |
| `/resume` паралельне завантаження | Проєктні сесії завантажуються паралельно в режимі всіх проєктів | 2.1.90 |
| `--resume` hidding `-p`/SDK | Picker не показує сесії створені через `-p` або SDK | 2.1.90 |
| `--resume` transcript fix | Виправлено розрив ланцюжка транскриптів при async writes | 2.1.91 |
| `--resume` worktree direct | Пряме відновлення сесій з інших worktrees того ж repo | 2.1.94 |
| `--resume` picker fixes (2.1.97) | Виправлено: uneditable при `<name>`, Ctrl+A wipe, empty list, task-status замість summary | 2.1.97 |
| `--resume` >10KB diff fix | Виправлено зникнення file-edit diffs для файлів >10KB | 2.1.97 |
| `--resume` cache misses | Виправлено через attachment messages не збережених в транскрипт | 2.1.97 |
| `/resume` filter hints | Покращено labels з project/worktree/branch іменами | 2.1.98 |
| `/resume` picker expanded fixes | Виправлено: Windows Terminal preview, cwd в worktrees, session-not-found в stderr, terminal title | 2.1.98 |
| `--resume` dead-end branch | Виправлено втрату контексту на великих сесіях при anchor на dead-end branch | 2.1.101 |
| `--resume` chain recovery | Виправлено міст в несуміжну subagent розмову | 2.1.101 |
| `--resume` crash missing file_path | Виправлено краш при відсутньому `file_path` в persisted Edit/Write | 2.1.101 |
| `-p --resume <name>` titles | Приймає session titles встановлені через `/rename` або `--name` | 2.1.101 |
| `--continue -p` fix | Коректне продовження сесій створених через `-p` або SDK | 2.1.101 |
| `EnterWorktree path` параметр | `path` параметр для переходу в існуючий worktree поточного репозиторію | 2.1.105 |
| `Stale agent worktree cleanup` | Очищення worktrees чий PR було squash-merged (більше не зберігаються назавжди) | 2.1.105 |
| `EnterWorktree duplicate text fix` | Виправлено дублювання тексту "Creating worktree" в EnterWorktree/ExitWorktree | 2.1.105 |
| `Resume hint fix` | Виправлено відсутність підказки "Resume this session..." при виході після `/resume`, `--worktree` або `/branch` | 2.1.105 |
| `Resume malformed text crash fix` | Виправлено краш при відновленні сесії з malformed text blocks | 2.1.105 |
| `/resume` current dir default | `/resume` picker тепер показує сесії поточної директорії за замовч.; `Ctrl+A` для всіх проектів | 2.1.108 |
| `--resume` loses custom name | Виправлено втрату кастомного імені та кольору при `claude --resume <session-id>` | 2.1.108 |
| `--teleport` escape codes fix | Виправлено появу escape sequences в prompt input після `--teleport` | 2.1.108 |
| `--teleport` precondition errors | Виправлено мовчазний вихід при помилках передумов (dirty git tree, session not found) | 2.1.108 |
| `--resume` truncating fix | Виправлено обрізання сесій при самодостатніх повідомленнях в транскрипті | 2.1.108 |
| `/tui` команда | `/tui` та `tui` setting — flicker-free rendering в тій же сесії (`/tui fullscreen`) | 2.1.110 |
| `--resume` resurrects scheduled tasks | `--resume`/`--continue` відновлює незакінчені scheduled tasks | 2.1.110 |
| `--resume` showing first prompt | Виправлено показ першого промпту замість `/rename` імені для активних або некоректно завершених сесій | 2.1.110 |
| Near-miss subcommand suggestion | Пропозиція найближчої matching підкоманди при `claude <word>` з typo (напр. `claude udpate` → "Did you mean `claude update`?") | 2.1.111 |
| `cd <current-dir> &&` no prompt | `cd <current-directory> && git …` більше не trigerra permission prompt коли `cd` є no-op | 2.1.113 |
| Native binary spawn | CLI запускає нативний Claude Code binary замість bundled JavaScript | 2.1.113 |
| `claude plugin tag` | Створення release git tags для плагінів з версіонною валідацією | 2.1.118 |
| `--continue`/`--resume` add-dir | Тепер знаходять сесії що додали поточну директорію через `/add-dir` | 2.1.118 |
| Console login macOS keychain | Виправлено мовчазний "Not logged in" при заблокованому keychain | 2.1.94 |
| `/login` OAuth URL padding | Виправлено padding що заважав mouse selection | 2.1.101 |
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
| `claude-cli://open?q=` multi-line | Глибокі посилання підтримують багаторядкові промпти (`%0A`) | 2.1.91 |
| Bedrock setup wizard | Інтерактивний майстер налаштування з екрану логіну (AWS auth, region, credentials) | 2.1.92 |
| Vertex AI setup wizard | Інтерактивний майстер налаштування (GCP auth, project, region, credentials, model pinning) | 2.1.98 |
| `--exclude-dynamic-system-prompt-sections` | Print mode: виключення секцій для cross-user prompt caching | 2.1.98 |
| `--teleport` | Телепорт сесії | 2.1.47 |
| `/setup-vertex` та `/setup-bedrock` покращення | Показують фактичний `settings.json` path коли `CLAUDE_CONFIG_DIR` встановлено, seed candidates з existing pins при re-run, та опція "with 1M context" | 2.1.111 |
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
| Homebrew release channel | Update prompts використовують release channel cask (`claude-code` → stable, `claude-code@latest` → latest) | 2.1.92 |
| Claude Code download URL | Claude Code та installer тепер використовують `https://downloads.claude.ai/claude-code-releases` замість Google Storage | 2.1.116 |
