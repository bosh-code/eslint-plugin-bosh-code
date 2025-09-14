import js from '@eslint/js';
import { type Linter } from 'eslint';
import { defineConfig } from 'eslint/config';
import eslintPlugin from 'eslint-plugin-eslint-plugin';
import nodePlugin from 'eslint-plugin-n';
import tseslint from 'typescript-eslint';

import { config as bosh } from './src';

export default defineConfig([
  {
    files: ['./src/**/*'],
    extends: [
      eslintPlugin.configs.all,
      js.configs.recommended,
      tseslint.configs.recommended,
      nodePlugin.configs['flat/all'],
      bosh.configs.recommended,
      bosh.configs.node
    ],
    languageOptions: {
      ecmaVersion: 'latest',
      parser: tseslint.parser,
      parserOptions: {
        projectService: true,
        sourceType: 'module',
        ecmaVersion: 'latest',
        project: ['./tsconfig.json']
      }
    },
    rules: {
      'import/extensions': 'off',
      'ts/no-unnecessary-condition': 'off',
      'n/no-missing-import': 'off',
      'n/file-extension-in-import': 'off'
    }
  }
]) as Linter.Config[];
