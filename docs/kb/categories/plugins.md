# Плагіни

> Документація: https://code.claude.com/docs/en/plugins

## Команди управління

| Команда | Опис | Версія |
|---------|------|--------|
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
| `claude plugin list --json` | Список плагінів у JSON форматі | 2.2.2 |
| `/plugin list` | Показує встановлені плагіни з фільтрами `--enabled`/`--disabled` | 2.1.163 |

## Типи джерел

| Тип | Опис | Версія |
|-----|------|--------|
| npm | npm пакет | — |
| git | Git репозиторій | — |
| git-subdir | Піддиректорія git репозиторію | 2.1.69 |
| file | Локальна директорія | — |
| settings | `source: 'settings'` в settings.json | 2.1.80 |
| private-registry | Приватний registry через `--registry-url` | 2.2.2 |
| branch/tag | `owner/repo#branch` синтаксис | 2.0.28 |
| pinned | Pin до конкретного git commit SHA | 2.1.14 |

## Можливості

| Можливість | Опис | Версія |
|-----------|------|--------|
| Кастомні команди | Команди з плагіна | 2.0.12 |
| Кастомні агенти | Агенти з плагіна | — |
| MCP сервери | MCP сервери з плагіна | 2.0.12 |
| Хуки | Хуки з плагіна | 2.0.12 |
| Навички | Навички з плагіна | — |
| Output styles | Стилі виводу | 2.0.12 |
| Settings | `settings.json` для дефолтів | 2.1.49 |
| `manifest.userConfig` | Опції конфігурації при enable | 2.1.83 |
| `sensitive: true` | Зберігання в keychain | 2.1.83 |
| `${CLAUDE_PLUGIN_ROOT}` | Шлях до плагіна | — |
| `${CLAUDE_PLUGIN_DATA}` | Persistent state плагіна | 2.1.78 |
| Автооновлення | Автоматичне оновлення плагінів | 2.1.0 |
| `FORCE_AUTOUPDATE_PLUGINS` | Примусове автооновлення | 2.1.2 |
| `pluginTrustMessage` | Повідомлення довіри (managed) | 2.1.69 |
| Managed block | Блокування організаційною політикою | 2.1.85 |
| Виправлення "Permission denied" | Marketplace скрипти на macOS/Linux | 2.1.86 |
| `/plugin` uninstall `n` | `n` тепер видаляє плагін, зберігаючи data | 2.1.86 |
| `bin/` executables | Плагіни можуть постачати виконувані файли під `bin/` та викликати як голі команди | 2.1.91 |
| `keep-coding-instructions` output styles | Підтримка frontmatter поля для plugin output styles | 2.1.94 |
| Plugin skills frontmatter name | `"skills": ["./"]` використовує `name` з frontmatter замість basename директорії | 2.1.94 |
| Plugin skill hooks YAML fix | Виправлено мовчазне ігнорування хуків з YAML frontmatter | 2.1.94 |
| Plugin hooks `CLAUDE_PLUGIN_ROOT` fix | Виправлено "No such file" коли `CLAUDE_PLUGIN_ROOT` не встановлено | 2.1.94 |
| `${CLAUDE_PLUGIN_ROOT}` marketplace fix | Результатує до installed cache, не marketplace source для local-marketplace plugins | 2.1.94 |
| Plugin update stale git | `claude plugin update` більше не повідомляє "already latest" для git marketplace | 2.1.97 |
| Slash command YAML boolean fix | Picker не ламається коли `name` є YAML boolean keyword | 2.1.97 |
| `/reload-plugins` skills | Тепер підхоплює plugin-provided skills без рестарту | 2.1.98 |
| Plugin hooks managed settings | Хуки з force-enabled плагінів працюють з `allowManagedHooksOnly` | 2.1.101 |
| `/plugin update` stale warning | Попередження коли marketplace не оновився | 2.1.101 |
| Plugin issues fix (2.1.101) | Виправлено: duplicate `name:`, `ENAMETOOLONG`, Discover вже встановлених, stale version cache, skills `context: fork`/`agent` | 2.1.101 |
| `monitors` manifest key | Background monitors для плагінів через top-level `monitors` key — auto-arm при старті сесії або при виклику skill | 2.1.105 |
| Marketplace dependencies fix | Виправлено автоматичне встановлення залежностей для marketplace плагінів з `package.json` та lockfile | 2.1.105 |
| Marketplace auto-update broken fix | Виправлено пошкодження marketplace при auto-update коли plugin process тримає файли відкритими | 2.1.105 |
| `/plugin` Installed tab | Покращено: items needing attention та favorites зверху, disabled за fold, `f` для favorites | 2.1.110 |
| Plugin install dependencies fix | `/plugin` install тепер встановлює залежності з `plugin.json` коли marketplace їх не вказує | 2.1.110 |
| Policy-managed plugins auto-update fix | Виправлено відсутність автооновлення policy-managed плагінів при запуску з іншого проекту | 2.1.108 |
| Plugin dependency error improvements | Dependency errors розрізняють conflicting, invalid та overly complex version requirements; виправлено stale resolved versions; `plugin install` відновлюється після перерваних prior installs | 2.1.111 |
| Plugin install range-conflict | `plugin install` на вже встановленому з conflicting dependency тепер report `range-conflict` замість успіху | 2.1.113 |
| `/reload-plugins` auto-deps | `/reload-plugins` та background plugin auto-update тепер auto-install missing plugin dependencies з marketplaces | 2.1.116 |
| Plugin install missing deps | `/plugin install` на вже встановленому plugin тепер встановлює missing dependencies замість зупинки на "already installed" | 2.1.117 |
| Plugin dependency resolve | `plugin install` повторно резолвить dependency встановлену на wrong version | 2.1.118 |
| `blockedMarketplaces` enforcement | Managed-settings `blockedMarketplaces` та `strictKnownMarketplaces` тепер enforce при plugin install, update, refresh та autoupdate | 2.1.117 |
| `blockedMarketplaces` hostPattern/pathPattern | `blockedMarketplaces` тепер коректно enforce `hostPattern` та `pathPattern` entries | 2.1.119 |
| `claude plugin prune` | Видалення orphaned auto-installed plugin dependencies; `plugin uninstall --prune` cascade | 2.1.121 |
| Pinned plugin auto-update | Плагіни закріплені version constraint іншого плагіна тепер auto-update до найвищого satisfying git tag | 2.1.119 |
| Plugin dependency install from marketplace | `claude plugin marketplace add` тепер auto-resolve missing dependencies з configured marketplaces | 2.1.117 |
| Plugin auto-update skip shown | Коли auto-update пропускає plugin через version constraint іншого plugin, skip з'являється в `/doctor` та `/plugin` Errors tab | 2.1.118 |
| `/plugin` marketplace load fix | `/plugin` marketplace більше не ламається коли один entry використовує нерозпізнаний source format — entry показується але install пропонує оновити | 2.1.120 |
| `/plugin` Uninstall status fix | Виправлено `/plugin` Uninstall що показував "Enabled" замість "Uninstalled" | 2.1.126 |
| `--plugin-dir` .zip support | `--plugin-dir` тепер приймає `.zip` plugin archives крім директорій | 2.1.128 |
| `--plugin-url <url>` | Новий прапорець для завантаження plugin `.zip` archive з URL для поточної сесії | 2.1.129 |
| `themes`/`monitors` under `experimental` | Plugin manifests: `themes` та `monitors` повинні бути оголошені під `"experimental": { ... }`; top-level ще працює але `claude plugin validate` попереджає | 2.1.129 |
| `/plugin update` version detection fix | Виправлено `/plugin update` що ніколи не виявляв нові версії npm-sourced plugins | 2.1.128 |
| `/plugin` Components panel fix | Виправлено "Marketplace 'inline' not found" для plugins завантажених через `--plugin-dir` | 2.1.128 |
| Stale `installed_plugins.json` fix | Stale записи що вказували на видалені cache директорії більше не забруднюють PATH | 2.1.128 |
| Plugin hooks cache cleanup fix | Виправлено plugin `Stop`/`UserPromptSubmit` hooks що failing коли cache cleanup deletes version що ще в use running session | 2.1.136 |
| Plugin uninstall case-insensitive fix | Виправлено plugin uninstall та enable/disable що не matching slugs case-insensitively | 2.1.136 |
| Plugin slash commands spaces fix | Виправлено plugin slash commands з spaces (напр. `/myplugin review`) що не resolving до namespaced form | 2.1.136 |
| Marketplace removal key change | Змінено plugin marketplace removal key на `d` (matching delete elsewhere) замість `r` що collide-вав з retry | 2.1.136 |
| `claude plugin details <name>` | Показ component inventory та projected per-session token cost плагіна | 2.1.139 |
| `claude plugin install <name>@<marketplace>` auto-refresh | Auto-refresh marketplace та retry перед reporting plugin as not found | 2.1.139 |
| `/plugin` installed details hooks/MCP | `/plugin` installed-plugin details тепер показують hook event names та MCP server names | 2.1.139 |
| Plugin details marketplace key fix | Виправлено plugin details failing коли marketplace key differs від manifest name | 2.1.139 |
| Plugin dependency resolution stale count fix | Виправлено plugin dependency resolution що leaving stale count коли manifest name differs від source identifier | 2.1.139 |
| `claude plugin update` symlinks fix | Виправлено `claude plugin update` що не preserving cross-plugin symlinks всередині marketplace | 2.1.139 |
| `extraKnownMarketplaces` persistence fix | Виправлено managed `extraKnownMarketplaces` auto-update policy що не persisting до `known_marketplaces.json` | 2.1.140 |
| Plugin default component folder warning | Плагіни тепер warn коли default component folder (напр. `commands/`) silently ignored через `plugin.json` key; shown in `/doctor`, `claude plugin list`, `/plugin` | 2.1.140 |
| Root-level `SKILL.md` as skill | Плагіни з root-level `SKILL.md` та без `skills/` subdirectory тепер показуються як skill | 2.1.142 |
| Plugin details LSP servers | `/plugin` details pane та `claude plugin details` тепер показують LSP servers що надає плагін | 2.1.142 |
| Plugin dependency enforcement | `claude plugin disable` відмовляє коли інший enabled plugin залежить від цільового (з copy-pasteable disable-chain підказкою); `claude plugin enable` force-enables transitive dependencies | 2.1.143 |
| `/plugin` marketplace projected context cost | Browse pane тепер показує projected context cost — per-turn та per-invocation token estimates для кожного плагіна | 2.1.143 |
| Plugin `skills: ["./"]` escape error fix | Виправлено хибне повідомлення "path escapes plugin directory" для plugins з `skills: ["./"]` | 2.1.142 |
| Plugin cache cleanup active version fix | Виправлено видалення active plugin version directory під час cache cleanup коли відсутні installation metadata | 2.1.142 |
| `/plugin` browse 0 installs fix | Виправлено `/plugin` browse pane що показував "0 installs" для новоопублікованих plugins | 2.1.142 |
| Plugin advisories key naming fix | Виправлено plugin advisories що не називали кожен `plugin.json` key що shadows default folder | 2.1.142 |
| Plugin menu navigation improvements | `→`/Tab switch tabs, `↑` moves to tab strip, tab headers та search box clickable в fullscreen mode | 2.1.141 |
| `claude plugin install` ref+sha fix | Виправлено `claude plugin install` failing для plugins чи marketplace `ref` більше не існує upstream коли `sha` також pinned | 2.1.141 |
| Plugin details 0 MCP servers .mcp.json fix | Виправлено plugin details pane що showing 0 MCP servers для plugins що declare через `.mcp.json` | 2.1.141 |
| Plugin MCP config variables fix | Plugin MCP servers з unset config variables тепер show "config issue" message з fix-it hint замість generic connection failure; malformed `.mcp.json` entries більше не drop інші MCP servers | 2.1.141 |
| Plugin browse last-updated | `/plugin` browse та discover panes тепер показують коли плагін востаннє оновлювався | 2.1.144 |
| Plugin "not cached" errors fix | Plugins enabled в user settings більше не показують "not cached" errors після першого завантаження на fresh machine; plugins enabled тільки через project `.claude/settings.json` тепер показують actionable `claude plugin install` hint | 2.1.144 |
| `CLAUDE_CODE_PLUGIN_PREFER_HTTPS` marketplace | Plugin marketplace add/update тепер поважає `CLAUDE_CODE_PLUGIN_PREFER_HTTPS` | 2.1.144 |
| `/plugin` return to Installed tab | `/plugin` тепер повертається до Installed list після enable, disable або uninstall плагіна | 2.1.144 |
| `/plugin` pre-install component preview | Discover та Browse screens тепер показують плагіна commands, agents, skills, hooks, та MCP/LSP servers перед встановленням | 2.1.145 |
| Stale marketplace banner fix | Виправлено stale "Failed to install Anthropic marketplace" banner що показувався коли marketplace вже встановлено | 2.1.145 |
| `claude plugin validate` skills: file vs directory | `claude plugin validate` тепер flag-ить `skills:` entries що point на file замість directory — error suggests parent directory | 2.1.145 |
| Plugin agents multiple `Agent(...)` types fix | Виправлено plugin agents що declare multiple `Agent(...)` types в `tools:` frontmatter dropping all but last entry | 2.1.147 |
| Plugin component counts doubled `claude plugin details` fix | Виправлено plugin component counts в `claude plugin details` та `/plugin` що подвоювались коли plugin manifest мав paths що overlap default directories | 2.1.147 |
| `claude plugin marketplace remove --scope` | `claude plugin marketplace remove` тепер приймає `--scope user|project|local` для симетрії з `marketplace add`, `install`, `uninstall` | 2.1.152 |
| Plugin MCP same-command different-env dedup fix | Виправлено plugin MCP servers з тим самим command але різними environment variables що incorrectly deduplicated | 2.1.152 |
| Plugin git branch update tracking fix | Виправлено plugins що track git branch та перестали receiving updates після plugin registry rebuild | 2.1.152 |
| `skipLfs` marketplace source option | Опція `skipLfs` для `github`/`git` plugin marketplace sources — skip Git LFS downloads під час clone та update | 2.1.153 |
| `defaultEnabled: false` в plugin.json | Плагіни можуть декларувати `defaultEnabled: false` в `plugin.json` або marketplace entry; увімкнення через `/plugin` або `claude plugin enable`. Залежності enabled плагінів все ще auto-enabled | 2.1.154 |
| `/plugin` Discover "suggested for this directory" | Discover tab в `/plugin` тепер закріплює плагіни чий relevance signals збігаються з поточною директорією з анотацією "suggested for this directory" | 2.1.154 |
| `.claude/skills` auto-load | Плагіни з `.claude/skills` директорій тепер завантажуються автоматично, без необхідності marketplace | 2.1.157 |
| `claude plugin init <name>` | Створення шаблону нового плагіна в `.claude/skills` з базовою структурою файлів | 2.1.157 |
| Видалено JetBrains plugin install suggestion | Прибрано пропозицію встановлення JetBrains plugin при старті | 2.1.160 |
| Пошуковий рядок в marketplace plugin browser | Додано пошуковий рядок при перегляді плагінів marketplace в `/plugin` | 2.1.172 |
| `/plugin` marketplace cursor/esc fix | Виправлено `/plugin` marketplace list що втрачав cursor після виходу з довгого списку плагінів, та Esc з plugin browser що повертав на неправильну вкладку | 2.1.172 |

## Очищення та стабільність

| Можливість | Опис | Версія |
|-----------|------|--------|
| Plugin `.in_use` PID lock cleanup | Plugin `.in_use` PID lock files більше не накопичуються без межі; stale markers від crashed сесій тепер очищаються раз на день | 2.1.169 |
| `CLAUDE_CODE_PLUGIN_KEEP_MARKETPLACE_ON_FAILURE` install fix | Виправлено `CLAUDE_CODE_PLUGIN_KEEP_MARKETPLACE_ON_FAILURE=1` що перешкоджав свіжим marketplace install-ам від клонування | 2.1.178 |
