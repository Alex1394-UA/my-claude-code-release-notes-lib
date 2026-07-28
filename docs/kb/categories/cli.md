# CLI команди та прапорці

> Архів (notes до 2.1.207): [archived/cli_v2.1.207.md](archived/cli_v2.1.207.md)
> Тут — notes починаючи з версії 2.1.208

## Основні команди (2.1.208)

| Можливість | Опис | Версія |
|-----------|------|--------|
| `claude --ax-screen-reader` | Увімкнути screen reader mode (простий текстовий вивід) | 2.1.208 |
| Truncated stream-json/JSON output fix | Виправлено обривання виводу stream-json/JSON та відсутність result message при piping великих відповідей з `claude -p` | 2.1.208 |
| stream-json CRLF killing session fix | Виправлено вбивство сесії на порожніх CRLF або whitespace-only рядках від Windows-style SDK hosts у stream-json input | 2.1.208 |
| stream-json non-string set_model fix | Виправлено зависання headless stream-json сесій коли `control_request` містив non-string `set_model` payload — тепер CLI відповідає error response | 2.1.208 |
| Completed agents stay in `/tasks` | Завершені background агенти залишаються в `/tasks` до очищення замість зникнення одразу | 2.1.208 |
| Background-session attach after update fix | Виправлено постійну невдачу attach до background сесії ("Couldn't start the background daemon") після update що замінив binary працюючого `claude agents` процесу | 2.1.208 |
| Daemon version mismatch fix | Старіший background daemon більше не мовчки перезапускає workers породжені новішою версією | 2.1.208 |

## Команди управління (2.1.208)

| Можливість | Опис | Версія |
|-----------|------|--------|
| `/install-github-app` / `/mcp` not in background | Команди `/install-github-app` та меню налаштувань `/mcp` більше не відкриваються у background сесіях | 2.1.208 |
| `/mcp` reclassification fix | `/mcp` повторно класифікує placeholder-сервери після редагування конфігу | 2.1.208 |
| MCP empty URL "not configured" | MCP сервери з порожнім URL тепер показуються як "not configured" у `/mcp` замість помилки конфігу | 2.1.208 |
| `/upgrade` login flow fix | Виправлено `/upgrade` що показував login flow замість upgrade URL коли браузер не відкривався | 2.1.208 |
| `/release-notes` context injection fix | Виправлено потрапляння всього changelog у контекст моделі — "Show all" раніше вставляв весь changelog у кожен наступний запит | 2.1.208 |

## Основні команди (2.1.209)

| Можливість | Опис | Версія |
|-----------|------|--------|
| /model діалоги в claude agents fix | Виправлено блокування /model та інших діалогів у background-сесіях claude agents — скасовано надто широкий guard | 2.1.209 |

## Основні команди (2.1.210)

| Можливість | Опис | Версія |
|-----------|------|--------|
| claude attach session transitions fix | Виправлено помилки «job not found» та «agent is still starting» у claude attach під час переходів сесії — attach чекає поки daemon стабілізується, а resize терміналу під час повільного attach застосовується після завершення | 2.1.210 |
| claude agents --effort ultracode fix | claude agents --effort ultracode більше не скидає значення мовчки — воно тепер доходить до розгорнутих сесій | 2.1.210 |
