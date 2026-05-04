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
