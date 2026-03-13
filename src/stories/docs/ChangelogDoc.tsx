import { DocPage, PageHeader, PageFooter } from "./PageLayout";
import { useT } from "./i18n";

const FONT_DISPLAY = "'Plus Jakarta Sans', -apple-system, sans-serif";
const FONT_BODY = "'Inter', -apple-system, sans-serif";

type ChangeType = "added" | "changed" | "fixed" | "removed";

interface ChangeEntry {
  type: ChangeType;
  key: string;
}

interface VersionEntry {
  version: string;
  date: string;
  titleKey?: string;
  changes: ChangeEntry[];
}

const versions: VersionEntry[] = [
  {
    version: "1.0.0",
    date: "2026-03-12",
    titleKey: "changelogInitialRelease",
    changes: [
      { type: "added", key: "cl100_added1" },
      { type: "added", key: "cl100_added2" },
      { type: "added", key: "cl100_added3" },
      { type: "added", key: "cl100_added4" },
      { type: "added", key: "cl100_added5" },
      { type: "added", key: "cl100_added6" },
      { type: "added", key: "cl100_added7" },
      { type: "added", key: "cl100_added8" },
      { type: "added", key: "cl100_added9" },
      { type: "added", key: "cl100_added10" },
      { type: "changed", key: "cl100_changed1" },
      { type: "changed", key: "cl100_changed2" },
    ],
  },
];

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

      <div style={{ display: "flex", flexDirection: "column", gap: "48px", marginTop: "48px" }}>
        {versions.map((v) => {
          const grouped: Record<ChangeType, ChangeEntry[]> = { added: [], changed: [], fixed: [], removed: [] };
          v.changes.forEach((c) => grouped[c.type].push(c));

          return (
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
                {v.titleKey && (
                  <span style={{ fontSize: "14px", color: "#181d27", fontWeight: 500, fontFamily: FONT_BODY }}>
                    — {t(v.titleKey as any)}
                  </span>
                )}
              </div>

              {/* Changes by type */}
              <div style={{ display: "flex", flexDirection: "column", gap: "20px", paddingLeft: "8px" }}>
                {(["added", "changed", "fixed", "removed"] as ChangeType[]).map((type) => {
                  const items = grouped[type];
                  if (items.length === 0) return null;
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
                        {items.map((item) => (
                          <li
                            key={item.key}
                            style={{
                              fontSize: "14px",
                              color: "#414651",
                              lineHeight: "22px",
                              fontFamily: FONT_BODY,
                            }}
                          >
                            {t(item.key as any)}
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
          );
        })}
      </div>

      <PageFooter />
    </DocPage>
  );
};
