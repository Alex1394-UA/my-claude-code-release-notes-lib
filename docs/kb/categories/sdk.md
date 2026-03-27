# SDK

> Документація: https://platform.claude.com/docs/en/agent-sdk

## Пакети

| Пакет | Опис | Версія |
|-------|------|--------|
| ~~`@anthropic-ai/claude-code`~~ | [ЗАСТАРІЛО] legacy entrypoint | 2.0.25 |
| `@anthropic-ai/claude-agent-sdk` | Актуальний SDK | 2.0.0 |
| Python `claude-code-sdk` | Python SDK | 1.0.23 |

## Можливості

| Можливість | Опис | Версія |
|-----------|------|--------|
| Підтримка сесій | Управління сесіями | 1.0.77 |
| Відстеження відмов | Відстеження відмов у дозволах | 1.0.77 |
| canUseTool callback | Підтвердження інструментів | 1.0.59 |
| Скасування запитів | Відміна виконання запитів | 1.0.82 |
| Кастомні інструменти | Custom tools callbacks | 1.0.94 |
| Додаткові шляхи | additionalDirectories для пошуку | 1.0.82 |
| UUID підтримка | UUID для повідомлень | 1.0.86 |
| `--replay-user-messages` | Повторення повідомлень | 1.0.86 |
| `--include-partial-messages` | Часткове стрімінг | 1.0.109 |
| `--max-budget-usd` | Бюджетний ліміт | 2.0.28 |
| Логування помилок | Error logging capture | 2.0.21 |
| Середовище процесу | env для spawned process | 1.0.59 |
| Підтвердження інструментів | Tool confirmation | 2.0.64 |
| Пропозиції дозволів | Permission suggestions | 2.1.49 |
| Інфо про ліміти | `SDKRateLimitInfo`, `SDKRateLimitEvent` | 2.1.45 |
| Інфо про модель | `supportsEffort`, `supportedEffortLevels` | 2.1.49 |
| `total_cost_usd` | Вартість (було `total_cost`) | 1.0.22 |

## Remote Control

| Можливість | Опис | Версія |
|-----------|------|--------|
| `claude remote-control` | Запуск Remote Control | 2.1.51 |
| `/remote-control [name]` | Іменована сесія | 2.1.69 |
| Web → CLI телепорт | Продовження з браузера | 1.0.27 |
| `&` prefix | Фонове повідомлення до web | 2.0.45 |
