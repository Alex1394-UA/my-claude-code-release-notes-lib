# MCP (Model Context Protocol)

## Транспорти

| Тип | Опис | Версія |
|-----|------|--------|
| stdio | Стандартний input/output | — |
| SSE | Server-Sent Events | 0.2.54 |
| Streamable HTTP | HTTP з підтримкою стрімінгу | 1.0.27 |
| HTTP (hooks) | HTTP-хуки замість shell | 2.1.63 |

## Налаштування

| Можливість | Опис | Версія |
|-----------|------|--------|
| `instructions` | Інструкції для MCP сервера | 1.0.52 |
| Кастомні заголовки | Заголовки для SSE | 1.0.106 |
| `headersHelper` | Скрипт для динамічних заголовків | 1.0.106 |
| `dynamicHeaders` | Динамічні заголовки (оновлення) | 1.0.64 |
| OAuth авторизація | Для SSE та HTTP | 1.0.27 |
| Pre-configured OAuth | `--client-id` / `--client-secret` | 2.1.30 |
| OAuth Authorization Server | Автоматичне відкриття discovery | 1.0.35 |
| OAuth RFC 9728 | Protected Resource Metadata | 2.1.85 |
| OAuth CIMD (SEP-991) | Client ID Metadata Document | 2.1.81 |
| OAuth step-up | Повторна авторизація при insufficient_scope | 2.1.85 |
| `oauth.authServerMetadataUrl` | Кастомний URL metadata discovery | 2.1.69 |
| `enabledTools` / `disallowedTools` | Обмеження інструментів | — |
| `list_changed` | Динамічне оновлення tools/prompts/resources | 2.1.0 |
| `structuredContent` | Структурований вміст відповідей | 2.0.21 |
| MCP tool search auto | Авто-defer при >10% контексту | 2.1.7 |
| MCP descriptions cap | Обмеження описів до 2KB | 2.1.84 |
| MCP dedup | Локальні конфіги мають пріоритет | 2.1.84 |
| Elicitation | Інтерактивні MCP-запити | 2.1.76 |
| Виправлення таймауту підключення [Win] | Виправлено на повільних мережах | 2.2.0 |

## Області видимості

| Область | Файл | Версія |
|---------|------|--------|
| User | `~/.claude.json` | — |
| Project | `.mcp.json` (committed) | 0.2.50 |
| Local | `.claude/settings.local.json` | 0.2.49 |

## claude.ai MCP Connectors

| Можливість | Опис | Версія |
|-----------|------|--------|
| Канали | claude.ai MCP connectors | 2.1.46 |
| `--channels` | Push повідомлення від MCP серверів | 2.1.80 |
| `allowedChannelPlugins` | Allowlist (managed) | 2.1.80 |
