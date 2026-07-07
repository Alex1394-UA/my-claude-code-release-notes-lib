# Windows-специфічне

> Також дивіться основні категорії — Windows-можливості дублюються там з тегом [Win].

## Встановлення та запуск

| Можливість | Опис | Версія |
|-----------|------|--------|
| Нативна підтримка Windows | Потребує Git for Windows | 1.0.51 |
| winget installation | Windows Package Manager | 2.1.2 |
| Windows ARM64 binary | Нативна підтримка | 2.1.41 |
| Нативний installer | CLI installer з PowerShell/cmd | — |
| `CLAUDE_CODE_DISABLE_NONSTREAMING_FALLBACK` | Виправлення web search | 2.1.70 |

## Шляхи та файлова система

| Можливість | Опис | Версія |
|-----------|------|--------|
| POSIX формат шляхів | `/c/Users/...` для permissions | 1.0.106 |
| PATH case-insensitive | Незалежне від регістру порівняння | 1.0.117 |
| Регістр букви диска | Робота з різним регістром (C: vs c:) | 2.1.47 |
| Підтримка `.bashrc` | Підтримка .bashrc файлів | 1.0.65 |
| Тимчасові файли CWD | Тимчасові файли в робочій директорії | 2.1.47 |
| Виправлення ENAMETOOLONG | Довгі шляхи | 2.1.44 |
| Копіювання файлів worktree | Копіювання файлів при worktree | 2.1.33 |
| Виявлення глобальної .claude | Виявлення глобальної .claude папки | 2.1.33 |

## Термінал та рендеринг

| Можливість | Опис | Версія |
|-----------|------|--------|
| `os.EOL` (`\r\n`) rendering | Виправлення display на Windows | 2.1.47 |
| CRLF doubling fix | Edit/Write більше не подвоює CRLF | 2.1.89 |
| Виправлення підрахунку рядків | Правильний line counting | 2.1.47 |
| Виправлення bold/color shift | Вирівнювання стилів тексту | 2.1.47 |
| Виправлення Right Alt key | `[25~` escape sequences | 2.1.47 |
| Виправлення console flash | Спалаху при spawn | 2.1.29 |
| Виправлення рендерингу | Некоректний display fix | 2.1.74 |
| RTL текст | Виправлення Arabic/Hebrew в терміналі | 2.1.74 |
| CJK timestamp | Виправлення відображення | 2.1.47 |
| Line-by-line streaming вимкнено | Через проблеми рендерингу | 2.1.81 |
| Shift+Enter Win Terminal 1.25 | Виправлення замість newline | 2.1.89 |
| `cmd+delete` fix | Виправлено видалення до початку рядка на Windows Terminal (та інших терміналах) | 2.1.91 |
| Keyboard mode exit | Виправлення залипання Enhanced Keyboard | 2.1.85 |
| Виправлення input lag | Затримка вводу | 1.0.117, 1.0.119, 1.0.120 |

## Alt/Shift комбінації

| Скорочення | Опис | Версія |
|-----------|------|--------|
| Shift+Tab | Перемикання mode (замість Alt+M) | 1.0.56 |
| Alt+V | Вставка зображень | 1.0.93 |
| Alt+M | Перемикання mode | — |

## PowerShell

| Можливість | Опис | Версія |
|-----------|------|--------|
| PowerShell tool | Opt-in preview | 2.1.84 |
| PS 5.1 failure reporting fix | Виправлення помилкових невдач при записі в stderr | 2.1.89 |
| `/env` для PowerShell | `/env` тепер застосовується до PowerShell tool | 2.1.89 |
| Version-specific prompt | Підказки синтаксису PS 5.1 vs 7+ | 2.1.89 |
| Виявлення небезпечних команд | Dangerous command detection | 2.1.84, 2.1.85 |
| Hardened permission checks | Виправлено trailing `&` bypass, `-ErrorAction Break` hang, archive-extraction TOCTOU, parse-fail fallback | 2.1.90 |
| Видалено DNS auto-allow | `Get-DnsClientCache` та `ipconfig /displaydns` прибрані з auto-allow (приватність) | 2.1.90 |
| Підтримка MSYS2/Cygwin | Виправлення втрати output | 2.1.47 |

