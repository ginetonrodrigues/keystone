import { DocPage, PageHeader, PageFooter } from "./PageLayout";
import { useT } from "./i18n";

const FONT_BODY = "'Inter', -apple-system, sans-serif";

const shadows = [
  {
    name: "shadow-xs",
    value: "0px 1px 2px rgba(10, 13, 18, 0.05)",
  },
  {
    name: "shadow-sm",
    value: "0px 1px 3px rgba(10, 13, 18, 0.1), 0px 1px 2px -1px rgba(10, 13, 18, 0.1)",
  },
  {
    name: "shadow-md",
    value: "0px 4px 6px -1px rgba(10, 13, 18, 0.1), 0px 2px 4px -2px rgba(10, 13, 18, 0.06)",
  },
  {
    name: "shadow-lg",
    value:
      "0px 12px 16px -4px rgba(10, 13, 18, 0.08), 0px 4px 6px -2px rgba(10, 13, 18, 0.03), 0px 2px 2px -1px rgba(10, 13, 18, 0.04)",
  },
  {
    name: "shadow-xl",
    value:
      "0px 20px 24px -4px rgba(10, 13, 18, 0.08), 0px 8px 8px -4px rgba(10, 13, 18, 0.03), 0px 3px 3px -1.5px rgba(10, 13, 18, 0.04)",
  },
  {
    name: "shadow-2xl",
    value: "0px 24px 48px -12px rgba(10, 13, 18, 0.18), 0px 4px 4px -2px rgba(10, 13, 18, 0.04)",
  },
  {
    name: "shadow-3xl",
    value: "0px 32px 64px -12px rgba(10, 13, 18, 0.14), 0px 5px 5px -2.5px rgba(10, 13, 18, 0.04)",
  },
];

export const ShadowsDoc = () => {
  const t = useT();

  return (
    <DocPage>
      <PageHeader
        breadcrumb={t("shadowsBreadcrumb")}
        title={t("shadowsTitle")}
        description={t("shadowsPageDesc")}
      />

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(120px, 1fr))",
          gap: "24px",
          marginTop: "48px",
        }}
      >
        {shadows.map((s) => (
          <div
            key={s.name}
            style={{
              backgroundColor: "#ffffff",
              borderRadius: "12px",
              padding: "20px 16px",
              display: "flex",
              alignItems: "flex-start",
              justifyContent: "flex-start",
              minHeight: "140px",
              boxShadow: s.value,
              border: "1px solid rgba(233, 234, 235, 0.3)",
            }}
          >
            <span style={{ fontSize: "12px", fontWeight: 500, color: "#535862", fontFamily: FONT_BODY }}>{s.name}</span>
          </div>
        ))}
      </div>

      <PageFooter />
    </DocPage>
  );
};
