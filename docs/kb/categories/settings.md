# Налаштування settings.json

> Розташування: `~/.claude/settings.json` (user), `.claude/settings.json` (project), `.claude/settings.local.json` (local)
> Зміни набувають чинності миттєво (1.0.90)

## Загальні

| Ключ | Опис | Версія |
|------|------|--------|
| `language` | Мова відповідей Claude (напр. "ukrainian", "japanese") | 2.1.0 |
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
| ~~`disabledTools`~~ | [ЗАСТАРІЛО] → `disallowedTools` | — |
| `autoMemoryDirectory` | Кастомна директорія пам'яті | 2.1.74 |
| `showThinkingSummaries` | Показувати thinking summaries в інтерактивних сесіях | 2.1.89 |
| `disableSkillShellExecution` | Вимкнути shell виконання в skills, кастомних командах та plugin commands | 2.1.91 |
| `sessionTimeout` | Таймаут автозавершення сесії (мс) | 2.2.3 |
| Custom themes | Кастомні теми з `/theme` або JSON файлами в `~/.claude/themes/`; плагіни можуть постачати теми через `themes/` директорію | 2.1.118 |
| `/config` persist | `/config` settings (theme, editor mode, verbose, etc.) зберігаються в `~/.claude/settings.json` з правильним precedence project/local/policy | 2.1.119 |
| `prUrlTemplate` | Налаштування URL для PR badge в footer (замість github.com) | 2.1.119 |
| PowerShell auto-approve | PowerShell tool команди можуть бути auto-approved в permission mode, аналогічно Bash поведінці | 2.1.119 |
| `refreshInterval` status line | Перезапуск status line команди кожні N секунд | 2.1.97 |
| `workspace.git_worktree` status line | JSON input для status line, встановлюється в git worktree | 2.1.97 |

## Дозволи

| Ключ | Опис | Версія |
|------|------|--------|
| `permissions.defaultMode` | Режим за замовчуванням | 0.2.67 |
| `permissions.defaultMode: "auto"` fix | Виправлено JSON schema валідацію | 2.1.91 |
| Bash permission bypass fix | Виправлено bypass через backslash-escaped flag → довільний код | 2.1.98 |
| Compound Bash bypass fix | Виправлено bypass forced prompts для compound commands в auto/bypass mode | 2.1.98 |
| Bash wildcard rules fix | `Bash(cmd:*)` та `Bash(git commit *)` тепер match з extra spaces/tabs | 2.1.98 |
| Bash deny piped cd fix | `Bash(...)` deny правила не понижуються до prompt для piped `cd` + команд | 2.1.98 |
| Bash false prompts fix | Виправлено для `cut -d /`, `paste -d /`, `column -s /`, `awk '{print $1}'`, імена з `%` | 2.1.98 |
| Bash grep/rg -f FILE fix | Промпт при читанні pattern file поза робочою директорією | 2.1.98 |
| Bash /dev/tcp|udp fix | Redirects до `/dev/tcp/...` та `/dev/udp/...` тепер промптять | 2.1.98 |
| Env-var prefix read-only fix | Команди з env-var prefix промптять якщо var не safe (`LANG`, `TZ`, `NO_COLOR`) | 2.1.98 |
| JS prototype properties fix | Правила з іменами як `toString` більше не ігнорують весь `settings.json` | 2.1.97 |
| Agent team permission mode | Члени agent team наслідують permission mode лідера | 2.1.98 |
| Accept Edits safe wrappers | Auto-approve файлових команд з safe env vars (`LANG=C rm foo`) | 2.1.97 |
| Managed allow rules cleanup | Виправлено активні allow rules після видалення адміном | 2.1.97 |
| `additionalDirectories` mid-session | Зміни працюють без рестарту; видалені директорії втрачають доступ миттєво | 2.1.97 |
| `additionalDirectories` vs `--add-dir` | Видалення з settings більше не відкликає `--add-dir` | 2.1.97 |
| `--setting-sources` cleanup fix | Без `user` cleanup більше не видаляє історію >30 днів | 2.1.101 |
| In-app settings refresh | `/add-dir --remember`, `/config` тепер оновлюють in-memory snapshot | 2.1.101 |
| settings.json env numbers fix | Виправлено краш коли env values є числами замість рядків | 2.1.101 |
| `/config` labels clarity | Покращено labels та описи в `/config` для зрозумілості | 2.1.105 |
| Malformed keybinding values | `keybindings.json` з malformed entry values тепер відхиляється з чіткою помилкою замість мовчазного завантаження | 2.1.105 |
| `autoScrollEnabled` | Вимкнення auto-scroll в fullscreen mode | 2.1.110 |
| External editor commented context | Опція показу останньої відповіді як закоментованого контексту в `Ctrl+G` зовнішньому редакторі (ввімкнути через `/config`) | 2.1.110 |
| Custom keybindings 3p fix | `keybindings.json` завантажується на Bedrock/Vertex/3p | 2.1.101 |
| `--dangerously-skip-permissions` fix | Не понижується до accept-edits після write в захищену директорію | 2.1.97 |
| `permissions.deny` vs hook ask | `deny` правила мають пріоритет над хуковим `ask` | 2.1.101 |
| `permissions.disableBypassPermissionsMode` | Заблокувати bypass режим | — |
| Read-only glob no prompt | Read-only bash команди з glob patterns (напр. `ls *.ts`) більше не trigerra permission prompt | 2.1.111 |
| `permissions.deny` | Правила відмови | — |
| `permissions.allow` | Правила дозволу | — |
| `disallowedTools` | Заблоковані інструменти | 0.2.82 |

