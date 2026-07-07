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
| Esc в INSERT (no queue pull) | Esc в INSERT mode більше не підтягує чергове повідомлення назад в input; натисніть Esc ще раз для interrupt | 2.1.119 |

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
| Caps Lock voice mode error | Голосовий режим: keybindings прив'язані до Caps Lock тепер показують помилку, оскільки термінали не доставляють Caps Lock як key event | 2.1.122 |
| `Ctrl+L` prompt input preserved | `Ctrl+L` більше не очищає prompt input — тепер лише forces screen redraw, відповідаючи readline behavior | 2.1.126 |
| Vim `Space` NORMAL mode | `Space` в vim NORMAL mode рухає курсор вправо, як у стандартному vi/vim | 2.1.128 |
| Esc compaction notification fix | Виправлено spurious "Error compacting conversation" notification при натисканні Esc під час compaction | 2.1.133 |
| Backspace/Ctrl+Backspace Ctrl+G fix | Виправлено swapping Backspace та Ctrl+Backspace після використання Ctrl+G для зовнішнього редактора на терміналах з persistent extended-key modes | 2.1.136 |
| Esc dialogs dismiss fix | Виправлено Esc що не dismissing dialogs в `/install-github-app`, `/desktop`, `/resume`, та `/web-setup` | 2.1.136 |
| Keyboard shortcut hints keybindings.json fix | Виправлено keyboard shortcut hints що не reflecting rebound keys з `keybindings.json` | 2.1.136 |
| `/scroll-speed` command | Налаштування швидкості mouse wheel scroll з live preview | 2.1.139 |
| Transcript view navigation | `?` для keyboard shortcuts, `{`/`}` jump між user prompts, `v` toggle shortcut panel | 2.1.139 |
| Transcript view shortcuts mouse click fix | Виправлено transcript view letter shortcuts що не працювали після mouse click | 2.1.139 |
| Keybindings cmd/super/win unparseable fix | Виправлено keybindings з лише cmd/super/win modifier що flagged як unparseable | 2.1.139 |
| Alt `chat:submit` with rebound enter fix | Виправлено alternative `chat:submit` keybindings (напр. `meta+enter`, `ctrl+enter`) що не working коли `enter` rebound to `chat:newline` | 2.1.141 |
| Custom `voice:pushToTalk` keybindings fix | Виправлено custom `voice:pushToTalk` keybindings та `"space": null` unbinds що silently ignored | 2.1.141 |
| Vim `/` reverse history search | Vim mode: `/` в NORMAL mode відкриває reverse history search (як Ctrl+R), matching bash/zsh vi-mode | 2.1.152 |
| `/model` saves default, `s` session-only | `/model` тепер зберігає вибір як default для нових сесій; `s` в picker для switch лише поточної сесії | 2.1.153 |
| `modelPicker:setAsDefault` → `modelPicker:thisSessionOnly` | Якщо ви customized `modelPicker:setAsDefault` keybinding, rename на `modelPicker:thisSessionOnly` (action `d` replaced by `s`) | 2.1.153 |
| Vim `p` paste cursor fix | Виправлено vim mode `p` paste що вставляв на рядок нижче замість біля курсору коли register був yanked з `v$` | 2.1.160 |
| Vim `u` undo per-command fix | Виправлено vim mode undo: `u` тепер крокує через NORMAL/VISUAL-mode команди по одній замість об'єднання швидких послідовних команд в один крок undo | 2.1.178 |

## Навігація та управління (2.1.187)

| Скорочення | Дія | Версія |
|-----------|-----|--------|
| Esc/Ctrl-C/Ctrl-D під час `/share` | Esc, Ctrl-C та Ctrl-D тепер працюють під час завантаження `/share` (раніше ігнорувалися) | 2.1.187 |

## Голосовий режим (2.1.195)

| Скорочення | Дія | Версія |
|-----------|-----|--------|
| Voice dictation macOS silence fix | Виправлено voice dictation на macOS що записував тишю в довгих сесіях після зміни стандартного пристрою вводу | 2.1.195 |
| Voice dictation auto-submit мови без пробілів | Виправлено voice dictation auto-submit що ніколи не спрацьовував для мов написаних без пробілів (японська, китайська, тайська) | 2.1.195 |
| Voice mode Linux mic vs SoX | Покращено voice mode на Linux: розрізнення "немає мікрофона" та "SoX не встановлено" коли SoX присутній але пристрій запису відсутній | 2.1.195 |

## Кастомні скорочення (2.1.191)

| Можливість | Опис | Версія |
|-----------|------|--------|
| Vim prompt-history search slash command hint | Vim mode: пошук історії в NORMAL mode через `/` тепер підказує як досягтися slash-команд | 2.1.191 |

## Kitty keyboard protocol

| Скорочення | Виправлення | Версія |
|-----------|-------------|--------|
| Shift+non-ASCII Kitty protocol fix | Виправлено dropping Shift+non-ASCII символів (напр. Shift+ä → Ä) в терміналах з Kitty keyboard protocol (WezTerm, Ghostty, kitty) | 2.1.166 |
| Up/Down arrows wrapped rows fix | Виправлено Up/Down arrows що перескакували до history повз wrapped рядки довгого input — тепер спочатку проходять через кожен visual рядок, history recall входить з ближнього краю | 2.1.169 |
