import { defineConfig } from 'eslint/config';
import json from '@eslint/json';

import type { Config } from '../types';

import { baseConfig } from './base';

/**
 * Node.js specific flat shared config.
 * @type {Config}
 */
export const jsonConfig: Config = defineConfig([
  ...baseConfig,
  // lint JSON files
  {
    name: 'bosh/json',
    files: ['**/*.json'],
    ignores: [
      'package-lock.json',
      '.vscode/*.json',
      '~/Library/Application Support/Code/User/settings.json',
      '~/Library/Application Support/Code - Insiders/User/settings.json'
    ],
    plugins: {json},
    language: 'json/json',
    extends: ['json/recommended']
  },

  // lint JSONC files
  {
    name: 'bosh/jsonc',
    files: [
      '**/*.jsonc',
      '.vscode/*.json',
      '~/Library/Application Support/Code/User/settings.json',
      '~/Library/Application Support/Code - Insiders/User/settings.json'
    ],
    plugins: {json},
    language: 'json/jsonc',
    extends: ['json/recommended']
  },

  // lint JSON5 files
  {
    name: 'bosh/json5',
    files: ['**/*.json5'],
    plugins: {json},
    language: 'json/json5',
    extends: ['json/recommended']
  }
]);
