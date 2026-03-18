import { useT } from "./i18n";

const FONT_DISPLAY = "'Plus Jakarta Sans', -apple-system, sans-serif";
const FONT_BODY = "'Inter', -apple-system, sans-serif";

interface ColorSwatch {
  step: string;
  hex: string;
}

interface ColorScale {
  name: string;
  cssVar: string;
  description: string;
  swatches: ColorSwatch[];
}

const SwatchRow = ({ scale, description }: { scale: ColorScale; description?: string }) => {
  return (
    <div style={{ marginBottom: "32px" }}>
      <div style={{ marginBottom: "8px" }}>
        <h4 style={{ fontSize: "14px", fontWeight: 600, color: "#181d27", margin: "0 0 4px 0", fontFamily: FONT_DISPLAY }}>
          {scale.name}
        </h4>
        <p style={{ fontSize: "12px", color: "#717680", margin: 0, maxWidth: "600px", lineHeight: "18px", fontFamily: FONT_BODY }}>
          {description ?? scale.description}
        </p>
      </div>
      <div style={{ display: "flex", gap: "4px", marginTop: "12px" }}>
        {scale.swatches.map((swatch, i) => {
          return (
            <div key={swatch.step} style={{ flex: 1, minWidth: 0 }}>
              <div
                style={{
                  backgroundColor: swatch.hex,
                  height: "40px",
                  borderRadius: "6px",
                  border: i < 2 ? "1px solid #e9eaeb" : "none",
                  marginBottom: "6px",
                }}
              />
              <div style={{ fontSize: "11px", fontWeight: 600, color: "#344054", fontFamily: FONT_BODY }}>{swatch.step}</div>
              <div style={{ fontSize: "10px", color: "#98a2b3", fontFamily: FONT_BODY }}>{swatch.hex}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

const BaseColors = () => {
  const t = useT();
  return (
  <div style={{ marginBottom: "32px" }}>
    <h4 style={{ fontSize: "14px", fontWeight: 600, color: "#181d27", margin: "0 0 4px 0", fontFamily: FONT_DISPLAY }}>{t("base")}</h4>
    <p style={{ fontSize: "12px", color: "#717680", margin: "0 0 12px 0", fontFamily: FONT_BODY }}>
      {t("baseDesc")}
    </p>
    <div style={{ display: "flex", gap: "16px" }}>
      {[
        { name: "White", hex: "#FFFFFF", border: true },
        { name: "Black", hex: "#000000", border: false },
        { name: "Transparent", hex: "transparent", border: true },
      ].map((c) => (
        <div key={c.name} style={{ textAlign: "center" }}>
          <div
            style={{
              width: "64px",
              height: "40px",
              borderRadius: "6px",
              backgroundColor: c.hex,
              border: c.border ? "1px solid #e9eaeb" : "none",
              marginBottom: "6px",
              ...(c.name === "Transparent"
                ? {
                    backgroundImage:
                      "linear-gradient(45deg, #e9eaeb 25%, transparent 25%), linear-gradient(-45deg, #e9eaeb 25%, transparent 25%), linear-gradient(45deg, transparent 75%, #e9eaeb 75%), linear-gradient(-45deg, transparent 75%, #e9eaeb 75%)",
                    backgroundSize: "8px 8px",
                    backgroundPosition: "0 0, 0 4px, 4px -4px, -4px 0px",
                  }
                : {}),
            }}
          />
          <div style={{ fontSize: "11px", fontWeight: 600, color: "#344054", fontFamily: FONT_BODY }}>{c.name}</div>
          <div style={{ fontSize: "10px", color: "#98a2b3", fontFamily: FONT_BODY }}>
            {c.name === "Transparent" ? "#FFFFFF 0%" : c.hex}
          </div>
        </div>
      ))}
    </div>
  </div>
  );
};

const SectionTitle = ({
  title,
  description,
}: {
  title: string;
  description: string;
}) => (
  <div style={{ marginBottom: "24px" }}>
    <h2 style={{ fontSize: "24px", fontWeight: 600, color: "#181d27", margin: "0 0 8px 0", fontFamily: FONT_DISPLAY }}>{title}</h2>
    <p style={{ fontSize: "14px", color: "#717680", margin: 0, maxWidth: "700px", lineHeight: "22px", fontFamily: FONT_BODY }}>
      {description}
    </p>
  </div>
);

const grayScale: ColorScale = {
  name: "Gray (light mode)",
  cssVar: "--color-gray",
  description:
    "Gray, as a neutral color, is the foundation of the color system. Almost everything in UI design — text, form fields, backgrounds, dividers — are gray.",
  swatches: [
    { step: "25", hex: "#FAFAFA" },
    { step: "50", hex: "#F5F5F5" },
    { step: "100", hex: "#F5F5F5" },
    { step: "200", hex: "#E9EAEB" },
    { step: "300", hex: "#D5D7DA" },
    { step: "400", hex: "#A4A7AE" },
    { step: "500", hex: "#717680" },
    { step: "600", hex: "#535862" },
    { step: "700", hex: "#414651" },
    { step: "800", hex: "#252B37" },
    { step: "900", hex: "#181D27" },
    { step: "950", hex: "#0A0D12" },
  ],
};

const brandScale: ColorScale = {
  name: "Brand",
  cssVar: "--color-brand",
  description:
    'The brand color is your "primary" color, and is used across all interactive elements such as buttons, links, inputs, etc. This color can be for the overall feel and look of the interface.',
  swatches: [
    { step: "25", hex: "#F6FEF8" },
    { step: "50", hex: "#E4FBE9" },
    { step: "100", hex: "#D0F8D8" },
    { step: "200", hex: "#A1F1B2" },
    { step: "300", hex: "#72EB8B" },
    { step: "400", hex: "#43E465" },
    { step: "500", hex: "#14DD3E" },
    { step: "600", hex: "#10B132" },
    { step: "700", hex: "#0C8525" },
    { step: "800", hex: "#085819" },
    { step: "900", hex: "#042C0C" },
    { step: "950", hex: "#031C08" },
  ],
};

const errorScale: ColorScale = {
  name: "Error",
  cssVar: "--color-error",
  description:
    'Error colors are used across error states and "destructive" actions. They communicate a destructive/negative action, such as removing a user from your team.',
  swatches: [
    { step: "25", hex: "#FFFBFA" },
    { step: "50", hex: "#FEF3F2" },
    { step: "100", hex: "#FEE4E2" },
    { step: "200", hex: "#FECDCA" },
    { step: "300", hex: "#FDA29B" },
    { step: "400", hex: "#F97066" },
    { step: "500", hex: "#F04438" },
    { step: "600", hex: "#D92D20" },
    { step: "700", hex: "#B42318" },
    { step: "800", hex: "#912018" },
    { step: "900", hex: "#7A271A" },
    { step: "950", hex: "#55160C" },
  ],
};

const warningScale: ColorScale = {
  name: "Warning",
  cssVar: "--color-warning",
  description:
    'Warning colors are communicated that an action is potentially destructive or "on-hold". These colors are commonly used in confirmation actions, to grab the user attention.',
  swatches: [
    { step: "25", hex: "#FFFCF5" },
    { step: "50", hex: "#FFFAEB" },
    { step: "100", hex: "#FEF0C7" },
    { step: "200", hex: "#FEDF89" },
    { step: "300", hex: "#FEC84B" },
    { step: "400", hex: "#FDB022" },
    { step: "500", hex: "#F79009" },
    { step: "600", hex: "#DC6803" },
    { step: "700", hex: "#B54708" },
    { step: "800", hex: "#93370D" },
    { step: "900", hex: "#7A2E0E" },
    { step: "950", hex: "#4E1D09" },
  ],
};

const successScale: ColorScale = {
  name: "Success",
  cssVar: "--color-success",
  description:
    "Success colors communicate a positive action, positive trend, or a successful confirmation. If you're using green as your primary color, it can be helpful to introduce a different hue for your success green.",
  swatches: [
    { step: "25", hex: "#F6FEF9" },
    { step: "50", hex: "#ECFDF3" },
    { step: "100", hex: "#DCFAE6" },
    { step: "200", hex: "#ABEFC6" },
    { step: "300", hex: "#75E0A7" },
    { step: "400", hex: "#47CD89" },
    { step: "500", hex: "#17B26A" },
    { step: "600", hex: "#079455" },
    { step: "700", hex: "#067647" },
    { step: "800", hex: "#085D3A" },
    { step: "900", hex: "#074D31" },
    { step: "950", hex: "#053321" },
  ],
};

const mossScale: ColorScale = {
  name: "Moss",
  cssVar: "--color-moss",
  description: "Can be swapped with the default success color.",
  swatches: [
    { step: "25", hex: "#FAFDF7" },
    { step: "50", hex: "#F5FBEE" },
    { step: "100", hex: "#E6F4D7" },
    { step: "200", hex: "#CEEAB0" },
    { step: "300", hex: "#ACDC79" },
    { step: "400", hex: "#86CB3C" },
    { step: "500", hex: "#669F2A" },
    { step: "600", hex: "#4F7A21" },
    { step: "700", hex: "#3F621A" },
    { step: "800", hex: "#335015" },
    { step: "900", hex: "#2B4212" },
    { step: "950", hex: "#1A280B" },
  ],
};

const orangeDarkScale: ColorScale = {
  name: "Orange dark",
  cssVar: "--color-orange-dark",
  description: "Can be swapped with the default warning color.",
  swatches: [
    { step: "25", hex: "#FFF9F5" },
    { step: "50", hex: "#FFF4ED" },
    { step: "100", hex: "#FFE6D5" },
    { step: "200", hex: "#FFD6AE" },
    { step: "300", hex: "#FF9C66" },
    { step: "400", hex: "#FF692E" },
    { step: "500", hex: "#FF4405" },
    { step: "600", hex: "#E62E05" },
    { step: "700", hex: "#BC1B06" },
    { step: "800", hex: "#97180C" },
    { step: "900", hex: "#771A0D" },
    { step: "950", hex: "#57130A" },
  ],
};

const purpleScale: ColorScale = {
  name: "Purple",
  cssVar: "--color-purple",
  description: "",
  swatches: [
    { step: "25", hex: "#FAFAFF" },
    { step: "50", hex: "#F4F3FF" },
    { step: "100", hex: "#EBE9FE" },
    { step: "200", hex: "#D9D6FE" },
    { step: "300", hex: "#BDB4FE" },
    { step: "400", hex: "#9B8AFB" },
    { step: "500", hex: "#7A5AF8" },
    { step: "600", hex: "#6938EF" },
    { step: "700", hex: "#5925DC" },
    { step: "800", hex: "#4A1FB8" },
    { step: "900", hex: "#3E1C96" },
    { step: "950", hex: "#27115F" },
  ],
};

const Divider = () => (
  <hr style={{ border: "none", borderTop: "1px solid #e9eaeb", margin: "40px 0" }} />
);

const Footer = () => {
  const t = useT();
  return (
  <div
    style={{
      borderTop: "1px solid #e9eaeb",
      marginTop: "48px",
      paddingTop: "32px",
    }}
  >
    <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "24px" }}>
      <div>
        <p
          style={{
            fontSize: "12px",
            color: "#98a2b3",
            margin: "0 0 8px 0",
            display: "flex",
            alignItems: "center",
            gap: "6px",
            fontFamily: FONT_BODY,
          }}
        >
          <span
            style={{
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center",
              width: "20px",
              height: "20px",
              borderRadius: "4px",
              backgroundColor: "#f6fef8",
              border: "1px solid #e4fbe9",
              fontSize: "10px",
              fontWeight: 700,
              color: "#10b132",
            }}
          >
            K
          </span>
          {t("spPrimBreadcrumb").split(" -> ")[0]} → {t("colorsPageTitle")}
        </p>
        <h2 style={{ fontSize: "24px", fontWeight: 600, color: "#181d27", margin: "0 0 8px 0", fontFamily: FONT_DISPLAY }}>
          {t("colorsPageTitle")}
        </h2>
        <p style={{ fontSize: "14px", color: "#717680", margin: 0, maxWidth: "480px", lineHeight: "22px", fontFamily: FONT_BODY }}>
          {t("colorsPageDesc")}
        </p>
      </div>
      <div>
        <p style={{ fontSize: "14px", fontWeight: 600, color: "#181d27", margin: "0 0 8px 0", fontFamily: FONT_BODY }}>{t("resources")}</p>
        <div style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
          <a href="#" style={{ fontSize: "13px", color: "#10b132", textDecoration: "none" }}>
            {t("resourceLink1")}
          </a>
          <a href="#" style={{ fontSize: "13px", color: "#10b132", textDecoration: "none" }}>
            {t("resourceLink2")}
          </a>
        </div>
      </div>
    </div>
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        borderTop: "1px solid #e9eaeb",
        paddingTop: "16px",
        marginTop: "24px",
      }}
    >
      <p style={{ fontSize: "12px", color: "#98a2b3", margin: 0, fontWeight: 500, fontFamily: FONT_BODY }}>
        {t("footerTitle")}
      </p>
      <p style={{ fontSize: "12px", color: "#98a2b3", margin: 0, fontFamily: FONT_BODY }}>{t("footerCopy")}</p>
    </div>
  </div>
  );
};

export const ColorDocumentation = () => {
  const t = useT();
  return (
    <div style={{ fontFamily: "Inter, -apple-system, sans-serif", maxWidth: "960px", margin: "0 auto" }}>
      <SectionTitle
        title={t("primaryColors")}
        description={t("primaryColorsDesc")}
      />

      <BaseColors />
      <SwatchRow scale={grayScale} description={t("grayDesc")} />
      <SwatchRow scale={brandScale} description={t("brandDesc")} />

      <Divider />

      <SectionTitle
        title={t("supportColors")}
        description={t("primaryColorsDesc")}
      />

      <SwatchRow scale={errorScale} description={t("errorDesc")} />
      <SwatchRow scale={warningScale} description={t("warningDesc")} />
      <SwatchRow scale={successScale} description={t("successDesc")} />

      <Divider />

      <SectionTitle
        title={t("secondaryColors")}
        description={t("secondaryColorsDesc")}
      />

      <SwatchRow scale={mossScale} description={t("mossDesc")} />
      <SwatchRow scale={orangeDarkScale} description={t("orangeDarkDesc")} />
      <SwatchRow scale={purpleScale} />

      <div
        style={{
          marginTop: "24px",
          padding: "16px 20px",
          background: "#f6fef8",
          border: "1px solid #e4fbe9",
          borderRadius: "12px",
        }}
      >
        <p style={{ fontSize: "13px", color: "#181d27", margin: 0, lineHeight: "20px", fontFamily: FONT_BODY }}>
          {t("colorsSeeTokensIntro")}
          <a
            href="?path=/docs/foundations-color-tokens--docs"
            style={{ color: "#10b132", fontWeight: 600, textDecoration: "none" }}
          >
            {t("colorsSeeTokensLink")}
          </a>
          .
        </p>
      </div>

      <Footer />
    </div>
  );
};
