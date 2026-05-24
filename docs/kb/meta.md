# Knowledge Base Metadata

last_processed: 2.1.150
last_updated: 2026-05-24
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
