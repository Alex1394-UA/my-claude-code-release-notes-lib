# Хуки

> Документація: https://code.claude.com/docs/en/hooks
>
> ⚠️ **Відомі проблеми:**
> - `PreToolUse` `updatedInput` **не працює у `-p` (print/pipe) mode** — мовчазно ігнорується; `permissionDecision` (allow/deny) працює ([#32348](https://github.com/anthropics/claude-code/issues/32348) — закрито без фіксу як неактивний)
> - ~~Stop хуки повертають пустий output у `-p` mode~~ **виправлено в v2.1.84** — print mode тепер пропускає Stop-hook progress/attachment messages ([#39050](https://github.com/anthropics/claude-code/issues/39050))
> - Hook runner іноді плутає: нормальні виклики помилково трактуються як "hook error" ([#35587](https://github.com/anthropics/claude-code/issues/35587))
> - У `-p` mode працює `permissionDecision` та `additionalContext`; `updatedInput` та `updatedToolOutput` — мовчазно ігноруються
> - `PostToolUse` `updatedToolOutput` **не працює в v2.1.121** — нове поле silently dropped для built-in (Bash, Read, Grep) та MCP tools; працює лише старе `updatedMCPToolOutput` для MCP ([#54196](https://github.com/anthropics/claude-code/issues/54196), [#32105](https://github.com/anthropics/claude-code/issues/32105))
> - `PreToolUse` `permissionDecision: "ask"` **ігнорується auto-mode класифікатором** для in-flow викликів (git commit/push після редагування файлів); out-of-flow виклики prompt спрацьовує ([#51255](https://github.com/anthropics/claude-code/issues/51255), [#53824](https://github.com/anthropics/claude-code/issues/53824))
> - `PostToolUse` prompt-type хуки **падали на Vertex AI** з `output_config: Extra inputs are not permitted` — **виправлено в v2.1.122** ([#37746](https://github.com/anthropics/claude-code/issues/37746), [#54224](https://github.com/anthropics/claude-code/issues/54224))
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
| `MessageDisplay` | При відображенні тексту assistant message — трансформація або приховування | 2.1.152 |
| `AgentOutput` | [НЕ ПОСТАВЛЕНО] Вивід агента | 2.0.64 |

## Налаштування хуків

| Параметр | Опис | Версія |
|----------|------|--------|
| `timeout` | Таймаут хука (за замовч. 10 хв) | 1.0.41 |
| `modelSwitchTimeout` | Таймаут для ModelSwitch хуків | 2.2.1 |
| `once: true` | Одноразовий хук | 2.1.0 |
| `if` | Умова запуску (правила дозволів; compound commands з 2.1.89) | 2.1.85, 2.1.89 |
| Hook `if: "Bash(...)"` subshell fix | Виправлено hook `if: "Bash(...)"` умови що спрацьовували на кожну Bash команду з `$()` або `$VAR`; патерн тепер співпадає з командами всередині subshells та backticks | 2.1.163 |
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
| Vertex AI/Bedrock `output_config` fix | Виправлено помилку `output_config: Extra inputs are not permitted` для hooks (та інших structured-output запитів) на Vertex AI та Bedrock | 2.1.122 |
| Hooks `effort.level` input | Хуки тепер отримують active effort level через `effort.level` JSON input field та `$CLAUDE_EFFORT` env var | 2.1.133 |
| `CLAUDE_ENV_FILE` SessionStart stale fix | Виправлено env vars з `CLAUDE_ENV_FILE` SessionStart hooks що stale-ілися після `/resume` або `/clear` | 2.1.136 |
| Plugin hooks cache cleanup fix | Виправлено plugin `Stop`/`UserPromptSubmit` hooks що failing коли cache cleanup deletes version що ще в use running session | 2.1.136 |
| Hook `args: string[]` (exec form) | Поле `args` що spawn команду напряму без shell — path placeholders не потребують quoting | 2.1.139 |
| Hook `continueOnBlock` | Config option для `PostToolUse` — встановити `true` для передачі rejection reason назад Claude та продовження turn | 2.1.139 |
| Hook terminal corruption fix | Виправлено hook що пише в terminal та міг corrupt on-screen interactive prompt; hooks тепер run без terminal access | 2.1.139 |
| Settings symlink spurious ConfigChange fix | Виправлено regression де symlinked settings files causing spurious `ConfigChange` hooks | 2.1.140 |
| Hook `terminalSequence` output field | Нове поле `terminalSequence` в hook JSON output — дозволяє hooks emit desktop notifications, window titles та bells без controlling terminal | 2.1.141 |
| Hooks `transcript_path` EnterWorktree fix | Виправлено hooks що receiving non-existent `transcript_path` після `EnterWorktree` switches working directory | 2.1.141 |
| Hook config error improvement | Покращено повідомлення про помилку: налаштування prompt- або agent-type hook для `SessionStart`/`Setup`/`SubagentStart` тепер показує чітку помилку "use a command-type hook instead" | 2.1.142 |
| Stop hooks block loop fix | Stop hooks що блокують повторно більше не зациклюються нескінченно — turn завершується з warning після 8 послідовних блоків; override через `CLAUDE_CODE_STOP_HOOK_BLOCK_CAP` env var | 2.1.143 |
| File descriptor exhaustion skill dir fix | Виправлено file descriptor exhaustion коли build запущено в skill directory — non-`.md` files більше не trigger skill reloads | 2.1.144 |
| Stop/SubagentStop `background_tasks`/`session_crons` fields | Hook input тепер включає `background_tasks` та `session_crons` поля | 2.1.145 |
| Hook `if` conditions PowerShell wildcard fix | Виправлено hook `if` умови як `PowerShell(git push*)` що ніколи не збігалися — працював лише `PowerShell(*)` | 2.1.147 |
| `SessionStart` hook `reloadSkills: true` | `SessionStart` хуки можуть повертати `reloadSkills: true` для re-scan skill directories — skills встановлені хуком доступні в тій самій сесії | 2.1.152 |
| `SessionStart` hook session title | `SessionStart` хуки можуть встановлювати заголовок сесії через `hookSpecificOutput.sessionTitle` на startup та resume | 2.1.152 |
| `MessageDisplay` hook event | Новий тип хука `MessageDisplay` — дозволяє hooks трансформувати або ховати текст assistant message при відображенні | 2.1.152 |
| Windows hooks explicit bash fix [Win] | Виправлено hooks на Windows що явно викликають bash (напр. `/usr/bin/bash script.sh`) що failing з "command not found" або "cannot execute binary file" | 2.1.161 |
| Stop/SubagentStop `hookSpecificOutput.additionalContext` | Stop та SubagentStop хуки тепер можуть повертати `hookSpecificOutput.additionalContext` для надання зворотного зв'язку Claude та продовження turn без помилки hook error | 2.1.163 |
