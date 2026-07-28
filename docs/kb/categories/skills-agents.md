# Навички, Агенти та Команди

> Архів (notes до 2.1.207): [archived/skills-agents_v2.1.207.md](archived/skills-agents_v2.1.207.md)
> Тут — notes починаючи з версії 2.1.208

## Навички (Skills) (2.1.210)

| Можливість | Опис | Версія |
|-----------|------|--------|
| ultracode non-human input fix | Ключове слово ultracode opt-in більше не спрацьовує на не-людсьому вводі (webhook payloads, ретрансльовані PR коментарі) | 2.1.210 |
| $1/$2 positional placeholders preserved | Невідповідні позиційні плейсхолдери $1/$2 у skills та командах більше не вилучаються мовчки — зберігаються дослівно | 2.1.210 |
| dataviz skill color validation | Покращено валідацію кольорів графіків у bundled dataviz skill: перцептивна OKLab-різниця та перекалібровані пороги дальтонізму | 2.1.210 |

## Кастомні агенти (2.1.210)

| Можливість | Опис | Версія |
|-----------|------|--------|
| isolation: worktree git-mutating fix | Субагенти isolation: 'worktree' більше не можуть виконати git-мутуючі команди проти основного checkout репозиторію замість власного ізольованого worktree | 2.1.210 |
| ← agents view task tracker fix | Натискання ← для відкриття agents view більше не скидає task tracker при поверненні в сесію | 2.1.210 |
| Agents dashboard pasted images fix | Agents dashboard більше не утримує вставлені зображення з покинутих чернеток відповідей після видалення сесії | 2.1.210 |
| git worktree lock sweep fix | Вбиті background-сесії більше не залишають постійний git worktree lock — періодичний sweep звільняє lock'и чий процес-власник зник | 2.1.210 |
| Agent tool prompt injection hardening | Посилено Agent tool проти непрямої prompt injection через контент який прочитав субагент | 2.1.210 |
| Agents footer waiting count | Footer-підказка agents view показує скільки background-агентів чекають на ваш ввід, з коротким кольоровим акцентом при зміні кількості | 2.1.210 |
| Agent view ← session marked | Сесія з якої натиснули ← лишається візуально позначеною в agent view навіть після переміщення виділення мишею або стрілками | 2.1.210 |
