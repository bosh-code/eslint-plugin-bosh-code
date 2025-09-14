import type { ESLint, Linter } from 'eslint';

/**
 * An array of ESLint configuration objects.
 */
export type Config = Linter.Config[]

/**
 * Shape of the @bosh-code/eslint-plugin
 */
export type Plugin = Readonly<ESLint.Plugin & {
  configs: {
    base: Config;
    ts: Config;
    react: Config;
    node: Config;
    recommended: Config;
  }
}>
