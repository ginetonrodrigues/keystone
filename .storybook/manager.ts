import { addons } from "@storybook/manager-api";
import { create } from "@storybook/theming";

const keystoneTheme = create({
  base: "light",
  brandTitle: "Keystone Design System",
  brandUrl: "/",
  brandImage: "/keystone-logo.svg",
  colorPrimary: "#14dd3e",
  colorSecondary: "#10b132",
  appBg: "#f8fafb",
  appContentBg: "#ffffff",
  appBorderColor: "#e4e7ec",
  textColor: "#181d27",
  textMutedColor: "#717680",
});

addons.setConfig({
  theme: keystoneTheme,
});
