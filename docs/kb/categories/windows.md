# Windows-специфічне

> Архів (notes до 2.1.207): [archived/windows_v2.1.207.md](archived/windows_v2.1.207.md)
> Тут — notes починаючи з версії 2.1.208

## Шляхи та файлова система (2.1.208)

| Можливість | Опис | Версія |
|-----------|------|--------|
| stream-json CRLF killing session fix [Win] | Виправлено вбивство сесії на порожніх CRLF/whitespace-only рядках від Windows-style SDK hosts у stream-json input | 2.1.208 |

## Шляхи та файлова система (2.1.210)

| Можливість | Опис | Версія |
|-----------|------|--------|
| Plugin cache locked-file rename fix [Win] | Виправлено збій plugin cache на rename заблокованого файлу на Windows та мережевих файлових системах | 2.1.210 |

## Шляхи та файлова система (2.1.211)

| Можливість | Опис | Версія |
|-----------|------|--------|
| File upload validation: DOS device / hard links fix [Win] | Посилено валідацію завантаження файлів: імена, що закінчуються суфіксом DOS-пристрою (`.prn`) або крапкою, тепер приймаються, а файли з кількома жорсткими посиланнями відхиляються | 2.1.211 |
| Claude in Chrome setup pages Windows fix [Win] | Виправлено відкриття сторінок налаштування Claude in Chrome у браузері на Windows | 2.1.211 |
| Headless print-mode stdin fix [Win] | Виправлено краш або мовчазний вихід headless print-mode сесій на Windows, коли stdin недоступний для читання | 2.1.211 |
| Synced skill/plugin dir naming [Win] | Посилено іменування synced-директорій навичок і плагінів на Windows | 2.1.211 |

## Шляхи та файлова система (2.1.212)

| Можливість | Опис | Версія |
|-----------|------|--------|
| `/background` + `claude --bg` PowerShell 7 fix [Win] | Виправлено збій `/background` та `claude --bg` з «EUNKNOWN: unknown error, uv_spawn» на Windows, коли Group Policy блокує PowerShell 5.1; daemon тепер віддає перевагу PowerShell 7 | 2.1.212 |
