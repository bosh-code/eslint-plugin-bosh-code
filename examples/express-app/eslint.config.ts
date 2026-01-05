import { plugin as bosh } from '@bosh-code/eslint-plugin';
import { createImportSortRule, EXTERNAL_IMPORTS_GROUP } from '@bosh-code/eslint-plugin/utils';
import { defineConfig, globalIgnores } from 'eslint/config';
import type { Linter } from 'eslint';

export default defineConfig([
    globalIgnores([
      '**/dist/**.*',
      '**/tests/**.*',
      '**/*.test.*'
    ]),
    {
      files: [
        '**/*.{ts,mts}'
      ],
      extends: [
        bosh.configs.recommended,
        bosh.configs.node
      ],
      rules: {
        'simple-import-sort/imports': createImportSortRule({
          firstGroup: ['express', ...EXTERNAL_IMPORTS_GROUP],
          internalGroups: [
            '^(@src)(/.*|$)'
          ]
        })
      }
    }
  ]
) as Linter.Config[];
