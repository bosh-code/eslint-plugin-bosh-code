import globals from 'globals';
import type { Linter } from 'eslint';

export const nodeConfig: Linter.Config[] = [
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
