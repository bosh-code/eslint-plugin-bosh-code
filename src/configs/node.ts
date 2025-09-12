import globals from 'globals';
import type { Linter } from 'eslint';
import { baseConfig } from './base';

export const nodeConfig: Linter.Config[] = [
  ...baseConfig,
  {
    name: 'bosh/node',
    languageOptions: {
      globals: {
        ...globals.node
      }
    },
    rules: {
      'no-console': 'off' // Allow console in Node.js
    }
  }
];
