import { defineConfig } from 'eslint/config';
import markdown from "@eslint/markdown";
import type { Config } from '../types';

import { baseConfig } from './base';

/**
 * Node.js specific flat shared config.
 * @type {Config}
 */
export const markdownConfig: Config = defineConfig([
  ...baseConfig,
  {
    name: 'bosh/markdown',
    plugins: {
      markdown,
    },
    extends: ["markdown/recommended"],
    rules: {
      "markdown/no-bare-urls": "error",
    },
  },
]);
