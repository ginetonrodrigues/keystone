import type { ReactNode } from "react";
import { useState, useCallback } from "react";
import { useT } from "./i18n";

export const CopyButton = ({
  text,
  label,
  copiedLabel,
}: {
  text: string;
  label?: string;
  copiedLabel?: string;
}) => {
  const [copied, setCopied] = useState(false);
  const copy = useCallback(async () => {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      setCopied(false);
    }
  }, [text]);
  return (
    <button
      type="button"
      onClick={copy}
      style={{
        marginLeft: "6px",
        padding: "2px 8px",
        fontSize: "11px",
        fontWeight: 500,
        color: copied ? "#067647" : "#535862",
        background: copied ? "#ecfdf3" : "#f9fafb",
        border: "1px solid #e5e7eb",
        borderRadius: "6px",
        cursor: "pointer",
        fontFamily: FONT_BODY,
      }}
    >
      {copied ? (copiedLabel ?? (label ? `${label} ✓` : "Copiado!")) : label ?? "Copiar"}
    </button>
  );
};

const FONT_DISPLAY = "'Plus Jakarta Sans', -apple-system, sans-serif";
const FONT_BODY = "'Inter', -apple-system, sans-serif";

interface PageHeaderProps {
  breadcrumb: string;
  title: string;
  description: string;
  resources?: boolean;
}

export const PageHeader = ({ breadcrumb, title, description, resources = true }: PageHeaderProps) => {
  const t = useT();
  return (
    <div style={{ marginBottom: "48px" }}>
      <p
        style={{
          fontSize: "12px",
          color: "#98a2b3",
          margin: "0 0 24px 0",
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
        {breadcrumb}
      </p>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
        <div style={{ maxWidth: resources ? "560px" : "100%" }}>
          <h1 style={{ fontSize: "36px", fontWeight: 600, color: "#181d27", margin: "0 0 12px 0", letterSpacing: "-0.72px", fontFamily: FONT_DISPLAY }}>
            {title}
          </h1>
          <p style={{ fontSize: "14px", color: "#717680", margin: 0, lineHeight: "22px", fontFamily: FONT_BODY }}>{description}</p>
        </div>
        {resources && (
          <div style={{ flexShrink: 0 }}>
            <p style={{ fontSize: "14px", fontWeight: 600, color: "#181d27", margin: "0 0 8px 0", fontFamily: FONT_BODY }}>{t("resources")}</p>
            <div style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
              <a href="#" style={{ fontSize: "13px", color: "#10b132", textDecoration: "none", fontFamily: FONT_BODY }}>
                {t("resourceLink1")}
              </a>
              <a href="#" style={{ fontSize: "13px", color: "#10b132", textDecoration: "none", fontFamily: FONT_BODY }}>
                {t("resourceLink2")}
              </a>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

const KoinLogo = () => (
  <svg width="64" height="32" viewBox="0 0 64 32" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path fillRule="evenodd" clipRule="evenodd" d="M27.5556 27C32.7103 27 36.8889 22.8213 36.8889 17.6667C36.8889 12.512 32.7103 8.3333 27.5556 8.3333C22.4009 8.3333 18.2222 12.512 18.2222 17.6667C18.2222 22.8213 22.4009 27 27.5556 27ZM27.5556 22.7778C30.3784 22.7778 32.6667 20.4894 32.6667 17.6667C32.6667 14.8439 30.3784 12.5555 27.5556 12.5555C24.7328 12.5555 22.4445 14.8439 22.4445 17.6667C22.4445 20.4894 24.7328 22.7778 27.5556 22.7778Z" fill="#0C1114"/>
    <path d="M44.2223 3H40.0001V6.55556H44.2223V3Z" fill="#0C1114"/>
    <path d="M40.0001 12.3333H37.7778V8.77776H44.2223V26.5556H40.0001V12.3333Z" fill="#0C1114"/>
    <path d="M52.0005 11.4444C53.0249 9.90102 54.6704 8.3333 57.3339 8.3333C61.8078 8.3333 64.0005 11.6666 64.0005 15.8889V26.5556H59.7783V16.7778C59.7783 14.3426 58.3574 12.5555 56.0005 12.5555C53.4736 12.5555 52.0005 14.7354 52.0005 17.4444V26.5556H47.7779V8.77775H52.0005V11.4444Z" fill="#0C1114"/>
    <path d="M0 8.77776V26.5556H4.2222V8.77776H0Z" fill="#0C1114"/>
    <path d="M11.1111 15.4444L19.1112 26.5555H13.7778L8.66669 19.6666L11.1111 15.4444Z" fill="#0C1114"/>
    <path d="M12.6667 6.55554L0.888855 26.5556H5.77775L17.5555 6.55554H12.6667Z" fill="#10B132"/>
  </svg>
);

export const PageFooter = () => {
  const t = useT();
  return (
    <div
      style={{
        borderTop: "1px solid #e9eaeb",
        marginTop: "64px",
        paddingTop: "24px",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "16px 0",
        }}
      >
        <p style={{ fontSize: "13px", color: "#181d27", margin: 0, fontWeight: 600, fontFamily: FONT_BODY }}>
          {t("footerTitle")}
        </p>
        <KoinLogo />
      </div>
      <div style={{ borderTop: "1px solid #e9eaeb", paddingTop: "16px" }}>
        <p style={{ fontSize: "12px", color: "#98a2b3", margin: 0, fontFamily: FONT_BODY }}>{t("footerCopy")}</p>
      </div>
    </div>
  );
};

export const SectionBadge = () => {
  const t = useT();
  return (
    <span
      style={{
        display: "inline-flex",
        alignItems: "center",
        padding: "2px 8px",
        borderRadius: "12px",
        fontSize: "11px",
        fontWeight: 600,
        backgroundColor: "#e4fbe9",
        color: "#0c8525",
        border: "1px solid #d0f8d8",
        marginLeft: "8px",
        verticalAlign: "middle",
        fontFamily: FONT_BODY,
      }}
    >
      {t("variables")}
    </span>
  );
};

export const DocPage = ({ children }: { children: ReactNode }) => (
  <div style={{ fontFamily: FONT_BODY, maxWidth: "960px", margin: "0 auto" }}>
    {children}
  </div>
);
