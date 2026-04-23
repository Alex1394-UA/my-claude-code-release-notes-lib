## Project-specific Search Preferences

| Priority | Tool | When | Cost |
|----------|------|------|------|
| 1 | **context7** or **Docfork** | Library/framework/SDK docs | Free |
| 2 | **WebSearch** (built-in) | General web queries, best practices | Free |
| 3 | **web-reader** or **crawl4ai** | Specific URL content extraction | Free |
| 4 | **Perplexity** (`pplx` CLI) | Free tools insufficient, need depth | Paid API |

- **Known docs URL** → prefer direct fetch via `crawl4ai/md` or `web-reader`, but don't skip search entirely if the topic needs broader context or the source might be incomplete.

## KB Integrity Rules

- **ЗАБОРОНЕНО** видаляти, перезаписувати з нуля або виконувати `git checkout`/`git restore` на файлах `docs/kb/` без явного підтвердження користувача
- При оновленні KB через `release-notes-tracker` — **ЗАВЖДИ комітити зміни до закінчення сесії**. Мінімум: один коміт після оновлення всіх категорій, до створення снапшотів релізів. Рекомендовано: коміт після кожної значної групи змін
- При виявленні що файли `docs/kb/` зникли з диску — **ЗАУПИНТИТИ** і повідомити користувача, не продовжувати оновлення
