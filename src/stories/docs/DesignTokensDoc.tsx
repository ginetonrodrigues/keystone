import { DocPage, PageHeader, PageFooter, SectionBadge } from "./PageLayout";
import { useT } from "./i18n";

const FONT_DISPLAY = "'Plus Jakarta Sans', -apple-system, sans-serif";
const FONT_BODY = "'Inter', -apple-system, sans-serif";

const spacingPreview = [
  { name: "spacing-xxs", value: "2px" },
  { name: "spacing-xs", value: "4px" },
  { name: "spacing-sm", value: "6px" },
  { name: "spacing-md", value: "8px" },
  { name: "spacing-lg", value: "12px" },
  { name: "spacing-xl", value: "16px" },
  { name: "spacing-2xl", value: "20px" },
  { name: "spacing-3xl", value: "24px" },
  { name: "spacing-4xl", value: "32px" },
  { name: "spacing-5xl", value: "40px" },
  { name: "spacing-6xl", value: "48px" },
];

const radiusPreview = [
  { name: "none", px: 0 },
  { name: "xxs", px: 2 },
  { name: "xs", px: 4 },
  { name: "sm", px: 6 },
  { name: "md", px: 8 },
  { name: "lg", px: 10 },
  { name: "xl", px: 12 },
  { name: "2xl", px: 16 },
  { name: "3xl", px: 20 },
  { name: "full", px: 9999 },
];

const shadowPreview = [
  { name: "shadow-xs", value: "0px 1px 2px rgba(10, 13, 18, 0.05)" },
  { name: "shadow-sm", value: "0px 1px 3px rgba(10, 13, 18, 0.1), 0px 1px 2px -1px rgba(10, 13, 18, 0.1)" },
  { name: "shadow-md", value: "0px 4px 6px -1px rgba(10, 13, 18, 0.1), 0px 2px 4px -2px rgba(10, 13, 18, 0.06)" },
  { name: "shadow-lg", value: "0px 12px 16px -4px rgba(10, 13, 18, 0.08), 0px 4px 6px -2px rgba(10, 13, 18, 0.03), 0px 2px 2px -1px rgba(10, 13, 18, 0.04)" },
  { name: "shadow-xl", value: "0px 20px 24px -4px rgba(10, 13, 18, 0.08), 0px 8px 8px -4px rgba(10, 13, 18, 0.03), 0px 3px 3px -1.5px rgba(10, 13, 18, 0.04)" },
  { name: "shadow-2xl", value: "0px 24px 48px -12px rgba(10, 13, 18, 0.18), 0px 4px 4px -2px rgba(10, 13, 18, 0.04)" },
  { name: "shadow-3xl", value: "0px 32px 64px -12px rgba(10, 13, 18, 0.14), 0px 5px 5px -2.5px rgba(10, 13, 18, 0.04)" },
];

const breakpointUsageKeys = {
  "Small mobile": "smallMobile",
  "Large mobile": "largeMobile",
  "Small tablet": "smallTablet",
  "Tablet": "tablet",
  "Desktop": "desktop",
  "Large desktop": "largeDesktop",
  "Extra large": "extraLarge",
} as const;

const breakpoints = [
  { name: "xxs", value: "320px", usageKey: "Small mobile" as const },
  { name: "xs", value: "600px", usageKey: "Large mobile" as const },
  { name: "sm", value: "640px", usageKey: "Small tablet" as const },
  { name: "md", value: "768px", usageKey: "Tablet" as const },
  { name: "lg", value: "1024px", usageKey: "Desktop" as const },
  { name: "xl", value: "1280px", usageKey: "Large desktop" as const },
  { name: "2xl", value: "1536px", usageKey: "Extra large" as const },
];

const cellStyle: React.CSSProperties = {
  padding: "12px 12px",
  borderBottom: "1px solid #f2f4f7",
  fontSize: "13px",
  color: "#535862",
  verticalAlign: "middle",
  fontFamily: FONT_BODY,
};

