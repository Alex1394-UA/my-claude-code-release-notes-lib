# Хуки

> Документація: https://code.claude.com/docs/en/hooks
>
> ⚠️ **Відомі проблеми:**
> - `PreToolUse`/`PostToolUse` хуки **не працюють у `-p` (print/pipe) mode** — `updatedInput` ігнорується, Stop хуки повертають пустий output ([#32348](https://github.com/anthropics/claude-code/issues/32348), [#39050](https://github.com/anthropics/claude-code/issues/39050))
> - Hook runner іноді плутає: нормальні виклики помилково трактуються як "hook error" ([#35587](https://github.com/anthropics/claude-code/issues/35587))
> - Працюють надійно лише в інтерактивному режимі

## Типи хуків

| Подія | Опис | Версія |
|-------|------|--------|
| `PreToolUse` | Перед викликом інструменту | 1.0.38 |
| `PostToolUse` | Після виклику інструменту | 1.0.38 |
| `Stop` | При зупинці повороту | 1.0.41 |
| `SubagentStop` | При зупинці субагента | 1.0.41 |
| `Notification` | Сповіщення | 1.0.37 |
| `UserPromptSubmit` | При відправці промпту | 1.0.54 |
| `SessionStart` | При старті нової сесії | 1.0.59 |
| `SessionEnd` | При завершенні сесії | 1.0.85 |
| `PreCompact` | Перед стисненням контексту | 1.0.48 |
| `PostCompact` | Після стиснення | 2.1.76 |
| `ConfigChange` | При зміні конфігурації | 2.1.49 |
| `Setup` | При --init/--init-only/--maintenance | 2.1.10 |
| `InstructionsLoaded` | При завантаженні CLAUDE.md | 2.1.69 |
| `PermissionRequest` | При запиті дозволу | 2.0.45 |
| `TaskCreated` | При створенні задачі | 2.1.84 |
| `StopFailure` | При помилці API | 2.1.78 |
| `Elicitation` | При MCP elicitation запиті | 2.1.76 |
| `ElicitationResult` | При відповіді на elicitation | 2.1.76 |
| `CwdChanged` | При зміні робочої директорії | 2.1.83 |
| `FileChanged` | При зміні файлів | 2.1.83 |
| `TeammateIdle` | При idle teammate | 2.1.33 |
| `TaskCompleted` | При завершенні задачі | 2.1.33 |
| `SubagentStart` | При старті субагента | 2.0.43 |
| `WorktreeCreate` | При створенні worktree | 2.1.50 |
| `WorktreeRemove` | При видаленні worktree | 2.1.50 |
| `ModelSwitch` | При зміні моделі під час сесії | 2.2.1 |
| `AgentOutput` | [НЕ ПОСТАВЛЕНО] Вивід агента | 2.0.64 |

## Налаштування хуків

| Параметр | Опис | Версія |
|----------|------|--------|
| `timeout` | Таймаут хука (за замовч. 10 хв) | 1.0.41 |
| `modelSwitchTimeout` | Таймаут для ModelSwitch хуків | 2.2.1 |
| `once: true` | Одноразовий хук | 2.1.0 |
| `if` | Умова запуску (правила дозволів) | 2.1.85 |
| `model` | Кастомна модель для хука | 2.0.41 |
| `systemMessage` | Системне повідомлення хука | 1.0.64 |
| `type: "http"` | HTTP хук замість shell | 2.1.63 |

## Вихідні дані хуків

| Поле | Опис | Версія |
|------|------|--------|
| `permissionDecision` | "allow" / "deny" / "ask" | 1.0.59 |
| `updatedInput` | Модифіковані інпути інструментів | 2.0.10 |
| `additionalContext` | Додатковий контекст для моделі | 2.1.9 |
| `hook_event_name` | Ім'я події хука | 1.0.41 |
| `tool_use_id` | ID виклику інструменту | 2.0.43 |
| `agent_id` / `agent_type` | Ідентифікатор агента | 2.1.69 |
| `transcript_path` | Шлях до транскрипту | — |
| `last_assistant_message` | Остання відповідь Claude | 2.1.47 |
