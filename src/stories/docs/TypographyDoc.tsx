import { DocPage, PageHeader, PageFooter } from "./PageLayout";
import { useT } from "./i18n";

const FONT_DISPLAY = "'Plus Jakarta Sans', -apple-system, sans-serif";
const FONT_BODY = "'Inter', -apple-system, sans-serif";

const weights = [
  { label: "Regular", value: 400 },
  { label: "Medium", value: 500 },
  { label: "Semibold", value: 600 },
  { label: "Bold", value: 700 },
  { label: "Bold", value: 700 },
];

const displaySizes = [
  { name: "Display 2xl", size: "72px", lineHeight: "90px", letterSpacing: "-1.44px" },
  { name: "Display xl", size: "60px", lineHeight: "72px", letterSpacing: "-1.2px" },
  { name: "Display lg", size: "48px", lineHeight: "60px", letterSpacing: "-0.96px" },
  { name: "Display md", size: "36px", lineHeight: "44px", letterSpacing: "-0.72px" },
  { name: "Display sm", size: "30px", lineHeight: "38px", letterSpacing: "0" },
  { name: "Display xs", size: "24px", lineHeight: "32px", letterSpacing: "0" },
];

const textSizes = [
  { name: "Text xl", size: "20px", lineHeight: "30px" },
  { name: "Text lg", size: "18px", lineHeight: "28px" },
  { name: "Text md", size: "16px", lineHeight: "24px" },
  { name: "Text sm", size: "14px", lineHeight: "20px" },
  { name: "Text xs", size: "12px", lineHeight: "18px" },
];

const FontSpecimen = ({ family, label }: { family: string; label: string }) => (
  <div style={{ flex: 1, minWidth: "300px" }}>
    <p style={{ fontSize: "14px", color: "#98a2b3", margin: "0 0 12px 0", fontFamily: FONT_BODY }}>{label}</p>
    <p style={{ fontSize: "72px", fontWeight: 400, color: "#181d27", margin: "0 0 16px 0", fontFamily: family, lineHeight: 1 }}>
      Ag
    </p>
    <p style={{ fontSize: "16px", color: "#181d27", margin: "0 0 4px 0", fontFamily: family, letterSpacing: "1px" }}>
      ABCDEFGHIJKLMNOPQRSTUVWXYZ
    </p>
    <p style={{ fontSize: "16px", color: "#181d27", margin: "0 0 4px 0", fontFamily: family, letterSpacing: "1px" }}>
      abcdefghijklmnopqrstuvwxyz
    </p>
    <p style={{ fontSize: "16px", color: "#181d27", margin: 0, fontFamily: family, letterSpacing: "1px" }}>
      0123456789 !@#$%^&*()
    </p>
  </div>
);

const TypeScalePreview = ({ label }: { label: string }) => (
  <div style={{ textAlign: "right", marginRight: "16px" }}>
    {[
      { size: "36px", weight: "Regular", fw: 400 },
      { size: "28px", weight: "Medium", fw: 500 },
      { size: "22px", weight: "Semibold", fw: 600 },
      { size: "18px", weight: "Bold", fw: 700 },
    ].map((item) => (
      <div key={item.weight} style={{ marginBottom: "4px" }}>
        <span style={{ fontSize: item.size, fontWeight: item.fw, color: "#181d27", lineHeight: 1.2, fontFamily: FONT_DISPLAY }}>{label}</span>
        <span style={{ fontSize: "11px", color: "#98a2b3", marginLeft: "8px", fontWeight: 400, fontFamily: FONT_BODY }}>{item.weight}</span>
      </div>
    ))}
  </div>
);

export const TypographyDoc = () => {
  const t = useT();

  return (
    <DocPage>
      <PageHeader
        breadcrumb={t("typographyBreadcrumb")}
        title={t("typographyTitle")}
        description={t("typographyDesc")}
      />

      {/* Font Specimens */}
      <div style={{ display: "flex", gap: "48px", marginTop: "48px", marginBottom: "64px", flexWrap: "wrap" }}>
        <FontSpecimen family={FONT_DISPLAY} label={`Plus Jakarta Sans (${t("header")})`} />
        <FontSpecimen family={FONT_BODY} label={`Inter (${t("body")})`} />
        <TypeScalePreview label="Aa" />
      </div>

      {/* Type Scale Matrix */}
      <div style={{ overflowX: "auto" }}>
        <table style={{ width: "100%", borderCollapse: "collapse" }}>
          <thead>
            <tr>
              <th style={{ width: "60px" }} />
              {weights.map((w, i) => (
                <th
                  key={`${w.label}-${i}`}
                  style={{
                    fontSize: "12px",
                    color: "#98a2b3",
                    fontWeight: 500,
                    textAlign: "left",
                    padding: "8px 8px 16px 8px",
                    fontFamily: FONT_BODY,
                  }}
                />
              ))}
            </tr>
          </thead>
          <tbody>
            {displaySizes.map((row) => (
              <tr key={row.name}>
                <td
                  style={{
                    padding: "8px 8px 8px 0",
                    fontSize: "11px",
                    color: "#98a2b3",
                    verticalAlign: "top",
                    whiteSpace: "nowrap",
                    borderBottom: "1px solid #f5f5f5",
                    fontFamily: FONT_BODY,
                  }}
                >
                  {row.size}
                </td>
                {weights.map((w, i) => (
                  <td
                    key={`${row.name}-${w.label}-${i}`}
                    style={{
                      padding: "8px",
                      verticalAlign: "top",
                      borderBottom: "1px solid #f5f5f5",
                    }}
                  >
                    <p
                      style={{
                        fontSize: row.size,
                        fontWeight: w.value,
                        lineHeight: row.lineHeight,
                        letterSpacing: row.letterSpacing,
                        color: "#181d27",
                        margin: 0,
                        fontFamily: FONT_DISPLAY,
                      }}
                    >
                      {row.name}
                    </p>
                    <p style={{ fontSize: "11px", color: "#98a2b3", margin: "4px 0 0 0", fontFamily: FONT_BODY }}>{w.label}</p>
                  </td>
                ))}
              </tr>
            ))}
            {textSizes.map((row) => (
              <tr key={row.name}>
                <td
                  style={{
                    padding: "8px 8px 8px 0",
                    fontSize: "11px",
                    color: "#98a2b3",
                    verticalAlign: "top",
                    whiteSpace: "nowrap",
                    borderBottom: "1px solid #f5f5f5",
                    fontFamily: FONT_BODY,
                  }}
                >
                  {row.size}
                </td>
                {weights.map((w, i) => (
                  <td
                    key={`${row.name}-${w.label}-${i}`}
                    style={{
                      padding: "8px",
                      verticalAlign: "top",
                      borderBottom: "1px solid #f5f5f5",
                    }}
                  >
                    <p
                      style={{
                        fontSize: row.size,
                        fontWeight: w.value,
                        lineHeight: row.lineHeight,
                        color: "#181d27",
                        margin: 0,
                        fontFamily: FONT_BODY,
                      }}
                    >
                      {row.name}
                    </p>
                    <p style={{ fontSize: "11px", color: "#98a2b3", margin: "4px 0 0 0", fontFamily: FONT_BODY }}>{w.label}</p>
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <PageFooter />
    </DocPage>
  );
};
