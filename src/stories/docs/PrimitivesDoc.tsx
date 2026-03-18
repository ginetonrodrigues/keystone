import { DocPage, PageHeader, PageFooter } from "./PageLayout";
import { useT } from "./i18n";
import {
  getPrimitivesColors,
  getPrimitivesSize,
  colorValueToCss,
} from "./tokensData";

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

export const PrimitivesDoc = () => {
  const t = useT();
  const colors = getPrimitivesColors();
  const size = getPrimitivesSize();
  const sizeEntries = Object.entries(size).filter(([k]) => k !== "Full");
  const sizeFull = size.Full;

  return (
    <DocPage>
      <PageHeader
        breadcrumb={t("primitivesBreadcrumb")}
        title={t("primitivesTitle")}
        description={t("primitivesDesc")}
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
        {t("primitivesIntro")}
      </p>

      {/* Primitives: Colors */}
      <h2
        style={{
          fontSize: "18px",
          fontWeight: 600,
          color: "var(--color-text-primary)",
          margin: "0 0 16px 0",
          fontFamily: FONT_DISPLAY,
        }}
      >
        {t("primitivesColorsTitle")}
      </h2>
      <p
        style={{
          fontSize: "13px",
          color: "var(--color-text-tertiary)",
          margin: "0 0 20px 0",
          lineHeight: "20px",
          fontFamily: FONT_BODY,
        }}
      >
        {t("primitivesColorsDesc")}
      </p>
      {Object.entries(colors).map(([category, swatches]) => (
        <div key={category} style={{ marginBottom: "32px" }}>
          <h3
            style={{
              fontSize: "15px",
              fontWeight: 600,
              color: "var(--color-text-primary)",
              margin: "0 0 12px 0",
              fontFamily: FONT_DISPLAY,
            }}
          >
            {category}
          </h3>
          <table style={{ width: "100%", borderCollapse: "collapse" }}>
            <thead>
              <tr>
                <th
                  style={{
                    ...cellStyle,
                    textAlign: "left",
                    fontWeight: 500,
                    color: "var(--color-text-tertiary)",
                  }}
                >
                  Token
                </th>
                <th
                  style={{
                    ...cellStyle,
                    width: "72px",
                    textAlign: "center",
                    fontWeight: 500,
                    color: "var(--color-text-tertiary)",
                  }}
                >
                  {t("ctPreview")}
                </th>
                <th
                  style={{
                    ...cellStyle,
                    textAlign: "left",
                    fontWeight: 500,
                    color: "var(--color-text-tertiary)",
                  }}
                >
                  Value
                </th>
              </tr>
            </thead>
            <tbody>
              {Object.entries(swatches).map(([name, value]) => (
                <tr key={name}>
                  <td style={{ ...cellStyle, fontWeight: 500, color: "var(--color-text-primary)" }}>
                    {category}.{name}
                  </td>
                  <td style={{ ...cellStyle, padding: "6px 12px" }}>
                    <div
                      style={{
                        width: "32px",
                        height: "24px",
                        borderRadius: "4px",
                        border: "1px solid rgba(0,0,0,0.08)",
                        background: colorValueToCss(value),
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
      ))}

      {/* Primitives: Size (spacing scale) */}
      <h2
        style={{
          fontSize: "18px",
          fontWeight: 600,
          color: "var(--color-text-primary)",
          margin: "48px 0 16px 0",
          fontFamily: FONT_DISPLAY,
        }}
      >
        {t("primitivesSizeTitle")}
      </h2>
      <p
        style={{
          fontSize: "13px",
          color: "var(--color-text-tertiary)",
          margin: "0 0 20px 0",
          lineHeight: "20px",
          fontFamily: FONT_BODY,
        }}
      >
        {t("primitivesSizeDesc")}
      </p>
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
              <td style={{ ...cellStyle, fontWeight: 500, color: "var(--color-text-primary)" }}>
                Size.{name}
              </td>
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
