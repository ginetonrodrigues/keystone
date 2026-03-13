import { DocPage, PageHeader, PageFooter } from "./PageLayout";
import { useT } from "./i18n";

const FONT_DISPLAY = "'Plus Jakarta Sans', -apple-system, sans-serif";
const FONT_BODY = "'Inter', -apple-system, sans-serif";

interface RingCardProps {
  name: string;
  colorLabel: string;
  opacity: string;
  ringColor: string;
  isError?: boolean;
  shadow?: string;
}

const RingCard = ({ name, colorLabel, opacity, ringColor, isError, shadow }: RingCardProps) => (
  <div
    style={{
      border: `1px solid ${isError ? "#fda29b" : "#e9eaeb"}`,
      borderRadius: "12px",
      padding: "20px",
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-between",
      minHeight: "120px",
      boxShadow: `0 0 0 4px ${ringColor}${shadow ? `, ${shadow}` : ""}`,
    }}
  >
    <span style={{ fontSize: "13px", fontWeight: 600, color: "#181d27", fontFamily: FONT_BODY }}>{name}</span>
    <div>
      <p style={{ fontSize: "12px", color: "#535862", margin: "0 0 2px 0", fontFamily: FONT_BODY }}>{colorLabel}</p>
      <p style={{ fontSize: "12px", color: "#98a2b3", margin: 0, fontFamily: FONT_BODY }}>{opacity}</p>
    </div>
  </div>
);

export const FocusRingsDoc = () => {
  const t = useT();

  return (
    <DocPage>
      <PageHeader
        breadcrumb={t("focusBreadcrumb")}
        title={t("focusTitle")}
        description={t("focusDesc")}
      />

      <div style={{ marginTop: "48px" }}>
        <h3 style={{ fontSize: "16px", fontWeight: 600, color: "#181d27", margin: "0 0 8px 0", fontFamily: FONT_DISPLAY }}>{t("focusRings")}</h3>
        <p style={{ fontSize: "13px", color: "#717680", margin: "0 0 24px 0", maxWidth: "560px", lineHeight: "20px", fontFamily: FONT_BODY }}>
          {t("focusRingsDesc")}
        </p>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(160px, 1fr))",
            gap: "24px",
            marginBottom: "64px",
          }}
        >
          <RingCard
            name="ring-brand"
            colorLabel="brand-500"
            opacity="24% opacity"
            ringColor="rgba(20, 221, 62, 0.24)"
          />
          <RingCard
            name="ring-gray"
            colorLabel="gray-400"
            opacity="14% opacity"
            ringColor="rgba(164, 167, 174, 0.14)"
          />
          <RingCard
            name="ring-gray-secondary"
            colorLabel="gray-400"
            opacity="20% opacity"
            ringColor="rgba(164, 167, 174, 0.20)"
          />
          <RingCard
            name="ring-error"
            colorLabel="error-500"
            opacity="24% opacity"
            ringColor="rgba(240, 68, 56, 0.24)"
            isError
          />
        </div>
      </div>

      <div>
        <h3 style={{ fontSize: "16px", fontWeight: 600, color: "#181d27", margin: "0 0 8px 0", fontFamily: FONT_DISPLAY }}>
          {t("focusRingsWithShadows")}
        </h3>
        <p style={{ fontSize: "13px", color: "#717680", margin: "0 0 24px 0", maxWidth: "560px", lineHeight: "20px", fontFamily: FONT_BODY }}>
          {t("focusRingsWithShadowsDesc")}
        </p>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(160px, 1fr))",
            gap: "24px",
          }}
        >
          <RingCard
            name="ring-brand-shadow-xs"
            colorLabel="brand-500"
            opacity="24% opacity"
            ringColor="rgba(20, 221, 62, 0.24)"
            shadow="0px 1px 2px rgba(10, 13, 18, 0.05)"
          />
          <RingCard
            name="ring-brand-shadow-sm"
            colorLabel="brand-500"
            opacity="24% opacity"
            ringColor="rgba(20, 221, 62, 0.24)"
            shadow="0px 1px 3px rgba(10, 13, 18, 0.1), 0px 1px 2px -1px rgba(10, 13, 18, 0.1)"
          />
          <RingCard
            name="ring-gray-shadow-xs"
            colorLabel="gray-400"
            opacity="20% opacity"
            ringColor="rgba(164, 167, 174, 0.20)"
            shadow="0px 1px 2px rgba(10, 13, 18, 0.05)"
          />
          <RingCard
            name="ring-gray-shadow-sm"
            colorLabel="gray-400"
            opacity="20% opacity"
            ringColor="rgba(164, 167, 174, 0.20)"
            shadow="0px 1px 3px rgba(10, 13, 18, 0.1), 0px 1px 2px -1px rgba(10, 13, 18, 0.1)"
          />
          <RingCard
            name="ring-error-shadow-xs"
            colorLabel="error-500"
            opacity="24% opacity"
            ringColor="rgba(240, 68, 56, 0.24)"
            isError
            shadow="0px 1px 2px rgba(10, 13, 18, 0.05)"
          />
        </div>
      </div>

      <PageFooter />
    </DocPage>
  );
};
