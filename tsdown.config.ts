import { defineConfig } from "tsdown"

export default defineConfig({
  dts: true,
  inputOptions: {
    input: {
      index: "src/index.ts",
      "utils/import-sort": "src/utils/import-sort.ts",
    },
  },
})