## Git Bash / Shell

| Можливість | Опис | Версія |
|-----------|------|--------|
| Хуки через Git Bash | Виконуються через Git Bash, не cmd.exe | 2.1.47 |
| Bash на Windows | Виправлення виконання команд | 2.1.53, 2.1.55 |
| Subprocess spawning | Виправлення "No such file or directory" | 1.0.68 |
| `cmd /c npx` wrapper | Для MCP серверів у .mcp.json | — |
| Permission checks для bash | Виправлення permission matching | 1.0.68 |
| Homebrew PATH | Виправлення знайдення бінарників | 2.1.78 |
| nul file creation | Виправлення `2>nul` redirection | 2.1.33 |

## MCP на Windows

| Можливість | Опис | Версія |
|-----------|------|--------|
| Plugin MCP colon paths | Виправлення шляхів з `:` | 2.0.67 |
| LSP file URIs | Виправлення malformed URI | 2.1.74 |
| npm installs | `EEXIST` в OneDrive папках | 2.1.72 |

## Managed Settings

| Можливість | Опис | Версія |
|-----------|------|--------|
| `C:\Program Files\ClaudeCode\managed-settings.json` | Основний шлях | 2.1.2 |
| ~~`C:\ProgramData\ClaudeCode`~~ | [ВИДАЛЕНО] старий шлях | 2.1.75 |
| Підтримка Registry | Managed settings через Windows Registry | 2.1.51 |
| Config corruption fix | Виправлення конкурентних записів | 2.1.61 |

## VS Code на Windows

| Можливість | Опис | Версія |
|-----------|------|--------|
| Пошук файлів | File search fix | 2.1.21 |
| .claude.json location | Виправлення шляху конфігу | 2.0.59 |
| PATH inheritance | Виправлення Git Bash шляху | 2.1.47, 2.1.81 |
| PATH inheritance (cmd.exe) | Виправлення успадкування PATH при запуску з cmd.exe | 2.2.3 |
| Windows ARM64 | Fallback до x64 | 1.0.48 |
| Crash fix | "command not found" | 2.1.52, 2.1.56 |
| Sidebar view container | Race condition fix | 1.0.89 |
| `/extra-usage` | Підтримка в VS Code | 2.1.50 |
| Session diff button | Виправлення | 2.1.33 |
| VSCode "requires git-bash" fix | Виправлено хибне повідомлення на Windows при встановленому Git за замовч. | 2.1.98 |

## Інше Windows-специфічне

