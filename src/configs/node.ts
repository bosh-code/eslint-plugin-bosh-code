import nodePlugin from 'eslint-plugin-n';
import globals from 'globals';

import type { Config } from '../types/plugin';

import { baseConfig } from './base';

/**
 * Node.js specific flat shared config.
 * @type {Config}
 */
export const nodeConfig: Config = [
  ...baseConfig,
  nodePlugin.configs['flat/recommended-module'],
  {
    name: 'bosh/node',
    languageOptions: {
      globals: {
        ...globals.nodeBuiltin
      }
    },
    rules: {
      // Allow console in Node.js
      'no-console': 'off',

      // eslint-plugin-n rules
      'n/callback-return': 'error',
      'n/exports-style': ['error', 'module.exports'],
      'n/file-extension-in-import': ['error', 'never'],
      'n/no-deprecated-api': 'error',
      'n/no-missing-import': 'off',
      'n/no-unsupported-features/es-syntax': ['error', {
        ignores: []
      }],
      'n/no-unsupported-features/node-builtins': ['error', {
        version: 'latest',
        ignores: []
      }],
      'n/process-exit-as-throw': 'error',
      'n/shebang': 'error'
    }
  }
];
