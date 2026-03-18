import { DocPage, PageHeader, PageFooter } from "./PageLayout";
import { useT } from "./i18n";

const FONT_DISPLAY = "'Plus Jakarta Sans', -apple-system, sans-serif";
const FONT_BODY = "'Inter', -apple-system, sans-serif";

const section = (title: string, body: string) => (
  <>
    <h2 style={{ fontSize: "18px", fontWeight: 600, color: "var(--color-text-primary)", margin: "24px 0 12px 0", fontFamily: FONT_DISPLAY }}>
      {title}
    </h2>
    <p style={{ fontSize: "14px", color: "var(--color-text-secondary)", lineHeight: "24px", margin: "0 0 8px 0", fontFamily: FONT_BODY }}>{body}</p>
  </>
);

export const ClonarManualComponentesDoc = () => {
  const t = useT();
  return (
    <DocPage>
      <PageHeader breadcrumb={t("navSectionClonar")} title={t("clonarCompTitle")} description={t("clonarCompDesc")} resources={false} />

      <div
        style={{
          padding: "16px 20px",
          background: "var(--color-bg-secondary)",
          borderRadius: "8px",
          border: "1px solid var(--color-border-secondary)",
          marginBottom: "8px",
        }}
      >
        <p style={{ fontSize: "13px", color: "var(--color-text-secondary)", margin: "0 0 8px 0", lineHeight: "20px", fontFamily: FONT_BODY }}>
          {t("clonarManualWarning")}
        </p>
        <p style={{ fontSize: "13px", color: "var(--color-text-brand-primary)", margin: 0, lineHeight: "20px", fontFamily: FONT_BODY, fontWeight: 500 }}>
          {t("clonarPreferSkill")}
        </p>
      </div>

      {section(t("clonarCompReactTitle"), t("clonarCompReactBody"))}
      {section(t("clonarCompFlutterTitle"), t("clonarCompFlutterBody"))}

      <PageFooter />
    </DocPage>
  );
};
