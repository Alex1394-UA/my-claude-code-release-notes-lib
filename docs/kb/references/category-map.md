# Маппінг категорій

Що куди категоризувати при обробці release notes.

## Категорії та їх секції

### core.md — Основні можливості

Thinking, зусилля, план-режим, швидкий режим, моделі, контекст, інтерактивність, інші команди.

| Ключові слова release notes | Секція в core.md |
|---------------------------|-----------------|
| thinking, ultrathink, thinking mode | ## Режим мислення |
| effort, auto effort, xhigh | ## Рівні зусилля |
| plan mode | ## План-режим |
| fast mode, speed | ## Швидкий режим |
| model, /model, Opus, Sonnet, Haiku, Fable, Bedrock, Vertex | ## Моделі |
| context, compact, memory, recap | ## Контекст та пам'ять |
| fullscreen, mouse, click, selection, scroll, paste, CJK, IME | ## Інтерактивність / ## Інші команди |
| /copy, /stats, /usage, /cost, /doctor, /debug, /color, /context | ## Інші команди |
| /btw, /feedback, /insights, /help | ## Інші команди |
| auto mode, bypass permissions | ## Інтерактивність |
| channels, channel connections, notifications | ## Інтерактивність |
| Remote Control, remote session, /remote-control | ## Інтерактивність |
| background agents, Ctrl+B, /bg | ## Інтерактивність |

**Не в core.md:** CLI прапорці, slash-команди як такі, налаштування.

### cli.md — CLI команди та прапорці

Команди `claude`, прапорці запуску, підкоманди (mcp, auth, plugin), `claude agents`, `--resume`, `--worktree`.

| Ключові слова release notes | Секція в cli.md |
|---------------------------|-----------------|
| --resume, /resume, session picker | ## Основні команди |
| --worktree, EnterWorktree, ExitWorktree | ## Основні команди |
| -p, --print, --json-schema | ## Основні команди |
| --model, --effort, --agent | ## Запуск та аутентифікація |
| --bg, --background, background session | ## Основні команди |
| --from-pr, --fork-session, --teleport | ## Основні команди |
| claude mcp add/list/get/enable/disable | ## Команди управління |
| claude auth login/status/logout | ## Команди управління |
| claude plugin install/validate | ## Команди управління |
| claude agents, agent view | ## Основні команди |
| claude update | ## `claude update` |
| --help, near-miss suggestion | ## Основні команди |
| /install-github-app, /web-setup | ## Команди управління |
| /cd, /workflows, /diff | ## `/cd` / ## `/workflows` / ## Виправлення |
| /share | ## CLI ( версія ) |

### settings.md — Налаштування settings.json

Ключі settings.json: загальні, дозволи, контекст, MCP, sandbox, managed/enterprise.

| Ключові слова release notes | Секція в settings.md |
|---------------------------|-----------------|
| setting, /config, theme, verbose, language | ## Загальні |
| permissions, allow, deny, defaultMode | ## Дозволи |
| autoCompact, cleanupPeriodDays | ## Контекст |
| enabledPlugins, extraKnownMarketplaces | ## MCP |
| sandbox, bubblewrap, network | ## Sandbox |
| availableModels, fallbackModel | ## Моделі — fallback |
| forceLogin, forceRemoteSettingsRefresh | ## Managed/Enterprise |
| worktree.baseRef, bgIsolation | ## Managed/Enterprise |
| skillOverrides, disableBundledSkills | ## Managed/Enterprise |
| sandbox.credentials, sandbox.allowWrite | ## Sandbox |

### env-vars.md — Змінні середовища

| Ключові слова release notes | Секція в env-vars.md |
|---------------------------|-----------------|
| ANTHROPIC_API_KEY, BASE_URL, AUTH_TOKEN | ## API та аутентифікація |
| TIMEOUT, MCP_TIMEOUT, MCP_TOOL_TIMEOUT | ## Таймаути та ліміти |
| DISABLE_, CLAUDE_CODE_DISABLE_, ENABLE_ | ## Поведінка |
| OTEL_, telemetry | ## Телеметрія та OTEL |
| CLAUDE_CODE_MCP_TOOL_IDLE_TIMEOUT | ## Таймаути та ліміти |
| ANTROPIC_MODEL, DEFAULT_*_MODEL | ## API та аутентифікація |
| CLAUDE_CODE_SAFE_MODE, NO_COLOR | ## Поведінка |

### hooks.md — Хуки

