import type { FlatConfig } from '@typescript-eslint/utils/ts-eslint';
import { baseConfig } from './configs/base';
import { tsConfig } from './configs/typescript';
import { reactConfig } from './configs/react';
import { nodeConfig } from './configs/node';

export interface BoshPlugin {
  configs: {
    base: FlatConfig.Config[];
    ts: FlatConfig.Config[];
    react: FlatConfig.Config[];
    node: FlatConfig.Config[];
  };
}

const plugin: BoshPlugin = {
  configs: {
    base: baseConfig,
    ts: tsConfig,
    react: reactConfig,
    node: nodeConfig,
  },
};

export default plugin;
