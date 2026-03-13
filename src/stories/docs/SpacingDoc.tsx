import { DocPage, PageHeader, PageFooter, SectionBadge } from "./PageLayout";
import { useT } from "./i18n";

const FONT_DISPLAY = "'Plus Jakarta Sans', -apple-system, sans-serif";
const FONT_BODY = "'Inter', -apple-system, sans-serif";

const spacingTokens = [
  { name: "spacing-none", rem: "0rem", px: "0px" },
  { name: "spacing-xxs", rem: "0.125rem", px: "2px" },
  { name: "spacing-xs", rem: "0.25rem", px: "4px" },
  { name: "spacing-sm", rem: "0.375rem", px: "6px" },
  { name: "spacing-md", rem: "0.5rem", px: "8px" },
  { name: "spacing-lg", rem: "0.75rem", px: "12px" },
  { name: "spacing-xl", rem: "1rem", px: "16px" },
  { name: "spacing-2xl", rem: "1.25rem", px: "20px" },
  { name: "spacing-3xl", rem: "1.5rem", px: "24px" },
  { name: "spacing-4xl", rem: "2rem", px: "32px" },
  { name: "spacing-5xl", rem: "2.5rem", px: "40px" },
  { name: "spacing-6xl", rem: "3rem", px: "48px" },
  { name: "spacing-7xl", rem: "4rem", px: "64px" },
  { name: "spacing-8xl", rem: "5rem", px: "80px" },
  { name: "spacing-9xl", rem: "6rem", px: "96px" },
  { name: "spacing-10xl", rem: "8rem", px: "128px" },
  { name: "spacing-11xl", rem: "10rem", px: "160px" },
];

const widthTokens = [
  { name: "w-xxs", rem: "20rem", px: "320px" },
  { name: "w-xs", rem: "24rem", px: "384px" },
  { name: "w-sm", rem: "30rem", px: "480px" },
  { name: "w-md", rem: "35rem", px: "560px" },
  { name: "w-lg", rem: "40rem", px: "640px" },
  { name: "w-xl", rem: "48rem", px: "768px" },
  { name: "w-2xl", rem: "56rem", px: "896px" },
  { name: "w-3xl", rem: "64rem", px: "1024px" },
  { name: "w-4xl", rem: "72rem", px: "1152px" },
  { name: "w-5xl", rem: "80rem", px: "1280px" },
  { name: "w-6xl", rem: "90rem", px: "1440px" },
  { name: "w-7xl", rem: "100rem", px: "1600px" },
];

const containerTokens = [
  { name: "container-max-w-sm", rem: "40rem", px: "640px" },
  { name: "container-max-w-md", rem: "48rem", px: "768px" },
  { name: "container-max-w-lg", rem: "80rem", px: "1280px" },
];

const paragraphTokens = [
  { name: "paragraph-max-w", rem: "45rem", px: "720px" },
];

const maxWidthPx = 1600;
const maxSpacingPx = 160;

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

