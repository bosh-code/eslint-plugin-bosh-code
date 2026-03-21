import { baseConfig as base } from './configs/base';
import { nodeConfig as node } from './configs/node';
import { reactConfig as react } from './configs/react';
import { tsConfig as ts } from './configs/typescript';
import { yamlConfig as yaml } from './configs/yaml';
import { rule as invalidHookExtension } from './rules/invalid-hook-extension';
import type { Config, Plugin } from './types';
import { jsonConfig as json } from './configs/json';
import { markdownConfig as markdown } from './configs/markdown';
import { defineConfig } from 'eslint/config';

const recommended: Config = defineConfig([{
  name: 'bosh/recommended',
  extends: [
    // base,
    json,
    // markdown,
    // ts,
    // yaml
  ]
}]);

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
    recommended,
    base,
    json,
    markdown,
    node,
    react,
    ts,
    yaml
  },
  rules: {
    'invalid-hook-extension': invalidHookExtension
  }
};

export default plugin;
export { plugin };

export { type Plugin } from './types';
