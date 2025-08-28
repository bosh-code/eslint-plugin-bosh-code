import { ESLintUtils } from '@typescript-eslint/utils';
import path from 'node:path';

const createRule = ESLintUtils.RuleCreator(
  name => `https://example.com/rule/${name}`,
);

type InvalidHookExtension = ESLintUtils.RuleModule<"invalidHookExtension", [], unknown, ESLintUtils.RuleListener>

export const rule: InvalidHookExtension = createRule({
  create({filename, report}) {
    return {
      FunctionDeclaration({id}) {
        const extension = path.extname(filename);
        const basename = path.basename(filename);

        if (id != null) {
          if (basename.startsWith('use') && extension === '.tsx') {
              report({
                  messageId: 'invalidHookExtension',
                  node: id,
              });
          }
        }
      },
    };
  },
  name: 'invalid-hook-extension',
  meta: {
    type: 'problem',
    schema: [],
    messages: {
      invalidHookExtension: 'Hooks must end in .ts'
    },
    docs: {
      description: "enforce hooks files to use '.ts' extension and not '.tsx'",
    }
  },
  defaultOptions: []
});
