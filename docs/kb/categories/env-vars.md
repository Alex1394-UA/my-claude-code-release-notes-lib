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
