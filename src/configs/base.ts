import js from '@eslint/js';
import { globalIgnores } from 'eslint/config';
import eslintComments from 'eslint-plugin-eslint-comments';
import importPlugin from 'eslint-plugin-import';
import jsdoc from 'eslint-plugin-jsdoc';
import pluginNoUnaryPlus from 'eslint-plugin-no-unary-plus';
import pluginPromise from 'eslint-plugin-promise';
import simpleImportSort from 'eslint-plugin-simple-import-sort';
import eslintPluginUnicorn from 'eslint-plugin-unicorn';
import globals from 'globals';

import type { Config } from '../types';
import { createImportSortRule } from '../utils';

/**
 * List of common ESLint config file names to be globally ignored.
 */
const eslintConfigFileNames = [
  'eslint.config.js',
  'eslint.config.cjs',
  'eslint.config.mjs',
  'eslint.config.ts',
  'eslint.config.cts',
  'eslint.config.mts'
];

/**
 * The base shared flat config for the plugin.
 * Extended by all other configs. Rules defined here should be applied to all projects.
 * @type {Config}
 */
export const baseConfig: Config = [
  js.configs.recommended,
  eslintPluginUnicorn.configs.recommended,
  pluginPromise.configs['flat/recommended'],
  importPlugin.flatConfigs.recommended,
  jsdoc.configs['flat/recommended'],
  globalIgnores([...eslintConfigFileNames], 'ESLint config files'),
  globalIgnores(['dist'], 'Ignore build output'),
  {
    name: 'bosh/base',
    plugins: {
      'eslint-comments': eslintComments,
      'simple-import-sort': simpleImportSort,
      'no-unary-plus': pluginNoUnaryPlus,
      jsdoc
    },
    languageOptions: {
      ecmaVersion: 'latest',
      parserOptions: {
        globals: {
          ...globals.es2026,
          ...globals['shared-node-browser']
        },
        ecmaVersion: 'latest',
        sourceType: 'module'
      }
    },
    rules: {
      // Core JavaScript rules
      'no-eval': 'error',
      'no-implied-eval': 'error',
      'no-restricted-syntax': [
        'error',
        {
          selector: ':matches(ExportAllDeclaration)',
          message: 'Export only the modules you need.'
        }
      ],

      // ESLint comments
      'eslint-comments/require-description': 'error',

      // JSDoc rules
      'jsdoc/require-jsdoc': 'error',

      // Import rules
      // Let TypeScript handle this
      'import/no-unresolved': 'off',

      // Simple import sort with default grouping.
      // Can be overridden in project eslint.config.js
      'simple-import-sort/exports': 'error',
      'simple-import-sort/imports': createImportSortRule(),

      // Unicorn overrides
      'unicorn/import-style': 'off',
      'unicorn/no-lonely-if': 'off',
      'unicorn/no-null': 'off',
      'unicorn/prefer-query-selector': 'off',
      'unicorn/prevent-abbreviations': 'off',

      // I just don't like it
      'no-unary-plus/no-unary-plus': 'error'
    }
  }
];
