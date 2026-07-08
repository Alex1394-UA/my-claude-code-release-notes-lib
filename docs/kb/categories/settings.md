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
| `footerLinksRegexes` | Regex-відповідності для link badges в footer row; конфігурується через user або managed settings | 2.1.176 |
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
| Правила відмови `$HOME` paths Bash fix | Правила відмови на домашніх шляхах (напр. `Read(~/Desktop/**)`) тепер блокують Bash команди що посилаються на шлях через `$HOME` | 2.1.163 |

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
| `spinnerTipsOverride.excludeDefault` fix | Виправлено nonsuppressement time-based spinner tips коли `excludeDefault` встановлено | 2.1.122 |
| Malformed hooks entry resilience | Malformed hooks entry в `settings.json` більше не інвалідує весь файл | 2.1.122 |
| `allowManagedDomainsOnly`/`allowManagedReadPathsOnly` security fix | **Безпека:** Виправлено ігнорування цих sandbox правил коли higher-priority managed-settings source не мав `sandbox` block | 2.1.126 |
| Host-managed analytics fix | Host-managed deployments (`CLAUDE_CODE_PROVIDER_MANAGED_BY_HOST`) більше не auto-disable analytics на Bedrock/Vertex/Foundry | 2.1.126 |
| `skillOverrides` | Контроль видимості skills: `off` — ховає від моделі та `/`, `user-invocable-only` — ховає від моделі, `name-only` — згортає опис | 2.1.129 |
| SDK hosts `localSettings` suggestion | SDK hosts отримують persistent `localSettings` suggestion для Bash permission prompts — "Always allow" пише в `.claude/settings.local.json` | 2.1.128 |
| `Bash(mkdir *)` wildcard fix | `Bash(mkdir *)`, `Bash(touch *)` та подібні allow rules тепер працюють для in-project paths | 2.1.129 |
| `deniedMcpServers` case fix | `deniedMcpServers` patterns з `*://` scheme wildcard тепер match mixed-case hostnames | 2.1.129 |
| Server-managed settings OAuth scope fix | Server-managed settings policy тепер застосовується для enterprise/team користувачів чий stored OAuth credentials не мав `user:inference` scope | 2.1.129 |
| `channelsEnabled` | Console orgs з managed settings повинні встановити `channelsEnabled: true` для роботи `--channels` з console auth | 2.1.128 |
| `worktree.baseRef` | Вибір базової гілки для worktrees (`fresh` — `origin/<default>`, `head` — local `HEAD`); за замовч. `fresh` | 2.1.133 |
| `sandbox.bwrapPath` / `sandbox.socatPath` | [Managed] Кастомні шляхи до bubblewrap та socat бінарників (Linux/WSL) | 2.1.133 |
| `parentSettingsBehavior` | [Admin/SDK] `'first-wins' | 'merge'` — дозволяє SDK managed settings (parent tier) брати участь у policy merge | 2.1.133 |
| `autoMode.hard_deny` | Правила auto mode класифікатора що блокують безумовно, незалежно від user intent або allow exceptions | 2.1.136 |
| `Edit`/`Write` drive root fix | Виправлено allow правила scoped до `C:\` або `/` що завжди промптили замість match | 2.1.133 |
| Plan mode Edit allow rule fix | Виправлено plan mode що не блокував file writes коли matching `Edit(...)` allow rule існує | 2.1.136 |
| Bash permission parser diagnostic fix | Виправлено Bash permission prompts що показували internal parser diagnostic замість user-readable explanation | 2.1.136 |
| `forceRemoteSettingsRefresh` deadlock fix | Виправлено deadlock де expired credentials + `forceRemoteSettingsRefresh` блокували `claude auth login`/`logout`/`status` без можливості recovery | 2.1.139 |
| `autoAllowBashIfSandboxed` expansions fix | Виправлено `autoAllowBashIfSandboxed` що не auto-approving commands з shell expansions як `$VAR` та `$(cmd)` | 2.1.139 |
| `Skill(name *)` wildcard fix | Виправлено `Skill(name *)` permission rules — wildcard form тепер працює як prefix match, matching `Bash(ls *)` behavior | 2.1.139 |
| Settings symlink hot-reload fix | Виправлено settings hot-reload що не detecting edits до symlinked `~/.claude/settings.json` | 2.1.139 |
| Settings symlink hot-reload regression fix | Виправлено regression в settings hot-reload де symlinked settings files causing misattributed change events та spurious `ConfigChange` hooks | 2.1.140 |
| Remote managed settings 401 retry fix | Виправлено remote managed settings що не retrying на 401 — тепер retries один раз з force-refreshed token | 2.1.140 |
| `extraKnownMarketplaces` persistence fix | Виправлено managed `extraKnownMarketplaces` auto-update policy що не persisting до `known_marketplaces.json` | 2.1.140 |
| `spinnerVerbs` turn-completion fix | Виправлено `spinnerVerbs` setting що не honored в turn-completion messages | 2.1.141 |
| "Allowed by PermissionRequest hook" repeating fix | Виправлено "Allowed by PermissionRequest hook" що repeating once per tool call під collapsed read/search group | 2.1.141 |
| Desktop/3P apiKeyHelper inheritance fix | Виправлено desktop та third-party provider sessions що incorrectly inheriting `apiKeyHelper`/`ANTHROPIC_AUTH_TOKEN` від host managed-settings | 2.1.141 |
| `worktree.bgIsolation: "none"` | Дозволяє background sessions редагувати робочу копію напряму без EnterWorktree, для репозиторіїв де worktrees непрактичні | 2.1.143 |
| `NO_COLOR`/`FORCE_COLOR` in settings.json `env` fix | `NO_COLOR`/`FORCE_COLOR` в settings.json `env` більше не stripають Claude Code UI кольори — тепер застосовуються лише до subprocesses | 2.1.143 |
| `spinnerVerbs` post-turn duration fix | Виправлено `spinnerVerbs` що applying до post-turn duration message — past-tense built-ins як "Worked for 5s" відновлені | 2.1.144 |
| Enterprise login restrictions enforcement fix | Виправлено `forceLoginOrgUUID` та `forceLoginMethod` managed-settings що не застосовувались до third-party-provider та API-key sessions | 2.1.147 |
| `allowAllClaudeAiMcps` | [Managed] Дозволяє завантажувати claude.ai cloud MCP connectors разом з `managed-mcp.json` | 2.1.149 |
| PowerShell `cd` functions permission bypass fix | Виправлено PowerShell permission bypass: built-in `cd` functions (`cd..`, `cd\`, `cd~`, `X:`) змінювали робочу директорію undetected, дозволяючи пізнішій команді читати поза workspace | 2.1.149 |
| Permission-analysis stale PWD/OLDPWD/DIRSTACK fix | Виправлено permission-analysis gap де parser trusted stale variable-tracking values для `PWD`/`OLDPWD`/`DIRSTACK` через `cd`/`pushd`/`popd` | 2.1.149 |
| PowerShell prefix/wildcard allow rules fix | Виправлено PowerShell prefix/wildcard allow rules (напр. `PowerShell(dotnet.exe build *)`) що не pre-approving native executables та scripts | 2.1.149 |
| Sandbox write allowlist git worktree fix | Виправлено sandbox write allowlist в git worktrees що покривав весь main repository root замість лише shared `.git` directory (з `hooks/` та `config` denied) | 2.1.149 |
| Managed-settings approval dialog freeze fix | Виправлено managed-settings approval dialog що залишав термінал frozen після прийняття при startup | 2.1.149 |
| `pluginSuggestionMarketplaces` | [Managed] Admin allowlist для org marketplaces чий plugins можуть бути запропоновані через context-aware tips | 2.1.152 |
| Streaming tool execution завжди увімкнено | Streaming tool execution тепер увімкнений за замовчуванням на всіх платформах (раніше за feature flag) | 2.1.154 |
| `allowedMcpServers`/`deniedMcpServers` invalid entry tolerance | Один неприпустимий entry в `allowedMcpServers`/`deniedMcpServers` більше не відхиляє всю managed-settings політику — хибний entry dropped з попередженням в `/doctor` | 2.1.154 |
| Workflow keyword trigger setting | Новий налаштування в `/config` для вимкнення workflow trigger — слово "workflow" в промпті більше не тригерить dynamic workflow | 2.1.157 |
| Промпт перед shell startup files | Промпт перед записом в shell startup files (`.zshenv`, `.zlogin`, `.bash_login`) та `~/.config/git/` для запобігання небажаному виконанню команд | 2.1.160 |
| `acceptEdits` build-tool config prompt | `acceptEdits` mode тепер промптить перед записом build-tool config files що надають code execution (`.npmrc`, `.yarnrc*`, `.bunfig.toml`, `.bazelrc`, `.pre-commit-config.yaml`, `.devcontainer/`) | 2.1.160 |
| `forceLoginOrgUUID`/`forceLoginMethod` 3p provider fix | Виправлено managed-settings policies що блокували third-party provider sessions (Bedrock, Vertex, Foundry, Mantle) разом з org pin (регресія з 2.1.146) | 2.1.161 |
| WebFetch permission rules preapproved domains fix | Виправлено WebFetch permission rules що не застосовувались до вбудованих preapproved domains; явні `WebFetch(domain:...)` deny/ask/allow правила тепер мають пріоритет над preapproved-host auto-allow | 2.1.162 |
| Windows permission rules backslashes/case fix | Виправлено Windows permission rules що ніколи не match коли шлях написаний з backslashes (`~\`, `\\server\share`) або case-variant paths | 2.1.162 |
| `requiredMinimumVersion` / `requiredMaximumVersion` | Managed settings для версіонування: Claude Code відмовляється стартувати якщо версія поза допустимим діапазоном і спрямовує користувача до затвердженої версії | 2.1.163 |
| Org-managed permission rules startup race fix | Виправлено org-managed permission rules що не застосовувались протягом усієї сесії коли managed settings fetch завершувався під час startup на свіжій config directory | 2.1.163 |

## Моделі — fallback

| Ключ | Опис | Версія |
|------|------|--------|
| `fallbackModel` | Налаштування до трьох fallback-моделей, що використовуються послідовно коли основна модель перевантажена або недоступна | 2.1.166 |
| Glob patterns у deny rules | Підтримка glob-патернів у позиції назви інструменту в deny-правилах (`"*"` забороняє всі інструменти); allow-правила відхиляють non-MCP globs, невідомі назви в deny rules викликають попередження при старті | 2.1.166 |
| Managed settings invalid entry fix | Один неприпустимий entry в managed settings більше не відключає застосування решти валідних політик | 2.1.166 |
| Managed-settings `${VAR}` fix | `allowedMcpServers`/`deniedMcpServers` предикати тепер коректно збігаються коли використовують `${VAR}` посилання | 2.1.166 |

## Налаштування (2.1.169)

| Ключ | Опис | Версія |
|------|------|--------|
| `disableBundledSkills` | Приховати bundled skills, workflows та built-in slash commands від моделі; також `CLAUDE_CODE_DISABLE_BUNDLED_SKILLS` env var | 2.1.169 |
| Enterprise MCP policies reconnect fix | Виправлено `allowedMcpServers`/`deniedMcpServers` що не застосовувались при reconnect, IDE-typed configs, `--mcp-config` servers під час першої сесії після install, або до завантаження remote settings; також виправлено повільний cold start для org без remote settings | 2.1.169 |
| Untrusted settings OTEL cert fix | Виправлено можливість non-trusted project settings встановлювати OTEL client-certificate paths без підтвердження довіри | 2.1.169 |
| Remote-managed settings invalid entry surface error | Remote-managed settings з неприпустимим entry тепер застосовують решту валідних поліцій та показують помилку валідації замість мовчазного відкидання всього payload | 2.1.169 |
| `WebFetch` wildcard domain rules fix | Виправлено `WebFetch(domain:*.example.com)` wildcard domain rules що ніколи не збігалися з subdomains в allow, deny та ask position; також виправлено file permission rules з mid-pattern wildcards (напр. `Read(secrets-*/config.json)`) що відхилялись при startup | 2.1.172 |
| `availableModels` restrictions not applied fix | Виправлено `availableModels` restrictions що не застосовувались до subagent model overrides, agent dispatch model picker та advisor model | 2.1.172 |
| `availableModels` env var redirect fix | Alias model picks більше не перенаправляються до заблокованої моделі через `ANTHROPIC_DEFAULT_*_MODEL` env vars; `/fast` відмовляється перемикати для моделей поза allowlist | 2.1.176 |
| `Tool(param:value)` permission rules | Синтаксис `Tool(param:value)` для permission rules — match параметрів інструменту (з `*` wildcard), напр. `Agent(model:opus)` для блокування Opus subagent-ів | 2.1.178 |
| Sandbox `denyRead`/`allowRead` glob large directory fix | Виправлено sandbox `denyRead`/`allowRead` glob над великим directory tree що робив опис Bash tool необмеженим та сесію непридатною на Linux | 2.1.179 |

## Налаштування (2.1.181)

| Ключ | Опис | Версія |
|------|------|--------|
| `sandbox.allowAppleEvents` | Opt-in налаштування що дозволяє sandboxed командам відправляти Apple Events на macOS | 2.1.181 |
| Settings symlink ENOENT fix | Виправлено зміни налаштувань (`/effort`, `/model`) що падали з ENOENT коли `~/.claude/settings.json` є відносним symlink під symlinked `~/.claude` | 2.1.181 |

## Налаштування (2.1.183)

| Ключ | Опис | Версія |
|------|------|--------|
| `attribution.sessionUrl` | Прибирає посилання на claude.ai сесію з комітів та PR в web та Remote Control сесіях | 2.1.183 |

## Налаштування (2.1.186)

| Ключ | Опис | Версія |
|------|------|--------|
| `teammateMode: "iterm2"` | Налаштування для tmux teammate panes через iTerm2; попередження коли auto mode не знаходить CLI `it2` | 2.1.186 |
| `respondToBashCommands` | Встановіть `false` для вимкнення автоматичної відповіді Claude на `!` bash команди (поведінка за замовч. змінено в 2.1.186) | 2.1.186 |
| `Agent(type)` deny rules fix | Виправлено `Agent(type)` deny rules та `Agent(x,y)` allowed-types обмеження що не застосовувались для spawn іменованих субагентів | 2.1.186 |

## Налаштування (2.1.187)

| Ключ | Опис | Версія |
|------|------|--------|
| `sandbox.credentials` | Блокування sandboxed команд від читання credential файлів та секретних змінних середовища | 2.1.187 |

## Налаштування (2.1.191)

| Ключ | Опис | Версія |
|------|------|--------|
| `/permissions` Recently-denied tab persistence | Схвалення відхилення в `/permissions` Recently-denied tab тепер зберігається при закритті замість мовчазного скидання | 2.1.191 |
| `forceRemoteSettingsRefresh` MDM/file policy fix [Managed] | `forceRemoteSettingsRefresh` тепер працює при встановці через MDM або file policy; fetch відправляє `Cache-Control: no-cache` для запобігнення stale responses від проксі | 2.1.191 |
| Sandbox network permission dialog session memory | Дозволи "Yes" для sandbox network permission dialog тепер запам'ятовуються на решту сесії замість повторного промпту при кожному з'єднанні | 2.1.191 |

## Налаштування (2.1.193)

| Ключ | Опис | Версія |
|------|------|--------|
| `autoMode.classifyAllShell` | Маршрутизація всіх Bash/PowerShell команд через auto-mode класифікатор замість лише patternів довільного виконання коду | 2.1.193 |

## Managed/Enterprise (2.1.196)

| Ключ | Опис | Версія |
|------|------|--------|
| Organization default models [Managed] | Адміни встановлюють модель за замовчуванням для org в console; користувачі що не обрали власну модель бачать "Org default" або "Role default" в `/model` picker | 2.1.196 |

## Managed/Enterprise (2.1.198)

| Ключ | Опис | Версія |
|------|------|--------|
| `anthropicAws` gateway provider | Gateway: додано Claude Platform on AWS (`anthropicAws`) як upstream провайдер; відповіді "model not found" тепер просувають ланцюг failover | 2.1.198 |
| `awsAuthRefresh` auto-refresh | Виправлено Claude Platform on AWS та Mantle сесії що завершувались з "Please run /login" при закінченні STS токену — `awsAuthRefresh` тепер запускається автоматично | 2.1.198 |

## Sandbox (2.1.198)

| Ключ | Опис | Версія |
|------|------|--------|
| Excessive background classifier requests fix | Виправлено надмірні запити background класифікатора коли sandboxed процеси повторно звертались до одного мережевого хосту | 2.1.198 |

## Налаштування (2.1.199)

| Ключ | Опис | Версія |
|------|------|--------|
| Corrupted config file backup on reset | При скиданні пошкодженого config файлу з startup recovery dialog — файл тепер резервно копіюється перед знищенням | 2.1.199 |

## Налаштування (2.1.200)

| Ключ | Опис | Версія |
|------|------|--------|
| `permissions.defaultMode` = "Manual" | Режим дозволів за замовчуванням змінено на "Manual" у CLI, `--help`, VS Code та JetBrains | 2.1.200 |
| `--permission-mode manual` та `"defaultMode": "manual"` | Прапорець `--permission-mode manual` та значення `"defaultMode": "manual"` у settings.json приймаються поруч із `default` | 2.1.200 |
