import { defineConfig } from "wxt";

// See https://wxt.dev/api/config.html
export default defineConfig({
  modules: ["@wxt-dev/module-vue"],
  runner: {
    startUrls: ["https://duckduckgo.com"],
  },
});
