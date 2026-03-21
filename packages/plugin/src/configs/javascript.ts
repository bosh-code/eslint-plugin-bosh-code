import { defineConfig } from 'eslint/config';

import type { Config } from '../types';
import js from '@eslint/js';
import globals from 'globals';

/**
 * TypeScript specific flat shared config.
 * @type {Config}
 */
export const jsConfig: Config = defineConfig([
  {
    name: 'bosh/javascript',
    files: ['**/*.{js,jsx,cjs,mjs}'],
    extends: [
      js.configs.recommended
    ],
    languageOptions: {
      ecmaVersion: 'latest',
      parserOptions: {
        ecmaVersion: 'latest',
        globals: {
          ...globals.es2026,
          ...globals['shared-node-browser']
        },
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
      ]
    }
  }
]);
