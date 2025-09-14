import type { Linter } from 'eslint';
import tseslint from 'typescript-eslint';
import importPlugin from 'eslint-plugin-import';
import jsdoc from 'eslint-plugin-jsdoc';

import { baseConfig } from './base';

export const tsConfig: Linter.Config[] = [
  ...baseConfig,
  ...tseslint.configs.strictTypeChecked,
  importPlugin.flatConfigs.typescript,
  jsdoc.configs['flat/recommended'],
  {
    name: 'bosh/typescript',
    files: ['**/*.{ts,tsx}'],
    plugins: {
      jsdoc
    },
    languageOptions: {
      parser: tseslint.parser,
      parserOptions: {
        projectService: true,
      }
    },
    rules: {
      // TypeScript specific rules
      '@typescript-eslint/consistent-type-imports': 'error',

      // JSDoc rules
      'jsdoc/require-jsdoc': 'off'
    }
  }
];