| Ключові слова release notes | Секція в hooks.md |
|---------------------------|-----------------|
| hook, PreToolUse, PostToolUse, UserPromptSubmit | ## Типи хуків |
| Stop, SubagentStop, SessionStart, SessionEnd | ## Типи хуків |
| hook config, timeout, matcher | ## Налаштування хуків |

### mcp.md — MCP

| Ключові слова release notes | Секція в mcp.md |
|---------------------------|-----------------|
| MCP server, MCP tool, MCP connector | ## Налаштування |
| MCP transport, stdio, SSE, HTTP | ## Транспорти |
| MCP OAuth, authentication | ## Налаштування |
| MCP reconnect, timeout, hang | ## Налаштування |
| claude.ai connector, /mcp | ## Налаштування |
| MCP tool idle timeout | ## Налаштування |

### skills-agents.md — Навички, Агенти та Команди

| Ключові слова release notes | Секція в skills-agents.md |
|---------------------------|-----------------|
| skill, /skills, skill discovery | ## Навички (Skills) |
| agent, /agents, subagent | ## Кастомні агенти |
| slash command, /command | ## Slash команди |
| rules, .claude/rules | ## Правила (Rules) |
| workflow, /workflows, dynamic workflow | ## Навички (Skills) |
| frontmatter, agent field, effort field | ## Поля frontmatter |
| agent stop, agent depth, agent worktree | ## Навички та Агенти (версія) |
| /plugin (як стосується skills) | ## Навички (Skills) |

### plugins.md — Плагіни

| Ключові слова release notes | Секція в plugins.md |
|---------------------------|-----------------|
| /plugin, plugin install/uninstall | ## Команди управління |
| plugin marketplace, npm, git source | ## Типи джерел |
| plugin dependencies, prune | ## Можливості |
| plugin theme, monitor, bin/ | ## Можливості |
| plugin cleanup, cache, stale | ## Очищення та стабільність |

### vscode-ide.md — VS Code / IDE

| Ключові слова release notes | Секція в vscode-ide.md |
|---------------------------|-----------------|
| VS Code extension, secondary sidebar | ## Встановлення та підключення |
| VS Code scroll, mouse, drag-and-drop | ## Функції VS Code |
| JetBrains, IntelliJ, PyCharm | ## JetBrains IDE |
| VSCode unresponsive, crash | ## Функції VS Code |

### sdk.md — SDK

| Ключові слова release notes | Секція в sdk.md |
|---------------------------|-----------------|
| SDK, @anthropic-ai/claude-code | ## Пакети |
| Remote Control, self-hosted runner | ## Remote Control |

### windows.md — Windows-специфічне

| Ключові слова release notes | Секція в windows.md |
|---------------------------|-----------------|
| Windows, Win, winget, ARM64 | ## Встановлення та запуск |
| CRLF, POSIX path, drive letter | ## Шляхи та файлова система |
| PowerShell, pwsh, Git Bash | ## PowerShell |
| Windows Terminal, mouse, NO_FLICKER | ## Термінал та рендеринг |
| MCP Windows, cmd /c | ## MCP на Windows |
| Managed settings, Registry | ## Managed Settings |
| VS Code Windows, Git for Windows | ## VS Code на Windows |

### keybindings.md — Клавіатурні скорочення

| Ключові слова release notes | Секція в keybindings.md |
|---------------------------|-----------------|
| Tab, Esc, Ctrl+C, Ctrl+D, keyboard | ## Навігація та управління |
| Alt+T, Alt+P, Shift+Enter | ## Інструменти та режими |
| vim, visual mode, /vim | ## Vim Mode |
| voice, push-to-talk | ## Голосовий режим |
| keybinding.json, /keybindings | ## Кастомні скорочення |
| Kitty, keyboard protocol | ## Kitty keyboard protocol |

## Правила категоризації

1. **Windows-фіча** → завжди дублюється: запис в `windows.md` + запис в основній категорії з тегом `[Win]`
2. **Не впадає в одну категорію** → обери найбільш релевантну
3. **Стосується кількох категорій** → додай в кожну
4. **CLI прапорець + його fix** → в `cli.md`
5. **Нова змінна середовища** → в `env-vars.md`; якщо це таймаут — в секцію "Таймаути та ліміти"
6. **Managed/enterprise policy** → в `settings.md` секція "Managed/Enterprise"
7. **VSCode-specific** → в `vscode-ide.md`; якщо також стосується інших IDE → дублювати
8. **Background agents / agent view** → в `skills-agents.md` або `cli.md` залежно від контексту
