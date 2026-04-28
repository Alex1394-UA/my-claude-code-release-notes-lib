# Хуки

> Документація: https://code.claude.com/docs/en/hooks
>
> ⚠️ **Відомі проблеми:**
> - `PreToolUse`/`PostToolUse` хуки **не працюють у `-p` (print/pipe) mode** — `updatedInput` ігнорується, Stop хуки повертають пустий output ([#32348](https://github.com/anthropics/claude-code/issues/32348), [#39050](https://github.com/anthropics/claude-code/issues/39050))
> - Hook runner іноді плутає: нормальні виклики помилково трактуються як "hook error" ([#35587](https://github.com/anthropics/claude-code/issues/35587))
> - Працюють надійно лише в інтерактивному режимі
> - `PostToolUse` `updatedToolOutput` **не працює в v2.1.121** — нове поле silently dropped для built-in (Bash, Read, Grep) та MCP tools; працює лише старе `updatedMCPToolOutput` для MCP ([#54196](https://github.com/anthropics/claude-code/issues/54196), [#32105](https://github.com/anthropics/claude-code/issues/32105))
> - `PreToolUse` `permissionDecision: "ask"` **ігнорується auto-mode класифікатором** для in-flow викликів (git commit/push після редагування файлів); out-of-flow виклики prompt спрацьовує ([#51255](https://github.com/anthropics/claude-code/issues/51255), [#53824](https://github.com/anthropics/claude-code/issues/53824))
> - `PostToolUse` prompt-type хуки **падають на Vertex AI** з `output_config: Extra inputs are not permitted` ([#37746](https://github.com/anthropics/claude-code/issues/37746), [#54224](https://github.com/anthropics/claude-code/issues/54224))
> - Документація `updatedToolOutput` **не оновлена** — 7 сторінок docs/SDK ще описують старе `updatedMCPToolOutput` ([#54161](https://github.com/anthropics/claude-code/issues/54161))

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
| `PreCompact` block | Хуки можуть блокувати compact через exit code 2 або `{"decision":"block"}` | 2.1.105 |
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
| `PermissionDenied` | При відмові auto mode класифікатора; `retry: true` для повтору | 2.1.89 |
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
| `if` | Умова запуску (правила дозволів; compound commands з 2.1.89) | 2.1.85, 2.1.89 |
| `model` | Кастомна модель для хука | 2.0.41 |
| `systemMessage` | Системне повідомлення хука | 1.0.64 |
| `type: "http"` | HTTP хук замість shell | 2.1.63 |

## Вихідні дані хуків

| Поле | Опис | Версія |
|------|------|--------|
| `permissionDecision` | "allow" / "deny" / "ask" / "defer" | 1.0.59, 2.1.89 |
| `updatedInput` | Модифіковані інпути інструментів | 2.0.10 |
| `additionalContext` | Додатковий контекст для моделі | 2.1.9 |
| `hook_event_name` | Ім'я події хука | 1.0.41 |
| `tool_use_id` | ID виклику інструменту | 2.0.43 |
| `agent_id` / `agent_type` | Ідентифікатор агента | 2.1.69 |
| `transcript_path` | Шлях до транскрипту | — |
| `last_assistant_message` | Остання відповідь Claude | 2.1.47 |
| `file_path` (абсолютний) | `Read`/`Write`/`Edit` передають абсолютний шлях | 2.1.89 |
| Вивід >50K на диск | Hook output зберігається з файл-путем + прев'ю замість прямої ін'єкції | 2.1.89 |
| PostToolUse format-on-save fix | `Edit`/`Write` більше не помиляються коли hook перемальовує файл між редагуваннями | 2.1.90 |
| PreToolUse JSON stdout block | Хуки що видають JSON в stdout з exit code 2 коректно блокують інструмент | 2.1.90 |
| Stop hooks `ok:false` fix | Prompt-type Stop хуки більше не помиляються при `ok:false` від fast model; `preventContinuation:true` відновлено | 2.1.92 |
| Stop/SubagentStop long sessions fix | Виправлено помилки Stop/SubagentStop хуків на довгих сесіях; hook evaluator показує реальне повідомлення замість "JSON validation failed" | 2.1.97 |
| Hook errors stderr | Помилки хуків в транскрипті включають перший рядок stderr для самодіагностики | 2.1.98 |
| Unrecognized hook event resilience | Нерозпізнане ім'я хука в `settings.json` більше не ігнорує весь файл | 2.1.101 |
| `permissions.deny` override hook ask | `deny` правила тепер мають пріоритет над `permissionDecision: "ask"` від PreToolUse хука | 2.1.101 |
| `PermissionRequest deny re-check` | `PermissionRequest` хуки з `updatedInput` тепер перевіряються повторно проти `permissions.deny`; `setMode:'bypassPermissions'` поважає `disableBypassPermissionsMode` | 2.1.110 |
| `PreToolUse additionalContext drop fix` | Виправлено втрату `additionalContext` від `PreToolUse` хука коли tool call помиляється | 2.1.110 |
| `hookSpecificOutput.sessionTitle` | `UserPromptSubmit` хуки можуть встановлювати заголовок сесії | 2.1.94 |
| Hooks `type: "mcp_tool"` | Хуки можуть напряму викликати MCP tools через `type: "mcp_tool"` | 2.1.118 |
| `PostToolUse` `duration_ms` | `PostToolUse` та `PostToolUseFailure` hook inputs тепер включають `duration_ms` (час виконання інструменту, без permission prompts та PreToolUse hooks) | 2.1.119 |
| `PostToolUse` `hookSpecificOutput.updatedToolOutput` | ~~PostToolUse хуки тепер можуть замінити tool output для всіх інструментів через `hookSpecificOutput.updatedToolOutput` (раніше лише MCP)~~ **НЕ ПРАЦЮЄ в v2.1.121** — нове поле silently dropped; для MCP працює лише старе `updatedMCPToolOutput`; для built-in tools не працює взагалі. Див. відомі проблеми вище. | 2.1.121 |
