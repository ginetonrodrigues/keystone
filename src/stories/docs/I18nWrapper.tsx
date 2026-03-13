import type { ReactNode } from "react";
import { I18nProvider, type Locale } from "./i18n";

export const I18nWrapper = ({ locale, children }: { locale?: string; children: ReactNode }) => (
  <I18nProvider locale={(locale as Locale) || "pt"}>
    {children}
  </I18nProvider>
);
