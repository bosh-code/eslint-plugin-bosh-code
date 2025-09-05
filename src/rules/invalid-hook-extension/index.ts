import { ESLintUtils } from '@typescript-eslint/utils';
import { Linter } from 'eslint';
import path from 'node:path';

const createRule = ESLintUtils.RuleCreator(
  (name) => `https://github.com/bosh-code/eslint-plugin-bosh/blob/main/src/rules/${name}/README.md`
);

export const rule = createRule({
  name: 'invalid-hook-extension',
  meta: {
    type: 'problem',
    docs: {
      description: "enforce hooks files to use '.[j|t]s' extension and not '.[j|t]sx'",
      recommended: true,
      url: 'https://github.com/bosh-code/eslint-plugin-bosh/blob/main/src/rules/invalid-hook-extension/README.md'
    },
    schema: [],
    messages: {
      'invalid-hook-extension':
        "Hook files should use .[j|t]s extension, not .[j|t]sx. Hooks typically shouldn't return JSX."
    }
  },
  defaultOptions: [],
  create(context) {
    const filename = context.filename;

    return {
      FunctionDeclaration(node) {
        if (node.id?.name) {
          const extension = path.extname(filename);
          const basename = path.basename(filename, extension);

          // Check if it's a hook file (starts with 'use') and has .[j|t]sx extension
          if (basename.startsWith('use') && (extension === '.jsx' || extension === '.tsx')) {
            context.report({
              messageId: 'invalid-hook-extension',
              node: node.id
            });
          }
        }
      },

      // Also check arrow function expressions assigned to variables
      VariableDeclarator(node) {
        if (
          node.id.type === 'Identifier' &&
          node.id.name.startsWith('use') &&
          (node.init?.type === 'ArrowFunctionExpression' || node.init?.type === 'FunctionExpression')
        ) {
          const extension = path.extname(filename);
          const basename = path.basename(filename, extension);

          if (basename.startsWith('use') && (extension === '.jsx' || extension === '.tsx')) {
            context.report({
              messageId: 'invalid-hook-extension',
              node: node.id
            });
          }
        }
      }
    };
  }
});
