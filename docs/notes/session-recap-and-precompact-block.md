# Session Recap та PreCompact Block — детальний огляд

> Зібрано з офіційної документації (https://code.claude.com/docs/en/hooks) та реліз-нот (v2.1.105–v2.1.110).
> Створено: 2026-04-16

---

## 1. Session Recap

**Що це:** автоматичний підсумок сесії, який генерується коли ви повертаєтесь до розмови після перерви. Внутрішня назва — `awaySummary`.

### Як працює

- Коли ви відкриваєте стару/попередню сесію, Claude визначає що ви були "away" і генерує коротке резюме: що робилось, які файли змінювались, які задачі виконувались
- Це **не compact** (compact стискає історію всередині сесії) — recap це окремий слой для швидкого відновлення контексту
- Ручний виклик: `/recap` — в будь-який момент

### Конфігурація

| Метод | Як |
|-------|-----|
| `/config` | Інтерактивний toggle (рекомендований спосіб) |
| `CLAUDE_CODE_ENABLE_AWAY_SUMMARY=0` | Opt-out (вимкнути) |
| `CLAUDE_CODE_ENABLE_AWAY_SUMMARY=1` | Opt-in (примусово увімкнути) |

### Еволюція щодо телеметрії

| Версія | Поведінка |
|--------|-----------|
| **2.1.108** | Recap потребував телеметрію. Для Bedrock/Vertex/Foundry/`DISABLE_TELEMETRY` — тільки через `CLAUDE_CODE_ENABLE_AWAY_SUMMARY=1` |
| **2.1.110** | Recap увімкнено **за замовчуванням для всіх**, включно з вимкненою телеметрією. Opt-out через `/config` або `=0` |

---

## 2. PreCompact hook — блокування компакту

**Що це:** можливість програмно заблокувати стиснення контексту через hook. Раніше compact був автоматичним і неконтрольованим — тепер хук може його зупинити.

### Як працює

`PreCompact` хук запускається **перед** compaction. Отримує на stdin:

```json
{
  "session_id": "abc123",
  "transcript_path": "/path/to/transcript.jsonl",
  "cwd": "/project",
  "hook_event_name": "PreCompact",
  "trigger": "auto",
  "custom_instructions": ""
}
```

- `trigger`: `"auto"` (автоматичний при заповненні контексту) або `"manual"` (користувач викликав `/compact`)
- `custom_instructions`: для `manual` — те що користувач передав у `/compact`, для `auto` — порожній рядок

### Два способи блокування

**Метод A — exit code 2:**

```bash
#!/bin/bash
INPUT=$(cat)
TRIGGER=$(echo "$INPUT" | jq -r '.trigger')

if [ "$TRIGGER" = "auto" ] && [ -f "/tmp/active-build.lock" ]; then
  echo "Compact blocked: build in progress" >&2  # показується користувачу при manual
  exit 2
fi
exit 0
```

**Метод B — JSON з `decision: "block"`:**

```json
{"decision": "block", "reason": "Deploy pipeline running"}
```

### Що відбувається при блокуванні

- **Proactive auto-compact** (до ліміту контексту) — compact пропускається, розмова триває без стиснення
- **Reactive auto-compact** (після помилки API через переповнення) — помилка API спливає, поточний запит **fails**

### Конфігурація в `settings.json`

```json
{
  "hooks": {
    "PreCompact": [
      {
        "matcher": "auto",
        "hooks": [
          {
            "type": "command",
            "command": "bash /path/to/check-before-compact.sh"
          }
        ]
      }
    ]
  }
}
```

Підтримуються `command` та `http` хуки. **Не** підтримуються `prompt` та `agent`.

### Типові use cases

1. **Захист критичних операцій** — не давати забути контекст під час build/deploy
2. **Умовний compact** — дозволяти тільки manual, блокувати auto
3. **Координація** — перевірка зовнішніх систем (lock files, CI статус) перед compact

### Суміжний патерн: `SessionStart` matcher `"compact"`

Замість блокування, можна **докидати контекст** після compact:

```json
{
  "hooks": {
    "SessionStart": [
      {
        "matcher": "compact",
        "hooks": [
          {
            "type": "command",
            "command": "echo 'Reminder: use Bun, run bun test before commit. Sprint: auth refactor.'"
          }
        ]
      }
    ]
  }
}
```

### Суміжний патерн: `PostCompact`

Запускається **після** compaction. Не може блокувати, але отримує `compact_summary`:

```json
{
  "session_id": "abc123",
  "transcript_path": "/path/to/transcript.jsonl",
  "cwd": "/project",
  "hook_event_name": "PostCompact",
  "trigger": "manual",
  "compact_summary": "Summary of the compacted conversation..."
}
```

Можна використовувати для логування або оновлення зовнішнього стану.
