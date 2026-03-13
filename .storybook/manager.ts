import { addons } from "@storybook/manager-api";
import { create } from "@storybook/theming";

const brand600 = "#10b132";
const brand700 = "#0c8525";

const keystoneTheme = create({
  base: "light",
  brandTitle: "Keystone Design System",
  brandUrl: "/",
  brandImage: "./keystone-logo.svg",

  colorPrimary: brand600,
  colorSecondary: brand600,

  // UI
  appBg: "#f8fafb",
  appContentBg: "#ffffff",
  appPreviewBg: "#ffffff",
  appBorderColor: "#e4e7ec",
  appBorderRadius: 8,

  // Typography
  fontBase: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
  fontCode: "ui-monospace, 'Roboto Mono', SFMono-Regular, Menlo, monospace",

  // Text colors
  textColor: "#181d27",
  textInverseColor: "#ffffff",
  textMutedColor: "#717680",

  // Toolbar
  barTextColor: "#717680",
  barSelectedColor: brand600,
  barHoverColor: brand700,
  barBg: "#ffffff",

  // Form
  inputBg: "#ffffff",
  inputBorder: "#e4e7ec",
  inputTextColor: "#181d27",
  inputBorderRadius: 6,

  booleanBg: "#e9eaeb",
  booleanSelectedBg: brand600,

  buttonBg: "#f5f5f5",
  buttonBorder: "#e4e7ec",
});

addons.setConfig({
  theme: keystoneTheme,
});
