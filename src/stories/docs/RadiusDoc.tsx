import { DocPage, PageHeader, PageFooter, SectionBadge } from "./PageLayout";
import { useT } from "./i18n";

const FONT_DISPLAY = "'Plus Jakarta Sans', -apple-system, sans-serif";
const FONT_BODY = "'Inter', -apple-system, sans-serif";

const radii = [
  { name: "radius-none", rem: "0rem", px: "0px", radius: 0 },
  { name: "radius-xxs", rem: "0.125rem", px: "2px", radius: 2 },
  { name: "radius-xs", rem: "0.25rem", px: "4px", radius: 4 },
  { name: "radius-sm", rem: "0.375rem", px: "6px", radius: 6 },
  { name: "radius-md", rem: "0.5rem", px: "8px", radius: 8 },
  { name: "radius-lg", rem: "0.625rem", px: "10px", radius: 10 },
  { name: "radius-xl", rem: "0.75rem", px: "12px", radius: 12 },
  { name: "radius-2xl", rem: "1rem", px: "16px", radius: 16 },
  { name: "radius-3xl", rem: "1.25rem", px: "20px", radius: 20 },
  { name: "radius-4xl", rem: "1.5rem", px: "24px", radius: 24 },
  { name: "radius-full", rem: "∞", px: "9999px", radius: 9999 },
];

const maxBarPx = 24;

const cellStyle: React.CSSProperties = {
  padding: "16px 0",
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

export const RadiusDoc = () => {
  const t = useT();

  return (
    <DocPage>
      <PageHeader
        breadcrumb={t("spPrimBreadcrumb")}
        title={t("radiusTitle")}
        description={t("radiusDesc")}
      />

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(90px, 1fr))",
          gap: "16px",
          marginTop: "48px",
          marginBottom: "64px",
        }}
      >
        {radii.filter((r) => r.name !== "radius-full").map((r) => (
          <div
            key={r.name}
            style={{
              border: "1px solid #e9eaeb",
              padding: "16px",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              height: "100px",
              borderRadius: `${r.radius}px`,
            }}
          >
            <span style={{ fontSize: "11px", color: "#535862", fontWeight: 500, fontFamily: FONT_BODY }}>{r.name}</span>
          </div>
        ))}
      </div>

      <div>
        <h2 style={{ fontSize: "18px", fontWeight: 600, color: "#181d27", margin: "0 0 4px 0", fontFamily: FONT_DISPLAY }}>
          {t("radius")}
          <SectionBadge />
        </h2>
        <p style={{ fontSize: "13px", color: "#717680", margin: "0 0 24px 0", maxWidth: "560px", lineHeight: "20px", fontFamily: FONT_BODY }}>
          {t("radiusSectionDesc")}
        </p>

        <table style={{ width: "100%", borderCollapse: "collapse" }}>
          <thead>
            <tr>
              <th style={{ ...headerCellStyle, width: "120px", textAlign: "left" }}>{t("name")}</th>
              <th style={{ ...headerCellStyle, width: "120px", textAlign: "left" }}>{t("sizeInRem")}</th>
              <th style={{ ...headerCellStyle, width: "80px", textAlign: "left" }}>{t("pixels")}</th>
              <th style={{ ...headerCellStyle, textAlign: "left" }}>{t("radius")}</th>
            </tr>
          </thead>
          <tbody>
            {radii.map((r) => {
              const pxNum = r.name === "radius-full" ? maxBarPx : r.radius;
              const barWidth = Math.min((pxNum / maxBarPx) * 100, 100);
              return (
                <tr key={r.name}>
                  <td style={{ ...cellStyle, fontWeight: 500, color: "#181d27" }}>{r.name}</td>
                  <td style={cellStyle}>{r.rem}</td>
                  <td style={cellStyle}>{r.px}</td>
                  <td style={cellStyle}>
                    <div
                      style={{
                        height: "16px",
                        width: `${barWidth}%`,
                        backgroundColor: "#a1f1b2",
                        borderRadius: `${Math.min(r.radius, 8)}px`,
                        minWidth: r.radius > 0 || r.name === "radius-full" ? "8px" : "0px",
                        maxWidth: "200px",
                      }}
                    />
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      <PageFooter />
    </DocPage>
  );
};
