import { defineConfig } from "cypress";

export default defineConfig({
  component: {
    componentFolder: "components",
    devServer: {
      framework: "react",
      bundler: "vite",
    },
  },

  e2e: {
    baseUrl: "http://localhost:5173",
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
