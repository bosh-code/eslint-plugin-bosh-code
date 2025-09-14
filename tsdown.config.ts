import { defineConfig, type UserConfig } from 'tsdown';

export default defineConfig({
  inputOptions: {
    input: {
      index: 'src/index.ts',
      'utils': 'src/utils/index.ts'
    }
  }
}) as UserConfig;
