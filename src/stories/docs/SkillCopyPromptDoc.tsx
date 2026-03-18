import { useEffect, useState } from "react";
import { DocPage, PageHeader, PageFooter, CopyButton } from "./PageLayout";
import { useT } from "./i18n";

const FONT_DISPLAY = "'Plus Jakarta Sans', -apple-system, sans-serif";
const FONT_BODY = "'Inter', -apple-system, sans-serif";

function getBaseUrl(): string {
  const base = import.meta.env.BASE_URL ?? "/";
  return base.endsWith("/") ? base : `${base}/`;
}

export const SkillCopyPromptDoc = () => {
  const t = useT();
  const [prompt, setPrompt] = useState<string>("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const base = getBaseUrl();
    const load = async () => {
      try {
        const r = await fetch(`${base}keystone-skill-prompt.txt`);
        if (r.ok) {
          const text = await r.text();
          if (text.trim()) {
            setPrompt(text);
            setLoading(false);
            return;
          }
        }
        const r2 = await fetch(`${base}keystone-skill.md`);
        if (r2.ok) {
          const md = await r2.text();
          const start = md.indexOf("<!-- PROMPT_START -->");
          const end = md.indexOf("<!-- PROMPT_END -->");
          if (start !== -1 && end !== -1 && end > start) {
            setPrompt(md.slice(start + "<!-- PROMPT_START -->".length, end).trim());
            setLoading(false);
            return;
          }
        }
        setError(true);
      } catch {
        setError(true);
      } finally {
        setLoading(false);
      }
    };
    void load();
  }, []);

  return (
    <DocPage>
      <PageHeader
        breadcrumb={t("skillCopyBreadcrumb")}
        title={t("skillCopyTitle")}
        description={t("skillCopyDesc")}
        resources={false}
      />

      <p
        style={{
          fontSize: "14px",
          color: "var(--color-text-secondary)",
          margin: "0 0 20px 0",
          lineHeight: "22px",
          fontFamily: FONT_BODY,
        }}
      >
        {t("skillCopyBody")}
      </p>

      {loading && (
        <p style={{ fontSize: "14px", color: "var(--color-text-tertiary)", fontFamily: FONT_BODY }}>{t("skillLoading")}</p>
      )}

      {!loading && error && !prompt && (
        <div
          style={{
            padding: "16px 20px",
            background: "var(--color-bg-warning-primary)",
            borderRadius: "8px",
            border: "1px solid var(--color-border-secondary)",
            marginBottom: "24px",
          }}
        >
          <p style={{ fontSize: "14px", color: "var(--color-text-primary)", margin: 0, fontFamily: FONT_BODY }}>
            {t("skillCopyMissing")}
          </p>
        </div>
      )}

      {prompt ? (
        <div style={{ marginBottom: "32px" }}>
          <div style={{ display: "flex", alignItems: "center", marginBottom: "8px", gap: 8, flexWrap: "wrap" }}>
            <span style={{ fontSize: "13px", fontWeight: 600, color: "var(--color-text-primary)", fontFamily: FONT_DISPLAY }}>
              {t("skillPromptLabel")}
            </span>
            <CopyButton text={prompt} label={t("skillCopyBtn")} copiedLabel={t("copySuccess")} />
          </div>
          <pre
            style={{
              background: "var(--color-bg-secondary)",
              borderRadius: "8px",
              padding: "16px",
              fontSize: "12px",
              lineHeight: "1.5",
              overflow: "auto",
              maxHeight: "420px",
              border: "1px solid var(--color-border-secondary)",
              fontFamily: "ui-monospace, monospace",
              whiteSpace: "pre-wrap",
              wordBreak: "break-word",
            }}
          >
            <code>{prompt}</code>
          </pre>
        </div>
      ) : null}

      <PageFooter />
    </DocPage>
  );
};
