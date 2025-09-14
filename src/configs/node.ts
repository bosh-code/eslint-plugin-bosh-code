import globals from 'globals';
import type { Linter } from 'eslint';
import { baseConfig } from './base';
import nodePlugin from 'eslint-plugin-n';

export const nodeConfig: Linter.Config[] = [
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
      'no-console': 'off' // Allow console in Node.js
    }
  }
];
