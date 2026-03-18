import { DocPage, PageHeader, PageFooter, CopyButton } from "./PageLayout";
import { useT } from "./i18n";

const FONT_DISPLAY = "'Plus Jakarta Sans', -apple-system, sans-serif";
const FONT_BODY = "'Inter', -apple-system, sans-serif";

// Token = nome sem --  |  ref = primitiva (ex.: color-gray-900)
type TokenRow = { token: string; ref: string };

// TEXT COLORS (theme.css)
const TEXT_TOKENS: TokenRow[] = [
  { token: "color-text-white", ref: "color-white" },
  { token: "color-text-primary", ref: "color-gray-900" },
  { token: "color-text-secondary", ref: "color-gray-700" },
  { token: "color-text-secondary_hover", ref: "color-gray-800" },
  { token: "color-text-tertiary", ref: "color-gray-600" },
  { token: "color-text-tertiary_hover", ref: "color-gray-700" },
  { token: "color-text-quaternary", ref: "color-gray-500" },
  { token: "color-text-error-primary", ref: "color-error-600" },
  { token: "color-text-error-primary_hover", ref: "color-error-700" },
  { token: "color-text-warning-primary", ref: "color-warning-600" },
  { token: "color-text-success-primary", ref: "color-success-600" },
  { token: "color-text-disabled", ref: "color-gray-500" },
  { token: "color-text-placeholder", ref: "color-gray-500" },
  { token: "color-text-placeholder_subtle", ref: "color-gray-300" },
  { token: "color-text-primary_on-brand", ref: "color-white" },
  { token: "color-text-secondary_on-brand", ref: "color-brand-200" },
  { token: "color-text-tertiary_on-brand", ref: "color-brand-200" },
  { token: "color-text-quaternary_on-brand", ref: "color-brand-300" },
  { token: "color-text-brand-primary", ref: "color-brand-900" },
  { token: "color-text-brand-secondary", ref: "color-brand-700" },
  { token: "color-text-brand-secondary_hover", ref: "color-brand-800" },
  { token: "color-text-brand-tertiary", ref: "color-brand-600" },
  { token: "color-text-brand-tertiary_alt", ref: "color-brand-600" },
];

// BACKGROUND COLORS
const BG_TOKENS: TokenRow[] = [
  { token: "color-bg-primary", ref: "color-white" },
  { token: "color-bg-primary-solid", ref: "color-gray-950" },
  { token: "color-bg-primary_alt", ref: "color-white" },
  { token: "color-bg-primary_hover", ref: "color-gray-50" },
  { token: "color-bg-secondary", ref: "color-gray-50" },
  { token: "color-bg-secondary-solid", ref: "color-gray-600" },
  { token: "color-bg-secondary_subtle", ref: "color-gray-25" },
  { token: "color-bg-secondary_hover", ref: "color-gray-100" },
  { token: "color-bg-secondary_alt", ref: "color-gray-50" },
  { token: "color-bg-tertiary", ref: "color-gray-100" },
  { token: "color-bg-quaternary", ref: "color-gray-200" },
  { token: "color-bg-error-primary", ref: "color-error-50" },
  { token: "color-bg-error-secondary", ref: "color-error-100" },
  { token: "color-bg-error-solid", ref: "color-error-600" },
  { token: "color-bg-error-solid_hover", ref: "color-error-700" },
  { token: "color-bg-warning-primary", ref: "color-warning-50" },
  { token: "color-bg-warning-secondary", ref: "color-warning-100" },
  { token: "color-bg-warning-solid", ref: "color-warning-600" },
  { token: "color-bg-success-primary", ref: "color-success-50" },
  { token: "color-bg-success-secondary", ref: "color-success-100" },
  { token: "color-bg-success-solid", ref: "color-success-600" },
  { token: "color-bg-disabled", ref: "color-gray-100" },
  { token: "color-bg-disabled_subtle", ref: "color-gray-50" },
  { token: "color-bg-active", ref: "color-gray-50" },
  { token: "color-bg-overlay", ref: "color-gray-950" },
  { token: "color-bg-brand-primary", ref: "color-brand-50" },
  { token: "color-bg-brand-primary_alt", ref: "color-brand-50" },
  { token: "color-bg-brand-secondary", ref: "color-brand-100" },
  { token: "color-bg-brand-solid", ref: "color-brand-600" },
  { token: "color-bg-brand-solid_hover", ref: "color-brand-700" },
  { token: "color-bg-brand-section", ref: "color-brand-800" },
  { token: "color-bg-brand-section_subtle", ref: "color-brand-700" },
];

