# Налаштування settings.json

> Архів (notes до 2.1.207): [archived/settings_v2.1.207.md](archived/settings_v2.1.207.md)
> Тут — notes починаючи з версії 2.1.208

## Загальні (2.1.208)

| Можливість | Опис | Версія |
|-----------|------|--------|
| `axScreenReader` | Увімкнути screen reader mode (простий текстовий вивід) — `true` | 2.1.208 |
| `vimInsertModeRemaps` | Мапувати two-key insert-mode послідовності (напр. `jj`) на Escape у vim mode | 2.1.208 |

## Дозволи (2.1.208)

| Можливість | Опис | Версія |
|-----------|------|--------|
| Permission rules slowdown fix | Виправлено багатосекундне сповільнення за хід у сесіях з багатьма permission deny/ask rules (rule matcher) | 2.1.208 |

## Контекст (2.1.208)

| Можливість | Опис | Версія |
|-----------|------|--------|
| `apiKeyHelper` error visibility fix | Помилки `apiKeyHelper` скрипта тепер видно за 3 спроби замість ~10 мовчазних retry з помилкою 401 | 2.1.208 |

## Дозволи (2.1.210)

| Можливість | Опис | Версія |
|-----------|------|--------|
| Write/NotebookEdit/Glob permission rules warning | Startup-попередження для permission rules Write(path), NotebookEdit(path) та Glob(path) — використовуйте натомість Edit(path) або Read(path) | 2.1.210 |

## Sandbox (2.1.210)

| Можливість | Опис | Версія |
|-----------|------|--------|
| .claude symlinks sandbox deny-write fix | Пізно з’явлені .claude/* symlink’и тепер звіряються зі списком sandbox deny-write | 2.1.210 |

## Загальні (2.1.211)

| Можливість | Опис | Версія |
|-----------|------|--------|
| Nested `.claude/rules/*.md` exclude fix | Виправлено завантаження вкладених файлів `.claude/rules/*.md` навіть коли джерела налаштувань виключають project settings | 2.1.211 |

## Дозволи (2.1.211)

| Можливість | Опис | Версія |
|-----------|------|--------|
| «always allow» save at repo root | Правила дозволів «always allow» тепер зберігаються у корені репозиторію — погодження, видані в git worktree, зберігаються між сесіями та worktree | 2.1.211 |
| Permission previews bidi/zero-width neutralize fix | Виправлено нейтралізацію символів bidirectional-override, нульової ширини та подібних до лапок у попередньому перегляді дозволів, переданих до chat-каналів — ввід інструментів більше не може візуально змінити повідомлення про погодження | 2.1.211 |

## Загальні (2.1.212)

| Можливість | Опис | Версія |
|-----------|------|--------|
| Worktree creation symlink `.claude/worktrees` fix | Виправлено створення worktree після symlink у репозиторії `.claude/worktrees`, що могло створювати файли поза репозиторієм | 2.1.212 |
| Hosted sessions mTLS/CA/OAuth ignore fix | Виправлено збій hosted (host-managed) сесій при startup, коли repository settings налаштовували mTLS-сертифікати, CA-набори або OAuth scopes; ці transport-налаштування тепер ігноруються з попередженням | 2.1.212 |
| Enterprise `forceLoginMethod` enforcement | Enterprise `forceLoginMethod` тепер застосовується для VS Code extension, SDK, `setup-token` та `install-github-app` логінів, не лише термінала | 2.1.212 |

## Дозволи (2.1.214)

| Можливість | Опис | Версія |
|-----------|------|--------|
| single-segment `dir/**` allow rules nested fix | Виправлено авто-погодження односегментних allow-правил `dir/**` (напр. `Edit(src/**`)) — вони дозволяли запис у вкладені теки `dir/` будь-де в дереві замість лише `<cwd>/dir` | 2.1.214 |
| Windows PowerShell 5.1 permission bypass fix [Win] | Виправлено обхід перевірки дозволів для команд у сесіях Windows PowerShell 5.1 | 2.1.214 |
| Bash fd redirect fail closed fix | Виправлено перевірки дозволів Bash для форм file-descriptor redirect, що bash розбирає інакше ніж аналізатор дозволів — тепер fail closed | 2.1.214 |
| Bash very long commands prompt fix | Виправлено оцінку дозволів Bash для дуже довгих команд — команди понад 10000 символів тепер завжди потребують підтвердження замість автозапуску | 2.1.214 |
| Bash zsh variable subscripts prompt fix | Виправлено трактування zsh variable subscripts та modifiers у порівняннях `[[ ]]` як інертного тексту — ці команди тепер потребують погодження | 2.1.214 |
| Bash `help`/`man` unsafe auto-approve fix | Виправлено авто-погодження певних `help`/`man` команд, що могли виконати небезпечні опції, command substitutions або backslash-шляхи | 2.1.214 |
| Remote permission prompts before local dialog fix | Виправлено промпти дозволів на remote-сесіях, що могли продовжитись до локального діалогу підтвердження | 2.1.214 |
| `docker` daemon-redirect flags prompts | Додано промпти дозволів для `docker` команд (вкл. Podman `docker` shim) з daemon-redirect прапорцями (`--url`, `--connection`, `--identity` та Podman remote mode), що раніше виконувались без підтвердження | 2.1.214 |
| `file` commands require permission | `file` команди з `-m`/`--magic-file` або `-f`/`--files-from` тепер вимагають дозвіл замість авто-дозволу як read-only | 2.1.214 |

## Загальні (2.1.214)

| Можливість | Опис | Версія |
|-----------|------|--------|
| Oversized `--settings` file fix | Виправлено необмежене зростання пам'яті, коли `--settings` вказує на device file або multi-ГБ файл; файли налаштувань понад 2 МіБ тепер відхиляються при startup з чіткою помилкою | 2.1.214 |
