import type { Linter } from 'eslint';

/**
 * Options for configuring import sorting rules
 */
export interface ImportSortOptions {

  /**
   * Rule severity level: 0 | 1 | 2 | "off" | "warn" | "error". Default is "error".
   * @default 'error'
   */
  level?: Linter.RuleSeverity;

  /**
   * First group patterns. Usually packages that are essential or help to define the file.
   * @example ['react', '^@?\\w'] // For react based projects
   */
  firstGroup?: string[];

  /**
   * Internal/project imports patterns. This is usually aliased packages from the same repo.
   * @example ['@/*']
   * @example ['@/components, @/hooks, @/types']
   * @example ['@org/foo/*']
   */
  internalGroups?: string[];
}

/** Type representing import pattern groups as string arrays */
type groupOption = string[] | string[][]

/** Type representing the complete ESLint import/order rule configuration */
type ImportSortRule = [Linter.RuleSeverity, { groups: string[][]; }]

export const EXTERNAL_IMPORTS_GROUP: string[] = [String.raw`^@?\w`];
export const SIDE_EFFECT_IMPORTS_GROUP: string[] = [String.raw`^\u0000`];
export const PARENT_IMPORTS_GROUP: string[] = [String.raw`^\.\.(?!/?$)`, String.raw`^\.\./?$`];
export const CURRENT_DIR_IMPORTS_GROUP: string[] = [
  String.raw`^\./(?=.*/)(?!/?$)`,
  String.raw`^\.(?!/?$)`,
  String.raw`^\./?$`,
  String.raw`^.+\.svg$`
];
export const STYLE_IMPORTS_GROUP: string[] = [String.raw`^.+\.s?css$`];

/**
 * Creates an ESLint import/order rule configuration with customizable grouping
 * @param {ImportSortOptions} options - Configuration options for import sorting
 * @returns {ImportSortRule} ESLint rule configuration for import/order
 */
export const createImportSortRule = (
  options: ImportSortOptions = {}
): ImportSortRule => {
  const { firstGroup = EXTERNAL_IMPORTS_GROUP, internalGroups = [], level = 'error' } = options;

  /**
   * Import pattern groups in priority order:
   * 1. First group - Highest priority imports (configurable)
   * 2. Internal groups - Project-specific modules (when specified)
   * 3. Side effect imports - Virtual module boundaries
   * 4. Parent imports - Imports from parent directories
   * 5. Current directory imports - Local imports (deeper paths first)
   * 6. Style imports - CSS/SCSS files
   */
  const groups: groupOption = [
    firstGroup,
    ...(internalGroups.length > 0 ? [internalGroups] : []),
    SIDE_EFFECT_IMPORTS_GROUP,
    PARENT_IMPORTS_GROUP,
    CURRENT_DIR_IMPORTS_GROUP,
    STYLE_IMPORTS_GROUP
  ];

  return [level, { groups }];
};
