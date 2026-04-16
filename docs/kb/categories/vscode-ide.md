# VS Code / IDE

## Встановлення та підключення

| Можливість | Опис | Версія |
|-----------|------|--------|
| Нативне VS Code extension | Нова нативна розширеність | 2.0.0 |
| Secondary sidebar | Права бічна панель (VS Code 1.97+) | 2.0.56 |
| Іконка сесій | Іконка spark в activity bar | 2.1.70 |
| `CLAUDE_CODE_AUTO_CONNECT_IDE` | Вимкнути auto-connect (`false`) | 1.0.61 |
| `/ide` | Автовстановлення extension | — |

## Функції VS Code

| Можливість | Опис | Версія |
|-----------|------|--------|
| Drag & drop файлів | Перетягування файлів і папок | 2.0.8 |
| Cmd/Alt+V paste images | Вставка зображень | 1.0.48 |
| Вкладки сесій | Сесії з AI-заголовками | 2.1.79 |
| Permission picker | Вибір місця збереження дозволів | 2.1.47 |
| Compaction display | Згорнутий "Compacted chat" | 2.1.32 |
| План з коментарями | План-прев'ю | 2.1.47 |
| Rewind picker | Keyboard-navigable picker | 2.1.84 |
| Банер лімітів | Попередження про rate limits | 2.1.84 |
| Multi-terminal | Кілька терміналів (відкочено в 2.0.61) | 2.0.60 |
| Python venv | Автозавантаження venv | 2.1.21 |
| `respectGitIgnore` | Включення .gitignored файлів | 2.0.8 |
| `initialPermissionMode` | Початковий режим дозволів | 2.0.34 |
| `chat.fontSize` / `chat.fontFamily` | Шрифти інтерфейсу | 2.0.35 |
| `vscode://anthropic.claude-code/open` | URI handler | 2.1.72 |
| `/remote-control` | Remote Control з VS Code | 2.1.79 |
| "Not responding" fix | Виправлено хибне повідомлення при довгих операціях | 2.1.86 |
| Max plan default fix | Не скидає на Sonnet після OAuth refresh | 2.1.86 |
| Reduced cold-open subprocess | Прискорено старт сесії | 2.1.94 |
| Dropdown menus wrong item | Виправлено вибір неправильного елемента при миші над списком | 2.1.94 |
| settings.json parse warning | Банер попередження при помилці парсингу `settings.json` | 2.1.94 |
| "requires git-bash" false positive [Win] | Виправлено хибне повідомлення при `CLAUDE_CODE_GIT_BASH_PATH` або Git за замовч. | 2.1.98 |
| File attachment clear fix | Вкладення файлу під чатом очищається при закритті останньої вкладки | 2.1.101 |
| Write tool IDE edit notification | Write tool повідомляє модель коли користувач редагує контент в IDE diff перед прийняттям | 2.1.110 |

## Win32 ARM64

| Можливість | Опис | Версія |
|-----------|------|--------|
| Нативний ARM64 binary | Підтримка Windows ARM64 | 2.1.41 |
| VSCode ARM64 fallback | x64 через emulation | 1.0.48 |
