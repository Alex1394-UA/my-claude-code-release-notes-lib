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
