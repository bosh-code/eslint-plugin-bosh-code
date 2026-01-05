import { defineConfig } from 'eslint/config';
import pluginYaml from 'eslint-plugin-yaml';

import type { Config } from '../types';

import { baseConfig } from './base';

/**
 * Node.js specific flat shared config.
 * @type {Config}
 */
export const yamlConfig: Config = defineConfig([
  ...baseConfig,
  pluginYaml.configs.recommended
]);
