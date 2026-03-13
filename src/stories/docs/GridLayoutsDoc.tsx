import { DocPage, PageHeader, PageFooter } from "./PageLayout";
import { useT } from "./i18n";

const FONT_DISPLAY = "'Plus Jakarta Sans', -apple-system, sans-serif";
const FONT_BODY = "'Inter', -apple-system, sans-serif";

interface BreakpointProps {
  label: string;
  width: number;
  columns: number;
  gutter: number;
  margin: number;
  colsLabel: string;
  gutterLabel: string;
  marginLabel: string;
}

const Breakpoint = ({ label, width, columns, gutter, margin, colsLabel, gutterLabel, marginLabel }: BreakpointProps) => {
  const scale = Math.min(1, 700 / width);
  const scaledWidth = width * scale;
  const scaledHeight = Math.round(scaledWidth * 0.6);

  return (
    <div style={{ marginBottom: "48px" }}>
      <div
        style={{
          width: `${scaledWidth}px`,
          height: `${scaledHeight}px`,
          border: "1px solid #e9eaeb",
          borderRadius: "8px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#fafafa",
          position: "relative",
        }}
      >
        <p style={{ fontSize: "20px", fontWeight: 600, color: "#181d27", margin: 0, fontFamily: FONT_DISPLAY }}>{label}</p>
        <p style={{ fontSize: "13px", color: "#98a2b3", margin: "4px 0 0 0", fontFamily: FONT_BODY }}>
          {columns} {colsLabel} • {gutter}px {gutterLabel}
        </p>
      </div>

      <div
        style={{
          display: "flex",
          gap: `${gutter * scale}px`,
          marginTop: "8px",
          padding: `0 ${margin * scale}px`,
          width: `${scaledWidth}px`,
        }}
      >
        {Array.from({ length: columns }).map((_, i) => (
          <div
            key={i}
            style={{
              flex: 1,
              height: "20px",
              backgroundColor: "#fee4e2",
              borderRadius: "2px",
              opacity: 0.6,
            }}
          />
        ))}
      </div>
      <div style={{ width: `${scaledWidth}px`, display: "flex", justifyContent: "center", marginTop: "4px" }}>
        <span style={{ fontSize: "11px", color: "#98a2b3", fontFamily: FONT_BODY }}>{margin}px {marginLabel}</span>
      </div>
    </div>
  );
};

interface ColumnGridProps {
  cols: number;
  label: string;
  columnsLabel: string;
}

const ColumnGrid = ({ cols, label, columnsLabel }: ColumnGridProps) => (
  <div
    style={{
      border: "1px solid #e9eaeb",
      borderRadius: "12px",
      padding: "24px 32px",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      gap: "12px",
    }}
  >
    <p style={{ fontSize: "18px", fontWeight: 600, color: "#181d27", margin: 0, fontFamily: FONT_DISPLAY }}>{label}</p>
    <p style={{ fontSize: "12px", color: "#98a2b3", margin: 0, fontFamily: FONT_BODY }}>{cols} {columnsLabel} • auto</p>
  </div>
);

export const GridLayoutsDoc = () => {
  const t = useT();

  return (
    <DocPage>
      <PageHeader
        breadcrumb={t("gridBreadcrumb")}
        title={t("gridTitle")}
        description={t("gridDesc")}
      />

      <div style={{ marginTop: "48px" }}>
        <h3 style={{ fontSize: "14px", color: "#98a2b3", fontWeight: 500, margin: "0 0 24px 0", fontFamily: FONT_BODY }}>{t("gridLayouts")}</h3>

        <Breakpoint label="Desktop 1 280px" width={1280} columns={12} gutter={32} margin={32} colsLabel={t("cols")} gutterLabel={t("gutter")} marginLabel={t("margin")} />
        <Breakpoint label="Tablet 768px" width={768} columns={8} gutter={24} margin={24} colsLabel={t("cols")} gutterLabel={t("gutter")} marginLabel={t("margin")} />
        <Breakpoint label="iPhone 375px" width={375} columns={4} gutter={16} margin={16} colsLabel={t("cols")} gutterLabel={t("gutter")} marginLabel={t("margin")} />
      </div>

      <div style={{ marginTop: "64px" }}>
        <h3 style={{ fontSize: "14px", color: "#98a2b3", fontWeight: 500, margin: "0 0 24px 0", fontFamily: FONT_BODY }}>{t("commonGridLayouts")}</h3>

        <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
          <ColumnGrid cols={12} label={`12 ${t("columns")} (auto)`} columnsLabel={t("columns")} />
          <ColumnGrid cols={6} label={`6 ${t("columns")} (auto)`} columnsLabel={t("columns")} />
          <ColumnGrid cols={5} label={`5 ${t("columns")} (auto)`} columnsLabel={t("columns")} />
          <ColumnGrid cols={3} label={`3 ${t("columns")} auto`} columnsLabel={t("columns")} />
          <ColumnGrid cols={2} label={`2 ${t("columns")} auto`} columnsLabel={t("columns")} />
        </div>
      </div>

      <PageFooter />
    </DocPage>
  );
};
