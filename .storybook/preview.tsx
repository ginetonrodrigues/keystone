import React from "react";
import type { Preview } from "@storybook/react";
import "../src/styles/globals.css";

const LOCALE_KEY = "keystone-locale";

const preview: Preview = {
  initialGlobals: {
    locale: (typeof window !== "undefined" && localStorage.getItem(LOCALE_KEY)) || "pt",
  },
  globalTypes: {
    locale: {
      name: "Idioma",
      description: "Idioma da documentação",
      toolbar: {
        icon: "globe",
        items: [
          { value: "pt", title: "Português", right: "🇧🇷" },
          { value: "es", title: "Español", right: "🇪🇸" },
          { value: "en", title: "English", right: "🇺🇸" },
        ],
        dynamicTitle: true,
      },
    },
  },
  decorators: [
    (Story, context) => {
      const locale = context.globals.locale || "pt";
      React.useEffect(() => {
        localStorage.setItem(LOCALE_KEY, locale);
        window.dispatchEvent(new StorageEvent("storage", { key: LOCALE_KEY, newValue: locale }));
      }, [locale]);
      return <Story />;
    },
  ],
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    docs: {
      toc: true,
    },
    layout: "centered",
    options: {
      storySort: {
        order: [
          "Getting Started",
          ["Introduction", "Changelog"],
          "Foundations",
          [
            "Design Tokens",
            "Colors",
            "Typography",
            "Spacing, Radius & Grids",
            "Effect Styles",
          ],
          "*",
        ],
      },
    },
  },
  tags: ["autodocs"],
};

export default preview;
