import { defineConfig } from 'vitest/config';
import { type UserConfig } from 'vite';
import path from 'path';

const config: UserConfig = defineConfig({
  test: {
    globals: true,
    environment: 'node',
    setupFiles: ['config.ts', './tests/support/setup.ts'],
    isolate: true
  },
  resolve: {
    alias: {
      '@src': path.resolve(__dirname, './src')
    }
  }
});

export default config;
