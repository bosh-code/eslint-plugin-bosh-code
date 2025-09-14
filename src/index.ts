import { baseConfig } from './configs/base';
import { nodeConfig } from './configs/node';
import { reactConfig } from './configs/react';
import { tsConfig } from './configs/typescript';
import { rule as invalidHookExtension } from './rules/invalid-hook-extension';
import type { Plugin } from './types';

/**
 * Main plugin object.
 * @example Using predefined config
 * // eslint.config.js
 * import { config as bosh } from "@bosh-code/eslint-plugin"
 *
 * export default [
 *   ...bosh.configs.recommended
 * ]
 * @example Using custom rules and settings
 * // eslint.config.js
 * import { config as bosh } from "@bosh-code/eslint-plugin"
 * import { createImportSortRule } from "eslint-plugin-bosh/utils"
 *
 * export default [
 *   ...bosh.configs.react,
 *   {
 *     rules: {
 *       "bosh/invalid-hook-extension": "error",
 *       "simple-import-sort/imports": createImportSortRule({
 *         firstGroup: ["react", "^@?\\w"],
 *         internalGroups: [
 *           "^(@/components)(/.*|$)",
 *           "^(@/hooks)(/.*|$)",
 *           "^(@/lib)(/.*|$)",
 *         ],
 *       }),
 *     },
 *   },
 * ]
 * @type {Plugin}
 */
export const config: Plugin = {
  configs: {
    base: baseConfig,
    ts: tsConfig,
    react: reactConfig,
    node: nodeConfig,
    recommended: [
      ...baseConfig,
      ...tsConfig
    ]
  },
  rules: {
    'invalid-hook-extension': invalidHookExtension
  }
};
