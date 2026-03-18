import { DocPage, PageHeader, PageFooter } from "./PageLayout";
import { useT } from "./i18n";
import { getPrimitivesSize } from "./tokensData";

const FONT_BODY = "'Inter', -apple-system, sans-serif";

const cellStyle: React.CSSProperties = {
  padding: "10px 12px",
  borderBottom: "1px solid var(--color-border-secondary)",
  fontSize: "13px",
  color: "var(--color-text-secondary)",
  verticalAlign: "middle",
  fontFamily: FONT_BODY,
};

export const PrimitivesSizeDoc = () => {
  const t = useT();
  const size = getPrimitivesSize();
  const sizeEntries = Object.entries(size).filter(([k]) => k !== "Full");
  const sizeFull = size.Full;

  return (
    <DocPage>
      <PageHeader
        breadcrumb={t("primitivesBreadcrumb")}
        title={t("primitivesSizeTitle")}
        description={t("primitivesSizeDesc")}
        resources={false}
      />

      <table style={{ width: "100%", borderCollapse: "collapse", marginBottom: "24px" }}>
        <thead>
          <tr>
            <th style={{ ...cellStyle, textAlign: "left", fontWeight: 500, color: "var(--color-text-tertiary)" }}>
              Token
            </th>
            <th style={{ ...cellStyle, textAlign: "right", fontWeight: 500, color: "var(--color-text-tertiary)" }}>
              Value (px)
            </th>
          </tr>
        </thead>
        <tbody>
          {sizeEntries.map(([name, value]) => (
            <tr key={name}>
              <td style={{ ...cellStyle, fontWeight: 500, color: "var(--color-text-primary)" }}>Size.{name}</td>
              <td style={{ ...cellStyle, textAlign: "right" }}>{value}</td>
            </tr>
          ))}
          {sizeFull != null && (
            <tr>
              <td style={{ ...cellStyle, fontWeight: 500, color: "var(--color-text-primary)" }}>Size.Full</td>
              <td style={{ ...cellStyle, textAlign: "right" }}>{sizeFull}</td>
            </tr>
          )}
        </tbody>
      </table>

      <PageFooter />
    </DocPage>
  );
};
