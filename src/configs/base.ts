import type { FlatConfig } from '@typescript-eslint/utils/ts-eslint';
import js from '@eslint/js';
import eslintComments from 'eslint-plugin-eslint-comments';
import importPlugin from 'eslint-plugin-import';
import eslintPluginUnicorn from 'eslint-plugin-unicorn';
import pluginPromise from 'eslint-plugin-promise';
import pluginNoUnaryPlus from 'eslint-plugin-no-unary-plus';
import simpleImportSort from 'eslint-plugin-simple-import-sort';
import jsdoc from 'eslint-plugin-jsdoc';

export const baseConfig: FlatConfig.Config[] = [
  {
    name: 'bosh/base',
    extends: [
      js.configs.recommended,
      eslintPluginUnicorn.configs.recommended,
      pluginPromise.configs['flat/recommended'],
      importPlugin.flatConfigs.recommended,
      jsdoc.configs['flat/recommended']
    ],
    plugins: {
      'eslint-comments': eslintComments,
      'simple-import-sort': simpleImportSort,
      'no-unary-plus': pluginNoUnaryPlus,
      jsdoc
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

      // Simple import sort with basic configuration
      'simple-import-sort/exports': 'error',
      'simple-import-sort/imports': [
        'error',
        {
          groups: [
            // External packages
            ['^@?\\w'],
            // Internal packages (null imports)
            ['^\\u0000'],
            // Parent imports
            ['^\\.\\.(?!/?$)', '^\\.\\./?$'],
            // Other relative imports
            ['^\\./(?=.*/)(?!/?$)', '^\\.(?!/?$)', '^\\./?$'],
            // Style imports
            ['^.+\\.s?css$']
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
