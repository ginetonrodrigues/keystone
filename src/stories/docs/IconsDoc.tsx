import { useState, useRef, useCallback, useMemo } from "react";
import { DocPage, PageHeader, PageFooter, CopyButton } from "./PageLayout";
import { useT } from "./i18n";
import * as UntitledIcons from "@untitledui/icons";

const FONT_BODY = "'Inter', -apple-system, sans-serif";

// All icon names from the package (components only)
const ICON_NAMES = Object.keys(UntitledIcons)
  .filter((k) => typeof (UntitledIcons as Record<string, unknown>)[k] === "function")
  .sort();

const MIN_SIZE = 16;
const MAX_SIZE = 64;
const DEFAULT_SIZE = 32;
const DEFAULT_COLOR = "#000000";

function downloadBlob(blob: Blob, filename: string) {
  const a = document.createElement("a");
  a.href = URL.createObjectURL(blob);
  a.download = filename;
  a.click();
  URL.revokeObjectURL(a.href);
}

export const IconsDoc = () => {
  const t = useT();
  const [search, setSearch] = useState("");
  const [size, setSize] = useState(DEFAULT_SIZE);
  const [color, setColor] = useState(DEFAULT_COLOR);
  const iconWrappersRef = useRef<Record<string, HTMLDivElement | null>>({});

  const filteredNames = useMemo(() => {
    if (!search.trim()) return ICON_NAMES;
    const q = search.trim().toLowerCase();
    return ICON_NAMES.filter((name) => name.toLowerCase().includes(q));
  }, [search]);

  const getSvgForIcon = useCallback(
    (name: string): string | null => {
      const wrapper = iconWrappersRef.current[name];
      const svg = wrapper?.querySelector("svg");
      if (!svg) return null;
      const clone = svg.cloneNode(true) as SVGSVGElement;
      clone.setAttribute("width", String(size));
      clone.setAttribute("height", String(size));
      clone.setAttribute("stroke", color);
      return new XMLSerializer().serializeToString(clone);
    },
    [size, color]
  );

  const handleCopySvg = useCallback(
    (name: string) => {
      const svgString = getSvgForIcon(name);
      if (svgString) navigator.clipboard.writeText(svgString);
    },
    [getSvgForIcon]
  );

  const handleDownloadSvg = useCallback(
    (name: string) => {
      const svgString = getSvgForIcon(name);
      if (!svgString) return;
      const blob = new Blob([svgString], { type: "image/svg+xml" });
      downloadBlob(blob, `${name}.svg`);
    },
    [getSvgForIcon]
  );

  const handleDownloadPng = useCallback(
    (name: string) => {
      const svgString = getSvgForIcon(name);
      if (!svgString) return;
      const dataUrl = "data:image/svg+xml," + encodeURIComponent(svgString);
      const img = new Image();
      img.onload = () => {
        const canvas = document.createElement("canvas");
        canvas.width = size;
        canvas.height = size;
        const ctx = canvas.getContext("2d");
        if (ctx) {
          ctx.drawImage(img, 0, 0);
          canvas.toBlob(
            (blob) => {
              if (blob) downloadBlob(blob, `${name}.png`);
            },
            "image/png",
            1
          );
        }
      };
      img.onerror = () => {};
      img.src = dataUrl;
    },
    [getSvgForIcon, size]
  );

  return (
    <DocPage>
      <PageHeader
        breadcrumb={t("iconsBreadcrumb")}
        title={t("iconsTitle")}
        description={t("iconsDesc")}
        resources={false}
      />

      {/* Toolbar: Search, Size, Color — like Phosphor */}
      <div
        style={{
          display: "flex",
          gap: "16px",
          marginTop: "24px",
          marginBottom: "32px",
          flexWrap: "wrap",
          alignItems: "center",
        }}
      >
        <div style={{ position: "relative", flex: "1", minWidth: "200px", maxWidth: "320px" }}>
          <input
            type="text"
            placeholder={t("iconsSearchPlaceholder")}
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            style={{
              width: "100%",
              padding: "10px 12px 10px 36px",
              borderRadius: "8px",
              border: "1px solid #e9eaeb",
              fontSize: "14px",
              fontFamily: FONT_BODY,
            }}
          />
          <span
            style={{
              position: "absolute",
              left: "12px",
              top: "50%",
              transform: "translateY(-50%)",
              color: "#98a2b3",
              fontSize: "14px",
              pointerEvents: "none",
            }}
          >
            🔍
          </span>
          <span
            style={{
              position: "absolute",
              right: "10px",
              top: "50%",
              transform: "translateY(-50%)",
              fontSize: "11px",
              color: "#98a2b3",
              fontFamily: FONT_BODY,
            }}
          >
            ⌘K
          </span>
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
          <label style={{ fontSize: "13px", fontWeight: 500, color: "#344054", fontFamily: FONT_BODY }}>
            {t("iconsSize")}
          </label>
          <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
            <input
              type="range"
              min={MIN_SIZE}
              max={MAX_SIZE}
              value={size}
              onChange={(e) => setSize(Number(e.target.value))}
              style={{ width: "100px", accentColor: "#10b132" }}
            />
            <span style={{ fontSize: "13px", color: "#535862", fontFamily: FONT_BODY, minWidth: "36px" }}>
              {size}px
            </span>
          </div>
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
          <label style={{ fontSize: "13px", fontWeight: 500, color: "#344054", fontFamily: FONT_BODY }}>
            {t("iconsColor")}
          </label>
          <input
            type="color"
            value={color}
            onChange={(e) => setColor(e.target.value)}
            style={{
              width: "40px",
              height: "36px",
              padding: 2,
              borderRadius: "8px",
              border: "1px solid #e9eaeb",
              cursor: "pointer",
            }}
          />
          <input
            type="text"
            value={color}
            onChange={(e) => setColor(e.target.value)}
            style={{
              width: "80px",
              padding: "8px 10px",
              borderRadius: "6px",
              border: "1px solid #e9eaeb",
              fontSize: "12px",
              fontFamily: "monospace",
            }}
          />
        </div>
      </div>

      <p style={{ fontSize: "13px", color: "#717680", marginBottom: "24px", fontFamily: FONT_BODY }}>
        {filteredNames.length} {t("iconsCount")}
      </p>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))",
          gap: "16px",
        }}
      >
        {filteredNames.map((name) => {
          const Component = (UntitledIcons as Record<string, React.ComponentType<{ size?: number; color?: string }>>)[name];
          if (!Component) return null;
          return (
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
              <div
                ref={(el) => {
                  iconWrappersRef.current[name] = el;
                }}
                style={{
                  color,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  minHeight: size,
                  minWidth: size,
                }}
              >
                <Component size={size} color={color} />
              </div>
              <span style={{ fontSize: "12px", fontWeight: 600, color: "#181d27", fontFamily: FONT_BODY }}>{name}</span>

              <div style={{ display: "flex", flexDirection: "column", gap: "6px", width: "100%" }}>
                <CopyButton
                  text={`import { ${name} } from "@untitledui/icons";`}
                  label={t("iconsCopyImport")}
                />
                <div style={{ display: "flex", flexWrap: "wrap", gap: "6px", justifyContent: "center" }}>
                  <button
                    type="button"
                    onClick={() => handleCopySvg(name)}
                    style={actionBtnStyle}
                  >
                    {t("iconsCopySvg")}
                  </button>
                  <button
                    type="button"
                    onClick={() => handleDownloadSvg(name)}
                    style={actionBtnStyle}
                  >
                    {t("iconsDownloadSvg")}
                  </button>
                  <button
                    type="button"
                    onClick={() => handleDownloadPng(name)}
                    style={actionBtnStyle}
                  >
                    {t("iconsDownloadPng")}
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {filteredNames.length === 0 && (
        <p style={{ fontSize: "14px", color: "#717680", fontFamily: FONT_BODY }}>{t("iconsNoResults")}</p>
      )}

      <PageFooter />
    </DocPage>
  );
};

const actionBtnStyle: React.CSSProperties = {
  padding: "4px 8px",
  fontSize: "11px",
  fontWeight: 500,
  color: "#535862",
  background: "#f9fafb",
  border: "1px solid #e9eaeb",
  borderRadius: "6px",
  cursor: "pointer",
  fontFamily: FONT_BODY,
};
