# Разработка кодстайла для мини-группы

# 👥 **Участники команды**  
- [Арсений](https://github.com/arseni2)  
- [Денис](https://github.com/denisso)  
- [Александр](https://github.com/komanyak)


# 📦 Инструменты разработки

- 🎨 **UI-дизайн**: предоставляется в [Figma](https://figma.com)
- 📘 **Документирование API (Backend)**: используется [Swagger (OpenAPI)](https://swagger.io/) - используем Swagger (OpenAPI) для описания ручек и их структуры. Документация доступна по адресу, указанному бэкендом.
- 🛠️ **Среда разработки**: рекомендуем [Cursor AI](https://cursor.sh/) или [VS Code](https://code.visualstudio.com/) с поддержкой:
  - [.eslintrc.js](./.eslintrc.js) - помогает соблюдать единые правила кода и предотвращает ошибки ещё до запуска.
  - [.prettierrc.js](./.prettierrc.js) - делает код читаемым и единообразным для всей команды.

- 🚀 **CI/CD сервер**: автоматизированная проверка и доставка кода - CI/CD обеспечивает автоматическую проверку, сборку и доставку кода. При каждом PR запускаются линт, тесты и билд.
  - 📥 Скачивание зависимостей
  - 📏 Линтинг (ESLint, Stylelint) подробнее смотри [.eslintrc.js](./.eslintrc.js)
  - 🎨 Автоформатирование кода (Prettier) одробнее смотри [.prettierrc.js](./.prettierrc.js)
  - 🧪 Запуск unit и интеграционных тестов
  - 🔎 Проверка типов (если используется TypeScript)
  - 📝 Валидация commit-сообщений (Conventional Commits)
  - 🐳 Сборка Docker-образа и выкатка на dev-сервер
- 🖥️ **Dev-сервер**: виртуальная машина для выката предварительных версий - для ручного тестирование до релиза.

---

## 📅 [Планирование и спринты в лёгкой Agile-команде](./docs/planning.md)

---

# 🧑‍💻 Регламент кодинга

## 📋 Автотесты
- На каждую фичу пишутся юнит-тесты и интеграционные тесты на основные продуктовые сценарии.
- Тесты выполняются при создании PR на CI-сервере.

## 📐 Общие правила кодинга

### ✅ Линтинг
- Используем правила:
  - `eslint:recommended`
  - `plugin:@typescript-eslint/recommended`
  - `plugin:react/recommended`
- Подробнее в [.eslintrc.js](./.eslintrc.js) 

### 🧼 Форматирование
- Настраивается через [.prettierrc.js](./.prettierrc.js)
- Основные параметры:
  - Отступ: `2 пробела`
  - Стиль кода: `camelCase`
  - Максимальная длина строки: `80` или `100` символов
  - Одинарные кавычки: `'`

### 💬 Стили комментариев 
Стили комментариев обеспечивают понятное сопровождение кода, помогают в навигации и поддержке:
- `//` — для кратких пояснений
- `/* ... */` — для многострочных и временно закомментированного кода
- `/** ... */` — JSDoc/TSDoc для описания функций, параметров, типов
- `// TODO`, `// FIXME`, `// NOTE` — служебные пометки
> Комментарии должны быть лаконичными, актуальными и не дублировать очевидную логику.

### 🎨 CSS / SCSS
- Методология: **Mobile First** - обеспечивает оптимальный UX на мобильных устройствах, которые часто составляют основную долю трафика. Такой подход позволяет масштабировать интерфейс вверх, а не урезать его под маленькие экраны.
- Используем [CSS Modules](https://github.com/css-modules/css-modules) - для изоляции стилей компонентов
- Возможны utility-классы и переменные для цветов/отступов - ускоряют разработку и обеспечивают единообразие стилей. Переменные позволяют централизованно управлять цветами и отступами, облегчая поддержку и редизайн.

---

# 🏗️ Архитектура проекта

Мы используем подход [Feature-Sliced Design](https://feature-sliced.github.io/documentation/ru/docs/get-started/overview) (FSD) для организации фронтенда.
Основной принцип — деление приложения по фичам и слоям (app, pages, features, entities, shared), что упрощает масштабирование, повторное использование кода и поддержку.

---

# 🐞 Работа с багами и правками
Формализованный процесс обработки багов помогает отслеживать проблемы, искать причины и устранять их прозрачно и документированно. Это важно для качества продукта и командной ответственности.
1. Ошибки оформляются как `bug` в GitHub Issues.
2. В комментариях к ишью обсуждаются причины и возможные решения.
3. Фиксы оформляются в PR с тегом `fix`.
4. PR с багфиксом привязывается к issue.
5. Если требуется отдельный релиз:
   - Создаётся `release issue` (например, `Release v1.0.2`)
   - Фикс PR связывается с этим релизом
   - Issue фиксирует проблему, решение и дату выката

---

# ✅ Когда код считается готовым
Готовность кода определяется прохождением тестов, ручной проверкой и одобрением ревьюеров. Это гарантирует стабильность, читаемость и соответствие требованиям проекта перед выкатом.
- Компонент протестирован вручную на dev-сервере
- Все проверки CI пройдены: lint, test, build
- Открыт Pull Request
- Пройден код-ревью
- CI прошёл успешно
- PR смёржен в `main` или `develop` (в зависимости от Git flow)

---

# 🔄 Пример Git Flow

```mermaid
graph TD
    F[Feature Branch] --> PR[Pull Request]
    PR --> CI[CI-проверки]
    CI --> MR[Merge в main / develop]
    MR --> Rel[Issue для релиза]
    Bug[Issue: Bug] --> FixPR[PR с fix]
    FixPR --> CI
    CI --> MR2[Merge в release-ветку]
    MR2 --> Prod[Выкат в прод]
