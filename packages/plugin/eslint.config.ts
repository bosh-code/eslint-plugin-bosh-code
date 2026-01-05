import js from '@eslint/js';
import { type Linter } from 'eslint';
import { defineConfig } from 'eslint/config';
import eslintPlugin from 'eslint-plugin-eslint-plugin';
import nodePlugin from 'eslint-plugin-n';
import tseslint from 'typescript-eslint';

import { plugin as bosh } from './src';

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
        projectService: {
          allowDefaultProject: ['eslint.config.js', 'commitlint.config.js'],
          defaultProject: './tsconfig.json',
        },
        sourceType: 'module',
        ecmaVersion: 'latest'
      }
    }
  }
]) as Linter.Config[];