const BarCell = ({ pxValue, maxPx }: { pxValue: number; maxPx: number }) => {
  const barWidth = Math.max((pxValue / maxPx) * 100, 0);
  return (
    <td style={cellStyle}>
      {pxValue > 0 && (
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
  );
};

export const SpacingDoc = () => {
  const t = useT();

  return (
    <DocPage>
      <PageHeader
        breadcrumb={t("spPrimBreadcrumb")}
        title={t("spacingTitle")}
        description={t("spacingPageDesc")}
        resources={false}
      />

      {/* Spacing section */}
      <div style={{ marginTop: "48px" }}>
        <h2 style={{ fontSize: "18px", fontWeight: 600, color: "#181d27", margin: "0 0 4px 0", fontFamily: FONT_DISPLAY }}>
          {t("spacing")}
          <SectionBadge />
        </h2>
        <p style={{ fontSize: "13px", color: "#717680", margin: "0 0 24px 0", maxWidth: "560px", lineHeight: "20px", fontFamily: FONT_BODY }}>
          {t("spacingSectionDesc")}
        </p>

        <table style={{ width: "100%", borderCollapse: "collapse" }}>
          <thead>
            <tr>
              <th style={{ ...headerCellStyle, width: "140px", textAlign: "left" }}>{t("name")}</th>
              <th style={{ ...headerCellStyle, width: "100px", textAlign: "left" }}>{t("sizeInRem")}</th>
              <th style={{ ...headerCellStyle, width: "80px", textAlign: "left" }}>{t("pixels")}</th>
              <th style={{ ...headerCellStyle, textAlign: "left" }}>{t("spacing")}</th>
            </tr>
          </thead>
          <tbody>
            {spacingTokens.map((s) => (
              <tr key={s.name}>
                <td style={{ ...cellStyle, fontWeight: 500, color: "#181d27" }}>{s.name}</td>
                <td style={cellStyle}>{s.rem}</td>
                <td style={cellStyle}>{s.px}</td>
                <BarCell pxValue={parseInt(s.px, 10)} maxPx={maxSpacingPx} />
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Widths section */}
      <div style={{ marginTop: "64px" }}>
        <h2 style={{ fontSize: "18px", fontWeight: 600, color: "#181d27", margin: "0 0 4px 0", fontFamily: FONT_DISPLAY }}>
          {t("widths")}
          <SectionBadge />
        </h2>
        <p style={{ fontSize: "13px", color: "#717680", margin: "0 0 24px 0", maxWidth: "560px", lineHeight: "20px", fontFamily: FONT_BODY }}>
          {t("widthsDesc")}
        </p>

        <table style={{ width: "100%", borderCollapse: "collapse" }}>
          <thead>
            <tr>
              <th style={{ ...headerCellStyle, width: "140px", textAlign: "left" }}>{t("name")}</th>
              <th style={{ ...headerCellStyle, width: "100px", textAlign: "left" }}>{t("sizeInRem")}</th>
              <th style={{ ...headerCellStyle, width: "80px", textAlign: "left" }}>{t("pixels")}</th>
              <th style={{ ...headerCellStyle, textAlign: "left" }}>{t("spacing")}</th>
            </tr>
          </thead>
          <tbody>
            {widthTokens.map((s) => (
              <tr key={s.name}>
                <td style={{ ...cellStyle, fontWeight: 500, color: "#181d27" }}>{s.name}</td>
                <td style={cellStyle}>{s.rem}</td>
                <td style={cellStyle}>{s.px}</td>
                <BarCell pxValue={parseInt(s.px, 10)} maxPx={maxWidthPx} />
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Containers section */}
      <div style={{ marginTop: "64px" }}>
        <h2 style={{ fontSize: "18px", fontWeight: 600, color: "#181d27", margin: "0 0 4px 0", fontFamily: FONT_DISPLAY }}>
          {t("containers")}
          <SectionBadge />
        </h2>
        <p style={{ fontSize: "13px", color: "#717680", margin: "0 0 24px 0", maxWidth: "560px", lineHeight: "20px", fontFamily: FONT_BODY }}>
          {t("containersDesc")}
        </p>

        <table style={{ width: "100%", borderCollapse: "collapse" }}>
          <thead>
            <tr>
              <th style={{ ...headerCellStyle, width: "200px", textAlign: "left" }}>{t("name")}</th>
              <th style={{ ...headerCellStyle, width: "100px", textAlign: "left" }}>{t("sizeInRem")}</th>
              <th style={{ ...headerCellStyle, width: "80px", textAlign: "left" }}>{t("pixels")}</th>
              <th style={{ ...headerCellStyle, textAlign: "left" }}>{t("spacing")}</th>
            </tr>
          </thead>
          <tbody>
            {containerTokens.map((s) => (
              <tr key={s.name}>
                <td style={{ ...cellStyle, fontWeight: 500, color: "#181d27" }}>{s.name}</td>
                <td style={cellStyle}>{s.rem}</td>
                <td style={cellStyle}>{s.px}</td>
                <BarCell pxValue={parseInt(s.px, 10)} maxPx={maxWidthPx} />
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Paragraph widths */}
      <div style={{ marginTop: "64px" }}>
        <h2 style={{ fontSize: "18px", fontWeight: 600, color: "#181d27", margin: "0 0 4px 0", fontFamily: FONT_DISPLAY }}>
          {t("paragraphMaxWidths")}
          <SectionBadge />
        </h2>
        <p style={{ fontSize: "13px", color: "#717680", margin: "0 0 24px 0", maxWidth: "560px", lineHeight: "20px", fontFamily: FONT_BODY }}>
          {t("paragraphDesc")}
        </p>

        <table style={{ width: "100%", borderCollapse: "collapse" }}>
          <thead>
            <tr>
              <th style={{ ...headerCellStyle, width: "200px", textAlign: "left" }}>{t("name")}</th>
              <th style={{ ...headerCellStyle, width: "100px", textAlign: "left" }}>{t("sizeInRem")}</th>
              <th style={{ ...headerCellStyle, width: "80px", textAlign: "left" }}>{t("pixels")}</th>
              <th style={{ ...headerCellStyle, textAlign: "left" }}>{t("spacing")}</th>
            </tr>
          </thead>
          <tbody>
            {paragraphTokens.map((s) => (
              <tr key={s.name}>
                <td style={{ ...cellStyle, fontWeight: 500, color: "#181d27" }}>{s.name}</td>
                <td style={cellStyle}>{s.rem}</td>
                <td style={cellStyle}>{s.px}</td>
                <BarCell pxValue={parseInt(s.px, 10)} maxPx={maxWidthPx} />
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <PageFooter />
    </DocPage>
  );
};
