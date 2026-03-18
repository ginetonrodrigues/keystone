import { DocPage, PageHeader, PageFooter } from "./PageLayout";
import { useT } from "./i18n";
import { getContainersTokens } from "./tokensData";

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

export const ContainersDoc = () => {
  const t = useT();
  const tokens = getContainersTokens();

  return (
    <DocPage>
      <PageHeader
        breadcrumb={t("containersBreadcrumb")}
        title={t("containersTitle")}
        description={t("containersDesc")}
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
        {t("containersIntro")}
      </p>
      <table style={{ width: "100%", borderCollapse: "collapse" }}>
        <thead>
          <tr>
            <th style={{ ...cellStyle, textAlign: "left", fontWeight: 500, color: "var(--color-text-tertiary)" }}>Token</th>
            <th style={{ ...cellStyle, textAlign: "right", fontWeight: 500, color: "var(--color-text-tertiary)" }}>Value (px)</th>
          </tr>
        </thead>
        <tbody>
          {Object.entries(tokens).map(([name, value]) => (
            <tr key={name}>
              <td style={{ ...cellStyle, fontWeight: 500, color: "var(--color-text-primary)" }}>{name}</td>
              <td style={{ ...cellStyle, textAlign: "right" }}>{value}px</td>
            </tr>
          ))}
        </tbody>
      </table>
      <PageFooter />
    </DocPage>
  );
};
