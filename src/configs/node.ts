import type { FlatConfig } from '@typescript-eslint/utils/ts-eslint';
import globals from 'globals';

export const nodeConfig: FlatConfig.Config[] = [
  {
    name: 'bosh/node',
    languageOptions: {
      globals: {
        ...globals.node,
      },
    },
    rules: {
      // Node.js specific rules can be added here
      'no-console': 'off', // Allow console in Node.js
    },
  },
];
