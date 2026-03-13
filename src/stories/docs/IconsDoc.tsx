import { useState } from "react";
import { DocPage, PageHeader, PageFooter, CopyButton } from "./PageLayout";
import { useT } from "./i18n";
import {
  Copy01,
  SearchLg,
  User01,
  AlertCircle,
  CheckCircle,
  InfoCircle,
  ChevronDown,
  ChevronRight,
  ArrowLeft,
  ArrowRight,
  Edit01,
  Trash01,
  Plus,
  X,
  Settings01,
  HelpCircle,
  Calendar,
  File02,
  UploadCloud02,
  Bell01,
} from "@untitledui/icons";

const FONT_BODY = "'Inter', -apple-system, sans-serif";

const ICON_LIST: { name: string; Component: React.ComponentType<{ size?: number; color?: string; className?: string }> }[] = [
  { name: "Copy01", Component: Copy01 },
  { name: "SearchLg", Component: SearchLg },
  { name: "User01", Component: User01 },
  { name: "AlertCircle", Component: AlertCircle },
  { name: "CheckCircle", Component: CheckCircle },
  { name: "InfoCircle", Component: InfoCircle },
  { name: "ChevronDown", Component: ChevronDown },
  { name: "ChevronRight", Component: ChevronRight },
  { name: "ArrowLeft", Component: ArrowLeft },
  { name: "ArrowRight", Component: ArrowRight },
  { name: "Edit01", Component: Edit01 },
  { name: "Trash01", Component: Trash01 },
  { name: "Plus", Component: Plus },
  { name: "X", Component: X },
  { name: "Settings01", Component: Settings01 },
  { name: "HelpCircle", Component: HelpCircle },
  { name: "Calendar", Component: Calendar },
  { name: "File02", Component: File02 },
  { name: "UploadCloud02", Component: UploadCloud02 },
  { name: "Bell01", Component: Bell01 },
];

const SIZES = [16, 24, 32, 40, 48] as const;
const COLOR_MAP: Record<string, string> = {
  "gray-900": "#181d27",
  "gray-700": "#414651",
  "gray-500": "#717680",
  "brand-600": "#10b132",
  "brand-500": "#14dd3e",
  "error-600": "#f04438",
  "warning-500": "#f79009",
  "blue-600": "#1570ef",
};

export const IconsDoc = () => {
  const t = useT();
  const [size, setSize] = useState<number>(24);
  const [colorKey, setColorKey] = useState<string>("gray-900");
  const colorHex = COLOR_MAP[colorKey] ?? "#181d27";

  return (
    <DocPage>
      <PageHeader
        breadcrumb={t("iconsBreadcrumb")}
        title={t("iconsTitle")}
        description={t("iconsDesc")}
        resources={false}
      />

      <div style={{ display: "flex", gap: "24px", marginTop: "24px", marginBottom: "32px", flexWrap: "wrap", alignItems: "center" }}>
        <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
          <label style={{ fontSize: "13px", fontWeight: 500, color: "#344054", fontFamily: FONT_BODY }}>{t("iconsSize")}</label>
          <select
            value={size}
            onChange={(e) => setSize(Number(e.target.value))}
            style={{
              padding: "6px 10px",
              borderRadius: "6px",
              border: "1px solid #e9eaeb",
              fontSize: "13px",
              fontFamily: FONT_BODY,
            }}
          >
            {SIZES.map((s) => (
              <option key={s} value={s}>{s}px</option>
            ))}
          </select>
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
          <label style={{ fontSize: "13px", fontWeight: 500, color: "#344054", fontFamily: FONT_BODY }}>{t("iconsColor")}</label>
          <select
            value={colorKey}
            onChange={(e) => setColorKey(e.target.value)}
            style={{
              padding: "6px 10px",
              borderRadius: "6px",
              border: "1px solid #e9eaeb",
              fontSize: "13px",
              fontFamily: FONT_BODY,
            }}
          >
            {Object.keys(COLOR_MAP).map((k) => (
              <option key={k} value={k}>{k}</option>
            ))}
          </select>
        </div>
      </div>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(140px, 1fr))",
          gap: "16px",
        }}
      >
        {ICON_LIST.map(({ name, Component }) => (
          <div
            key={name}
            style={{
              border: "1px solid #e9eaeb",
              borderRadius: "12px",
              padding: "16px",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: "12px",
            }}
          >
            <div style={{ color: colorHex, display: "flex", alignItems: "center", justifyContent: "center" }}>
              <Component size={size} color={colorHex} />
            </div>
            <span style={{ fontSize: "12px", fontWeight: 500, color: "#535862", fontFamily: FONT_BODY }}>{name}</span>
            <CopyButton
              text={`import { ${name} } from "@untitledui/icons";`}
              label={t("iconsCopyImport")}
            />
          </div>
        ))}
      </div>

      <PageFooter />
    </DocPage>
  );
};
