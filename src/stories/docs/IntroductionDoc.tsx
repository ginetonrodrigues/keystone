import { useT } from "./i18n";

const FONT_DISPLAY = "'Plus Jakarta Sans', -apple-system, sans-serif";
const FONT_BODY = "'Inter', -apple-system, sans-serif";

export const IntroductionDoc = () => {
  const t = useT();
  return (
    <div style={{ fontFamily: "Inter, -apple-system, sans-serif", maxWidth: "760px" }}>
      <img src="./keystone-logo.svg" alt="Keystone Design System" style={{ height: "48px", width: "auto", marginBottom: "24px" }} />

      <p style={{ fontSize: "16px", color: "#535862", lineHeight: "26px", margin: "0 0 32px 0", fontFamily: FONT_BODY }}>
        {t("introWelcome").replace(/\*\*(.*?)\*\*/g, "$1").replace(/\[([^\]]+)\]\([^)]+\)/g, "$1")}
      </p>

      <h2 style={{ fontSize: "22px", fontWeight: 600, color: "#181d27", margin: "0 0 12px 0", fontFamily: FONT_DISPLAY }}>{t("introOverviewTitle")}</h2>
      <p style={{ fontSize: "14px", color: "#535862", lineHeight: "24px", margin: "0 0 32px 0", fontFamily: FONT_BODY }}>
        {t("introOverview")}
      </p>

      <h2 style={{ fontSize: "22px", fontWeight: 600, color: "#181d27", margin: "0 0 12px 0", fontFamily: FONT_DISPLAY }}>{t("introArchTitle")}</h2>
      <ul style={{ fontSize: "14px", color: "#535862", lineHeight: "28px", margin: "0 0 32px 0", paddingLeft: "20px", fontFamily: FONT_BODY }}>
        <li>{t("introArch1").replace(/\*\*(.*?)\*\*/g, "$1")}</li>
        <li>{t("introArch2").replace(/\*\*(.*?)\*\*/g, "$1")}</li>
        <li>{t("introArch3").replace(/\*\*(.*?)\*\*/g, "$1")}</li>
        <li>{t("introArch4").replace(/\*\*(.*?)\*\*/g, "$1")}</li>
      </ul>

      <h2 style={{ fontSize: "22px", fontWeight: 600, color: "#181d27", margin: "0 0 12px 0", fontFamily: FONT_DISPLAY }}>{t("introGettingStarted")}</h2>

      <h3 style={{ fontSize: "16px", fontWeight: 600, color: "#181d27", margin: "0 0 8px 0", fontFamily: FONT_DISPLAY }}>{t("introInstallation")}</h3>
      <pre style={{ background: "#f5f5f5", borderRadius: "8px", padding: "12px 16px", fontSize: "13px", margin: "0 0 20px 0", overflowX: "auto" }}>
        <code>npm install</code>
      </pre>

      <h3 style={{ fontSize: "16px", fontWeight: 600, color: "#181d27", margin: "0 0 8px 0", fontFamily: FONT_DISPLAY }}>{t("introDevelopment")}</h3>
      <pre style={{ background: "#f5f5f5", borderRadius: "8px", padding: "12px 16px", fontSize: "13px", margin: "0 0 20px 0", overflowX: "auto" }}>
        <code>{`npm run dev          # Start the app\nnpm run storybook    # Start Storybook on port 6006`}</code>
      </pre>

      <h3 style={{ fontSize: "16px", fontWeight: 600, color: "#181d27", margin: "0 0 8px 0", fontFamily: FONT_DISPLAY }}>{t("introAddComponents")}</h3>
      <p style={{ fontSize: "14px", color: "#535862", margin: "0 0 8px 0", fontFamily: FONT_BODY }}>{t("introImportFrom")}</p>
      <pre style={{ background: "#f5f5f5", borderRadius: "8px", padding: "12px 16px", fontSize: "13px", margin: "0 0 32px 0", overflowX: "auto" }}>
        <code>{`import { Button, Input, Badge } from "@/components";`}</code>
      </pre>

      <h2 style={{ fontSize: "22px", fontWeight: 600, color: "#181d27", margin: "0 0 12px 0", fontFamily: FONT_DISPLAY }}>{t("introDesignPrinciples")}</h2>
      <ol style={{ fontSize: "14px", color: "#535862", lineHeight: "28px", margin: 0, paddingLeft: "20px", fontFamily: FONT_BODY }}>
        <li>{t("introPrinciple1").replace(/\*\*(.*?)\*\*/g, "$1")}</li>
        <li>{t("introPrinciple2").replace(/\*\*(.*?)\*\*/g, "$1")}</li>
        <li>{t("introPrinciple3").replace(/\*\*(.*?)\*\*/g, "$1")}</li>
        <li>{t("introPrinciple4").replace(/\*\*(.*?)\*\*/g, "$1")}</li>
      </ol>
    </div>
  );
};
