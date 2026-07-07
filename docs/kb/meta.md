# Knowledge Base Metadata

last_processed: 2.1.193
last_updated: 2026-07-07
seeded_from: docs/CLAUDE-CODE-OPTIONS-GUIDE.md

## Відстежувані невідповідності (Release Notes vs Reality)

| Дата виявлення | Реліз | Твердження | Фактичний стан | Issue(s) | Статус |
|----------------|-------|------------|----------------|----------|--------|
| 2026-04-28 | 2.1.121 | `PostToolUse` `updatedToolOutput` працює для всіх інструментів | Поле silently dropped для built-in + MCP; для MCP працює лише старе `updatedMCPToolOutput`; для built-in — не працює взагалі | [#54196](https://github.com/anthropics/claude-code/issues/54196), [#32105](https://github.com/anthropics/claude-code/issues/32105), [#54161](https://github.com/anthropics/claude-code/issues/54161) | Відкрито |

## Processing History

| Date | Version | Categories Updated | Notes |
|------|---------|--------------------|-------|
| 2026-03-27 | 2.1.85 | all (initial seed) | Migrated from monolithic guide |
| 2026-03-29 | 2.1.86–2.1.87 | core, cli, mcp, skills-agents, plugins, vscode-ide, settings | 14 записів додано |
| 2026-04-01 | 2.1.89 | hooks, env-vars, core, cli, settings, windows, mcp, skills-agents | ~30 записів додано |
| 2026-04-06 | 2.1.90–2.1.92 | core, cli, env-vars, hooks, mcp, settings, skills-agents, plugins, windows, sdk | ~45 записів додано, 2 команди видалено |
| 2026-04-13 | 2.1.94–2.1.101 | all 12 categories | ~120 записів додано, 1 нова команда |
| 2026-04-16 | 2.1.105–2.1.110 | all 12 categories | ~95 записів додано, 4 нові команди, 3 депрекації |
| 2026-04-23 | 2.1.111–2.1.118 | all 12 categories | ~140 записів додано, 3 нові команди, 0 депрекацій |
| 2026-04-25 | 2.1.119 | all 12 categories | ~45 записів додано, 0 депрекацій |
| 2026-04-28 | 2.1.120–2.1.121 | all 12 categories | ~60 записів додано, 0 депрекацій |
| 2026-05-04 | 2.1.122–2.1.126 | all 12 categories | ~50 записів додано, 0 депрекацій, 1 виправлена відома проблема |
| 2026-05-07 | 2.1.128–2.1.132 | core, cli, env-vars, mcp, plugins, settings, windows, keybindings, sdk, vscode-ide | ~75 записів додано, 0 депрекацій |
| 2026-05-09 | 2.1.133, 2.1.136–2.1.138 | all 12 categories | ~80 записів додано, 0 депрекацій |
| 2026-05-12 | 2.1.139 | all 12 categories | ~50 записів додано, 0 депрекацій |
| 2026-05-13 | 2.1.140 | 8 categories | ~13 записів додано, 0 депрекацій |
| 2026-05-14 | 2.1.141 | all 12 categories | ~65 записів додано, 0 депрекацій |
| 2026-05-16 | 2.1.142 | cli, core, env-vars, mcp, plugins, hooks, windows | ~28 записів додано, 0 депрекацій |
| 2026-05-16 | 2.1.143 | cli, core, env-vars, plugins, hooks, settings, windows | ~27 записів додано, 3 дублікати з 2.1.142 пропущено, 0 депрекацій |
| 2026-05-22 | 2.1.144 | cli, core, mcp, plugins, skills-agents, hooks, settings, windows | ~45 записів додано, 1 депрекація (`/extra-usage` → `/usage-credits`) |
| 2026-05-22 | 2.1.145 | cli, core, mcp, plugins, skills-agents, hooks, sdk, windows | ~20 записів додано, 0 депрекацій |
| 2026-05-22 | 2.1.147 | cli, core, mcp, plugins, skills-agents, hooks, sdk, windows, settings, env-vars | ~33 записів додано, 1 депрекація (`/simplify` → `/code-review`) |
| 2026-05-22 | 2.1.148 | core | ~1 запис додано, 0 депрекацій |
| 2026-05-24 | 2.1.149 | core, cli, settings, windows, skills-agents, sdk | ~34 записів додано, 0 депрекацій |
| 2026-05-24 | 2.1.150 | — | 0 записів (internal infrastructure) |
| 2026-05-28 | 2.1.152 | core, cli, skills-agents, hooks, plugins, settings, keybindings, sdk, mcp | ~34 записів додано, 0 депрекацій |
| 2026-05-28 | 2.1.153 | cli, core, mcp, plugins, windows, vscode-ide, skills-agents, keybindings, sdk | ~34 записів додано, 0 депрекацій |
| 2026-06-01 | 2.1.154 | core, cli, mcp, plugins, skills-agents, vscode-ide, settings, env-vars, windows, sdk | ~35 записів додано, 1 депрекація (`CLAUDE_CODE_OPUS_4_6_FAST_MODE_OVERRIDE`) |
| 2026-06-01 | 2.1.156–2.1.159 | core, cli, plugins, skills-agents, env-vars, settings, vscode-ide, windows | ~42 записів додано, 0 депрекацій |
| 2026-06-06 | 2.1.160 | core, cli, settings, env-vars, windows, keybindings, plugins, sdk | ~28 записів додано, 1 видалення (`CLAUDE_CODE_OPUS_4_6_FAST_MODE_OVERRIDE`) |
| 2026-06-06 | 2.1.161 | core, cli, settings, hooks, env-vars, sdk, windows, vscode-ide | ~23 записів додано, 0 депрекацій |
| 2026-06-06 | 2.1.162 | core, cli, settings, windows, mcp, sdk, vscode-ide | ~30 записів додано, 0 депрекацій |
| 2026-06-06 | 2.1.163 | settings, cli, hooks, skills-agents, mcp, plugins, windows | ~23 записи додано, 0 депрекацій |
| 2026-06-06 | 2.1.164–2.1.165 | — | 0 записів (generic bug fixes) |
| 2026-06-10 | 2.1.166 | settings, cli, core, vscode-ide, keybindings, windows | ~22 записи додано, 0 депрекацій |
| 2026-06-10 | 2.1.167–2.1.168 | — | 0 записів (generic bug fixes) |
| 2026-06-10 | 2.1.169 | settings, cli, core, hooks, env-vars, sdk, keybindings, windows, plugins | ~32 записи додано, 0 депрекацій |
| 2026-06-10 | 2.1.170 | core, vscode-ide | ~3 записи додано, 0 депрекацій |
| 2026-06-11 | 2.1.172–2.1.173 | core, cli, settings, env-vars, skills-agents, plugins, vscode-ide, windows | ~27 записів додано, 0 депрекацій |
| 2026-06-13 | 2.1.176 | core, cli, settings, env-vars, hooks, sdk, windows | ~25 записів додано, 0 депрекацій |
| 2026-06-17 | 2.1.178 | core, cli, settings, skills-agents, sdk, mcp, keybindings, plugins, vscode-ide | ~25 записів додано, 0 депрекацій |
| 2026-06-17 | 2.1.179 | core, settings, windows, plugins, sdk | ~10 записів додано, 0 депрекацій |
| 2026-06-23 | 2.1.180–2.1.181 | core, cli, settings, env-vars, mcp, skills-agents, windows, vscode-ide | ~42 записів додано, 0 депрекацій |
| 2026-06-23 | 2.1.183 | core, cli, settings, mcp, skills-agents, windows | ~21 записів додано, 0 депрекацій |
| 2026-06-23 | 2.1.185 | core | ~1 запис додано, 0 депрекацій |
| 2026-06-23 | 2.1.186 | core, cli, settings, mcp, skills-agents, plugins, env-vars | ~37 записів додано, 0 депрекацій |
| 2026-07-06 | 2.1.187 | core, cli, settings, env-vars, mcp, skills-agents, plugins, vscode-ide, windows, keybindings | ~22 записи додано, 0 депрекацій |
| 2026-07-06 | 2.1.191 | core, cli, settings, mcp, hooks, skills-agents, keybindings, windows | ~20 записи додано, 0 депрекацій |
| 2026-07-07 | 2.1.193 | core, cli, settings, env-vars, mcp, plugins, skills-agents | ~18 записів додано, 0 депрекацій |
