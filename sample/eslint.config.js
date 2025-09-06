import { defineConfig } from 'eslint/config';

import { config as bosh, createImportSortRule } from '@bosh/eslint-config';

export default defineConfig([
    {
      files: ['examples/react-app/**/*.{js,ts,jsx,tsx}'],
      extends: [bosh.configs.react],
      rules: {
        'simple-import-sort/imports': createImportSortRule({
          firstGroup: ['react', '^@?\\w'],
          internalGroups: [
            '^(@/components)(/.*|$)',
            '^(@/hooks)(/.*|$)',
            '^(@/lib)(/.*|$)'
          ]
        })
      }
    }
  ]
);
