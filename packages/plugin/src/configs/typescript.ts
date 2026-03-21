import { defineConfig } from 'eslint/config';
import xoTypeScriptSpace from 'eslint-config-xo-typescript';
import jsdoc from 'eslint-plugin-jsdoc';
import tseslint from 'typescript-eslint';

import type { Config } from '../types';

import { baseConfig } from './base';
import js from '@eslint/js';
import eslintConfigPrettierFlat from 'eslint-config-prettier/flat';
import eslintPluginUnicorn from 'eslint-plugin-unicorn';
import pluginPromise from 'eslint-plugin-promise';
import love from 'eslint-config-love';
import eslintComments from 'eslint-plugin-eslint-comments';
import pluginNoUnaryPlus from 'eslint-plugin-no-unary-plus';
import simpleImportSort from 'eslint-plugin-simple-import-sort';

/**
 * TypeScript specific flat shared config.
 * @type {Config}
 */
export const tsConfig: Config = defineConfig([
  {
    name: 'bosh/typescript',
    files: ['**/*.{ts,tsx}'],
    extends: [
      baseConfig,
      tseslint.configs.strictTypeChecked,
      xoTypeScriptSpace,
      jsdoc.configs['flat/recommended'],
      js.configs.recommended,
      eslintConfigPrettierFlat,
      eslintPluginUnicorn.configs.recommended,
      pluginPromise.configs['flat/recommended'],
      // importConfigs.recommended,
      jsdoc.configs['flat/recommended'],
      love
    ],
    plugins: {
      'no-unary-plus': pluginNoUnaryPlus,
      'simple-import-sort': simpleImportSort
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
