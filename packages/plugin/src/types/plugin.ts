import type { ESLint, Linter } from 'eslint';

/**
 * An array of ESLint configuration objects.
 */
export type Config = Linter.Config[]

/**
 * Shape of the plugin
 */
export type Plugin = ESLint.Plugin & Readonly<{
  configs: Record<string, Config>
}>
