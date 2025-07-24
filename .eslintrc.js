// .eslintrc.js
module.exports = {
  root: true, // Указывает, что это корневая конфигурация (не искать выше)
  parser: '@typescript-eslint/parser', // Парсер для TypeScript
  parserOptions: {
    ecmaVersion: 2020, // Позволяет использовать современные возможности JS
    sourceType: 'module', // Используем ECMAScript модули
    ecmaFeatures: {
      jsx: true, // Поддержка JSX
    },
  },
  env: {
    browser: true,
    node: true,
    es2021: true, // Современная среда
  },
  plugins: [
    'react',
    'react-hooks',
    '@typescript-eslint',
    'prettier', // Включаем prettier как плагин
  ],
  extends: [
    'eslint:recommended', // Базовые рекомендации ESLint
    'plugin:react/recommended', // Рекомендации по React
    'plugin:@typescript-eslint/recommended', // TS правила
    'plugin:react-hooks/recommended', // React Hooks правила
    'plugin:prettier/recommended', // Включает eslint-plugin-prettier и конфиг
    'prettier', // Отключает конфликты eslint с prettier
  ],
  rules: {
    'prettier/prettier': 'error', // Ошибка, если код не отформатирован по Prettier
    'react/react-in-jsx-scope': 'off', // Не нужно в Next.js/React 17+
    '@typescript-eslint/no-unused-vars': ['warn', { argsIgnorePattern: '^_' }],
    'no-console': 'warn', // Предупреждение при использовании console.log
    'react/prop-types': 'off', // Не нужен, если используем TypeScript
  },
  settings: {
    react: {
      version: 'detect', // Автоматически определяет текущую версию React
    },
  },
};
