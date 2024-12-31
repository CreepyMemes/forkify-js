import js from '@eslint/js';
import globals from 'globals';
import prettier from 'eslint-plugin-prettier/recommended';

export default [
  {
    ignores: ['dist/*'],
  },

  {
    files: ['**/*.{js,mjs,cjs,jsx}'],

    languageOptions: {
      ecmaVersion: 2020,
      globals: {
        ...globals.browser,
        __dirname: true,
      },

      parserOptions: {
        sourceType: 'module',
        ecmaVersion: 'latest',
        ecmaFeatures: { jsx: true },
      },
    },

    rules: {
      ...js.configs.recommended.rules,
      'no-unused-vars': 'warn',
    },
  },

  prettier,
];
