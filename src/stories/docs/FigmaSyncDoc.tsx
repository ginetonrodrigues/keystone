import { DocPage, PageHeader, PageFooter } from "./PageLayout";
import { useT } from "./i18n";

const FONT_DISPLAY = "'Plus Jakarta Sans', -apple-system, sans-serif";
const FONT_BODY = "'Inter', -apple-system, sans-serif";

const stepStyle = {
  marginBottom: "24px",
  padding: "20px 24px",
  background: "var(--color-bg-secondary)",
  borderRadius: "12px",
  border: "1px solid var(--color-border-secondary)",
} as const;

export const FigmaSyncDoc = () => {
  const t = useT();

  return (
    <DocPage>
      <PageHeader
        breadcrumb={t("figmaSyncBreadcrumb")}
        title={t("figmaSyncTitle")}
        description={t("figmaSyncDesc")}
        resources={false}
      />

      <div style={stepStyle}>
        <h3
          style={{
            fontSize: "15px",
            fontWeight: 600,
            color: "var(--color-text-primary)",
            margin: "0 0 8px 0",
            fontFamily: FONT_DISPLAY,
          }}
        >
          {t("figmaSyncStep1Title")}
        </h3>
        <p
          style={{
            fontSize: "14px",
            color: "var(--color-text-secondary)",
            margin: 0,
            lineHeight: "22px",
            fontFamily: FONT_BODY,
          }}
        >
          {t("figmaSyncStep1Body")}
        </p>
      </div>

      <div style={stepStyle}>
        <h3
          style={{
            fontSize: "15px",
            fontWeight: 600,
            color: "var(--color-text-primary)",
            margin: "0 0 8px 0",
            fontFamily: FONT_DISPLAY,
          }}
        >
          {t("figmaSyncStep2Title")}
        </h3>
        <p
          style={{
            fontSize: "14px",
            color: "var(--color-text-secondary)",
            margin: 0,
            lineHeight: "22px",
            fontFamily: FONT_BODY,
          }}
        >
          {t("figmaSyncStep2Body")}
        </p>
        <pre
          style={{
            marginTop: "12px",
            padding: "12px 16px",
            background: "var(--color-bg-tertiary)",
            borderRadius: "8px",
            fontSize: "13px",
            fontFamily: "ui-monospace, monospace",
            color: "var(--color-text-primary)",
            border: "1px solid var(--color-border-tertiary)",
          }}
        >
          npm run sync-tokens
        </pre>
      </div>

      <div style={stepStyle}>
        <h3
          style={{
            fontSize: "15px",
            fontWeight: 600,
            color: "var(--color-text-primary)",
            margin: "0 0 8px 0",
            fontFamily: FONT_DISPLAY,
          }}
        >
          {t("figmaSyncStep3Title")}
        </h3>
        <p
          style={{
            fontSize: "14px",
            color: "var(--color-text-secondary)",
            margin: 0,
            lineHeight: "22px",
            fontFamily: FONT_BODY,
          }}
        >
          {t("figmaSyncStep3Body")}
        </p>
      </div>

      <p
        style={{
          fontSize: "13px",
          color: "var(--color-text-tertiary)",
          margin: "0 0 32px 0",
          lineHeight: "20px",
          fontFamily: FONT_BODY,
        }}
      >
        {t("figmaSyncSeeAlso")}{" "}
        <code style={{ background: "var(--color-bg-tertiary)", padding: "2px 6px", borderRadius: "4px" }}>
          src/styles/README-tokens.md
        </code>
      </p>

      <PageFooter />
    </DocPage>
  );
};
