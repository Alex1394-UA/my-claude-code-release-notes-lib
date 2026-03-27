---
name: release-notes-tracker
description: Incrementally maintain a modular knowledge base of Claude Code features from release notes. Use this skill whenever the user pastes release notes content, asks to update the knowledge base, mentions new Claude Code versions, says "онови базу" (update base), or wants to track new features. Also trigger when the user runs /release-notes and asks to process the output. Do NOT trigger for general questions about Claude Code features (those should just read the KB files directly).
---

# Release Notes Tracker

Incrementally maintain a modular knowledge base of Claude Code features.

## ПЕРШЕ ПРАВИЛО: весь контент українською

Технічні ідентифікатори (`--flag`, `VAR_NAME`, `/command`, шляхи файлів) залишаються як є.
Всі описи, назви підрозділів, коментарі — виключно українською.
Приклад: `claude -p` / `--print` | Одноразовий вивід (non-interactive) | —

---

## Workflow

### Step 1: Визначити що нового

Прочитай `docs/kb/meta.md` — `last_processed` це точка відліку.

Якщо meta.md не існує — це перший запуск, насідай KB з `docs/CLAUDE-CODE-OPTIONS-GUIDE.md` (див. "First-Time Setup" внизу).

Реліз-ноти надходять від: вставка в чат, `/release-notes` output, або шлях до файлу.

### Step 2: Розібрати та категоризувати

Пройди кожну нову версію (від last_processed + 1 до останньої згаданої).
Розподіли зміни по категоріях — див. `references/category-map.md` (читай on-demand).

Якщо щось не вписується в одну категорію — обери найбільш релевантну.
Якщо зміна стосується кількох категорій — додай в кожну.

### Step 3: Оновити файли категорій

Для кожної зміненої категорії:

1. Прочитай поточний файл
2. **Перевір на дублікати** — перед додаванням шукай запис з тим самим ідентифікатором + версією. Якщо знайшов — пропусти
3. Додай нові записи в **кінець відповідного підрозділу** (не в кінець файлу)
4. Формат: `| `identifier` | Опис українською | X.Y.Z |`
5. При депрекації: ~~закреслення~~ або `[ЗАСТАРІЛО]` замість видалення
6. Сортуй по версії (нові внизу)

Формат таблиць та приклади — див. `references/file-formats.md` (читай on-demand).

### Step 4: Валідація

Після оновлення всіх файлів, пройдися по списку фічей з release notes:
- Кожна згадана фіча повинна мати відповідний запис у KB
- Якщо щось загубилося — додай
- Якщо Windows-фіга — перевір що є запис і в windows.md і в основній категорії

### Step 5: Створити снапшот релізу

Файл `docs/kb/releases/YYYY-MM-DD_vX.Y.Z.md`:
```markdown
# Реліз X.Y.Z — YYYY-MM-DD
## Нові можливості
## Виправлення
## Важливі зміни
```

Якщо оброблено кілька версій — окремий файл на кожну.

### Step 6: Оновити meta.md та index.md

- `meta.md`: оновити `last_processed`, додати запис в Processing History
- `index.md`: оновити лише якщо додали нову категорію

### Step 7: Звіт користувачу

Коротко: які версії оброблено, скільки записів по категоріях, чи є депрекації.

---

## First-Time Setup

Якщо `docs/kb/` не існує:
1. Створи структуру директорій
2. Насідай з `docs/CLAUDE-CODE-OPTIONS-GUIDE.md` (читай guide, розбий по секціях)
3. Створи `meta.md` з `last_processed: "2.1.85"`
4. Створи `index.md` з вказівниками на категорії
5. Нічого не видаляти — всі дані зберігаються

---

## Rules

- **ВСЕ описи — українською** (ідентифікатори як є)
- **Не видаляти записи** — лише додавати або позначати [ЗАСТАРІЛО]
- **Перевіряти дублікати** перед додаванням (ідентифікатор + версія)
- **Валідувати повноту** — кожна фіча з release notes = запис у KB
- **Один запис на рядок/рядок таблиці**
- **Тег версії обов'язковий** — `(X.Y.Z)` у кожному записі
- **Windows записи** → windows.md + основна категорія з тегом [Win]
- **Не читати всі файли одразу** — лише потрібні для поточного оновлення
- **meta.md = джерело істини** для оброблених версій
- **Зберігати стиль форматування** існуючого файлу

## References

- `references/category-map.md` — що куди категоризувати (читай on-demand)
- `references/file-formats.md` — шаблони форматів файлів (читай on-demand)
