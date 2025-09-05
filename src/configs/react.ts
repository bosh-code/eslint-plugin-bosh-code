import type { Linter } from 'eslint';
import globals from 'globals';
import react from 'eslint-plugin-react';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';
import jsxA11y from 'eslint-plugin-jsx-a11y';
import reactPerf from 'eslint-plugin-react-perf';
import importPlugin from 'eslint-plugin-import';
import pluginQuery from '@tanstack/eslint-plugin-query';
import simpleImportSort from 'eslint-plugin-simple-import-sort';
import { rule as invalidHookExtension } from '../rules/invalid-hook-extension';

export const reactConfig: Linter.Config[] = [
  react.configs.flat.all,
  reactHooks.configs['recommended-latest'],
  reactRefresh.configs.vite,
  importPlugin.flatConfigs.react,
  jsxA11y.flatConfigs.recommended,
  {
    name: 'bosh/react',
    files: ['**/*.{js,ts,jsx,tsx}'],
    languageOptions: {
      globals: globals.browser
    },
    plugins: {
      '@tanstack/query': pluginQuery,
      react,
      'react-perf': reactPerf,
      jsxA11y,
      'simple-import-sort': simpleImportSort,
      bosh: {
        rules: {
          'invalid-hook-extension': invalidHookExtension
        }
      }
    },
    settings: {
      react: {
        version: 'detect' // Auto-detect React version
      }
    },
    rules: {
      // TanStack Query rules
      '@tanstack/query/exhaustive-deps': 'error',
      '@tanstack/query/infinite-query-property-order': 'error',
      '@tanstack/query/no-rest-destructuring': 'error',
      '@tanstack/query/no-unstable-deps': 'error',
      '@tanstack/query/no-void-query-fn': 'error',
      '@tanstack/query/stable-query-client': 'error',

      // Custom bosh rules
      'bosh/invalid-hook-extension': 'error',

      // React performance rules
      'react-perf/jsx-no-jsx-as-prop': 'error',
      'react-perf/jsx-no-new-array-as-prop': 'error',
      'react-perf/jsx-no-new-function-as-prop': 'error',
      'react-perf/jsx-no-new-object-as-prop': 'error',

      // React rules overrides
      'react/destructuring-assignment': 'error',
      'react/forbid-component-props': 'off',
      'react/function-component-definition': [
        'error',
        {
          namedComponents: 'arrow-function',
          unnamedComponents: 'arrow-function'
        }
      ],
      'react/hook-use-state': 'off',
      'react/jsx-filename-extension': 'off',
      'react/jsx-indent': 'off',
      'react/jsx-indent-props': 'off',
      'react/jsx-max-depth': 'off',
      'react/jsx-max-props-per-line': 'off',
      'react/jsx-no-bind': 'warn',
      'react/jsx-no-leaked-render': 'off',
      'react/jsx-no-literals': 'off',
      'react/jsx-one-expression-per-line': 'off',
      'react/jsx-props-no-spreading': 'off',
      'react/jsx-sort-props': 'off',
      'react/jsx-tag-spacing': 'off',
      'react/react-in-jsx-scope': 'off',
      'react/require-default-props': 'off',

      // JSX A11y overrides
      'jsx-a11y/click-events-have-key-events': 'warn',
      'jsx-a11y/no-static-element-interactions': 'warn',

      // Import sort for React projects
      'simple-import-sort/imports': [
        'error',
        {
          groups: [
            // React first, then other external packages
            ['^react', '^@?\\w'],
            // Internal packages (null imports)
            ['^\\u0000'],
            // Parent imports
            ['^\\.\\.(?!/?$)', '^\\.\\./?$'],
            // Other relative imports
            ['^\\./(?=.*/)(?!/?$)', '^\\.(?!/?$)', '^\\./?$'],
            // Style imports
            ['^.+\\.s?css$']
          ]
        }
      ]
    }
  }
];
