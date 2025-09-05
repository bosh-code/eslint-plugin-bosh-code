import type { Linter } from 'eslint';
import tseslint from 'typescript-eslint';
import importPlugin from 'eslint-plugin-import';
import jsdoc from 'eslint-plugin-jsdoc';

export const tsConfig: Linter.Config[] = [
  ...tseslint.configs.recommended,
  importPlugin.flatConfigs.typescript,
  jsdoc.configs['flat/recommended'],
  {
    name: 'bosh/typescript',
    files: ['**/*.{ts,tsx}'],
    plugins: {
      jsdoc
    },
    languageOptions: {
      ecmaVersion: 2020
    },
    rules: {
      // TypeScript specific rules
      '@typescript-eslint/consistent-type-imports': 'error',

      // JSDoc rules
      'jsdoc/require-jsdoc': 'off'
    }
  }
];
