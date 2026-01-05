import { defineConfig } from 'eslint/config';
import xoTypeScriptSpace from 'eslint-config-xo-typescript';
import jsdoc from 'eslint-plugin-jsdoc';
import tseslint from 'typescript-eslint';

import type { Config } from '../types';

import { baseConfig } from './base';

/**
 * TypeScript specific flat shared config.
 * @type {Config}
 */
export const tsConfig: Config = defineConfig([
  ...baseConfig,
  ...tseslint.configs.strictTypeChecked,
  ...xoTypeScriptSpace,
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
        projectService: true
      }
    },
    rules: {
      // TypeScript specific rules
      '@typescript-eslint/consistent-type-imports': 'error',
      '@typescript-eslint/no-unnecessary-condition': 'error',
      '@typescript-eslint/no-unsafe-member-access': 'off',
      '@typescript-eslint/no-unsafe-assignment': 'off',
      '@typescript-eslint/naming-convention': 'off',

      // Base ESLint rules overridden by typescript-eslint
      'no-undef': 'off',
      'no-unused-vars': 'off'
    }
  }
]);
