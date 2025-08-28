export interface ImportSortOptions {
  /** First group patterns (e.g., ['react', '^@?\\w'] for React projects) */
  firstGroup?: string[];
  /** Internal/project imports patterns */
  internalGroups?: string[];
}

export function createImportSortRule(options: ImportSortOptions = {}) {
  const { firstGroup = ['^@?\\w'], internalGroups = [] } = options;
  
  const groups = [
    firstGroup,
    ...(internalGroups.length > 0 ? [internalGroups] : []),
    ['^\\u0000'],
    ['^\\.\\.(?!/?$)', '^\\.\\./?$'],
    ['^\\./(?=.*/)(?!/?$)', '^\\.(?!/?$)', '^\\./?$'],
    ['^.+\\.s?css$'],
  ];

  return [
    'error',
    { groups },
  ];
}
