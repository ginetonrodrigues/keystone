import { DocPage, PageHeader, PageFooter } from "./PageLayout";
import { useT } from "./i18n";
import { getRadiusTokens } from "./tokensData";

const FONT_BODY = "'Inter', -apple-system, sans-serif";

const cellStyle: React.CSSProperties = {
  padding: "10px 12px",
  borderBottom: "1px solid var(--color-border-secondary)",
  fontSize: "13px",
  color: "var(--color-text-secondary)",
  verticalAlign: "middle",
  fontFamily: FONT_BODY,
};

export const RadiusDoc = () => {
  const t = useT();
  const tokens = getRadiusTokens();

  return (
    <DocPage>
      <PageHeader
        breadcrumb={t("radiusBreadcrumb")}
        title={t("radiusFoundationsTitle")}
        description={t("radiusFoundationsDesc")}
        resources={false}
      />
      <p
        style={{
          fontSize: "14px",
          color: "var(--color-text-tertiary)",
          margin: "0 0 24px 0",
          lineHeight: "22px",
          fontFamily: FONT_BODY,
        }}
      >
        {t("radiusIntro")}
      </p>
      <table style={{ width: "100%", borderCollapse: "collapse" }}>
        <thead>
          <tr>
            <th style={{ ...cellStyle, textAlign: "left", fontWeight: 500, color: "var(--color-text-tertiary)" }}>Token</th>
            <th style={{ ...cellStyle, textAlign: "right", fontWeight: 500, color: "var(--color-text-tertiary)" }}>Value (px)</th>
            <th style={{ ...cellStyle, width: "120px", textAlign: "center", fontWeight: 500, color: "var(--color-text-tertiary)" }}>Preview</th>
          </tr>
        </thead>
        <tbody>
          {Object.entries(tokens).map(([name, value]) => (
            <tr key={name}>
              <td style={{ ...cellStyle, fontWeight: 500, color: "var(--color-text-primary)" }}>{name}</td>
              <td style={{ ...cellStyle, textAlign: "right" }}>{value}</td>
              <td style={{ ...cellStyle, textAlign: "center" }}>
                <div
                  style={{
                    width: "48px",
                    height: "48px",
                    margin: "0 auto",
                    borderRadius: `${Math.min(value, 24)}px`,
                    border: "2px solid var(--color-border-brand)",
                    background: "var(--color-bg-brand-primary)",
                  }}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <PageFooter />
    </DocPage>
  );
};
