import { defineConfig, type UserConfig } from 'tsdown';
import { rimrafSync } from 'rimraf';

export default defineConfig({
  onSuccess: () => {
    rimrafSync('dist/**/*.map', { glob: true });
  },
  outExtensions: () => ({
    js: '.js'
  }),
  hash: false,
  inputOptions: {
    input: {
      index: 'src/index.ts',
      utils: 'src/utils/index.ts'
    }
  },
  publint: true,
  // Just in case I forget them
  nodeProtocol: true,
  tsconfig: './tsconfig.json',
  unused: {
    include: ['src/**/*.ts'],
    depKinds: ['dependencies']
  }
}) as UserConfig;
