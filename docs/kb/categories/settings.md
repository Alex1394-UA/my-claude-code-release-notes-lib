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
