import { useState, useEffect, type ReactNode } from "react";
import { I18nProvider, type Locale } from "./i18n";

const LOCALE_KEY = "keystone-locale";
const VALID_LOCALES: Locale[] = ["pt", "es", "en"];

const getStoredLocale = (): Locale => {
  if (typeof window !== "undefined") {
    const stored = localStorage.getItem(LOCALE_KEY) as Locale;
    if (stored && VALID_LOCALES.includes(stored)) return stored;
  }
  return "pt";
};

export const LocaleProvider = ({ children }: { children: ReactNode }) => {
  const [locale, setLocale] = useState<Locale>(getStoredLocale);

  useEffect(() => {
    const onStorage = (e: StorageEvent) => {
      if (e.key === LOCALE_KEY && e.newValue && VALID_LOCALES.includes(e.newValue as Locale)) {
        setLocale(e.newValue as Locale);
      }
    };
    window.addEventListener("storage", onStorage);

    let channelCleanup: (() => void) | undefined;
    try {
      const channel = (window as any).__STORYBOOK_ADDONS_CHANNEL__;
      if (channel) {
        const onGlobalsUpdated = (args: { globals: Record<string, unknown> }) => {
          const next = args?.globals?.locale as Locale;
          if (next && VALID_LOCALES.includes(next)) {
            localStorage.setItem(LOCALE_KEY, next);
            setLocale(next);
          }
        };
        channel.on("globalsUpdated", onGlobalsUpdated);
        channelCleanup = () => channel.off("globalsUpdated", onGlobalsUpdated);
      }
    } catch {}

    const interval = setInterval(() => {
      const current = getStoredLocale();
      setLocale((prev) => (prev !== current ? current : prev));
    }, 400);

    return () => {
      window.removeEventListener("storage", onStorage);
      channelCleanup?.();
      clearInterval(interval);
    };
  }, []);

  return <I18nProvider locale={locale}>{children}</I18nProvider>;
};
