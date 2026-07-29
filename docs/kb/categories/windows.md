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

## Шляхи та файлова система (2.1.214)

| Можливість | Опис | Версія |
|-----------|------|--------|
| Windows PowerShell 5.1 permission bypass fix [Win] | Виправлено обхід перевірки дозволів для команд у сесіях Windows PowerShell 5.1 | 2.1.214 |
| Streaming «Socket is closed» corporate proxies fix [Win] | Виправлено помилку «Socket is closed» streaming-ходів за корпоративними проксі на Windows | 2.1.214 |
| PowerShell tool hanging child stdin fix [Win] | Виправлено зависання команд PowerShell tool до таймауту, коли child-процес чекав на standard input | 2.1.214 |
| Python UnicodeDecodeError PowerShell tool stdin fix [Win] | Виправлено краш Python-скриптів під PowerShell tool з UnicodeDecodeError при читанні non-UTF-8 даних зі standard input | 2.1.214 |
| Python UnicodeEncodeError + PS7 ANSI escapes fix [Win] | Виправлено краш Python-скриптів під PowerShell tool з UnicodeEncodeError на non-ASCII виводі та raw ANSI escape sequences у повідомленнях помилок PowerShell 7 | 2.1.214 |
| PowerShell tool where.exe/fc.exe/diff.exe negative answer fix [Win] | Виправлено звіт PowerShell tool про `where.exe`, `fc.exe`, `diff.exe` як помилки, коли вони повертають валідну негативну відповідь | 2.1.214 |
| `>`/`>>` UTF-16LE Windows PS 5.1 fix [Win] | Виправлено запис `>` та `>>` під PowerShell tool на Windows PowerShell 5.1 у UTF-16LE файли, що інші інструменти не могли прочитати як UTF-8 | 2.1.214 |