const headerCellStyle: React.CSSProperties = {
  ...cellStyle,
  fontSize: "12px",
  color: "#98a2b3",
  fontWeight: 500,
  borderBottom: "1px solid #e9eaeb",
};

export const DesignTokensDoc = () => {
  const t = useT();

  return (
    <DocPage>
      <PageHeader
        breadcrumb={t("dtBreadcrumb")}
        title={t("dtTitle")}
        description={t("dtDesc")}
        resources={false}
      />

      <div
        style={{
          marginTop: "24px",
          padding: "16px 20px",
          background: "var(--color-bg-secondary)",
          borderRadius: "12px",
          border: "1px solid var(--color-border-secondary)",
          marginBottom: "32px",
        }}
      >
        <p style={{ fontSize: "13px", color: "var(--color-text-secondary)", margin: 0, lineHeight: "20px", fontFamily: FONT_BODY }}>
          {t("dtFigmaSyncCallout")}
        </p>
      </div>

      {/* Spacing Overview */}
      <div style={{ marginTop: "48px" }}>
        <h2 style={{ fontSize: "18px", fontWeight: 600, color: "#181d27", margin: "0 0 8px 0", fontFamily: FONT_DISPLAY }}>
          {t("spacing")}
          <SectionBadge />
        </h2>
        <p style={{ fontSize: "13px", color: "#717680", margin: "0 0 24px 0", lineHeight: "20px", fontFamily: FONT_BODY }}>
          {t("spacingDesc")}
        </p>

        <div style={{ display: "flex", flexDirection: "column", gap: "0" }}>
          {spacingPreview.map((s) => {
            const pxNum = parseInt(s.value, 10);
            return (
              <div
                key={s.name}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "16px",
                  padding: "10px 0",
                  borderBottom: "1px solid #f5f5f5",
                }}
              >
                <span style={{ fontSize: "13px", fontWeight: 500, color: "#181d27", minWidth: "120px", fontFamily: FONT_BODY }}>{s.name}</span>
                <span style={{ fontSize: "12px", color: "#98a2b3", minWidth: "48px", fontFamily: FONT_BODY }}>{s.value}</span>
                <div
                  style={{
                    height: "8px",
                    width: `${Math.max((pxNum / 48) * 100, 2)}%`,
                    backgroundColor: "#14dd3e",
                    borderRadius: "2px",
                    flex: "0 0 auto",
                    maxWidth: "300px",
                    minWidth: "4px",
                  }}
                />
              </div>
            );
          })}
        </div>
      </div>

      {/* Radius Overview */}
      <div style={{ marginTop: "64px" }}>
        <h2 style={{ fontSize: "18px", fontWeight: 600, color: "#181d27", margin: "0 0 8px 0", fontFamily: FONT_DISPLAY }}>
          {t("borderRadius")}
          <SectionBadge />
        </h2>
        <p style={{ fontSize: "13px", color: "#717680", margin: "0 0 24px 0", lineHeight: "20px", fontFamily: FONT_BODY }}>
          {t("borderRadiusDesc")}
        </p>

        <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
          {radiusPreview.map((r) => (
            <div key={r.name} style={{ textAlign: "center" }}>
              <div
                style={{
                  width: "56px",
                  height: "56px",
                  border: "2px solid #d0f8d8",
                  backgroundColor: "#f6fef8",
                  borderRadius: `${Math.min(r.px, 28)}px`,
                }}
              />
              <p style={{ fontSize: "11px", fontWeight: 500, color: "#181d27", margin: "8px 0 2px 0", fontFamily: FONT_BODY }}>{r.name}</p>
              <p style={{ fontSize: "10px", color: "#98a2b3", margin: 0, fontFamily: FONT_BODY }}>{r.px === 9999 ? "∞" : `${r.px}px`}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Shadows Overview */}
      <div style={{ marginTop: "64px" }}>
        <h2 style={{ fontSize: "18px", fontWeight: 600, color: "#181d27", margin: "0 0 8px 0", fontFamily: FONT_DISPLAY }}>
          {t("shadows")}
          <SectionBadge />
        </h2>
        <p style={{ fontSize: "13px", color: "#717680", margin: "0 0 24px 0", lineHeight: "20px", fontFamily: FONT_BODY }}>
          {t("shadowsDesc")}
        </p>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(100px, 1fr))", gap: "16px" }}>
          {shadowPreview.map((s) => (
            <div
              key={s.name}
              style={{
                backgroundColor: "#fff",
                borderRadius: "10px",
                padding: "14px 12px",
                height: "80px",
                boxShadow: s.value,
                display: "flex",
                alignItems: "flex-start",
                border: "1px solid rgba(233, 234, 235, 0.2)",
              }}
            >
              <span style={{ fontSize: "11px", fontWeight: 500, color: "#535862", fontFamily: FONT_BODY }}>{s.name}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Breakpoints */}
      <div style={{ marginTop: "64px" }}>
        <h2 style={{ fontSize: "18px", fontWeight: 600, color: "#181d27", margin: "0 0 8px 0", fontFamily: FONT_DISPLAY }}>
          {t("breakpoints")}
          <SectionBadge />
        </h2>
        <p style={{ fontSize: "13px", color: "#717680", margin: "0 0 24px 0", lineHeight: "20px", fontFamily: FONT_BODY }}>
          {t("breakpointsDesc")}
        </p>

        <table style={{ width: "100%", borderCollapse: "collapse" }}>
          <thead>
            <tr>
              <th style={{ ...headerCellStyle, width: "100px", textAlign: "left" }}>{t("token")}</th>
              <th style={{ ...headerCellStyle, width: "100px", textAlign: "left" }}>{t("value")}</th>
              <th style={{ ...headerCellStyle, textAlign: "left" }}>{t("usage")}</th>
              <th style={{ ...headerCellStyle, textAlign: "left" }}>{t("preview")}</th>
            </tr>
          </thead>
          <tbody>
            {breakpoints.map((b) => {
              const pxNum = parseInt(b.value, 10);
              const barWidth = (pxNum / 1536) * 100;
              return (
                <tr key={b.name}>
                  <td style={{ ...cellStyle, fontWeight: 500, color: "#181d27" }}>{b.name}</td>
                  <td style={cellStyle}>{b.value}</td>
                  <td style={cellStyle}>{t(breakpointUsageKeys[b.usageKey])}</td>
                  <td style={cellStyle}>
                    <div
                      style={{
                        height: "6px",
                        width: `${barWidth}%`,
                        backgroundColor: "#a1f1b2",
                        borderRadius: "3px",
                        minWidth: "8px",
                      }}
                    />
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      {/* Max Width */}
      <div style={{ marginTop: "64px" }}>
        <h2 style={{ fontSize: "18px", fontWeight: 600, color: "#181d27", margin: "0 0 8px 0", fontFamily: FONT_DISPLAY }}>
          {t("maxWidth")}
        </h2>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "16px",
            padding: "16px 0",
            borderBottom: "1px solid #f2f4f7",
          }}
        >
          <span style={{ fontSize: "13px", fontWeight: 500, color: "#181d27", minWidth: "180px", fontFamily: FONT_BODY }}>
            --max-width-container
          </span>
          <span style={{ fontSize: "13px", color: "#535862", minWidth: "80px", fontFamily: FONT_BODY }}>1280px</span>
          <div
            style={{
              height: "6px",
              width: `${(1280 / 1536) * 100}%`,
              backgroundColor: "#14dd3e",
              borderRadius: "3px",
              flex: 1,
              maxWidth: "400px",
            }}
          />
        </div>
      </div>

      <PageFooter />
    </DocPage>
  );
};
