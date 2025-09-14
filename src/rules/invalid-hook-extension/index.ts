import type { Rule } from 'eslint';
import path from 'node:path';

/**
 * ESLint rule to enforce hook files using the correct file extension.
 * Hook files (those starting with 'use') should use '.js' or '.ts' extensions,
 * not '.jsx' or '.tsx', as hooks typically do not return JSX.
 * @type {Rule.RuleModule}
 */
export const rule: Rule.RuleModule = {
  meta: {
    type: 'problem',
    docs: {
      description: 'enforce hook files ending in \'.[j|t]s\' extension and not \'.[j|t]sx\'',
      recommended: true,
      url: 'https://github.com/bosh-code/eslint-plugin-bosh/blob/main/src/rules/invalid-hook-extension/README.md'
    },
    schema: [],
    messages: {
      'invalid-hook-extension':
        'Hook files should use .[j|t]s file extensions, not .[j|t]sx. Hooks typically do not return JSX.'
    }
  },
  create(context) {
    const filename = context.filename;

    return {
      FunctionDeclaration(node) {
        if (node.id.name) {
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
};
