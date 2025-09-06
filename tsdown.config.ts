import { defineConfig, type UserConfig } from 'tsdown';

export default defineConfig({
  dts: true,
  inputOptions: {
    input: {
      index: 'src/index.ts'
    }
  }
}) as UserConfig;
