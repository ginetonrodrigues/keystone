import { DocPage, PageHeader, PageFooter } from "./PageLayout";
import { useT } from "./i18n";
import { getWidthsTokens } from "./tokensData";

const FONT_BODY = "'Inter', -apple-system, sans-serif";

const cellStyle: React.CSSProperties = {
  padding: "10px 12px",
  borderBottom: "1px solid var(--color-border-secondary)",
  fontSize: "13px",
  color: "var(--color-text-secondary)",
  verticalAlign: "middle",
  fontFamily: FONT_BODY,
};

export const WidthsDoc = () => {
  const t = useT();
  const tokens = getWidthsTokens();

  return (
    <DocPage>
      <PageHeader
        breadcrumb={t("widthsBreadcrumb")}
        title={t("widthsTitle")}
        description={t("widthsFoundationsDesc")}
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
        {t("widthsIntro")}
      </p>
      <table style={{ width: "100%", borderCollapse: "collapse" }}>
        <thead>
          <tr>
            <th style={{ ...cellStyle, textAlign: "left", fontWeight: 500, color: "var(--color-text-tertiary)" }}>Token</th>
            <th style={{ ...cellStyle, textAlign: "right", fontWeight: 500, color: "var(--color-text-tertiary)" }}>Value (px)</th>
            <th style={{ ...cellStyle, fontWeight: 500, color: "var(--color-text-tertiary)" }}>Preview</th>
          </tr>
        </thead>
        <tbody>
          {Object.entries(tokens).map(([name, value]) => (
            <tr key={name}>
              <td style={{ ...cellStyle, fontWeight: 500, color: "var(--color-text-primary)" }}>{name}</td>
              <td style={{ ...cellStyle, textAlign: "right" }}>{value}px</td>
              <td style={cellStyle}>
                <div
                  style={{
                    height: "6px",
                    width: `${Math.min((value / 1920) * 100, 100)}%`,
                    maxWidth: "400px",
                    backgroundColor: "var(--color-fg-brand-primary)",
                    borderRadius: "3px",
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
