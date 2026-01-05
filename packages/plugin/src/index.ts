import { baseConfig } from './configs/base';
import { nodeConfig } from './configs/node';
import { reactConfig } from './configs/react';
import { tsConfig } from './configs/typescript';
import { yamlConfig } from "./configs/yaml";
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
const plugin: Plugin = {
  configs: {
    base: baseConfig,
    node: nodeConfig,
    react: reactConfig,
    recommended: [
      ...baseConfig,
      ...tsConfig,
      ...yamlConfig
    ],
    ts: tsConfig,
    yaml: yamlConfig
  },
  rules: {
    'invalid-hook-extension': invalidHookExtension
  }
};

export default plugin;
export { plugin };

export { type Plugin } from './types';
