import type { FlatConfig } from '@typescript-eslint/utils/ts-eslint';
import type { ESLintUtils } from '@typescript-eslint/utils';
import { baseConfig } from './configs/base';
import { tsConfig } from './configs/typescript';
import { reactConfig } from './configs/react';
import { nodeConfig } from './configs/node';
import { rule as invalidHookExtension } from './rules/invalid-hook-extension';

interface PluginConfig {
  configs: {
    base: FlatConfig.Config[];
    ts: FlatConfig.Config[];
    react: FlatConfig.Config[];
    node: FlatConfig.Config[];
    recommended: FlatConfig.Config[];
  };
  rules: {
    'invalid-hook-extension': ESLintUtils.RuleModule<string, readonly unknown[], unknown, ESLintUtils.RuleListener>;
  };
}

export const config: PluginConfig = {
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

export { createImportSortRule } from './utils';
