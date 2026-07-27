# KB Archiving Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Замінити ротацію KB на кумулятивне архівування: мігрувати стан до 2.1.207 в `archived/` і змінити скіл `release-notes-tracker` для майбутніх архівувань за командою.

**Architecture:** Робочий файл `categories/<cat>.md` тримає notes «активного вікна» (після останнього архіву). Архів `categories/archived/<cat>_v<X>.md` — кумулятив (перше архівування) або приріст (наступні). Міграція: 8 категорій копією робочого (він уже кумулятив), 4 (cli, core, settings, skills-agents) — з об'єднання снапшотів `rotated/` + робочого з дедупом.

**Tech Stack:** Markdown KB, PowerShell (Windows), скіл `release-notes-tracker` (`.claude/skills/release-notes-tracker/SKILL.md`).

## Global Constraints

- Усі описи українською; технічні ідентікатори (`--flag`, `VAR`, `/command`, шляхи) як є.
- Без анґліцизмів (див. `references/anglicisms.md`).
- PowerShell — дефолтний shell (Windows); `Grep`/`Read`/`Write`/`Edit` — через відповідні інструменти.
- Комітити після кожної задачі.
- Не видаляти `docs/kb/` без підтвердження — але міграція замовлена користувачем (spec затверджений), тому дії з видалення `rotated/` і очищення робочих файлів дозволені.
- `last_processed` лишається `2.1.207` (міграція не змінює оброблену версію).

**Специфікація:** `docs/superpowers/specs/2026-07-27-kb-archiving-design.md`

---

### Task 1: Створити `archived/` і мігрувати 8 категорій копією робочого

8 категорій (env-vars, hooks, keybindings, mcp, plugins, sdk, vscode-ide, windows) — робочий файл уже кумулятив, мігрується копією.

**Files:**
- Create: `docs/kb/categories/archived/` (директорія)
- Create: `docs/kb/categories/archived/<cat>_v2.1.207.md` для 8 категорій
- Modify: `docs/kb/categories/<cat>.md` для 8 категорій (очистити до шаблону)

**Шаблон порожнього робочого файлу** (зберегти існуючий `# <заголовок>`, замінити блокquote, видалити всі секції):
```markdown
# <існуючий заголовок категорії>

> Архів (notes до 2.1.207): [archived/<cat>_v2.1.207.md](archived/<cat>_v2.1.207.md)
> Тут — notes починаючи з версії 2.1.208
```

