# Налаштування settings.json

> Розташування: `~/.claude/settings.json` (user), `.claude/settings.json` (project), `.claude/settings.local.json` (local)
> Зміни набувають чинності миттєво (1.0.90)

## Загальні

| Ключ | Опис | Версія |
|------|------|--------|
| `language` | Мова відповідей Claude (напр. "ukrainian", "japanese") | 2.1.0 |
| `theme` | Тема інтерфейсу | — |
| `model` | Модель за замовчуванням | — |
| `verbose` | Детальний вивід | — |
| `showTurnDuration` | Показувати тривалість повороту | 2.1.7 |
| `spinnerVerbs` | Кастомні дієслова спіннера | 2.1.23 |
| `spinnerTipsEnabled` | Підказки в спіннері | 1.0.112 |
| `spinnerTipsOverride` | Кастомні підказки (`{tips: [], excludeDefault: true}`) | 2.1.45 |
| `reduceMotion` | Режим зменшення анімації | 2.1.48 |
| `releaseChannel` | "stable" або "latest" | 2.1.3 |
| `IS_DEMO` | Приховати email/org | 2.1.0 |
| `attribution` | Кастомний текст замість "Co-Authored-By" | 2.0.62 |
| `companyAnnouncements` | Оголошення при старті | 2.0.32 |
| `feedbackSurveyRate` | Частота опитування якості (enterprise) | 2.1.76 |
| `includeGitInstructions` | Показувати git інструкції | 2.1.69 |
| `promptSuggestions` | Підказки промптів | 2.0.71 |
| `forceLoginMethod` | Обійти вибір методу логіну | 1.0.32 |
| `disableAllHooks` | Вимкнути всі хуки | 2.0.30 |
| ~~`disabledTools`~~ | [ЗАСТАРІЛО] → `disallowedTools` | — |
| `autoMemoryDirectory` | Кастомна директорія пам'яті | 2.1.74 |
| `sessionTimeout` | Таймаут автозавершення сесії (мс) | 2.2.3 |

## Дозволи

| Ключ | Опис | Версія |
|------|------|--------|
| `permissions.defaultMode` | Режим за замовчуванням | 0.2.67 |
| `permissions.disableBypassPermissionsMode` | Заблокувати bypass режим | — |
| `permissions.deny` | Правила відмови | — |
| `permissions.allow` | Правила дозволу | — |
| `disallowedTools` | Заблоковані інструменти | 0.2.82 |

## Контекст

| Ключ | Опис | Версія |
|------|------|--------|
| `autoCompact` | Автоматичне стиснення | 0.2.47 |
| `cleanupPeriodDays` | Дні до очищення | 0.2.117 |
| `plansDirectory` | Директорія планів | 2.1.9 |

## MCP

| Ключ | Опис | Версія |
|------|------|--------|
| `enabledPlugins` | Увімкнені плагіни | — |
| `extraKnownMarketplaces` | Додаткові marketplace-джерела | 2.0.12 |
| `allowedMcpServers` | [Managed] Дозволені MCP сервери | 2.0.21 |
| `deniedMcpServers` | [Managed] Заблоковані MCP сервери | 2.1.85 |
| `strictKnownMarketplaces` | Обмеження marketplace (hostPattern, pathPattern) | 2.1.69 |

## Sandbox

| Ключ | Опис | Версія |
|------|------|--------|
| `sandbox.enabled` | Увімкнути sandbox (Linux/Mac) | 2.0.24 |
| `sandbox.failIfUnavailable` | Помилка якщо sandbox недоступний | 2.1.83 |
| `sandbox.allowWrite` | Дозволити запис у `denyRead` зонах | 2.1.77 |
| `sandbox.allowRead` | Дозволити читання у `denyRead` зонах | 2.1.78 |
| `sandbox.excludedCommands` | Команди поза sandbox | 2.0.30 |
| `sandbox.enableWeakerNetworkIsolation` | Слабша network ізоляція (macOS MITM) | 2.1.69 |
| `allowUnsandboxedCommands` | Дозволити команди поза sandbox | 2.0.30 |

## Пошук MCP

| Ключ | Опис | Версія |
|------|------|--------|
| `auto` / `auto:N` | Автоматичне ввімкнення при N% контексту | 2.1.7, 2.1.9 |

## Managed/Enterprise

| Ключ | Опис | Версія |
|------|------|--------|
| `pluginTrustMessage` | Повідомлення довіри плагінів | 2.1.69 |
| `allowedChannelPlugins` | Allowlist канал-плагінів | 2.1.80 |
| `permissions.defaultMode` | Не застосовується в Remote Control | 2.1.70 |
| Statusline модель іншої сесії | Виправлено відображення моделі при кількох інстансах | 2.1.86 |
