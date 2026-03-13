import { DocPage, PageHeader, PageFooter, CopyButton } from "./PageLayout";
import { useT } from "./i18n";

const FONT_DISPLAY = "'Plus Jakarta Sans', -apple-system, sans-serif";
const FONT_BODY = "'Inter', -apple-system, sans-serif";

const TEXT_TOKENS = [
  { token: "color-text-primary", ref: "color-gray-900" },
  { token: "color-text-secondary", ref: "color-gray-700" },
  { token: "color-text-tertiary", ref: "color-gray-600" },
  { token: "color-text-quaternary", ref: "color-gray-500" },
  { token: "color-text-brand-tertiary", ref: "color-brand-600" },
  { token: "color-text-error-primary", ref: "color-error-600" },
  { token: "color-text-disabled", ref: "color-gray-500" },
  { token: "color-text-placeholder", ref: "color-gray-500" },
];

const BG_TOKENS = [
  { token: "color-bg-primary", ref: "color-white" },
  { token: "color-bg-secondary", ref: "color-gray-50" },
  { token: "color-bg-tertiary", ref: "color-gray-100" },
  { token: "color-bg-brand-primary", ref: "color-brand-50" },
  { token: "color-bg-brand-solid", ref: "color-brand-600" },
  { token: "color-bg-error-primary", ref: "color-error-50" },
  { token: "color-bg-disabled", ref: "color-gray-100" },
];

const BORDER_TOKENS = [
  { token: "color-border-primary", ref: "color-gray-300" },
  { token: "color-border-secondary", ref: "color-gray-200" },
  { token: "color-border-brand", ref: "color-brand-500" },
  { token: "color-border-error", ref: "color-error-500" },
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
}: {
  rows: { token: string; ref: string }[];
  title: string;
}) => (
  <div style={{ marginBottom: "32px" }}>
    <h3 style={{ fontSize: "16px", fontWeight: 600, color: "#181d27", margin: "0 0 12px 0", fontFamily: FONT_DISPLAY }}>
      {title}
    </h3>
    <table style={{ width: "100%", borderCollapse: "collapse" }}>
      <thead>
        <tr>
          <th style={{ ...cellStyle, textAlign: "left", fontWeight: 500, color: "#98a2b3" }}>Token</th>
          <th style={{ ...cellStyle, textAlign: "left", fontWeight: 500, color: "#98a2b3" }}>Referência</th>
          <th style={{ ...cellStyle, width: "80px" }} />
        </tr>
      </thead>
      <tbody>
        {rows.map((r) => (
          <tr key={r.token}>
            <td style={{ ...cellStyle, fontWeight: 500, color: "#181d27" }}>
              <span style={{ display: "inline-flex", alignItems: "center", gap: 4 }}>
                --{r.token}
                <CopyButton text={`var(--${r.token})`} />
              </span>
            </td>
            <td style={cellStyle}>var(--{r.ref})</td>
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

      <p style={{ fontSize: "14px", color: "#717680", margin: "0 0 32px 0", lineHeight: "22px", fontFamily: FONT_BODY }}>
        {t("ctHowItWorks")}
      </p>

      <TokenTable rows={TEXT_TOKENS} title={t("ctTextColors")} />
      <TokenTable rows={BG_TOKENS} title={t("ctBgColors")} />
      <TokenTable rows={BORDER_TOKENS} title={t("ctBorderColors")} />

      <PageFooter />
    </DocPage>
  );
};
