import js from '@eslint/js';
import eslintComments from 'eslint-plugin-eslint-comments';
import importPlugin from 'eslint-plugin-import';
import jsdoc from 'eslint-plugin-jsdoc';
import pluginNoUnaryPlus from 'eslint-plugin-no-unary-plus';
import pluginPromise from 'eslint-plugin-promise';
import simpleImportSort from 'eslint-plugin-simple-import-sort';
import eslintPluginUnicorn from 'eslint-plugin-unicorn';
import globals from 'globals';

import type { Config } from '../types';

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
      'jsdoc/require-jsdoc': 'off',

      // Import rules
      'import/no-unresolved': 'off', // Let TypeScript handle this

      // Simple import sort with basic grouping. Can be overridden in project eslint.config.js
      'simple-import-sort/exports': 'error',
      'simple-import-sort/imports': [
        'error',
        {
          groups: [
            // External packages
            [String.raw`^@?\w`],
            // Internal packages (null imports)
            [String.raw`^\u0000`],
            // Parent imports
            [String.raw`^\.\.(?!/?$)`, String.raw`^\.\./?$`],
            // Other relative imports
            [String.raw`^\./(?=.*/)(?!/?$)`, String.raw`^\.(?!/?$)`, String.raw`^\./?$`],
            // Style imports
            [String.raw`^.+\.s?css$`]
          ]
        }
      ],

      // Unicorn overrides
      'unicorn/import-style': 'off',
      'unicorn/no-lonely-if': 'off',
      'unicorn/no-null': 'off',
      'unicorn/prefer-query-selector': 'off',
      'unicorn/prevent-abbreviations': 'off',

      // Custom rules
      'no-unary-plus/no-unary-plus': 'error'
    }
  }
];
