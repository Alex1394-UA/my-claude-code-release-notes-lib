# Змінні середовища

> Архів (notes до 2.1.207): [archived/env-vars_v2.1.207.md](archived/env-vars_v2.1.207.md)
> Тут — notes починаючи з версії 2.1.208

## Поведінка (2.1.208)

| Можливість | Опис | Версія |
|-----------|------|--------|
| `CLAUDE_AX_SCREEN_READER` | Увімкнути screen reader mode — `1` | 2.1.208 |
| `CLAUDE_CODE_PROCESS_WRAPPER` | Корпоративний launcher: кожне self-spawn Claude Code запускається через обов'язковий wrapper executable (agent view та background service) | 2.1.208 |

## Таймаути та ліміти (2.1.208)

| Можливість | Опис | Версія |
|-----------|------|--------|
| `CLAUDE_CODE_MAX_OUTPUT_TOKENS` sci-notation fix | Виправлено мовчазне використання mantissa наукової нотації (`1e6` ставало `1`); стосується і подібних env vars | 2.1.208 |

## Поведінка (2.1.210)

| Можливість | Опис | Версія |
|-----------|------|--------|
| CLAUDE_CODE_DISABLE_ALTERNATE_SCREEN ghost frames fix | Повернення в agents view з сесії більше не лишає накладні ghost-фрейми за CLAUDE_CODE_DISABLE_ALTERNATE_SCREEN=1 | 2.1.210 |

## Поведінка (2.1.211)

| Можливість | Опис | Версія |
|-----------|------|--------|
| `CLAUDE_CODE_FORWARD_SUBAGENT_TEXT` | Нова змінна: включає текст та роздуми субагентів у stream-json вивід | 2.1.211 |
| LLM gateway background jobs «Not logged in» fix | Виправлено повернення «Not logged in» фоновими задачами після перезапуску демона при LLM gateway-автентифікації (`ANTHROPIC_AUTH_TOKEN` + `ANTHROPIC_BASE_URL`) | 2.1.211 |

## Таймаути та ліміти (2.1.211)

| Можливість | Опис | Версія |
|-----------|------|--------|
| Цілочислові змінні scientific notation | Цілочислові змінні середовища (таймаути, бюджети токенів, лічильники повторів) тепер приймають наукову нотацію та роздільники цифр на кшталт `1e6` і `64_000` | 2.1.211 |

## Поведінка (2.1.212)

| Можливість | Опис | Версія |
|-----------|------|--------|
| `CLAUDE_CODE_MAX_WEB_SEARCHES_PER_SESSION` | Нова змінна: сесійний ліміт викликів WebSearch (типово 200) для зупинки search-циклів | 2.1.212 |
| `CLAUDE_CODE_MAX_SUBAGENTS_PER_SESSION` | Нова змінна: сесійний ліміт породжень субагентів (типово 200) для зупинки делегуючих циклів; `/clear` скидає бюджет | 2.1.212 |
| `CLAUDE_CODE_MCP_AUTO_BACKGROUND_MS` | Нова змінна: поріг автопереміщення MCP tool call у фон (типово 120000 мс); вимкнути — встановити 0 | 2.1.212 |
| OpenTelemetry 411/400 Azure chunked fix | Виправлено відхилення OTel HTTP-експортів 411/400 Azure Monitor та іншими endpoints, що не приймають chunked transfer encoding | 2.1.212 |
| OTLP trace_id/span_id with `TRACEPARENT` fix | Виправлено відсутність `trace_id`/`span_id` у OTLP event log records при встановленому `TRACEPARENT` у SDK/headless-режимі | 2.1.212 |