| Можливість | Опис | Версія |
|-----------|------|--------|
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
| Native install fix | Виправлення silent failure | 2.1.0 |
| Input method (IME) | Покращена підтримка | 1.0.108 |
| File write permissions | Write tool з umask | 2.1.0 |
| Symlink escape | Захист від bypass через symlinks | 2.1.47 |
| Version cleanup rollback fix | Cleanup більше не видаляє rollback копію активної версії | 2.1.91 |
| NO_FLICKER повільне mouse-wheel | Виправлено на Windows Terminal | 2.1.97 |
| NO_FLICKER CJK/Unicode | Виправлено пошкодження Korean/Japanese/Unicode при копіюванні | 2.1.97 |
| VSCode "requires git-bash" [Win] | Виправлено хибне повідомлення коли `CLAUDE_CODE_GIT_BASH_PATH` встановлено | 2.1.98 |
| PowerShell tool rollout | PowerShell tool progressive rollout; opt in/out з `CLAUDE_CODE_USE_POWERSHELL_TOOL`; Linux/macOS enable з `=1` (потрібен `pwsh`) | 2.1.111 |
| `CLAUDE_ENV_FILE` fix [Win] | `CLAUDE_ENV_FILE` та SessionStart hook environment files тепер застосовуються (раніше no-op) | 2.1.111 |
| Permission rules drive-letter fix [Win] | Permission rules з drive-letter paths тепер коректно root-anchored, та paths що відрізняються лише регістром букви диска розпізнаються як однакові | 2.1.111 |
| `Ctrl+Backspace` delete word [Win] | Видалення попереднього слова на Windows | 2.1.113 |
| `/insights` EBUSY fix [Win] | Виправлено краш `/insights` з `EBUSY` | 2.1.113 |
| Credential save crash fix [Win] | Виправлено краш збереження credential що пошкоджував `~/.claude/.credentials.json` | 2.1.118 |
| Cached `where.exe` lookups [Win] | Кешовані `where.exe` executable lookups per process для швидшого subprocess launches | 2.1.117 |
| MCP plugin servers spawn fix [Win] | Виправлено непоявлення MCP серверів з плагінів на Windows коли plugin cache неповний | 2.1.119 |
| CRLF paste extra blank line [Win] | Виправлено вставку CRLF контенту (Windows clipboards, Xcode console) що додавала зайвий пустий рядок між кожним рядком | 2.1.119 |
| MCP "cmd /c" false-positive [Win] | Видалено хибне "Windows requires 'cmd /c' wrapper" MCP config попередження | 2.1.119 |
| PowerShell як заміна Git Bash [Win] | Git for Windows (Git Bash) більше не потрібен — при відсутності Claude Code використовує PowerShell як shell tool | 2.1.120 |
| Glob/Grep disappear fix [Win] | Виправлено зникання Glob та Grep tools на нативних macOS/Linux builds коли Bash tool заблокований через permissions | 2.1.119 |
| PowerShell 7 detection expansion | PowerShell 7 встановлений через Microsoft Store, MSI без PATH, або .NET global tool тепер виявляється | 2.1.126 |
| PowerShell як primary shell [Win] | Коли PowerShell tool увімкнено, Claude тепер розглядає PowerShell як основний shell замість Git Bash | 2.1.126 |
| CJK/Chinese garbled text fix [Win] | Виправлено пошкоджений Japanese/Korean/Chinese текст на Windows в no-flicker mode | 2.1.126 |
| Clipboard EDR exposure fix [Win] | Clipboard writes більше не відкривають скопійований контент в process command-line arguments видимих EDR/SIEM telemetry; також виправлено >22KB selections | 2.1.126 |
| PowerShell bare `--` fix [Win] | PowerShell tool: bare `--` (напр. `git diff -- file`) більше не хибно трактуються як `--%` stop-parsing token | 2.1.126 |
| VS Code extension activation fix [Win] | Виправлено помилку активації VS Code extension на Windows через hardcoded build path в bundled SDK (`createRequire` polyfill bug) | 2.1.131 |
| Dead keyboard input fix [Win] | Виправлено dead keyboard input на Windows при повторному відкритті фоновой сесії з `claude agents` | 2.1.132 |
| `Edit`/`Write` drive root allow rules fix [Win] | Виправлено `Edit`/`Write` allow правила scoped до drive root (`C:\`) що завжди промптили замість match | 2.1.133 |
| Mapped network drives `--add-dir` fix [Win] | Виправлено Read/Write/Edit що denied на mapped network drives переданих через `--add-dir` / SDK `additionalDirectories` | 2.1.133 |
| WSL2 image paste PowerShell fallback | WSL2: image paste з Windows clipboard працює через PowerShell fallback коли xclip/wl-paste не може прочитати image data | 2.1.136 |
| VS Code extension Windows activation fix [Win] | Виправлено extension failing to activate на Windows | 2.1.137 |
| `/clear` VSCode fix [VSCode/Win] | Виправлено `/clear` що не очищував conversation context та displayed transcript у VS Code extension | 2.1.129 |
| Scroll behavior Win Terminal + VS Code background fix [Win] | Виправлено scroll behavior в Windows Terminal та VS Code при attached до background sessions | 2.1.139 |
| Grep drive-letter paths fix [Win] | Виправлено Grep results що не relativizing Windows drive-letter paths та count mode reporting wrong totals для single-file paths | 2.1.139 |
| Missing executable event-loop stall fix [Win] | Виправлено recurring event-loop stall на Windows коли missing executable (напр. `gh`) triggering synchronous `where.exe` re-spawns на кожному check | 2.1.140 |
| `claude daemon status` Windows pipe fix [Win] | Виправлено `claude daemon status` та `/doctor` на Windows що throwing коли daemon pipe key file locked або unreadable — тепер shows underlying error | 2.1.141 |
| Alt+V image paste "no image" fix [Win] | Виправлено Windows Alt+V image paste що reporting "no image found" коли clipboard містить screenshot | 2.1.141 |
| `claude agents` network-drive deadlock fix [Win] | Виправлено deadlock `claude agents` на Windows з робочими директоріями на network drives; Ctrl+C тепер працює під час startup | 2.1.142 |
| PowerShell tool default Bedrock/Vertex/Foundry [Win] | PowerShell tool тепер увімкнений за замовчуванням на Windows для Bedrock, Vertex та Foundry користувачів; opt-out з `CLAUDE_CODE_USE_POWERSHELL_TOOL=0` | 2.1.143 |
| PowerShell `-ExecutionPolicy Bypass` [Win] | PowerShell tool тепер передає `-ExecutionPolicy Bypass`; opt-out з `CLAUDE_CODE_POWERSHELL_RESPECT_EXECUTION_POLICY=1` | 2.1.143 |
| `claude agents` right-click paste fix [Win] | Виправлено right-click paste в `claude agents` на Windows Terminal та WSL | 2.1.143 |
| `claude agents` repeated PowerShell processes fix [Win] | Виправлено agent view що спавнив повторні PowerShell процеси на Windows при спискуванні сесій | 2.1.143 |
| Attached background sessions stale-fragment fix [Win] | Виправлено stale-fragment rendering при скролі в attached background sessions на Windows Terminal | 2.1.143 |
| `claude agents` ← while streaming fix [Win] | Виправлено unresponsive agents list при натисканні ← в `claude agents` поки response стрімиться на Windows | 2.1.143 |
| Scrolling attached background sessions fix [Win] | Виправлено скролінг в attached background sessions на Windows — PgUp/PgDn, mouse wheel та Ctrl+O transcript navigation тепер працюють | 2.1.144 |
| Crash closing terminal attached to background session fix [Win] | Виправлено crash при закритті терміналу поки attached до background session на Windows | 2.1.144 |
| `claude agents` ← unresponsive list fix [Win] | Виправлено `claude agents` де натискання ← залишав список unresponsive до keyboard input на Windows | 2.1.144 |
| Ghost characters CJK agent view fix [Win] | Виправлено ghost characters на лівому краю при переключенні panes в Agent View на Windows Terminal з CJK контентом | 2.1.144 |
| `/resume` picker forked background sessions fix [Win] | Виправлено `/resume` picker що не показував sessions forked від background session | 2.1.144 |
| Markdown links in agents clickable fix [Win] | Виправлено markdown links в `claude agents` attached sessions що rendering як plain text замість clickable hyperlinks | 2.1.144 |
| Cross-project resume hint PowerShell 5.1 fix [Win] | Виправлено cross-project resume hint що failing в default Windows PowerShell 5.1 — Windows тепер використовує `;` як command separator | 2.1.145 |
| PowerShell "Yes, and don't ask again" permission rule fix [Win] | Виправлено "Yes, and don't ask again" для PowerShell script invocation що писав правило що не збігалося на наступних runs | 2.1.147 |
| PowerShell tool winget/Store pwsh exit code 1 fix [Win] | Виправлено PowerShell tool що failing з exit code 1 коли `pwsh` встановлено через winget або Microsoft Store | 2.1.147 |
| Full-screen strobing attached background sessions Win Terminal fix [Win] | Виправлено full-screen strobing в attached background sessions на Windows Terminal поки Claude стрімить | 2.1.147 |
| Background-job worktree NTFS junctions follow fix [Win] | Виправлено видалення background-job worktree що проходив через NTFS junctions в основний repo | 2.1.147 |
| Rare hang scroll settle fix [Win] | Виправлено rare hang при очікуванні scroll settle на Windows | 2.1.147 |
| Agent view stale/doubled rows CJK characters fix [Win] | Виправлено stale та doubled rows в agent view list на Windows коли background session results містять wide (CJK) characters | 2.1.147 |
| PowerShell `cd` functions permission bypass fix [Win] | Виправлено PowerShell permission bypass: built-in `cd` functions (`cd..`, `cd\`, `cd~`, `X:`) змінювали робочу директорію undetected, дозволяючи пізнішій команді читати поза workspace | 2.1.149 |
| PowerShell prefix/wildcard allow rules fix [Win] | Виправлено PowerShell prefix/wildcard allow rules (напр. `PowerShell(dotnet.exe build *)`) що не pre-approving native executables та scripts | 2.1.149 |
| PowerShell installer false "complete" fix [Win] | Виправлено Windows PowerShell installer що повідомляв "Installation complete!" коли installation фактично не вдалася | 2.1.153 |
| IME candidate window position fix [Win] | Виправлено IME candidate window що appear-ав на bottom of screen замість next to input caret в attached background sessions на Windows | 2.1.153 |
| Windows update rollback restore [Win] | Якщо Windows update fails, Claude Code тепер відновлює оригінальний executable by copy та повідомляє як recovery | 2.1.153 |
| Windows update "exe in use" fix [Win] | Виправлено помилки оновлення на Windows що показували generic error замість підказки закрити інші сесії та повторити | 2.1.154 |
| WSL image paste `alt+v` fix | Виправлено image paste (`alt+v`) в WSL | 2.1.157 |
| WSL screenshot paste Windows 11 | Підтримка screenshot paste на Windows 11 в WSL | 2.1.157 |
| WSL drag images from Windows Explorer | Можливість перетягувати зображення з Windows Explorer в WSL | 2.1.157 |
| Copy-on-select WSL clipboard fix [Win] | Виправлено copy-on-select що не писав в Windows clipboard на WSL — тепер використовує PowerShell interop замість OSC 52, який MobaXterm не підтримує | 2.1.160 |
| Directory deletion after `claude rm` fix [Win] | Виправлено issue де directory background session не могла бути видалена після `claude rm` поки background daemon не вийшов | 2.1.160 |
| Esc/arrow keys unresponsive background sessions fix [Win] | Виправлено Esc, arrow keys та typing що ставали unresponsive на Windows при attached до background session або в agent view під високим CPU навантаженням | 2.1.160 |
| `file:///C:/...` links broken path fix [Win] | Виправлено valid `file:///C:/...` links що переписувались в broken path на Windows terminals з hyperlink підтримкою | 2.1.160 |
| Windows hooks explicit bash fix [Win] | Виправлено hooks на Windows що явно викликають bash (напр. `/usr/bin/bash script.sh`) що failing з "command not found" або "cannot execute binary file" | 2.1.161 |
| Windows permission rules backslashes/case fix [Win] | Виправлено Windows permission rules що ніколи не match коли шлях написаний з backslashes (`~\`, `\\server\share`) або case-variant paths | 2.1.162 |
| Read deny rules hiding files from Glob/Grep [Win] | Виправлено Read deny rules що не ховали файли з Glob/Grep results | 2.1.162 |
| Bash EEXIST session-env directory fix [Win] | Виправлено Bash команди з "EEXIST: file already exists" на session-env directory коли він має read-only атрибут або знаходиться всередині OneDrive | 2.1.163 |
| PowerShell command validation hang fix [Win] | Виправлено PowerShell command validation що періодично зависав набагато довше за свій бюджет часу на Windows коли дочірні процеси вбитого процесу тримали його output pipes | 2.1.166 |
| Git Credential Manager popup fix [Win] | Виправлено спливання Git Credential Manager "Connect to GitHub" на Windows при старті коли background git команди виконувались без cached credentials | 2.1.169 |
| MCPB plugin cache spurious invalidation fix [Win] | Виправлено спорожнення plugin cache MCPB на Windows що спричиняло непотрібне повторне розпакування | 2.1.169 |
| Agents view stale frame WSL fix [Win] | Виправлено stale/garbled frame що залишався після навігації назад від агента на WSL в Windows Terminal | 2.1.169 |
| Auto-updater retry held process fix [Win] | Auto-updater на Windows тепер припиняє retry протягом сесії коли `claude.exe` утримується іншим процесом | 2.1.169 |
| Mouse tracking disabled unsupported consoles [Win] | Вимкнено mouse tracking на Windows consoles що не повністю його підтримують | 2.1.172 |
| Spurious sandbox dependencies warning fix [Win] | Виправлено хибне "sandbox dependencies missing" startup warning на Windows коли sandbox був увімкнений в settings | 2.1.173 |
| Agents view input text cursor fix [Win] | Виправлено відсутність текстового курсору в agents view input на Windows | 2.1.176 |
| Background sessions network paths fix [Win] | Виправлено background sessions що нейтралізують Windows network paths в persisted state перед respawn | 2.1.176 |
| Background-service daemon ReadOnly attribute fix [Win] | Виправлено Windows background-service daemon що не стартував коли `~/.claude/daemon` має ReadOnly атрибут | 2.1.176 |
| Mouse-wheel WSL2 Win Terminal/VS Code fix [Win] | Виправлено mouse-wheel scrolling в WSL2 під Windows Terminal та VS Code (регресія з 2.1.172) | 2.1.179 |

## Інше Windows-специфічне (2.1.181)

| Можливість | Опис | Версія |
|-----------|------|--------|
| Write/Edit 0-байт/обрізані файли network drives fix [Win] | Виправлено Write/Edit що створювали 0-байт або обрізані файли на network drives та cloud-synced папках | 2.1.181 |
| ExitWorktree відмова видалення чистого worktree fix [Win] | Виправлено ExitWorktree що відмовлявся видалити чистий worktree з "Could not verify worktree state" коли bare `git` не можна резолвити на Windows | 2.1.181 |
| Agent creation EEXIST Windows/OneDrive fix [Win] | Виправлено помилку створення агента "EEXIST: file already exists" коли agents directory вже існує (Windows/OneDrive) | 2.1.181 |
| Settings symlink ENOENT fix [Win] | Виправлено зміни налаштувань (`/effort`, `/model`) що падали з ENOENT коли `~/.claude/settings.json` є відносним symlink під symlinked `~/.claude` | 2.1.181 |

## Термінал та рендеринг (2.1.183)

| Можливість | Опис | Версія |
|-----------|------|--------|
| Fullscreen TUI corruption fix [Win] | Виправлено пошкодження fullscreen TUI (statusline посередині екрану, дубльовані рядки спіннера, злитий текст) у Windows Terminal під навантаженням глибоко вкладених subagent-ів | 2.1.183 |

## Термінал та рендеринг (2.1.187)

| Можливість | Опис | Версія |
|-----------|------|--------|
| Paste Korean/CJK mojibake fix [Win] | Виправлено вставлений Korean/CJK текст що перетворювався на mojibake в терміналах що доставляють paste як per-byte extended-key events | 2.1.187 |

## Термінал та рендеринг (2.1.191)

| Можливість | Опис | Версія |
|-----------|------|--------|
| `/login` URL truncated wrap fix [Win] | Виправлено `/login` URL що обрізався при переносі через рядки в Windows Terminal | 2.1.191 |

## PowerShell (2.1.196)

| Можливість | Опис | Версія |
|-----------|------|--------|
| PowerShell `git diff`/`git grep`/`egrep`/`fgrep` exit 1 fix [Win] | Виправлено PowerShell `git diff`, `git grep`, `egrep`, `fgrep` та quoted patterns з `|` що reported як failures коли exit 1, тепер matching Bash behavior | 2.1.196 |

## Інше Windows-специфічне (2.1.196)

| Можливість | Опис | Версія |
|-----------|------|--------|
| Background sessions survive process stop/restart/update [Win] | Background shells передаються замість kill при зупинці, рестарті або оновленні процесу сесії на Windows | 2.1.196 |
