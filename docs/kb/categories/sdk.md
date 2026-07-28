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
