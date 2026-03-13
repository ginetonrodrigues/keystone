import { useState, useEffect } from "react";
import { DocPage, PageHeader, PageFooter } from "./PageLayout";
import { useT, useLocale } from "./i18n";

const FONT_DISPLAY = "'Plus Jakarta Sans', -apple-system, sans-serif";
const FONT_BODY = "'Inter', -apple-system, sans-serif";

type ChangeType = "added" | "changed" | "fixed" | "removed";

interface LocaleText {
  pt: string;
  es: string;
  en: string;
}

interface LocaleList {
  pt: string[];
  es: string[];
  en: string[];
}

interface VersionData {
  version: string;
  date: string;
  title?: LocaleText;
  added?: LocaleList;
  changed?: LocaleList;
  fixed?: LocaleList;
  removed?: LocaleList;
}

const typeConfig: Record<ChangeType, { bg: string; color: string; border: string }> = {
  added: { bg: "#e4fbe9", color: "#0c8525", border: "#d0f8d8" },
  changed: { bg: "#eff8ff", color: "#175cd3", border: "#b2ddff" },
  fixed: { bg: "#fef3f2", color: "#b42318", border: "#fecdca" },
  removed: { bg: "#f5f5f5", color: "#414651", border: "#e9eaeb" },
};

const Badge = ({ type, label }: { type: ChangeType; label: string }) => {
  const cfg = typeConfig[type];
  return (
    <span
      style={{
        display: "inline-flex",
        alignItems: "center",
        padding: "2px 8px",
        borderRadius: "12px",
        fontSize: "11px",
        fontWeight: 600,
        backgroundColor: cfg.bg,
        color: cfg.color,
        border: `1px solid ${cfg.border}`,
        fontFamily: FONT_BODY,
        flexShrink: 0,
      }}
    >
      {label}
    </span>
  );
};

export const ChangelogDoc = () => {
  const t = useT();
  const locale = useLocale();
  const [versions, setVersions] = useState<VersionData[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("./changelog.json")
      .then((r) => r.json())
      .then((data) => {
        setVersions(data);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  const typeLabels: Record<ChangeType, string> = {
    added: t("changelogAdded"),
    changed: t("changelogChanged"),
    fixed: t("changelogFixed"),
    removed: t("changelogRemoved"),
  };

  return (
    <DocPage>
      <PageHeader
        breadcrumb={t("changelogBreadcrumb")}
        title={t("changelogTitle")}
        description={t("changelogDesc")}
        resources={false}
      />

      {loading ? (
        <p style={{ color: "#717680", fontFamily: FONT_BODY }}>...</p>
      ) : (
        <div style={{ display: "flex", flexDirection: "column", gap: "48px", marginTop: "48px" }}>
          {versions.map((v) => (
            <div key={v.version} style={{ position: "relative" }}>
              {/* Version header */}
              <div style={{ display: "flex", alignItems: "center", gap: "16px", marginBottom: "24px" }}>
                <div
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    padding: "6px 14px",
                    borderRadius: "20px",
                    backgroundColor: "#f6fef8",
                    border: "1px solid #d0f8d8",
                  }}
                >
                  <span style={{ fontSize: "16px", fontWeight: 700, color: "#0c8525", fontFamily: FONT_DISPLAY }}>
                    v{v.version}
                  </span>
                </div>
                <span style={{ fontSize: "14px", color: "#717680", fontFamily: FONT_BODY }}>
                  {v.date}
                </span>
                {v.title && (
                  <span style={{ fontSize: "14px", color: "#181d27", fontWeight: 500, fontFamily: FONT_BODY }}>
                    — {v.title[locale]}
                  </span>
                )}
              </div>

              {/* Changes by type */}
              <div style={{ display: "flex", flexDirection: "column", gap: "20px", paddingLeft: "8px" }}>
                {(["added", "changed", "fixed", "removed"] as ChangeType[]).map((type) => {
                  const items = v[type]?.[locale];
                  if (!items || items.length === 0) return null;
                  return (
                    <div key={type}>
                      <div style={{ marginBottom: "10px" }}>
                        <Badge type={type} label={typeLabels[type]} />
                      </div>
                      <ul
                        style={{
                          margin: 0,
                          padding: "0 0 0 20px",
                          display: "flex",
                          flexDirection: "column",
                          gap: "6px",
                        }}
                      >
                        {items.map((text, i) => (
                          <li
                            key={i}
                            style={{
                              fontSize: "14px",
                              color: "#414651",
                              lineHeight: "22px",
                              fontFamily: FONT_BODY,
                            }}
                          >
                            {text}
                          </li>
                        ))}
                      </ul>
                    </div>
                  );
                })}
              </div>

              {/* Divider */}
              <div style={{ borderBottom: "1px solid #e9eaeb", marginTop: "32px" }} />
            </div>
          ))}
        </div>
      )}

      <PageFooter />
    </DocPage>
  );
};
