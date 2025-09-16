import js from '@eslint/js';
import { type Linter } from 'eslint';
import { defineConfig } from 'eslint/config';
import eslintPlugin from 'eslint-plugin-eslint-plugin';
import nodePlugin from 'eslint-plugin-n';
import tseslint from 'typescript-eslint';

import { config as bosh } from './src';

export default defineConfig([
  {
    extends: [
      eslintPlugin.configs['all-type-checked'],
      js.configs.recommended,
      tseslint.configs.recommended,
      nodePlugin.configs['flat/all'],
      bosh.configs.recommended,
      bosh.configs.node
    ],
    files: ['./src/**/*'],
    languageOptions: {
      ecmaVersion: 'latest',
      parser: tseslint.parser,
      parserOptions: {
        projectService: true,
        sourceType: 'module',
        ecmaVersion: 'latest',
        project: ['./tsconfig.json']
      }
    }
  }
]) as Linter.Config[];
