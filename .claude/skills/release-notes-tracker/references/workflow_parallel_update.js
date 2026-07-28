export const meta = {
  name: 'kb-parallel-update',
  description: 'Паралельно оновити категорії KB Claude Code для релізу (параметризований шаблон)',
  phases: [{ title: 'Update categories', detail: 'один агент на файл категорії' }],
}

// =============================================================================
// ШАБЛОН для великих релізів під ultracode (10+ категорій, як 2.1.211).
// Для дрібних релізів (1–3 записи) — inline-редагування швидше, цей скрипт оверкіл.
// =============================================================================
//
// ВИКЛИК:
//   Workflow({ scriptPath: '<цей файл>', args: { version, baseDir, categories } })
//
// ФОРМАТ args:
//   {
//     version: "2.1.211",                       // тег версії для нових секцій
//     baseDir: "C:\\...\\docs\\b",              // корінь KB (містить categories/)
//     categories: [
//       {
//         cat: "core",                          // = ім'я файлу без .md
//         sections: [
//           {
//             title: "Інтерактивність",          // назва версійної секції (без версії)
//             rows: [ { id: "ідентифікатор", desc: "опис українською" } ]
//           }
//         ]
//       }
//     ]
//   }
//
// КОНЦЕПЦІЯ:
//   Головний (orchestrator) САМ формує описи українською й перевіряє їх на англіцизми
//   (див. references/anglicisms.md). Агенти НЕ перекладають — лише формують версійні
//   секції `## <title> (<version>)` у КІНЦІ файлу (версійні секції згруповані за версією),
//   перевіряють дублікати (id + version) і повертають structured output.
//
// ЧОМУ buildPrompt() збирає промпт із масиву рядків:
//   Уникнення літеральних backtick у template-literal інструкціях (минулого разу саме
//   це ламало парсер скрипта). Backticks трапляються лише в даних (через ${...}),
//   що безпечно.
// =============================================================================

if (!args || !args.version || !args.baseDir || !Array.isArray(args.categories)) {
  throw new Error('Потрібні args: { version, baseDir, categories }. Див. шапку цього файлу.')
}

const VERSION = args.version
const CAT_DIR = args.baseDir.replace(/[\\/]+$/, '').replace(/\\/g, '/') + '/categories/'

const CATEGORIES = args.categories.map((c) => ({
  cat: c.cat,
  file: CAT_DIR + c.cat + '.md',
  sections: c.sections,
}))

const SCHEMA = {
  type: 'object',
  properties: {
    category: { type: 'string' },
    file: { type: 'string' },
    sectionsAdded: { type: 'number' },
    recordsAdded: { type: 'number' },
    duplicatesSkipped: { type: 'array', items: { type: 'string' } },
    success: { type: 'boolean' },
    notes: { type: 'string' },
  },
  required: ['category', 'recordsAdded', 'success'],
}

function buildPrompt(c) {
  const L = []
  L.push('Ти оновлюєш файл категорії бази знань Claude Code для релізу ' + VERSION + '.')
  L.push('')
  L.push('ФАЙЛ: ' + c.file)
  L.push('')
  L.push('ВАЖЛИВІ ПРАВИЛА:')
  L.push('1. Прочитай файл (Read). Версійні секції ЗГРУПОВАНІ за версією: нові секції завжди додаються в САМИЙ КІНЕЦЬ файлу.')
  L.push('2. ПЕРЕВІР ДУБЛІКАТИ: для кожного id з даних нижче знайди, чи вже є запис з цим id ТА версією ' + VERSION + '. Якщо є — пропусти (запиши в duplicatesSkipped).')
  L.push('3. Для КОЖНОЇ секції з даних нижче створи новий markdown-блок ТОЧНО у форматі, показаному нижче в розділі ФОРМАТ, підставивши значення TITLE, id, desc.')
  L.push('4. Додай усі нові блоки в КІНЕЦЬ файлу (після останнього наявного рядка). Залиш один порожній рядок між блоками та перед першим новим блоком. Забезпеч завершення файлу одним переносом рядка.')
  L.push('5. НЕ змінюй жодного наявного запису. НЕ перекладай описи — вони вже українською. НЕ додавай версійні секції для тематик, яких немає серед даних нижче.')
  L.push('6. Заголовок файлу (рядок що починається з #) та blockquote (рядки що починаються з > Архів) залиш недоторканими на початку.')
  L.push('7. Використай Edit (останній рядок файлу як old_string) або Write. Переконайся, що вставка коректна.')
  L.push('')
  L.push('ФОРМАТ (backticks навколо id — обовʼязкові, як у наявних секціях; TITLE, id, desc — це значення з даних):')
  L.push('## TITLE (' + VERSION + ')')
  L.push('')
  L.push('| Можливість | Опис | Версія |')
  L.push('|-----------|------|--------|')
  L.push('| id | desc | ' + VERSION + ' |')
  L.push('')
  L.push('УКАЗІВКА до формату рядка: перша колонка (Можливість) має містити ТАКЕ САМЕ значення id, яке подано в даних (включно з backticks, якщо вони там є) — не додавай і не прибирай backticks. Друга колонка — значення desc без змін. Третя — ' + VERSION + '.')
  L.push('')
  L.push('ДАНІ ДЛЯ ВСТАВКИ (масив секцій; кожна має title та масив rows з {id, desc}; версія скрізь ' + VERSION + '):')
  L.push(JSON.stringify(c.sections, null, 2))
  L.push('')
  L.push('Після виконання поверни structured output: category, file, sectionsAdded (к-сть доданих секцій), recordsAdded (к-сть доданих рядків), duplicatesSkipped (масив id), success (true якщо вставка виконана), notes (коротко, якщо щось особливе).')
  return L.join('\n')
}

phase('Update categories')

const results = await parallel(CATEGORIES.map((c) => () =>
  agent(buildPrompt(c), { label: 'update:' + c.cat, phase: 'Update categories', schema: SCHEMA })
))

const clean = results.filter(Boolean)
log('Оновлено категорій: ' + clean.length + '/' + CATEGORIES.length)
const totalRecords = clean.reduce((s, r) => s + (r.recordsAdded || 0), 0)
log('Усього додано записів: ' + totalRecords)
clean.forEach((r) => {
  const dup = r.duplicatesSkipped && r.duplicatesSkipped.length ? ' (дублікати пропущено: ' + r.duplicatesSkipped.join(', ') + ')' : ''
  log('  ' + r.category + ': +' + r.recordsAdded + ' записів, ' + r.sectionsAdded + ' секцій' + dup)
})

return {
  updated: clean.map((r) => ({ category: r.category, sections: r.sectionsAdded, records: r.recordsAdded, duplicates: r.duplicatesSkipped || [], success: r.success })),
  totalCategories: clean.length,
  totalRecords,
}
