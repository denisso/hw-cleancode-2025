// .prettierrc.js
/** @type {import("prettier").Config} */
module.exports = {
  printWidth: 100, // Максимальная длина строки
  tabWidth: 2,     // Ширина табуляции
  useTabs: false,  // Использовать пробелы вместо табов
  semi: true,      // Ставить точку с запятой в конце строки
  singleQuote: true, // Использовать одинарные кавычки
  trailingComma: 'es5', // Висячие запятые где возможно (массивы, объекты, параметры функций)
  bracketSpacing: true, // Пробелы внутри скобок { foo: bar }
  jsxBracketSameLine: false, // Закрывающая скобка JSX переносится на новую строку
  arrowParens: 'always', // Всегда ставить скобки вокруг аргументов стрелочных функций
};