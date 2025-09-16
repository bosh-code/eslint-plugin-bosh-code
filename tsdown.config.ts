import { defineConfig, type UserConfig } from 'tsdown';
import { rimrafSync } from 'rimraf';

export default defineConfig({
  onSuccess: async () => {
    rimrafSync('dist/**/*.map', { glob: true });
  },
  hash: false,
  inputOptions: {
    input: {
      index: 'src/index.ts',
      utils: 'src/utils/index.ts'
    }
  }, publint: true,
  sourcemap: 'hidden',
  // Just in case I forget them
  nodeProtocol: true,
  tsconfig: './tsconfig.json',
  unused: {
    include: ['src/**/*.ts'],
    depKinds: ['dependencies']
  }
}) as UserConfig;
