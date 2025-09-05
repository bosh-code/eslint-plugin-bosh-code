import { defineConfig } from 'eslint/config';

import boshConfig from '@bosh/eslint-config';

export default defineConfig([
    {
      files: ['examples/react-app/**/*.{js,ts,jsx,tsx}'],
      extends: [boshConfig.configs.react]
    }
  ]
);
