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
| `--from-pr` GitLab/Bitbucket/GHE | `--from-pr` тепер приймає GitLab merge-request, Bitbucket pull-request та GitHub Enterprise PR URLs | 2.1.119 |
| `claude ultrareview [target]` | CLI підкоманда для `/ultrareview` в non-interactive mode (CI/scripts); вивід на stdout, `--json` для raw output, exit 0 на completion або 1 на failure | 2.1.120 |
| `--dangerously-skip-permissions` skill/agent dirs | Більше не запитує дозвіл на запис в `.claude/skills/`, `.claude/agents/` та `.claude/commands/` | 2.1.121 |
| `--print` tools/disallowedTools | `--print` mode тепер враховує `tools:` та `disallowedTools:` з agent frontmatter, як в інтерактивному режимі | 2.1.119 |
| `--agent` permissionMode | `--agent <name>` тепер поважає `permissionMode` з визначення агента для built-in агентів | 2.1.119 |
| `--continue`/`--resume` add-dir | Тепер знаходять сесії що додали поточну директорію через `/add-dir` | 2.1.118 |
| Console login macOS keychain | Виправлено мовчазний "Not logged in" при заблокованому keychain | 2.1.94 |
| `/login` OAuth URL padding | Виправлено padding що заважав mouse selection | 2.1.101 |
| `claude --session-timeout <seconds>` | Автозавершення сесії при бездіяльності | 2.2.3 |
| `claude project purge [path]` | Видалення всього стану Claude Code для проекту (transcripts, tasks, file history, config entry); підтримує `--dry-run`, `-y/--yes`, `-i/--interactive`, `--all` | 2.1.126 |
| `--dangerously-skip-permissions` expanded bypass | Тепер обминає промпти для запису в `.claude/`, `.git/`, `.vscode/`, shell config files та інші раніше захищені шляхи (catastrophic removal commands все ще промптять як safety net) | 2.1.126 |
| `claude auth login` terminal paste | `claude auth login` тепер приймає OAuth code вставлений в термінал коли browser callback не може досягнути localhost (WSL2, SSH, containers) | 2.1.126 |
| Remote-session login `forceLoginMethod` fix | Виправлено remote-session login failing з "Can't access this organization" для користувачів з `forceLoginMethod` та `forceLoginOrgUUID` | 2.1.144 |
| "OAuth not allowed" login guidance | Замість login screen при "OAuth not allowed for organization" тепер показується інструкція звернутися до адміністратора | 2.1.126 |
| OAuth login timeout fix | Виправлено timeout OAuth login на повільних/proxied з'єднаннях, IPv6-only devcontainers, та коли browser callback не досягає localhost | 2.1.126 |
| OAuth credential race fix | Виправлено рідкісний race де concurrent credential write міг очистити valid OAuth refresh token | 2.1.126 |
| `--plugin-dir` .zip support | `--plugin-dir` тепер приймає `.zip` plugin archives крім директорій | 2.1.128 |
| `--channels` console auth | `--channels` тепер працює з console (API key) аутентифікацією — console orgs з managed settings повинні встановити `channelsEnabled: true` | 2.1.128 |
| Headless `plugin_errors` expanded | `--output-format stream-json` `init.plugin_errors` тепер включає `--plugin-dir` load failures | 2.1.128 |
| `--plugin-url <url>` | Новий прапорець для завантаження plugin `.zip` archive з URL для поточної сесії | 2.1.129 |
| `claude --help` `--remote-control` | `claude --help` тепер lists `--remote-control` alongside `--remote-control-session-name-prefix` | 2.1.133 |
| `--resume`/`--continue` underscores fix | Виправлено `--resume`/`--continue` що не знаходили сесій коли project path містить underscores | 2.1.136 |
| Worktree exit dialog directory fix | Виправлено worktree exit dialog що warning про uncommitted files в wrong directory після worktree removal | 2.1.136 |
| `/usage` weekly reset fix | Виправлено `/usage` weekly reset що показував time of day замість calendar date | 2.1.136 |
| `/insights` crash malformed input fix | Виправлено `/insights` краш коли session history містить tool calls з malformed input fields | 2.1.136 |
| `/branch` multi-line title fix | Виправлено `/branch` що saving multi-line session title при pasted multi-line name | 2.1.136 |
| `/clear <name>` labeling fix | Виправлено `/clear <name>` що не labeling cleared session для `/resume` | 2.1.136 |
| `/release-notes` stale version fix | Виправлено `/release-notes` що застрягав на old version після failed changelog refresh | 2.1.136 |
| Mid-input slash autocomplete fix | Виправлено mid-input slash command autocomplete що не працював після initial slash command | 2.1.136 |
| `/settings` language Escape fix | Виправлено `/settings` language change що revert-увався на Escape після confirming | 2.1.136 |
| `/terminal-setup` autocomplete fix | Виправлено `/terminal-setup` що appearing в autocomplete лише на exact name match замість partial prefixes | 2.1.136 |
| Worktree collision error improvement | Покращено error message при `--worktree` collision з existing або stale worktree | 2.1.136 |
| `claude agents` agent view | [Research Preview] Єдиний список всіх сесій — running, blocked on you, або done | 2.1.139 |
| `claude plugin details <name>` | Показ component inventory та projected per-session token cost плагіна | 2.1.139 |
| `claude plugin install <name>@<marketplace>` auto-refresh | Auto-refresh marketplace та retry перед reporting plugin as not found | 2.1.139 |
| `claude --bg` connection drop fix | Виправлено `claude --bg` failing з "connection dropped mid-request" коли background service був about to idle-exit | 2.1.140 |
| Background service startup enterprise fix | Виправлено background service startup failing на машинах з enterprise endpoint security шляхом allowing more time | 2.1.140 |
| `claude agents --cwd <path>` | Scope session list до specific directory | 2.1.141 |
| `claude agents` wrapper dashboard fix | Виправлено `claude agents` що showing agent-type list замість dashboard коли launched через wrapper що adds flags | 2.1.141 |
| `claude agents` crashed session cwd fix | Виправлено `claude agents` що opening crashed session firing redundant dispatches коли working directory deleted | 2.141 |
| `/tui` background shells fix | Виправлено `/tui` що silently dropping running background shells та subagents — тепер refuses та asks to wait | 2.1.141 |
| `claude agents` unhealthy worker fallback | Launching session через `claude agents` більше не fails коли pre-warmed background worker unhealthy — fallback to fresh launch | 2.1.141 |
| `claude agents` empty placeholder sessions | Більше не показує empty placeholder sessions від backgrounding fresh REPL; shows onboarding text при вході через `←` без інших агентів | 2.1.141 |
| Empty idle background sessions auto-retire | Empty idle background sessions від `←` тепер автоматично retired daemon after 5 minutes | 2.1.141 |
| `claude agents` конфігураційні прапорці | Нові прапорці для dispatched background sessions: `--add-dir`, `--settings`, `--mcp-config`, `--plugin-dir`, `--permission-mode`, `--model`, `--effort`, `--dangerously-skip-permissions` | 2.1.142 |
| `claude agents` links fix | Виправлено клік по посиланнях в attached `claude agents` сесії — headless browser shim воркера більше не застосовується під час attachment | 2.1.142 |
| `claude agents` editor fix | Виправлено `claude agents` "v to open in editor" що використовував daemon's default editor замість shell `$EDITOR`/`$VISUAL` | 2.1.142 |
| `claude agents` Windows network drives fix | Виправлено deadlock `claude agents` на Windows з робочими директоріями на network drives; Ctrl+C тепер працює під час startup [Win] | 2.1.142 |
| `claude agents` background-color bleed fix | Виправлено background-color bleed при attaching до `claude agents` сесії з Apple Terminal або інших 256-color-only терміналів | 2.1.142 |
| `claude --bg --dangerously-skip-permissions` persist fix | Виправлено `claude --bg --dangerously-skip-permissions` що не зберігався через retire/wake | 2.1.142 |
| `/web-setup` existing GitHub App warning | `/web-setup` тепер попереджає перед заміною існуючого GitHub App connection | 2.1.142 |
| Daemon clean exit after upgrade fix | Виправлено daemon що не виходив коректно після оновлення binary (напр. `brew upgrade`), що спричиняло crash-loop dispatched agents на видаленому path | 2.1.142 |
| `--agent <name>` plugin agents fix | `--agent <name>` тепер знаходить plugin-contributed agents без `plugin:` prefix | 2.1.143 |
| `claude agents` delete session transcript fix | Виправлено видалення сесії з agent view що не видаляв transcript file | 2.1.143 |
| `claude agents --allow-dangerously-skip-permissions` fix | Виправлено що default dispatched sessions на bypass mode замість додавання в permission cycle | 2.1.143 |
| `/resume` для background sessions | Sessions запущені через `claude --bg` або agent view тепер appear в `/resume` picker, позначені з `bg` | 2.1.144 |
| `/model` session-only | `/model` тепер змінює модель лише для поточної сесії; натисніть `d` в model picker для встановлення default для нових сесій | 2.1.144 |
| ~~`/extra-usage`~~ | [ЗАСТАРІЛО] перейменовано на `/usage-credits`; стара назва ще працює | 2.1.144 |
| `/usage-credits` | Нова назва замість `/extra-usage` — показує usage credits | 2.1.144 |
| `claude agents` rename live update | Перейменування background session через `Ctrl+R` в `claude agents` тепер негайно оновлює banner attached session | 2.1.144 |
| `claude --bg --name <label>` confirmation | `claude --bg --name <label>` тепер підтверджує ім'я в post-spawn повідомленні | 2.1.144 |
| `claude agents`/`--bg` rejection naming | Повідомлення відмови тепер називає конкретний gate (non-TTY, env var, або setting) замість generic message | 2.1.144 |
| `claude respawn` stopped session fix | Виправлено `claude respawn <id>` на stopped background session що показував "stopped" замість running | 2.1.144 |
| `claude agents`/`claude logs` timeout | Виправлено зависання `claude agents` або `claude logs <id>` коли background service unresponsive — тепер timeout 10s з recovery hint | 2.1.144 |
| `/branch` worktree/background fix | Виправлено `/branch` що failing з "No conversation to branch" після входу в worktree або в деяких background sessions | 2.1.144 |
| `/model` Bedrock/Vertex Opus 1M fix | Виправлено неможливість обрати "Opus (1M context)" з `/model` picker на Bedrock та Vertex (регресія з v2.1.129) | 2.1.144 |
| `/doctor` exec-form hook hint | `/doctor` тепер показує exec-form приклад коли command hook не має поля `command` | 2.1.144 |
| Skill-listing truncation не як notification | Truncation списку skills більше не показується як startup notification — запуск `/doctor` для повної інформації | 2.1.144 |
| Background Bash tasks SDK panel fix | Background Bash tasks spawned subagents більше не залишаються "Running" в SDK task panels після завершення process | 2.1.144 |
| Completed/stopped sessions wake failure fix | Completed або stopped background sessions що briefly failing to wake більше не permanently marking як startup crash | 2.1.144 |
| `claude mcp list` parse error reporting | `claude mcp list` більше не silently reports no servers коли `.mcp.json` не парситься (напр. VS Code `"servers"` key замість `"mcpServers"`) — тепер показує конфігураційні помилки | 2.1.144 |
| Background side-queries custom BASE_URL fix | Background side-queries на custom `ANTHROPIC_BASE_URL` setups та Bedrock Mantle тепер correctly fallback коли first-party API key configured або Haiku model не set | 2.1.144 |
| `/bg`/←-detach preserve `/add-dir` | `/bg` та ←-detach тепер preserve directories додані через `/add-dir` | 2.1.144 |
| Edit/Write background session isolation fix | Виправлено Edit/Write що refusing з "background session hasn't isolated its changes yet" одразу після detach сесії що вже editing in place | 2.1.144 |
| Background session worktree VCS guard | Background session worktree isolation guard тепер застосовується для non-git VCS користувачів з `WorktreeCreate` hooks configured | 2.1.144 |
| `claude agents --json` | CLI вивід live Claude sessions як JSON для скриптів (tmux-resurrect, status bars, session pickers) | 2.1.145 |
| `claude agents` tab title awaiting-input count | Заголовок термінальної таб-сесії `claude agents` тепер показує кількість агентів що чекають на input | 2.1.145 |
| `/review` projectCards GraphQL fix | Виправлено `/review` що використовував deprecated `projectCards` GraphQL query що помилявся на repos з Classic Projects | 2.1.145 |
| `claude agents` pinned sessions `Ctrl+T` | `Ctrl+T` в `claude agents` pin-ить background session — pin-нута сесія залишається живою при idle, рестартується in-place для оновлень, та shed-иться під memory pressure лише після non-pinned | 2.1.147 |
| `/diff` keyboard scrollable detail view | `/diff` detail view тепер підтримує скролінг клавіатурою (arrows, `j`/`k`, `PgUp`/`PgDn`, `Space`, `Home`/`End`) | 2.1.149 |
| `find` macOS vnode table crash fix | Виправлено `find` в Bash tool що вичерпував macOS system file/vnode table та змушував падати host на великих directory trees | 2.1.149 |
| `/ultraplan` "uncommitted changes" false positive fix | Виправлено `/ultraplan` та remote session creation що failing з "Could not capture uncommitted changes" коли working tree не має реальних змін | 2.1.149 |
| `otelHeadersHelper` spaces in path fix | Виправлено `otelHeadersHelper` що silent-failing коли script path містить пробіли; helper failures тепер reported в `/doctor` та debug log | 2.1.149 |
| `/config` phantom changes fix | Виправлено `/config` exit summary що reporting phantom changes до auto-compact та theme при toggle unrelated settings | 2.1.149 |
| `/insights` crash missing fields fix | Виправлено `/insights` crash коли cached session-meta files missing optional fields | 2.1.149 |
| Malformed PowerShell/History misclassified fix | Виправлено malformed PowerShell та History tool calls з missing input що misclassified як reads в transcript collapsing | 2.1.149 |
| `/feedback` pre-compaction context | `/feedback` reports тепер включають conversation що відбулась до context compaction, полегшуючи triaging issues з ранніх частин довгих сесій | 2.1.149 |

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
| `claude plugin validate` expanded fields | `claude plugin validate` тепер приймає `$schema`, `version` та `description` на top-level `marketplace.json` та `$schema` в `plugin.json` | 2.1.120 |
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
| `/usage` large session files | `/usage` breakdown тепер включає large session files; streaming read для стабільного memory usage | 2.1.152 |
| `/doctor` stale marketplace/plugin fix | Виправлено `/doctor` що повідомляв "marketplace not found" або "plugin not found" для stale `enabledPlugins` entries що reference removed marketplaces або dropped plugins | 2.1.152 |
| `claude agents` background worker crash fix | Виправлено background worker crash в `claude agents` при прийнятті stale permission prompt після cancel subagent | 2.1.152 |
| `claude agents` autocomplete native commands | Autocomplete в dispatch input тепер пропонує native slash команди та bundled skills, не лише project skills | 2.1.153 |
| `claude agents` PR column format | PR column тепер показує `PR #N` для одного PR або `N PRs` для кількох | 2.1.153 |
| `claude update` release channel fix [Win] | Виправлено `claude update` що встановлював latest version замість configured release channel version для npm installations | 2.1.153 |
| `claude agents`/`--bg` stale daemon fix | Виправлено `claude agents` та `claude --bg` що працювали на stale daemon запущеному до binary-takeover support, навіть після оновлення | 2.1.153 |
| `claude --help` narrow terminal fix | Виправлено `claude --help` що виводив нерозбитий текст на терміналах вужчих за 92 колонки | 2.1.153 |
| `--strict-mcp-config` explicit agents inline mcpServers | `--strict-mcp-config` більше не вилучає inline `mcpServers` з явно переданих agent definitions (`--agents` / SDK `agents`); blocked subagent MCP servers тепер показують visible warning | 2.1.153 |
| `claude agents` `! <command>` background shell | `claude agents`: `! <command>` запускає shell команду як background session до якої можна attach/detach; також доступно як `claude --bg --exec '<command>'` | 2.1.154 |
| `claude agents` `/logout` sign-out | `claude agents`: `/logout` тепер виконує вихід з акаунту замість відправки в background session | 2.1.154 |
| `←←` agents view Bedrock/Vertex/Foundry/telemetry | `←←` для відкриття agents view тепер працює на Bedrock, Vertex, Foundry та з вимкненою телеметрією | 2.1.154 |
| `claude mcp list`/`get` pending approval | `claude mcp list` та `claude mcp get` тепер показують неатестовані `.mcp.json` сервери як `⏸ Pending approval` замість auto-approve при piped output | 2.1.154 |
| `/remote-control` autocomplete disconnect | Autocomplete `/remote-control` тепер показує "Disconnect Remote Control" коли Remote Control вже активний | 2.1.154 |
| `claude plugin init <name>` | Створення шаблону нового плагіна в `.claude/skills` | 2.1.157 |
| `/plugin` autocomplete expansion | Autocomplete для `/plugin` аргументів: підкоманди, встановлені імена плагінів та плагіни з відомих marketplaces | 2.1.157 |
| `claude agents` `agent` setting | Поле `agent` в `settings.json` тепер поважається для dispatched sessions; `--agent <name>` для перевизначення | 2.1.157 |
| `EnterWorktree` mid-session switching | `EnterWorktree` тепер дозволяє перемикатися між worktrees керованими Claude в межах сесії | 2.1.157 |
| Claude worktrees left unlocked | Worktrees керовані Claude тепер залишаються розблокованими після завершення агента, щоб `git worktree remove`/`prune` могли їх очистити | 2.1.157 |
| `claude agents` completed sessions retirement fix | Виправлено завершені сесії в `claude agents` що не retire-ились коли idle subagent все ще був parked або мав leak-нути backgrounded shell | 2.1.157 |
| `claude agents` Esc cancel fix | Виправлено натискання Esc в `claude agents` що не скасовувало повільне "opening…", залишаючи список unresponsive | 2.1.157 |
| Background agent worktrees orphan fix | Виправлено orphaning background agent worktrees під `.claude/worktrees/` після 30-денної job retention sweep | 2.1.157 |
| Background sessions sleep/wake date fix | Виправлено background sessions повторно attached після sleep/wake що не повідомляли моделі правильну дату | 2.1.157 |
| `claude agents` copy-on-select tmux fix | Виправлено copy-on-select в `claude agents` що не досягав system clipboard в tmux з `set-clipboard on` (регресія з 2.1.153) | 2.1.157 |
| `--resume` background subagents fix | Виправлено `--resume` що не повідомляв про background subagents що працювали коли попередній Claude Code process вийшов | 2.1.157 |
| `--resume` picker fullscreen residue fix | Виправлено `--resume` session picker що залишав свій вміст на терміналі після виходу в fullscreen mode | 2.1.157 |
| `--worktree`/`--worktree --tmux` linked worktree fix | Виправлено повернення до canonical repo root замість поточного linked worktree при `--worktree` та `--worktree --tmux` | 2.1.157 |
| `claude agents` slash-command substring autocomplete | Autocomplete в dispatch input тепер підтримує substring matching для slash-команд | 2.1.157 |
| `claude agents` відновлення завершених сесій fix | Виправлено відновлення завершеної сесії з `claude agents` що втрачало chat history та повторно запускало оригінальний промпт | 2.1.160 |
| Background sessions overnight retire fix | Виправлено background sessions що повторно підключались після overnight retire з втраченою розмовою та повторним запуском оригінального промпту | 2.1.160 |
| `claude --bg` socket missing fix | Виправлено `claude --bg` що періодично failing з "socket missing" при cold-start background daemon на завантаженій машині | 2.1.160 |
| `claude agents` auto-updater freeze fix | Виправлено `claude agents` що зависав на кілька секунд при поверненні до списку через auto-updater що повторно перевіряв оновлення при кожному exit | 2.1.160 |
| Background agents shown under Completed fix | Виправлено background agents що продовжували роботу та показувались під Completed в agents list | 2.1.160 |
| Background agents terminal sync-output markers fix | Виправлено background agents що надсилали terminal sync-output markers на термінали що їх не підтримують (Apple Terminal, tmux), спричиняючи артефакти рендерингу при вході в running agent | 2.1.160 |
| Mouse wheel scroll prompt history fix | Виправлено mouse wheel scrolling що скролив prompt history замість транскрипту одразу після відкриття сесії з agents list | 2.1.160 |
| CJK IME composition position fix | Виправлено CJK IME composition що з'являвся в bottom-left екрану замість біля input caret в `claude agents` view | 2.1.160 |
| Performance opening inactive background agents | Покращено продуктивність відкриття недавно неактивних background agent sessions в `claude agents` | 2.1.160 |
| Background session teardown SIGTERM | Покращено teardown background sessions (`claude rm`/`stop`, idle reap) — тепер надсилає SIGTERM shell subprocesses перед SIGKILL, щоб cleanup handlers запустились | 2.1.160 |
| `claude agents` done/total рядки | Рядки `claude agents` тепер показують `done/total` перед деталями коли роботу розподілено; peek показує найдовший елемент | 2.1.161 |
| `/mcp` collapses unused connectors | `/mcp` тепер згортає claude.ai connectors з якими ви ніколи не логінилися за рядок "Show unused connectors" | 2.1.161 |
| `/usage-credits` re-login fix | Виправлено `/usage-credits` що запускав re-login для Team та Enterprise admins замість посилання на usage settings організації | 2.1.161 |
| `/autofix-pr` worktree fix | Виправлено `/autofix-pr` що повідомляв "cannot run on the default branch" коли сесія в git worktree або іншому репозиторії | 2.1.161 |
| `--resume` picker non-git worktree fix | Виправлено `--resume` picker що не показував сесії з поточної директорії коли вона не є git worktree (напр. jj workspaces) | 2.1.161 |
| `claude mcp` secrets redacted | Виправлено `claude mcp` list/get/add що друкували secrets в термінал: `${VAR}` references більше не розширюються, credential headers та URL secrets замасковані | 2.1.161 |
| Background sessions stale model fix | Виправлено background sessions запущені з `claude agents` що завантажували застарілу модель з daemon environment замість моделі з `settings.json` | 2.1.161 |
| Completed subagents stuck running fix | Виправлено завершені субагенти що застрягали в стані "running" коли помилка виникала при фіналізації їх результату | 2.1.161 |
| `claude agents --json` `waitingFor` | `claude agents --json` тепер включає `waitingFor` що показує на чому очікує сесія (напр. permission prompt) | 2.1.162 |
| `--tools` Grep/Glob native builds | `--tools` з явним переліком Grep/Glob тепер надає вбудовані search tools на native builds з embedded search (раніше ці назви мовчазно ігнорувались) | 2.1.162 |
| Config directory read-only hang fix | Виправлено silent startup hang коли config directory read-only або unwritable — тепер стартує з in-memory config та показує startup errors замість blank screen | 2.1.162 |
| `claude agents` status text full width | Виправлено `claude agents` що обрізав live status text (tool args, replies, prompts, exec output) на 60–120 колонок на широких терміналах — тепер використовує повну ширину | 2.1.162 |
| `claude agents` name column width | Виправлено `claude agents` що обрізав довгі session names на 40 колонок — name column тепер росте з шириною терміналу | 2.1.162 |
| `claude agents` attach bounce fix | Виправлено `claude agents` attach що іноді одразу повертався до session list при першій спробі після background-service restart | 2.1.162 |
| `claude agents` Ctrl+V image paste fix | Виправлено `claude agents` Ctrl+V image paste що не працював в dispatch input та session reply box; paste без image тепер показує підказку | 2.1.162 |
| Backgrounding with ← losing conversation fix | Виправлено backgrounding сесії через ← що мовчазно втрачав розмову коли background service не може стартувати — сесія залишається в списку як failed row, можна wake з Enter | 2.1.162 |
| Agents view replies retry | Виправлено відповіді з agents view що не вдається відправити — тепер ставляться в чергу для доставки при наступному старті сесії | 2.1.162 |
| Opening running background session stall fix | Виправлено відкриття running background session з `claude agents` що затримувалось на 5 секунд перед attach | 2.1.162 |
| Background service startup verification | Покращено background service startup та `claude update` verification — тепер очікує завершення endpoint-security scanning нових binaries замість failure після 5 секунд | 2.1.162 |
| Background dispatch spawn error class | Background dispatch spawn failures тепер повідомляють клас помилки коли errno недоступний | 2.1.162 |
