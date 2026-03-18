import type { StorybookConfig } from "@storybook/react-vite";
import path from "path";

const config: StorybookConfig = {
  stories: [
    "./docs/**/*.mdx",
    "../src/stories/**/*.stories.@(js|jsx|mjs|ts|tsx)",
  ],
  addons: [
    "@storybook/addon-essentials",
    "@storybook/addon-a11y",
  ],
  staticDirs: ["../public"],
  framework: {
    name: "@storybook/react-vite",
    options: {},
  },
  viteFinal: async (config) => {
    config.resolve = config.resolve || {};
    config.resolve.alias = {
      ...config.resolve.alias,
      styles: path.resolve(__dirname, "../src/styles"),
      "@": path.resolve(__dirname, "../src"),
    };
    // GitHub Pages serve em /keystone/; em local fica na raiz
    if (process.env.GITHUB_ACTIONS) {
      config.base = "/keystone/";
    }
    return config;
  },
  docs: {},
};

export default config;