## Контекст

| Ключ | Опис | Версія |
|------|------|--------|
| `autoCompact` | Автоматичне стиснення | 0.2.47 |
| `cleanupPeriodDays` | Дні до очищення (`0` відхиляється з помилкою) | 0.2.117, 2.1.89 |
| `plansDirectory` | Директорія планів | 2.1.9 |

## MCP

| Ключ | Опис | Версія |
|------|------|--------|
| `enabledPlugins` | Увімкнені плагіни | — |
| `extraKnownMarketplaces` | Додаткові marketplace-джерела | 2.0.12 |
| `allowedMcpServers` | [Managed] Дозволені MCP сервери | 2.0.21 |
| `deniedMcpServers` | [Managed] Заблоковані MCP сервери | 2.1.85 |
| `strictKnownMarketplaces` | Обмеження marketplace (hostPattern, pathPattern) | 2.1.69 |

## Sandbox

| Ключ | Опис | Версія |
|------|------|--------|
| `sandbox.enabled` | Увімкнути sandbox (Linux/Mac) | 2.0.24 |
| `sandbox.failIfUnavailable` | Помилка якщо sandbox недоступний | 2.1.83 |
| `sandbox.allowWrite` | Дозволити запис у `denyRead` зонах | 2.1.77 |
| `sandbox.allowRead` | Дозволити читання у `denyRead` зонах | 2.1.78 |
| `sandbox.excludedCommands` | Команди поза sandbox | 2.0.30 |
| `.husky` захищена директорія | Додано до захищених директорій в acceptEdits mode | 2.1.90 |
| `sandbox.enableWeakerNetworkIsolation` | Слабша network ізоляція (macOS MITM) | 2.1.69 |
| Linux `apply-seccomp` helper | Поставляється в npm та native builds, відновлено unix-socket blocking | 2.1.92 |
| `sandbox.network.allowMachLookup` | Працює на macOS | 2.1.97 |
| Sandbox network auto-approve | Auto mode/bypass auto-approve sandbox network prompts | 2.1.97 |
| Bash mktemp sandbox fix | Виправлено "No such file" після fresh boot в sandboxed commands | 2.1.98 |
| `allowUnsandboxedCommands` | Дозволити команди поза sandbox | 2.0.30 |
| Sandbox dangerous-path auto-allow fix | Sandbox auto-allow більше не bypass dangerous-path safety check для `rm`/`rmdir` що цільовують `/`, `$HOME` або critical system dirs | 2.1.116 |
| macOS `/private/*` dangerous removal | `/private/{etc,var,tmp,home}` paths тепер трактуються як dangerous removal targets під `Bash(rm:*)` allow rules | 2.1.113 |
| Bash deny exec wrappers | Bash deny rules тепер match команди обгорнуті в `env`/`sudo`/`watch`/`ionice`/`setsid` та подібні exec wrappers | 2.1.113 |
| `Bash(find:*)` exec safety | `Bash(find:*)` allow rules більше не auto-approve `find -exec`/`-delete` | 2.1.113 |
| `sandbox.network.deniedDomains` | Блокування специфічних доменів навіть коли ширший `allowedDomains` wildcard дозволяє | 2.1.113 |

## Пошук MCP

| Ключ | Опис | Версія |
|------|------|--------|
| `auto` / `auto:N` | Автоматичне ввімкнення при N% контексту | 2.1.7, 2.1.9 |

## Managed/Enterprise

| Ключ | Опис | Версія |
|------|------|--------|
| `pluginTrustMessage` | Повідомлення довіри плагінів | 2.1.69 |
| `allowedChannelPlugins` | Allowlist канал-плагінів | 2.1.80 |
| `permissions.defaultMode` | Не застосовується в Remote Control | 2.1.70 |
| Statusline модель іншої сесії | Виправлено відображення моделі при кількох інстансах | 2.1.86 |
| `forceRemoteSettingsRefresh` | Блокувати старт поки remote managed settings не завантажено (fail-closed) | 2.1.92 |
| settings.json parse warning | Банер при помилці парсингу (permission rules не застосовуються) | 2.1.94 |
| `wslInheritsWindowsSettings` | WSL на Windows може успадковувати Windows-side managed settings через цей policy key | 2.1.118 |
| "Dangerous rm operation" false-positive fix [Win] | Виправлено хибні "Dangerous rm operation" permission prompts в auto mode для багаторядкових bash команд з pipe та redirect | 2.1.120 |
| "Always allow" remote sessions fix | Правила "Always allow" для built-in tools в remote sessions тепер зберігаються після worker restarts | 2.1.121 |
| Managed settings approval fix | Managed settings approval prompt більше не завершує сесію при прийнятті — тепер застосовує налаштування та продовжує | 2.1.121 |
| Invalid legacy enum fix | Invalid legacy enum values в `settings.json` більше не інвалідують весь файл | 2.1.121 |
