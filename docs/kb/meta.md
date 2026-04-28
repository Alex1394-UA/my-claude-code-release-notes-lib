# Knowledge Base Metadata

last_processed: 2.1.121
last_updated: 2026-04-28
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
