import type { Linter } from 'eslint';
import jsdoc from 'eslint-plugin-jsdoc';
import tseslint from 'typescript-eslint';

import type { Config } from '../types';

import { baseConfig } from './base';

/**
 * Typescript specific flat shared config.
 * @type {Config}
 */
export const tsConfig: Config = [
  ...baseConfig,
  ...tseslint.configs.strictTypeChecked,
  jsdoc.configs['flat/recommended'] as Linter.Config,
  {
    name: 'bosh/typescript',
    files: ['**/*.{ts,tsx}'],
    plugins: {
      jsdoc
    },
    languageOptions: {
      parser: tseslint.parser,
      parserOptions: {
        projectService: true
      }
    },
    rules: {
      // TypeScript specific rules
      '@typescript-eslint/consistent-type-imports': 'error',
      '@typescript-eslint/no-unsafe-member-access': 'off',
      '@typescript-eslint/no-unsafe-assignment': 'off',

      // Base ESLint rules overridden by typescript-eslint
      'no-undef': 'off',
      'no-unused-vars': 'off'
    }
  }
];