- [ ] **Step 1: Створити директорію archived/**

Run (PowerShell):
```powershell
New-Item -ItemType Directory -Force docs/kb/categories/archived | Out-Null
```
Expected: директорія `docs/kb/categories/archived/` існує.

- [ ] **Step 2: Скопіювати 8 робочих файлів в archived/**

Run (PowerShell):
```powershell
$cats = @('env-vars','hooks','keybindings','mcp','plugins','sdk','vscode-ide','windows')
foreach ($c in $cats) { Copy-Item "docs/kb/categories/$c.md" "docs/kb/categories/archived/${c}_v2.1.207.md" }
Get-ChildItem docs/kb/categories/archived/*.md | Select-Object Name
```
Expected: 8 файлів `<cat>_v2.1.207.md`.

- [ ] **Step 3: Перевірити копії мають записи**

Run:
```
Grep(pattern="^## ", path="docs/kb/categories/archived/windows_v2.1.207.md", output_mode="content")
```
Expected: ті ж секції що в робочому `windows.md` (тематичні: Встановлення та запуск, ..., Інше Windows-специфічне).

- [ ] **Step 4: Очистити 8 робочих файлів до шаблону**

Для кожної з 8 категорій — `Read` файл (дістати рядок `# <заголовок>`), потім `Write` з шаблоном:
- env-vars.md → заголовок з поточного файлу + блокquote з посиланням `archived/env-vars_v2.1.207.md`
- hooks.md, keybindings.md, mcp.md, plugins.md, sdk.md, vscode-ide.md, windows.md — аналогічно.

Шаблон (підставити `<заголовок>` і `<cat>`):
```markdown
# <заголовок>

> Архів (notes до 2.1.207): [archived/<cat>_v2.1.207.md](archived/<cat>_v2.1.207.md)
> Тут — notes починаючи з версії 2.1.208
```

- [ ] **Step 5: Перевірити робочі файли порожні**

Run:
```
Grep(pattern="^## ", path="docs/kb/categories/env-vars.md", output_mode="content")
```
Expected: 0 збігів (тільки заголовок + блокquote). Повторити для hooks, keybindings, mcp, plugins, sdk, vscode-ide, windows.

- [ ] **Step 6: Commit**

```powershell
git add docs/kb/categories/archived/ docs/kb/categories/env-vars.md docs/kb/categories/hooks.md docs/kb/categories/keybindings.md docs/kb/categories/mcp.md docs/kb/categories/plugins.md docs/kb/categories/sdk.md docs/kb/categories/vscode-ide.md docs/kb/categories/windows.md
git commit -m "Migrate 8 KB categories to archived/ (copy), clear working files"
```

---

### Task 2: Мігрувати cli (об'єднання снапшотів + робочий, дедуп)

Робочий `cli.md` має базові + лише `## CLI (2.1.207)`. Старі версійні (2.1.201…2.1.206) — в `rotated/cli_v2.1.202/203/205/206/207.md`. Треба зібрати кумулятив.

**Files:**
- Create: `docs/kb/categories/archived/cli_v2.1.207.md` (кумулятив: базові + версійні 2.1.201…2.1.207)
- Modify: `docs/kb/categories/cli.md` (очистити до шаблону)
- Read (джерела): `docs/kb/categories/cli.md`, `docs/kb/categories/rotated/cli_v2.1.202.md`, `rotated/cli_v2.1.203.md`, `rotated/cli_v2.1.205.md`, `rotated/cli_v2.1.206.md`, `rotated/cli_v2.1.207.md`

**Метод:** базові секції (Основні команди, Запуск та аутентифікація, Команди управління) взяти з робочого `cli.md` (найактуальніші). Версійні секції `## CLI (X.Y.Z)` зібрати з усіх джерел, дедуплікувати по версії (при конфлікті — найновіший снапшот), відсортувати за версією.

- [ ] **Step 1: Зібрати карту секцій з усіх джерел**

Run (для кожного джерела):
```
Grep(pattern="^## ", path="docs/kb/categories/cli.md", output_mode="content", -n=true)
Grep(pattern="^## ", path="docs/kb/categories/rotated/cli_v2.1.202.md", output_mode="content", -n=true)
Grep(pattern="^## ", path="docs/kb/categories/rotated/cli_v2.1.203.md", output_mode="content", -n=true)
Grep(pattern="^## ", path="docs/kb/categories/rotated/cli_v2.1.205.md", output_mode="content", -n=true)
Grep(pattern="^## ", path="docs/kb/categories/rotated/cli_v2.1.206.md", output_mode="content", -n=true)
Grep(pattern="^## ", path="docs/kb/categories/rotated/cli_v2.1.207.md", output_mode="content", -n=true)
```
Expected: списки секцій з номерами рядків для кожного джерела. Визначити діапазони рядків базових секцій (з робочого) та кожної версійної секції (з джерела, де вона найновіша).

- [ ] **Step 2: Прочитати базові секції з робочого cli.md**

`Read` робочого `cli.md` діапазоном від рядка після блокquote до початку `## CLI (2.1.207)` — це базові секції (Основні команди, Запуск та аутентифікація, Команди управління).

- [ ] **Step 3: Прочитати версійні секції з снапшотів**

Для кожної версійної секції `## CLI (X.Y.Z)` (крім 2.1.207, що в робочому) — `Read` відповідного снапшота діапазоном секції. Джерела:
- 2.1.201, 2.1.202 → `rotated/cli_v2.1.202.md`
- 2.1.203 → `rotated/cli_v2.1.203.md`
- 2.1.205 → `rotated/cli_v2.1.205.md` (2.1.204 відсутній — 0 записів, internal infra)
- 2.1.206 → `rotated/cli_v2.1.206.md`
- 2.1.207 → робочий `cli.md`

Дедуп: якщо секція є в кількох снапшотах (напр. 2.1.202 в v2.1.202 і v2.1.203) — взяти з найновішого.

- [ ] **Step 4: Скласти кумулятив і записати archived/cli_v2.1.207.md**

`Write` файлу:
```markdown
# CLI команди та прапорці

> Кумулятивний архів: notes до версії 2.1.207 включно.

<базові секції з кроку 2>

<версійні секції 2.1.201, 2.1.202, 2.1.203, 2.1.205, 2.1.206, 2.1.207 — з кроку 3, відсортовані>
```

- [ ] **Step 5: Перевірити кумулятив містить старі і нові версії**

Run:
```
Grep(pattern="2\.1\.201", path="docs/kb/categories/archived/cli_v2.1.207.md", output_mode="count")
Grep(pattern="2\.1\.207", path="docs/kb/categories/archived/cli_v2.1.207.md", output_mode="count")
```
Expected: обидва ≥1 (кумулятив має і найдавніші, і найновіші записи).

- [ ] **Step 6: Очистити робочий cli.md до шаблону**

`Write`:
```markdown
# CLI команди та прапорці

> Архів (notes до 2.1.207): [archived/cli_v2.1.207.md](archived/cli_v2.1.207.md)
> Тут — notes починаючи з версії 2.1.208
```

- [ ] **Step 7: Перевірити робочий порожній**

Run:
```
Grep(pattern="^## ", path="docs/kb/categories/cli.md", output_mode="content")
```
Expected: 0 збігів.

- [ ] **Step 8: Commit**

```powershell
git add docs/kb/categories/archived/cli_v2.1.207.md docs/kb/categories/cli.md
git commit -m "Migrate cli to archived/ (cumulative), clear working file"
```

---

### Task 3: Мігрувати core (об'єднання)

Робочий `core.md` має базові + версійні 2.1.202…2.1.207 (не очищався після ротації v2.1.202). `rotated/core_v2.1.202.md` має 2.1.201 (+ 2.1.202 дубль). Треба додати 2.1.201 з снапшота.

**Files:**
- Create: `docs/kb/categories/archived/core_v2.1.207.md`
- Modify: `docs/kb/categories/core.md`
- Read: `docs/kb/categories/core.md`, `docs/kb/categories/rotated/core_v2.1.202.md`

**Метод:** базові з робочого. Версійні: робочий має 2.1.202…2.1.207; снапшот `core_v2.1.202.md` має 2.1.201 (+ дубль 2.1.202 — взяти з робочого). Скласти кумулятив 2.1.201…2.1.207.

- [ ] **Step 1: Карта секцій робочого і снапшота**

```
Grep(pattern="^## ", path="docs/kb/categories/core.md", output_mode="content", -n=true)
Grep(pattern="^## ", path="docs/kb/categories/rotated/core_v2.1.202.md", output_mode="content", -n=true)
```
Expected: визначити де в снапшоті секція 2.1.201 (відсутня в робочому).

- [ ] **Step 2: Прочитати базові + версійні 2.1.202…2.1.207 з робочого core.md**

`Read` робочого повністю (файл ~145 рядків).

- [ ] **Step 3: Прочитати версійну 2.1.201 з снапшота**

`Read` `rotated/core_v2.1.202.md` діапазоном секції `## ... (2.1.201)`.

- [ ] **Step 4: Скласти кумулятив і записати archived/core_v2.1.207.md**

`Write`:
```markdown
# Основні можливості

> Кумулятивний архів: notes до версії 2.1.207 включно.

<базові секції з робочого>

<версійна 2.1.201 з снапшота>

<версійні 2.1.202…2.1.207 з робочого, відсортовані>
```
(Заголовок `# Основні можливості` — взяти з робочого core.md.)

- [ ] **Step 5: Перевірити кумулятив**

```
Grep(pattern="2\.1\.201", path="docs/kb/categories/archived/core_v2.1.207.md", output_mode="count")
Grep(pattern="2\.1\.207", path="docs/kb/categories/archived/core_v2.1.207.md", output_mode="count")
```
Expected: обидва ≥1.

- [ ] **Step 6: Очистити робочий core.md до шаблону**

`Write`:
```markdown
# Основні можливості

> Архів (notes до 2.1.207): [archived/core_v2.1.207.md](archived/core_v2.1.207.md)
> Тут — notes починаючи з версії 2.1.208
```

- [ ] **Step 7: Перевірити і commit**

```
Grep(pattern="^## ", path="docs/kb/categories/core.md", output_mode="content")  # Expected: 0
```
```powershell
git add docs/kb/categories/archived/core_v2.1.207.md docs/kb/categories/core.md
git commit -m "Migrate core to archived/ (cumulative), clear working file"
```

---

### Task 4: Мігрувати settings (об'єднання)

Робочий `settings.md` має базові + версійні 2.1.202, 2.1.203, 2.1.207 (не очищався після ротації v2.1.202). `rotated/settings_v2.1.202.md` має 2.1.201 (+ дубль 2.1.202).

**Files:**
- Create: `docs/kb/categories/archived/settings_v2.1.207.md`
- Modify: `docs/kb/categories/settings.md`
- Read: `docs/kb/categories/settings.md`, `docs/kb/categories/rotated/settings_v2.1.202.md`

**Метод:** аналогічно core. Базові з робочого; версійна 2.1.201 з снапшота; версійні 2.1.202/203/207 з робочого.

- [ ] **Step 1: Карта секцій**

```
Grep(pattern="^## ", path="docs/kb/categories/settings.md", output_mode="content", -n=true)
Grep(pattern="^## ", path="docs/kb/categories/rotated/settings_v2.1.202.md", output_mode="content", -n=true)
```

- [ ] **Step 2: Прочитати робочий settings.md повністю**

`Read` (файл ~189 рядків).

- [ ] **Step 3: Прочитати версійну 2.1.201 з снапшота**

`Read` `rotated/settings_v2.1.202.md` діапазоном секції 2.1.201.

- [ ] **Step 4: Скласти кумулятив archived/settings_v2.1.207.md**

`Write` (заголовок з робочого):
```markdown
# <заголовок settings.md>

> Кумулятивний архів: notes до версії 2.1.207 включно.

<базові секції з робочого>

<версійна 2.1.201 з снапшота>

<версійні 2.1.202, 2.1.203, 2.1.207 з робочого, відсортовані>
```

- [ ] **Step 5: Перевірити кумулятив**

```
Grep(pattern="2\.1\.201", path="docs/kb/categories/archived/settings_v2.1.207.md", output_mode="count")  # ≥1
Grep(pattern="2\.1\.207", path="docs/kb/categories/archived/settings_v2.1.207.md", output_mode="count")  # ≥1
```

- [ ] **Step 6: Очистити робочий settings.md до шаблону**

`Write`:
```markdown
# <заголовок settings.md>

> Архів (notes до 2.1.207): [archived/settings_v2.1.207.md](archived/settings_v2.1.207.md)
> Тут — notes починаючи з версії 2.1.208
```

- [ ] **Step 7: Перевірити і commit**

```
Grep(pattern="^## ", path="docs/kb/categories/settings.md", output_mode="content")  # 0
```
```powershell
git add docs/kb/categories/archived/settings_v2.1.207.md docs/kb/categories/settings.md
git commit -m "Migrate settings to archived/ (cumulative), clear working file"
```

---

### Task 5: Мігрувати skills-agents (об'єднання)

Робочий `skills-agents.md` має базові + лише `## Навички та Агенти (2.1.207)`. Старі версійні — в `rotated/skills-agents_v2.1.202/205/207.md`.

**Files:**
- Create: `docs/kb/categories/archived/skills-agents_v2.1.207.md`
- Modify: `docs/kb/categories/skills-agents.md`
- Read: `docs/kb/categories/skills-agents.md`, `rotated/skills-agents_v2.1.202.md`, `rotated/skills-agents_v2.1.205.md`, `rotated/skills-agents_v2.1.207.md`

**Метод:** аналогічно cli. Базові з робочого; версійні зібрати з снапшотів (2.1.201/202 з v2.1.202, проміжні з v2.1.205, 2.1.206 з v2.1.207, 2.1.207 з робочого), дедуп, відсортувати.

- [ ] **Step 1: Карта секцій усіх джерел**

```
Grep(pattern="^## ", path="docs/kb/categories/skills-agents.md", output_mode="content", -n=true)
Grep(pattern="^## ", path="docs/kb/categories/rotated/skills-agents_v2.1.202.md", output_mode="content", -n=true)
Grep(pattern="^## ", path="docs/kb/categories/rotated/skills-agents_v2.1.205.md", output_mode="content", -n=true)
Grep(pattern="^## ", path="docs/kb/categories/rotated/skills-agents_v2.1.207.md", output_mode="content", -n=true)
```

- [ ] **Step 2: Прочитати базові секції з робочого**

`Read` робочого до початку `## Навички та Агенти (2.1.207)`.

- [ ] **Step 3: Прочитати версійні секції з снапшотів**

Для кожної версійної `## Навички та Агенти (X.Y.Z)` (крім 2.1.207) — `Read` з відповідного снапшота (найновішого, де є). 2.1.207 — з робочого.

- [ ] **Step 4: Скласти кумулятив archived/skills-agents_v2.1.207.md**

`Write` (заголовок `# Навички, Агенти та Команди` з робочого):
```markdown
# Навички, Агенти та Команди

> Кумулятивний архів: notes до версії 2.1.207 включно.

<базові секції>

<версійні секції, відсортовані за версією>
```

- [ ] **Step 5: Перевірити кумулятив**

```
Grep(pattern="2\.1\.201", path="docs/kb/categories/archived/skills-agents_v2.1.207.md", output_mode="count")  # ≥1
Grep(pattern="2\.1\.207", path="docs/kb/categories/archived/skills-agents_v2.1.207.md", output_mode="count")  # ≥1
```

- [ ] **Step 6: Очистити робочий skills-agents.md до шаблону**

`Write`:
```markdown
# Навички, Агенти та Команди

> Архів (notes до 2.1.207): [archived/skills-agents_v2.1.207.md](archived/skills-agents_v2.1.207.md)
> Тут — notes починаючи з версії 2.1.208
```

- [ ] **Step 7: Перевірити і commit**

```
Grep(pattern="^## ", path="docs/kb/categories/skills-agents.md", output_mode="content")  # 0
```
```powershell
git add docs/kb/categories/archived/skills-agents_v2.1.207.md docs/kb/categories/skills-agents.md
git commit -m "Migrate skills-agents to archived/ (cumulative), clear working file"
```

---

### Task 6: Видалити папку rotated/

Після міграції всіх 12 категорій снапшоти більше не потрібні (кумулятиви в `archived/`).

**Files:**
- Delete: `docs/kb/categories/rotated/` (13 файлів снапшотів)

- [ ] **Step 1: Перевірити міграція завершена (12 archived файлів)**

Run (PowerShell):
```powershell
Get-ChildItem docs/kb/categories/archived/*.md | Measure-Object | Select-Object Count
```
Expected: 12.

- [ ] **Step 2: Видалити rotated/**

Run (PowerShell):
```powershell
Remove-Item -Recurse -Force docs/kb/categories/rotated
Test-Path docs/kb/categories/rotated
```
Expected: `False`.

- [ ] **Step 3: Commit**

```powershell
git add -A docs/kb/categories/rotated
git commit -m "Remove rotated/ snapshots — superseded by archived/ cumulatives"
```

---

### Task 7: Оновити meta.md

Прибрати `## File Rotation`, додати `## Архівування`.

**Files:**
- Modify: `docs/kb/meta.md`

- [ ] **Step 1: Прочитати поточну секцію File Rotation**

`Read` `docs/kb/meta.md` рядки 6–14 (секція `## File Rotation`).

- [ ] **Step 2: Замінити File Rotation на Архівування**

`Edit`: замінити блок `## File Rotation` + таблицю на:
```markdown
## Архівування

| Категорія | Останній архів | Файл архіву |
|-----------|----------------|-------------|
| core | v2.1.207 | archived/core_v2.1.207.md |
| cli | v2.1.207 | archived/cli_v2.1.207.md |
| settings | v2.1.207 | archived/settings_v2.1.207.md |
| skills-agents | v2.1.207 | archived/skills-agents_v2.1.207.md |
| windows | v2.1.207 | archived/windows_v2.1.207.md |
| env-vars | v2.1.207 | archived/env-vars_v2.1.207.md |
| hooks | v2.1.207 | archived/hooks_v2.1.207.md |
| keybindings | v2.1.207 | archived/keybindings_v2.1.207.md |
| mcp | v2.1.207 | archived/mcp_v2.1.207.md |
| plugins | v2.1.207 | archived/plugins_v2.1.207.md |
| sdk | v2.1.207 | archived/sdk_v2.1.207.md |
| vscode-ide | v2.1.207 | archived/vscode-ide_v2.1.207.md |
```

- [ ] **Step 3: Перевірити**

```
Grep(pattern="File Rotation|rotated", path="docs/kb/meta.md", output_mode="content")  # 0
Grep(pattern="## Архівування", path="docs/kb/meta.md", output_mode="content")  # 1
```

- [ ] **Step 4: Commit**

```powershell
git add docs/kb/meta.md
git commit -m "Replace File Rotation with Архівування in meta.md"
```

---

### Task 8: Оновити index.md

Оновити шапку/опис, згадати `archived/`.

**Files:**
- Modify: `docs/kb/index.md`

- [ ] **Step 1: Прочитати index.md**

`Read` `docs/kb/index.md`.

- [ ] **Step 2: Оновити шапку і опис**

`Edit`: оновити рядок шапки (додати згадку архіву) і при потребі опис категорій. Наприклад, після блоку `> Читайте файли категорій за потребою...` додати:
```markdown
> Історичні notes (до останнього архівування) — у `categories/archived/<cat>_v<X>.md`. Пошук по всій історії: `Grep(pattern, path="docs/kb/categories/")`.
```

- [ ] **Step 3: Перевірити і commit**

```
Grep(pattern="archived", path="docs/kb/index.md", output_mode="content")  # ≥1
```
```powershell
git add docs/kb/index.md
git commit -m "Mention archived/ in index.md"
```

---

### Task 9: Змінити скіл release-notes-tracker

Прибрати Step 6.5 (ротація) + поріг 200 + згадки `rotated/`; додати секцію «Архівування» з командою; оновити Rules та посилання.

**Files:**
- Modify: `.claude/skills/release-notes-tracker/SKILL.md`

- [ ] **Step 1: Прочитати SKILL.md**

`Read` `.claude/skills/release-notes-tracker/SKILL.md` повністю.

- [ ] **Step 2: Прибрати Step 6.5 (ротація)**

`Edit`: видалити весь блок `### Step 6.5: Ротація файлів категорій (якщо потрібно)` з підпунктами 6.5.

- [ ] **Step 3: Оновити Step 6 — прибрати згадку ротації**

`Edit`: у `### Step 6: Оновити meta.md та index.md` прибрати рядок про перевірку ротації, лишити лише оновлення `last_processed`/`last_updated`/Processing History і заголовок index.md.

- [ ] **Step 4: Додати секцію «Архівування»**

`Edit`: після `### Step 8: Резюме нового функціоналу` (або перед `## First-Time Setup`) додати нову секцію:
```markdown
### Step 9: Архівування (лише за командою користувача)

⚠️ Архівування НЕ запускається автоматично під час обробки релізу. Лише коли користувач дає команду `заархівуй <категорію|все> до <версії>`.

Для кожної вказаної категорії (або всіх 12 при `все`):
1. Зібрати з робочого `categories/<cat>.md` всі notes ≤ X (базові з `—` трактувати як найстаріші).
2. Перше архівування категорії (відсутній `archived/<cat>_v*.md`): створити `archived/<cat>_vX.md` = кумулятив (заголовок + блокquote + базові секції + всі версійні ≤ X, відсортовані за версією).
3. Наступне (останній `archived/<cat>_v<prev>.md` існує): створити `archived/<cat>_vX.md` = приріст (заголовок + блокquote + версійні prev+1…X).
4. Очистити робочий `categories/<cat>.md` до шаблону:
   ```markdown
   # <заголовок категорії>

   > Архів (notes до X): [archived/<cat>_vX.md](archived/<cat>_vX.md)
   > Тут — notes починаючи з версії X+1
   ```
5. Оновити `meta.md`: рядок категорії в `## Архівування` → `vX`, `archived/<cat>_vX.md`.

Пошук по всій історії: `Grep(pattern, path="docs/kb/categories/")` шукає по робочих + `archived/`.
```

- [ ] **Step 5: Оновити Rules**

`Edit`: у `## Rules` прибрати правила про ротацію («Ротация файлів», «Пошук в rotated/») і додати:
```markdown
- **Архівування** — лише за командою користувача `заархівуй ... до <версії>`, не автоматично. Поріг рядків відсутній.
- **Пошук в архіві** — `Grep(pattern, path="docs/kb/categories/")` шукає в усіх піддиректоріях, включаючи `archived/`.
```

- [ ] **Step 6: Оновити посилання rotated/ → archived/ у вступі**

`Edit`: у вступних зауваженнях скіла замінити згадки `categories/rotated/` та «Архівні версії файлів лежать у `categories/rotated/`» на `categories/archived/` з описом кумулятивного архіву.

- [ ] **Step 7: Перевірити — немає згадок rotated/ та є archived/**

```
Grep(pattern="rotated", path=".claude/skills/release-notes-tracker/SKILL.md", output_mode="content")  # 0
Grep(pattern="Архівування|archived", path=".claude/skills/release-notes-tracker/SKILL.md", output_mode="content")  # ≥1
Grep(pattern="Step 6.5|200 рядків", path=".claude/skills/release-notes-tracker/SKILL.md", output_mode="content")  # 0
```

- [ ] **Step 8: Commit**

```powershell
git add .claude/skills/release-notes-tracker/SKILL.md
git commit -m "Replace rotation with on-demand archiving in release-notes-tracker skill"
```

---

### Task 10: Фінальна перевірка і коміт spec-виправлення

- [ ] **Step 1: Перевірити структуру**

Run (PowerShell):
```powershell
Write-Host "archived/:"; Get-ChildItem docs/kb/categories/archived/*.md | Select-Object Name
Write-Host "rotated/ exists:"; Test-Path docs/kb/categories/rotated
Write-Host "working files line counts:"; Get-ChildItem docs/kb/categories/*.md | ForEach-Object { "{0,-18} {1,3}" -f $_.Name, ((Get-Content $_.FullName | Measure-Object -Line).Lines) }
```
Expected: 12 archived файлів; `rotated/` не існує; робочі файли по 3–4 рядки (тільки заголовок + блокquote).

- [ ] **Step 2: Перевірити пошук по історії працює**

```
Grep(pattern="/cd", path="docs/kb/categories/", output_mode="files_with_matches")
```
Expected: збіги в `archived/cli_v2.1.207.md` (бо `/cd` — стара note, тепер в архіві).

- [ ] **Step 3: Закомітити виправлення spec**

```powershell
git add docs/superpowers/specs/2026-07-27-kb-archiving-design.md
git commit -m "Fix spec: windows migrates by copy (working file already cumulative)"
```

- [ ] **Step 4: Звіт користувачу**

Коротко: міграція завершена (12 кумулятивів в `archived/`, робочі файли порожні, `rotated/` видалено), скіл оновлено (ротація → архівування за командою), meta.md/index.md оновлено.