// BORDER COLORS
const BORDER_TOKENS: TokenRow[] = [
  { token: "color-border-primary", ref: "color-gray-300" },
  { token: "color-border-secondary", ref: "color-gray-200" },
  { token: "color-border-secondary_alt", ref: "rgb(0 0 0 / 0.08)" },
  { token: "color-border-tertiary", ref: "color-gray-100" },
  { token: "color-border-error", ref: "color-error-500" },
  { token: "color-border-error_subtle", ref: "color-error-300" },
  { token: "color-border-disabled", ref: "color-gray-300" },
  { token: "color-border-disabled_subtle", ref: "color-gray-200" },
  { token: "color-border-brand", ref: "color-brand-500" },
  { token: "color-border-brand_alt", ref: "color-brand-600" },
];

// FOREGROUND (ícones, UI)
const FG_TOKENS: TokenRow[] = [
  { token: "color-fg-white", ref: "color-white" },
  { token: "color-fg-primary", ref: "color-gray-900" },
  { token: "color-fg-secondary", ref: "color-gray-700" },
  { token: "color-fg-secondary_hover", ref: "color-gray-800" },
  { token: "color-fg-tertiary", ref: "color-gray-600" },
  { token: "color-fg-tertiary_hover", ref: "color-gray-700" },
  { token: "color-fg-quaternary", ref: "color-gray-400" },
  { token: "color-fg-quaternary_hover", ref: "color-gray-500" },
  { token: "color-fg-warning-primary", ref: "color-warning-600" },
  { token: "color-fg-warning-secondary", ref: "color-warning-500" },
  { token: "color-fg-success-primary", ref: "color-success-600" },
  { token: "color-fg-success-secondary", ref: "color-success-500" },
  { token: "color-fg-error-primary", ref: "color-error-600" },
  { token: "color-fg-error-secondary", ref: "color-error-500" },
  { token: "color-fg-disabled", ref: "color-gray-400" },
  { token: "color-fg-disabled_subtle", ref: "color-gray-300" },
  { token: "color-fg-brand-primary", ref: "color-brand-600" },
  { token: "color-fg-brand-secondary", ref: "color-brand-500" },
  { token: "color-fg-brand-secondary_hover", ref: "color-brand-600" },
];

// COMPONENT-SPECIFIC (Untitled UI)
const COMPONENT_TOKENS: TokenRow[] = [
  { token: "color-avatar-bg", ref: "color-gray-100" },
  { token: "color-avatar-contrast-border", ref: "rgb(0 0 0 / 0.08)" },
  { token: "color-avatar-profile-photo-border", ref: "color-white" },
  { token: "color-button-primary-icon", ref: "color-brand-300" },
  { token: "color-button-primary-icon_hover", ref: "color-brand-200" },
  { token: "color-button-destructive-primary-icon", ref: "color-error-300" },
  { token: "color-button-destructive-primary-icon_hover", ref: "color-error-200" },
  { token: "color-focus-ring", ref: "color-brand-500" },
  { token: "color-focus-ring-error", ref: "color-error-500" },
  { token: "color-icon-fg-brand", ref: "color-brand-600" },
  { token: "color-icon-fg-brand_on-brand", ref: "color-brand-200" },
  { token: "color-featured-icon-light-fg-brand", ref: "color-brand-600" },
  { token: "color-featured-icon-light-fg-error", ref: "color-error-600" },
  { token: "color-featured-icon-light-fg-gray", ref: "color-gray-500" },
  { token: "color-featured-icon-light-fg-success", ref: "color-success-600" },
  { token: "color-featured-icon-light-fg-warning", ref: "color-warning-600" },
  { token: "color-footer-button-fg", ref: "color-brand-200" },
  { token: "color-footer-button-fg_hover", ref: "color-white" },
  { token: "color-slider-handle-bg", ref: "color-white" },
  { token: "color-slider-handle-border", ref: "color-brand-600" },
  { token: "color-toggle-border", ref: "color-gray-300" },
  { token: "color-tooltip-supporting-text", ref: "color-gray-300" },
  { token: "color-text-editor-icon-fg", ref: "color-gray-400" },
  { token: "color-text-editor-icon-fg_active", ref: "color-gray-500" },
];

const cellStyle: React.CSSProperties = {
  padding: "10px 12px",
  borderBottom: "1px solid #f2f4f7",
  fontSize: "13px",
  color: "#535862",
  verticalAlign: "middle",
  fontFamily: FONT_BODY,
};

