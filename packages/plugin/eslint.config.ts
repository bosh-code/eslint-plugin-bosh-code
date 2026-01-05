import { type Linter } from 'eslint';
import { defineConfig, globalIgnores } from 'eslint/config';
import eslintPlugin from 'eslint-plugin-eslint-plugin';
import tseslint from 'typescript-eslint';

import { plugin as bosh } from './src';

export default defineConfig([
  globalIgnores(['dist/**/*', 'node_modules/**/*']),
  {
    extends: [
      eslintPlugin.configs['all-type-checked'],
      bosh.configs.recommended,
      bosh.configs.node
    ],
    languageOptions: {
      ecmaVersion: 'latest',
      parser: tseslint.parser,
      parserOptions: {
        projectService: {
          defaultProject: './tsconfig.json'
        },
        sourceType: 'module',
        ecmaVersion: 'latest'
      }
    }
  }
]) as Linter.Config[];
