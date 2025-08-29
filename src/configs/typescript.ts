import type { FlatConfig } from '@typescript-eslint/utils/ts-eslint';
import tseslint from 'typescript-eslint';
import importPlugin from 'eslint-plugin-import';

export const tsConfig: FlatConfig.Config[] = [
  {
    name: 'bosh/typescript',
    files: ['**/*.{ts,tsx}'],
    extends: [...tseslint.configs.recommended, ...importPlugin.flatConfigs.typescript],
    languageOptions: {
      ecmaVersion: 2020
    },
    rules: {
      // TypeScript specific rules
      '@typescript-eslint/consistent-type-imports': 'error'
    }
  }
];
