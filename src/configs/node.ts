import nodePlugin from 'eslint-plugin-n';
import globals from 'globals';

import type { Config } from '../types';

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
      'no-console': 'off' // Allow console in Node.js
    }
  }
];
