import js from '@eslint/js';
import globals from 'globals';
import { defineConfig, globalIgnores } from 'eslint/config';
import eslintPlugin from "eslint-plugin-eslint-plugin";
import tseslint from 'typescript-eslint';
import nodePlugin from 'eslint-plugin-n';

export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['./**/*'],
    extends: [
      eslintPlugin.configs.all,
      js.configs.recommended,
      tseslint.configs.recommended,
      nodePlugin.configs["flat/all"],
    ],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser
    },
    rules: {
      "import/extensions": "off",
      "ts/no-unnecessary-condition": "off",
      "n/no-missing-import": "off",
      "n/file-extension-in-import": "off",
    },
  }
]);
