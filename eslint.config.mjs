import typescript from '@typescript-eslint/eslint-plugin';
import playwright from 'eslint-plugin-playwright';
import typescriptParser from '@typescript-eslint/parser';
const { configs: typescriptConfigs } = typescript;

/** @type {import('eslint').Linter.Config[]} */
export default [
  {
    files: ['**/*.ts', '**/*.tsx'],
    plugins: {
      '@typescript-eslint': typescript,
      playwright: playwright,
    },
    languageOptions: {
      parser: typescriptParser,
      parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
      },
    },
    rules: {
      ...typescriptConfigs.recommended.rules,
      ...playwright.configs['flat/recommended'].rules,
      'no-console': 'warn',
    },
  },
  {
    ignores: [
      '.github',
      'node_modules',
      'playwright-report',
      'test-results',
      '.vscode/',
      '.idea',
      '*.json',
      '.DS_Store',
    ],
  },
];
