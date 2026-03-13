import { DocPage, PageHeader, PageFooter, SectionBadge } from "./PageLayout";
import { useT } from "./i18n";

const FONT_DISPLAY = "'Plus Jakarta Sans', -apple-system, sans-serif";
const FONT_BODY = "'Inter', -apple-system, sans-serif";

const spacingPrimitives = [
  { step: "0", rem: "0rem", px: "0px" },
  { step: "0.5", rem: "0.125rem", px: "2px" },
  { step: "1", rem: "0.25rem", px: "4px" },
  { step: "2", rem: "0.5rem", px: "8px" },
  { step: "3", rem: "0.75rem", px: "12px" },
  { step: "4", rem: "1rem", px: "16px" },
  { step: "5", rem: "1.25rem", px: "20px" },
  { step: "6", rem: "1.5rem", px: "24px" },
  { step: "8", rem: "2rem", px: "32px" },
  { step: "10", rem: "2.5rem", px: "40px" },
  { step: "12", rem: "3rem", px: "48px" },
  { step: "14", rem: "3.5rem", px: "56px" },
  { step: "16", rem: "4rem", px: "64px" },
  { step: "20", rem: "5rem", px: "80px" },
  { step: "24", rem: "6rem", px: "96px" },
  { step: "28", rem: "7rem", px: "112px" },
  { step: "32", rem: "8rem", px: "128px" },
  { step: "36", rem: "9rem", px: "144px" },
  { step: "40", rem: "10rem", px: "160px" },
  { step: "44", rem: "11rem", px: "176px" },
  { step: "48", rem: "12rem", px: "192px" },
  { step: "56", rem: "14rem", px: "224px" },
  { step: "64", rem: "16rem", px: "256px" },
  { step: "72", rem: "18rem", px: "288px" },
  { step: "80", rem: "20rem", px: "320px" },
  { step: "96", rem: "24rem", px: "384px" },
  { step: "100", rem: "25rem", px: "400px" },
  { step: "112", rem: "28rem", px: "448px" },
  { step: "120", rem: "30rem", px: "480px" },
  { step: "140", rem: "35rem", px: "560px" },
  { step: "150", rem: "37.5rem", px: "600px" },
  { step: "160", rem: "40rem", px: "640px" },
  { step: "200", rem: "50rem", px: "800px" },
  { step: "240", rem: "60rem", px: "960px" },
  { step: "256", rem: "64rem", px: "1024px" },
  { step: "280", rem: "70rem", px: "1120px" },
  { step: "320", rem: "80rem", px: "1280px" },
  { step: "360", rem: "90rem", px: "1440px" },
  { step: "400", rem: "100rem", px: "1600px" },
  { step: "480", rem: "120rem", px: "1920px" },
];

const maxPx = 1920;

const cellStyle: React.CSSProperties = {
  padding: "12px 0",
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

export const SpacingPrimitivesDoc = () => {
  const t = useT();

  return (
    <DocPage>
      <PageHeader
        breadcrumb={t("spPrimBreadcrumb")}
        title={t("spPrimTitle")}
        description={t("spPrimDesc")}
        resources={false}
      />

      <div style={{ marginTop: "48px" }}>
        <h2 style={{ fontSize: "18px", fontWeight: 600, color: "#181d27", margin: "0 0 4px 0", fontFamily: FONT_DISPLAY }}>
          {t("spacing")}
          <SectionBadge />
        </h2>
        <p style={{ fontSize: "13px", color: "#717680", margin: "0 0 24px 0", maxWidth: "560px", lineHeight: "20px", fontFamily: FONT_BODY }}>
          {t("spPrimBody1")}
        </p>
        <p style={{ fontSize: "13px", color: "#717680", margin: "0 0 32px 0", maxWidth: "560px", lineHeight: "20px", fontFamily: FONT_BODY }}>
          {t("spPrimBody2")}
        </p>

        <table style={{ width: "100%", borderCollapse: "collapse" }}>
          <thead>
            <tr>
              <th style={{ ...headerCellStyle, width: "80px", textAlign: "left" }}>{t("name")}</th>
              <th style={{ ...headerCellStyle, width: "100px", textAlign: "left" }}>{t("unitsInRem")}</th>
              <th style={{ ...headerCellStyle, width: "80px", textAlign: "left" }}>{t("pixels")}</th>
              <th style={{ ...headerCellStyle, textAlign: "left" }}>{t("spacing")}</th>
            </tr>
          </thead>
          <tbody>
            {spacingPrimitives.map((s) => {
              const pxNum = parseInt(s.px, 10);
              const barWidth = Math.max((pxNum / maxPx) * 100, 0);
              return (
                <tr key={s.step}>
                  <td style={{ ...cellStyle, fontWeight: 500, color: "#181d27" }}>{s.step}</td>
                  <td style={cellStyle}>{s.rem}</td>
                  <td style={cellStyle}>{s.px}</td>
                  <td style={cellStyle}>
                    {pxNum > 0 && (
                      <div
                        style={{
                          height: "8px",
                          width: `${barWidth}%`,
                          backgroundColor: "#14dd3e",
                          borderRadius: "2px",
                          minWidth: "2px",
                          maxWidth: "100%",
                        }}
                      />
                    )}
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
