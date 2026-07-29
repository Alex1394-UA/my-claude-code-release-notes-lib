# SDK

> Архів (notes до 2.1.207): [archived/sdk_v2.1.207.md](archived/sdk_v2.1.207.md)
> Тут — notes починаючи з версії 2.1.208

## Пакети (2.1.208)

| Можливість | Опис | Версія |
|-----------|------|--------|
| Truncated stream-json/JSON output fix | Виправлено обривання stream-json/JSON виводу та відсутність result message при piping великих відповідей | 2.1.208 |
| stream-json CRLF killing session fix | Виправлено вбивство сесії на порожніх CRLF/whitespace-only рядках від Windows-style SDK hosts у stream-json input | 2.1.208 |
| stream-json non-string set_model fix | Виправлено зависання headless stream-json сесій при `control_request` з non-string `set_model` — тепер повертає error response | 2.1.208 |
| SDK agents lost on plugin refresh fix | Виправлено втрату агентів визначених через initialize request коли plugin refresh виконувався до attach клієнта | 2.1.208 |
| "Change directory" fix | Виправлено "Change directory" у SDK hosts (напр. Claude Desktop) що падав з "A turn is in progress" на idle сесіях з працюючим background task | 2.1.208 |

## Remote Control (2.1.208)

| Можливість | Опис | Версія |
|-----------|------|--------|
| RC terminal-hosted background visibility fix | Виправлено Remote Control clients що прикріплювались до terminal-hosted session і не бачили background agents та workflow progress до старту/стопу task | 2.1.208 |

## Пакети (2.1.210)

| Можливість | Опис | Версія |
|-----------|------|--------|
| SDK MCP initialize connecting fix | SDK MCP сервери зареєстровані через initialize control request більше не чекають наступного ходу для початку з’єднання | 2.1.210 |

## Remote Control (2.1.212)

| Можливість | Опис | Версія |
|-----------|------|--------|
| Workflow agent grid empty Remote Control fix | Виправлено порожнє відображення сітки workflow-агентів для Remote Control клієнтів, що приєднуються до сесії посеред виконання | 2.1.212 |

## Пакети (2.1.212)

| Можливість | Опис | Версія |
|-----------|------|--------|
| `ExitWorktree` after resume print/SDK fix | Виправлено збій `ExitWorktree` з «no active EnterWorktree session» після поновлення сесії з `--continue`/`--resume` у print/SDK-режимі | 2.1.212 |
| Streaming control requests early complete fix | Виправлено позначення control-запитів streaming-режиму завершеними до кінця обробника, що могло втратити запит при рестарті сесії | 2.1.212 |
| Headless `set_model` mid-turn | Headless/SDK-сесії тепер застосовують control-запит `set_model` посеред ходу; наступний раунд моделі бере нову модель, не чекаючи наступного ходу | 2.1.212 |

## Remote Control (2.1.214)

| Можливість | Опис | Версія |
|-----------|------|--------|
| Remote Control «session ready» push not enabled fix | Виправлено спрацьовування push-сповіщення «session ready» Remote Control для сесій, де Remote Control явно не увімкнено | 2.1.214 |

## Пакети (2.1.214)

| Можливість | Опис | Версія |
|-----------|------|--------|
| stream-json exit truncation slow consumers fix | Виправлено обрізання stream-json виводу при exit для повільних SDK/pipeline consumers — exit drain тепер масштабується з queued bytes замість flat 2s cap | 2.1.214 |
