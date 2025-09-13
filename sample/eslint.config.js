import { config as bosh, createImportSortRule } from '@bosh/eslint-config';
import { defineConfig, globalIgnores } from 'eslint/config';

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
          firstGroup: ['react', String.raw`^@?\w`],
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
          firstGroup: ['express', String.raw`^@?\w`],
          internalGroups: [
            '^(@src)(/.*|$)'
          ]
        })
      }
    }
  ]
);
