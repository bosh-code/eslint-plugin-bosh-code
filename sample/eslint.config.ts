import { config as bosh } from '@bosh-code/eslint-plugin';
import { createImportSortRule, EXTERNAL_IMPORTS_GROUP } from '@bosh-code/eslint-plugin/utils';
import { defineConfig, globalIgnores } from 'eslint/config';
import type { Linter } from 'eslint';

export default defineConfig([
    globalIgnores(['./dist']),

    // Base Config
    {
      files: ['**/*'],
      extends: [bosh.configs.base]
    },

    // TypeScript Config
    {
      files: ['**/*.{ts,tsx}'],
      extends: [bosh.configs.ts]
    },

    // React config
    {
      files: ['examples/react-app/**/*.{js,ts,jsx,tsx}'],
      extends: [bosh.configs.react],
      rules: {
        'simple-import-sort/imports': createImportSortRule({
          firstGroup: ['react', ...EXTERNAL_IMPORTS_GROUP],
          internalGroups: [
            '^(@/components)(/.*|$)',
            '^(@/hooks)(/.*|$)'
          ]
        })
      }
    },

    // node config
    {
      files: ['examples/express-app/**/*.{js,ts,jsx,tsx}'],
      extends: [bosh.configs.node],

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
