import type { FlatConfig } from '@typescript-eslint/utils/ts-eslint';
import type { ESLintUtils } from '@typescript-eslint/utils';
import { baseConfig } from './configs/base';
import { tsConfig } from './configs/typescript';
import { reactConfig } from './configs/react';
import { nodeConfig } from './configs/node';
import { rule as invalidHookExtension } from './rules/invalid-hook-extension';

export interface BoshConfig {
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

export const config: BoshConfig = {
  configs: {
    base: baseConfig,
    ts: tsConfig,
    react: reactConfig,
    node: nodeConfig,
    recommended: [
      ...baseConfig,
      ...tsConfig,
      {
        name: 'bosh/recommended-rules',
        plugins: {
          bosh: {
            rules: {
              'invalid-hook-extension': invalidHookExtension
            }
          }
        },
        rules: {
          'bosh/invalid-hook-extension': 'error'
        }
      }
    ]
  },
  rules: {
    'invalid-hook-extension': invalidHookExtension
  }
};

export * from './utils/import-sort';
