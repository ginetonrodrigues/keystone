import { DocPage, PageHeader, PageFooter } from "./PageLayout";
import { useT } from "./i18n";
import { getColorModesTokens, colorValueToCss } from "./tokensData";

const FONT_DISPLAY = "'Plus Jakarta Sans', -apple-system, sans-serif";
const FONT_BODY = "'Inter', -apple-system, sans-serif";

const cellStyle: React.CSSProperties = {
  padding: "10px 12px",
  borderBottom: "1px solid var(--color-border-secondary)",
  fontSize: "13px",
  color: "var(--color-text-secondary)",
  verticalAlign: "middle",
  fontFamily: FONT_BODY,
};

export const ColorModesDoc = () => {
  const t = useT();
  const { light, dark } = getColorModesTokens();

  const TokenTable = ({
    tokens,
    title,
  }: {
    tokens: Record<string, string>;
    title: string;
  }) => (
    <div style={{ marginBottom: "40px" }}>
      <h3
        style={{
          fontSize: "16px",
          fontWeight: 600,
          color: "var(--color-text-primary)",
          margin: "0 0 12px 0",
          fontFamily: FONT_DISPLAY,
        }}
      >
        {title}
      </h3>
      <table style={{ width: "100%", borderCollapse: "collapse" }}>
        <thead>
          <tr>
            <th style={{ ...cellStyle, textAlign: "left", fontWeight: 500, color: "var(--color-text-tertiary)" }}>Token</th>
            <th style={{ ...cellStyle, width: "72px", textAlign: "center", fontWeight: 500, color: "var(--color-text-tertiary)" }}>{t("ctPreview")}</th>
            <th style={{ ...cellStyle, textAlign: "left", fontWeight: 500, color: "var(--color-text-tertiary)" }}>Value</th>
          </tr>
        </thead>
        <tbody>
          {Object.entries(tokens).map(([name, value]) => (
            <tr key={name}>
              <td style={{ ...cellStyle, fontWeight: 500, color: "var(--color-text-primary)" }}>{name}</td>
              <td style={{ ...cellStyle, padding: "6px 12px" }}>
                <div
                  style={{
                    width: "32px",
                    height: "24px",
                    borderRadius: "4px",
                    border: "1px solid rgba(0,0,0,0.08)",
                    background: value.startsWith("#") || value.startsWith("rgb") ? colorValueToCss(value) : "transparent",
                  }}
                />
              </td>
              <td style={cellStyle}>
                <code style={{ fontSize: "12px", background: "var(--color-bg-secondary)", padding: "2px 6px", borderRadius: "4px" }}>
                  {value}
                </code>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );

  return (
    <DocPage>
      <PageHeader
        breadcrumb={t("colorModesBreadcrumb")}
        title={t("colorModesTitle")}
        description={t("colorModesDesc")}
        resources={false}
      />
      <p
        style={{
          fontSize: "14px",
          color: "var(--color-text-tertiary)",
          margin: "0 0 32px 0",
          lineHeight: "22px",
          fontFamily: FONT_BODY,
        }}
      >
        {t("colorModesIntro")}
      </p>
      <TokenTable tokens={light} title={t("colorModesLight")} />
      <TokenTable tokens={dark} title={t("colorModesDark")} />
      <PageFooter />
    </DocPage>
  );
};
