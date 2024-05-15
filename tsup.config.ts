import { defineConfig } from "tsup";

export default defineConfig(({ env = {} }) => {
  const development = env.NODE_ENV === "development";
  const production = env.NODE_ENV === "production";

  return {
    entry: ["src/index.ts"],
    outDir: "dist",
    platform: "node",
    format: "esm",
    splitting: true,
    sourcemap: false,
    watch: development,
    clean: production,
    minify: production,
    esbuildOptions(options) {
      options.legalComments = "none";
    },
  };
});
