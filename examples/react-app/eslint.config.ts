import { plugin as bosh } from '@bosh-code/eslint-plugin';
import { createImportSortRule, EXTERNAL_IMPORTS_GROUP } from '@bosh-code/eslint-plugin/utils';
import { defineConfig, globalIgnores } from 'eslint/config';
import type { Linter } from 'eslint';
import tseslint from 'typescript-eslint';

export default defineConfig([
    globalIgnores(['**/dist/**.*']),
    {
      files: ['**/*.ts'],
      extends: [bosh.configs.recommended]
    },
    {
      files: ['**/*.ts'],
      extends: [bosh.configs.node],
      ignores: ['src/**/*']
    },
    {
      files: ['src/**/*.{ts,tsx}'],
      extends: [
        bosh.configs.react
      ],
      languageOptions: {
        parser: tseslint.parser,
        parserOptions: {
          tsconfigRootDir: import.meta.dirname
        }
      },
      rules: {
        'simple-import-sort/imports': createImportSortRule({
          firstGroup: ['react', ...EXTERNAL_IMPORTS_GROUP],
          internalGroups: [
            '^(@/components)(/.*|$)',
            '^(@/hooks)(/.*|$)'
          ]
        })
      }
    }
  ]
) as Linter.Config[];
