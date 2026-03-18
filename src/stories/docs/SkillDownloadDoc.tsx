import { DocPage, PageHeader, PageFooter } from "./PageLayout";
import { useT } from "./i18n";

const FONT_DISPLAY = "'Plus Jakarta Sans', -apple-system, sans-serif";
const FONT_BODY = "'Inter', -apple-system, sans-serif";

function getBaseUrl(): string {
  const base = import.meta.env.BASE_URL ?? "/";
  return base.endsWith("/") ? base : `${base}/`;
}

export const SkillDownloadDoc = () => {
  const t = useT();
  const href = `${getBaseUrl()}keystone-skill.md`;

  return (
    <DocPage>
      <PageHeader
        breadcrumb={t("skillDownloadBreadcrumb")}
        title={t("skillDownloadTitle")}
        description={t("skillDownloadDesc")}
        resources={false}
      />

      <p
        style={{
          fontSize: "14px",
          color: "var(--color-text-secondary)",
          margin: "0 0 24px 0",
          lineHeight: "22px",
          fontFamily: FONT_BODY,
        }}
      >
        {t("skillDownloadBody")}
      </p>

      <a
        href={href}
        download="keystone-skill.md"
        style={{
          display: "inline-flex",
          alignItems: "center",
          gap: "8px",
          padding: "10px 18px",
          fontSize: "14px",
          fontWeight: 600,
          color: "#fff",
          background: "var(--color-bg-brand-solid, #079455)",
          borderRadius: "8px",
          textDecoration: "none",
          fontFamily: FONT_DISPLAY,
        }}
      >
        {t("skillDownloadHint")}: {t("skillDownloadLink")}
      </a>

      <PageFooter />
    </DocPage>
  );
};
