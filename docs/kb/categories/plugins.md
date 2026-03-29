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
