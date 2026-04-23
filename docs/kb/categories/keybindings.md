# Клавіатурні скорочення

## Навігація та управління

| Скорочення | Дія | Версія |
|-----------|-----|--------|
| `Tab` | Автозаповнення файлів/команд | 0.2.47 |
| `Shift+Tab` | Auto-accept file edits (Alt+mode switch Win) | 0.2.47 |
| `Enter` | Черга повідомлень / прийняття підказки | 0.2.75, 2.0.70 |
| `Escape` | Переривання Claude | 0.2.70 |
| `Ctrl+C` | Переривання / вихід з -p | 2.1.79 |
| `Ctrl+D` | Вихід | — |
| `Ctrl+L` | Очистити екран + повний перемальовування | 2.1.83 |
| `Ctrl+L` forces full screen redraw | Примусовий повний screen redraw + очистка prompt input | 2.1.116 |
| `Ctrl+U` | Видалити до початку рядка | 1.0.44→2.1.0 |
| `Ctrl+Y` | Вставити з kill ring | 2.0.49 |
| `Ctrl+Y` restore killed text | `Ctrl+Y` тепер відновлює killed text (раніше вставка з kill ring) | 2.1.111 |
| `Alt+Y` | Цикл через kill ring | 2.0.49 |
| `Ctrl+W` | Видалити слово назад | — |
| `Alt+B/F` | Навігація по словах | 2.0.11 |
| `Alt+Delete` | Видалити слово вперед | — |
| `Ctrl+K` | Видалити до кінця рядка | — |
| `Shift+↑/↓` fullscreen selection | Прокрутка viewport при розширенні виділення за видимий край в fullscreen mode | 2.1.113 |
| `Ctrl+A`/`Ctrl+E` multiline | Перехід на початок/кінець поточного логічного рядка в multiline input (readline behavior) | 2.1.118 |
| `Ctrl+Backspace` delete word [Win] | Видалення попереднього слова на Windows | 2.1.113 |
| Transcript view footer | `[` (dump to scrollback) та `v` (open in editor) швидкості в footer transcript view | 2.1.111 |

## Інструменти та режими

| Скорочення | Дія | Версія |
|-----------|-----|--------|
| `Tab` (sticky) | Перемикання thinking mode | 2.0.0 |
| `Alt+T` | Перемикання thinking mode | 2.0.71 |
| `Alt+P` / `Option+P` | Перемикання моделі | 2.0.65 |
| `Alt+M` (Win) | Перемикання mode | — |
| `Shift+Enter` | Новий рядок | — |
| `Alt+Enter` newline fix | Виправлено вставку newline в терміналах з ESC-prefix alt encoding (регресія Ctrl+J з 2.1.100) | 2.1.105 |
| `Ctrl+B` | Фоновий запуск | 1.0.71 |
| `Ctrl+F` → `Ctrl+X Ctrl+K` | Зупинка фонових агентів | 2.1.49 |
| `Ctrl+G` / `Ctrl+X Ctrl+E` | Зовнішній редактор | 2.0.10, 2.1.83 |
| `Ctrl+Z` | Suspend (fg для відновлення) | 1.0.44 |
| `Ctrl+S` | Prompt stash | 2.0.30 |
| `Ctrl+R` | Історія команд (bash-стиль) | 2.1.17 |
| `Ctrl+O` | Toggle між normal та verbose transcript (раніше — режим транскрипту) | 1.0.113, 2.1.110 |
| `/` в Ctrl+O | Пошук в транскрипті | 2.1.83 |
| `n`/`N` | Наступний/попередній результат пошуку | 2.1.83 |
| `↑`/`↓` | Історія повідомлень | — |
| `←`/`→` | Навігація в табах діалогів | 2.1.0 |

## Vim Mode

| Скорочення | Дія | Версія |
|-----------|-----|--------|
| `/vim` або `/config` | Увімкнути vim mode | 0.2.34 |
| `j`/`k` | Навігація меню | 0.2.61 |
| `c`, `f/F`, `t/T` | Vim motions | 1.0.48 |
| `;` / `,` | Повторити f/F/t/T | 2.1.0 |
| `y`/`Y`, `yy` | Yank | 2.1.0 |
| `p`/`P` | Paste | 2.1.0 |
| `>>` / `<<` | Indent/dedent | 2.1.0 |
| `J` | Об'єднати рядки | 2.1.0 |
| Text objects | `iw`, `aw`, `i"`, `a"`, `i(`, `a(`, `i[`, `a[`, `i{`, `a{` | 2.1.0 |
| `u` | Undo в vim normal mode | 1.0.33 |
| `←`/`→` | Історія в vim normal mode | 2.1.20 |
| `gi` | Перехід на перший рядок файлу в insert mode (як у справжньому vim) | 2.2.3 |
| `v` | Visual mode з selection, operators та візуальним feedback | 2.1.118 |
| `V` | Visual-line mode з selection та operators | 2.1.118 |

## Голосовий режим

| Скорочення | Дія | Версія |
|-----------|-----|--------|
| Space (push-to-talk) | Голосовий ввід | — |
| `voice:pushToTalk` | Перемикання клавіші через keybindings.json | 2.1.71 |

## Кастомні скорочення

| Можливість | Опис | Версія |
|-----------|------|--------|
| `/keybindings` | Кастомізація скорочень | 2.1.18 |
| Файл: `~/.claude/keybindings.json` | Конфігурація прив'язок | — |
| `chat:killAgents`, `chat:fastMode` | Керують перемиканням | 2.1.83 |
| `chat:newline` | Перемикається | 2.1.47 |
| `null` | Скидання вбудованих прив'язок | 2.1.84 |
