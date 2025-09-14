export interface ImportSortOptions {
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
type ImportSortRule = (string | { groups: groupOption })[]

/**
 * Creates an ESLint import/order rule configuration with customizable grouping
 * @param {ImportSortOptions} options - Configuration options for import sorting
 * @returns {ImportSortRule} ESLint rule configuration for import/order
 */
export const createImportSortRule = (
  options: ImportSortOptions = {}
): ImportSortRule => {
  const { firstGroup = [String.raw`^@?\w`], internalGroups = [] } = options;

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
    [String.raw`^\u0000`],
    [String.raw`^\.\.(?!/?$)`, String.raw`^\.\./?$`],
    [String.raw`^\./(?=.*/)(?!/?$)`, String.raw`^\.(?!/?$)`, String.raw`^\./?$`, String.raw`^.+\.svg$`],
    [String.raw`^.+\.s?css$`]
  ];

  return ['error', { groups }];
};
