# eslint-plugin-bosh

Modern ESLint configurations for TypeScript and React projects using ESLint 9 flat config.

## `// TODO:`
- JS config
- JS Flow config?
- Jest/Vitest/testing config?
- more rules

## Installation

```bash
npm install eslint-plugin-bosh --save-dev
```

## Usage

```js
// eslint.config.js
import bosh from "eslint-plugin-bosh"

export default [
  ...bosh.configs.base, // Core JS/TS rules
  ...bosh.configs.ts, // TypeScript rules
  ...bosh.configs.react, // React + JSX rules
  ...bosh.configs.node, // Node.js globals
]
```

### Custom Import Sorting

```js
import bosh from "eslint-plugin-bosh"
import { createImportSortRule } from "eslint-plugin-bosh/utils"

export default [
  ...bosh.configs.base,
  ...bosh.configs.ts,
  ...bosh.configs.react,
  {
    rules: {
      "bosh/invalid-hook-extension": "error",
      "simple-import-sort/imports": createImportSortRule({
        firstGroup: ["react", "^@?\\w"],
        internalGroups: [
          "^(@/components)(/.*|$)",
          "^(@/hooks)(/.*|$)",
          "^(@/lib)(/.*|$)",
        ],
      }),
    },
  },
]
```

## Configs

- `base` - Core JavaScript rules, import sorting, unicorn, sonarjs
- `ts` - TypeScript-specific rules
- `react` - React, JSX, accessibility, performance rules
- `node` - Node.js environment globals

## `// TODO:`

- eslint-config-canonical has a lot of nice rules, have a look there for inspiration
- [ESLint Stylistic](https://eslint.style/)
- Testing, jest/vitest?
- Prettier, in this repo and in eslint config.
- JSON linting
- YAML linting
