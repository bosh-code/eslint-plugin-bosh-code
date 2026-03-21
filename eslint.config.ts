import { type Linter } from 'eslint';
import { defineConfig, globalIgnores } from 'eslint/config';

import { plugin as bosh } from './packages/plugin/src';

export default defineConfig([
  globalIgnores(['dist/**/*', 'node_modules/**/*', 'packages/**/*', 'examples/**/*']),
  {
    extends: [
      bosh.configs.recommended
    ]
  }
]) as Linter.Config[];
