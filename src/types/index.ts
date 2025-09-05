export interface BoshConfigOptions {
  /** Options for import sorting */
  importSort?: {
    firstGroup?: string[];
    internalGroups?: string[];
  };
}
export interface BoshEslintOptions {
  /**
   * Custom import groups for simple-import-sort
   * First group is for external packages (like React)
   * Second group is for project-specific aliases
   */
  importGroups?: {
    external?: string[];
    internal?: string[];
  };

  /**
   * Custom file patterns to ignore
   */
  ignores?: string[];

  /**
   * React version (defaults to '19')
   */
  reactVersion?: string;
}
