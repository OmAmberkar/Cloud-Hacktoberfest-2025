import js from '@eslint/js';
import globals from 'globals';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';
import tseslint from 'typescript-eslint';
import prettier from 'eslint-plugin-prettier';
import prettierConfig from 'eslint-config-prettier';
import simpleImportSort from 'eslint-plugin-simple-import-sort';

export default tseslint.config(
  { ignores: ['dist'] },
  {
    // 1. EXTENDS: Merge recommended configs here
    extends: [
      js.configs.recommended,
      ...tseslint.configs.recommended,
      prettierConfig, // Keeps Prettier from fighting ESLint
    ],
    // 2. FILES: Apply these rules only to TS/TSX files
    files: ['**/*.{ts,tsx}'],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
    },
    plugins: {
      'react-hooks': reactHooks,
      'react-refresh': reactRefresh,
      prettier: prettier,
      'simple-import-sort': simpleImportSort,
    },
    rules: {
      // --- React & Refresh Rules ---
      ...reactHooks.configs.recommended.rules,
      'react-refresh/only-export-components': [
        'warn',
        { allowConstantExport: true },
      ],

      // --- Prettier Integration ---
      'prettier/prettier': 'warn', // Shows formatting issues as warnings

      // --- Import Sorting (DevOps Best Practice) ---
      'simple-import-sort/imports': 'error',
      'simple-import-sort/exports': 'error',

      // --- Your Custom Rules (Fixed) ---
      // 'no-unused-vars': 'off', // Disable base rule (conflict with TS)
      '@typescript-eslint/no-unused-vars': 'warn', // Use TS version instead

      camelcase: 'warn',
      curly: 'warn',
      'no-alert': 'error', // Uses string 'error', not console.error
      'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off', // Smart console handling
      'no-empty': 'error',
      'no-empty-function': 'error',
      'no-script-url': 'error',
      'no-undef': 'off', // TS handles this better than ESLint
    },
  }
);