const TokenTable = ({
  rows,
  title,
  previewLabel,
}: {
  rows: TokenRow[];
  title: string;
  previewLabel: string;
}) => (
  <div style={{ marginBottom: "32px" }}>
    <h3 style={{ fontSize: "16px", fontWeight: 600, color: "#181d27", margin: "0 0 12px 0", fontFamily: FONT_DISPLAY }}>
      {title}
    </h3>
    <table style={{ width: "100%", borderCollapse: "collapse" }}>
      <thead>
        <tr>
          <th style={{ ...cellStyle, textAlign: "left", fontWeight: 500, color: "#98a2b3" }}>Token</th>
          <th style={{ ...cellStyle, textAlign: "left", fontWeight: 500, color: "#98a2b3" }}>Referência (primitiva)</th>
          <th style={{ ...cellStyle, width: "72px", textAlign: "center", fontWeight: 500, color: "#98a2b3" }}>
            {previewLabel}
          </th>
          <th style={{ ...cellStyle, width: "80px" }} />
        </tr>
      </thead>
      <tbody>
        {rows.map((r) => (
          <tr key={r.token}>
            <td style={{ ...cellStyle, fontWeight: 500, color: "#181d27" }}>
              <span style={{ display: "inline-flex", alignItems: "center", gap: 4 }}>
                --{r.token}
                <CopyButton text={`var(--${r.token})`} label={t("copyBtn")} copiedLabel={t("copySuccess")} />
              </span>
            </td>
            <td style={cellStyle}>
              {r.ref.startsWith("rgb") ? r.ref : `var(--${r.ref})`}
            </td>
            <td style={{ ...cellStyle, padding: "6px 12px", verticalAlign: "middle" }}>
              <div
                style={{
                  width: "32px",
                  height: "24px",
                  borderRadius: "4px",
                  border: "1px solid rgba(0,0,0,0.08)",
                  background: `var(--${r.token})`,
                }}
                title={`var(--${r.token})`}
              />
            </td>
            <td style={cellStyle} />
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);

export const ColorTokensDoc = () => {
  const t = useT();

  return (
    <DocPage>
      <PageHeader
        breadcrumb={t("ctBreadcrumb")}
        title={t("ctTitle")}
        description={t("ctDesc")}
        resources={false}
      />

      <div
        style={{
          background: "var(--color-bg-brand-primary)",
          border: "1px solid var(--color-border-brand)",
          borderRadius: "12px",
          padding: "20px 24px",
          marginBottom: "16px",
        }}
      >
        <p style={{ fontSize: "13px", color: "var(--color-text-brand-primary)", margin: "0 0 8px 0", lineHeight: "20px", fontFamily: FONT_BODY }}>
          {t("ctFigmaSyncCallout")}
        </p>
      </div>

      <div
        style={{
          background: "#f6fef8",
          border: "1px solid #e4fbe9",
          borderRadius: "12px",
          padding: "20px 24px",
          marginBottom: "32px",
        }}
      >
        <p style={{ fontSize: "14px", color: "#181d27", margin: "0 0 8px 0", lineHeight: "22px", fontFamily: FONT_BODY }}>
          {t("ctIntroPrimitives").split("{{LINK}}").map((part, i, arr) =>
            i < arr.length - 1 ? (
              <span key={i}>
                {part}
                <a href="?path=/docs/foundations-colors--docs" style={{ color: "#10b132", fontWeight: 600, textDecoration: "none" }}>
                  {t("colorsPageTitle")}
                </a>
              </span>
            ) : (
              part
            )
          )}
        </p>
        <p style={{ fontSize: "13px", color: "#535862", margin: 0, lineHeight: "20px", fontFamily: FONT_BODY }}>
          {t("ctIntroConsume")}
        </p>
      </div>

      <p style={{ fontSize: "14px", color: "#717680", margin: "0 0 32px 0", lineHeight: "22px", fontFamily: FONT_BODY }}>
        {t("ctHowItWorks")}
      </p>

      <TokenTable rows={TEXT_TOKENS} title={t("ctTextColors")} previewLabel={t("ctPreview")} />
      <TokenTable rows={BG_TOKENS} title={t("ctBgColors")} previewLabel={t("ctPreview")} />
      <TokenTable rows={BORDER_TOKENS} title={t("ctBorderColors")} previewLabel={t("ctPreview")} />
      <TokenTable rows={FG_TOKENS} title={t("ctFgColors")} previewLabel={t("ctPreview")} />
      <TokenTable rows={COMPONENT_TOKENS} title={t("ctComponentColors")} previewLabel={t("ctPreview")} />

      <div style={{ marginTop: "24px", padding: "16px", background: "#f9fafb", borderRadius: "8px", border: "1px solid #e9eaeb" }}>
        <p style={{ fontSize: "12px", color: "#535862", margin: 0, lineHeight: "18px", fontFamily: FONT_BODY }}>
          {t("ctAliasesNote")}
        </p>
      </div>

      <PageFooter />
    </DocPage>
  );
};
