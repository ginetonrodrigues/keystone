/**
 * Lê keystone-variables.json e expõe primitivos + tokens de foundations
 * (Color Modes, Radius, Spacing, Widths, Containers) com referências resolvidas.
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
type Json = any;

import tokensJson from "../../styles/keystone-variables.json";

const data = tokensJson as Json[];

function getPrimitivesObj() {
  const item = data.find((x) => x._Primitives?.modes?.Style);
  return item?._Primitives?.modes?.Style ?? {};
}

/** Mapa path -> value para resolver refs tipo {Colors.Gray (light mode).900} ou {Size.1 (4px)} */
function buildPrimitivesMap(): Record<string, string | number> {
  const style = getPrimitivesObj();
  const out: Record<string, string | number> = {};
  function walk(obj: Json, path: string[] = []) {
    if (!obj || typeof obj !== "object") return;
    for (const key of Object.keys(obj)) {
      if (key.startsWith("$")) continue;
      const val = obj[key];
      const nextPath = path.concat(key);
      if (val && typeof val === "object" && "$value" in val) {
        out[nextPath.join(".")] = val.$value;
      } else if (val && typeof val === "object") {
        walk(val, nextPath);
      }
    }
  }
  walk(style);
  return out;
}

let primitivesMap: Record<string, string | number> | null = null;
function getPrimitivesMap(): Record<string, string | number> {
  if (!primitivesMap) primitivesMap = buildPrimitivesMap();
  return primitivesMap;
}

function resolveRef(ref: unknown): string | number | null {
  if (typeof ref !== "string") return null;
  const m = ref.match(/^\{(.+)\}$/);
  if (!m) return null;
  const path = m[1].trim();
  const map = getPrimitivesMap();
  const val = map[path];
  return val !== undefined ? val : null;
}

/** Cores primitivas por categoria: { "Base": { white: "#fff", ... }, "Gray (light mode)": { 25: "#...", ... }, ... } */
export function getPrimitivesColors(): Record<string, Record<string, string>> {
  const style = getPrimitivesObj();
  const colors = style.Colors ?? {};
  const out: Record<string, Record<string, string>> = {};
  for (const [cat, group] of Object.entries(colors)) {
    if (!group || typeof group !== "object") continue;
    const entries: Record<string, string> = {};
    for (const [key, node] of Object.entries(group as Json)) {
      const value = (node as Json)?.$value;
      if (typeof value === "string") entries[key] = value;
    }
    if (Object.keys(entries).length) out[cat] = entries;
  }
  return out;
}

/** Escala Size (primitiva): { "0 (0px)": 0, "1 (4px)": 4, ... "Full": 999999 } */
export function getPrimitivesSize(): Record<string, number> {
  const style = getPrimitivesObj();
  const size = style.Size ?? {};
  const out: Record<string, number> = {};
  for (const [key, node] of Object.entries(size as Json)) {
    const value = (node as Json)?.$value;
    if (typeof value === "number") out[key] = value;
  }
  return out;
}

/** Tokens de "1. Color modes" por modo: { light: { "text-primary (900)": "#...", ... }, dark: { ... } } */
export function getColorModesTokens(): { light: Record<string, string>; dark: Record<string, string> } {
  const item = data.find((x) => x["1. Color modes"]?.modes);
  const modes = item?.["1. Color modes"]?.modes ?? {};
  const map = getPrimitivesMap();
  const resolve = (v: unknown): string | null => {
    if (typeof v !== "string") return null;
    const m = v.match(/^\{(.+)\}$/);
    if (!m) return null;
    const val = map[m[1].trim()];
    if (typeof val === "string") return val;
    if (typeof val === "number") return `${val}px`;
    return null;
  };
  function collectColors(obj: Json): Record<string, string> {
    const out: Record<string, string> = {};
    if (!obj || typeof obj !== "object") return out;
    for (const [k, v] of Object.entries(obj)) {
      if (k.startsWith("$")) continue;
      const node = v as Json;
      if (node?.$value != null) {
        const resolved = resolve(node.$value);
        if (resolved != null) out[k] = resolved;
      } else if (node && typeof node === "object") {
        Object.assign(out, collectColors(node));
      }
    }
    return out;
  }
  return {
    light: collectColors(modes["Light mode"]),
    dark: collectColors(modes["Dark mode"]),
  };
}

/** Tokens "2. Radius": { "radius-none": 0, "radius-xxs": 2, ... } (valores em px resolvidos) */
export function getRadiusTokens(): Record<string, number> {
  const item = data.find((x) => x["2. Radius"]?.modes);
  const mode = item?.["2. Radius"]?.modes?.["Mode 1"] ?? {};
  const out: Record<string, number> = {};
  for (const [key, node] of Object.entries(mode as Json)) {
    const ref = (node as Json)?.$value;
    const resolved = resolveRef(ref);
    if (typeof resolved === "number") out[key] = resolved;
  }
  return out;
}

/** Tokens "3. Spacing": { "spacing-none": 0, "spacing-xxs": 2, ... } */
export function getSpacingTokens(): Record<string, number> {
  const item = data.find((x) => x["3. Spacing"]?.modes);
  const mode = item?.["3. Spacing"]?.modes?.["Mode 1"] ?? {};
  const out: Record<string, number> = {};
  for (const [key, node] of Object.entries(mode as Json)) {
    const resolved = resolveRef((node as Json)?.$value);
    if (typeof resolved === "number") out[key] = resolved;
  }
  return out;
}

/** Tokens "4. Widths": { "width-xxs": 320, ... } (px) */
export function getWidthsTokens(): Record<string, number> {
  const item = data.find((x) => x["4. Widths"]?.modes);
  const mode = item?.["4. Widths"]?.modes?.["Mode 1"] ?? {};
  const out: Record<string, number> = {};
  for (const [key, node] of Object.entries(mode as Json)) {
    const resolved = resolveRef((node as Json)?.$value);
    if (typeof resolved === "number") out[key] = resolved;
  }
  return out;
}

/** Tokens "5. Containers": { "container-padding-mobile": 16, ... } (px) */
export function getContainersTokens(): Record<string, number> {
  const item = data.find((x) => x["5. Containers"]?.modes);
  const mode = item?.["5. Containers"]?.modes?.Value ?? item?.["5. Containers"]?.modes?.["Mode 1"] ?? {};
  const out: Record<string, number> = {};
  for (const [key, node] of Object.entries(mode as Json)) {
    const resolved = resolveRef((node as Json)?.$value);
    if (typeof resolved === "number") out[key] = resolved;
  }
  return out;
}

function hexToRgb(hex: string): string {
  const m = hex.match(/^#([0-9a-fA-F]{6})$/);
  if (!m) return hex;
  const r = parseInt(m[1].slice(0, 2), 16);
  const g = parseInt(m[1].slice(2, 4), 16);
  const b = parseInt(m[1].slice(4, 6), 16);
  return `rgb(${r} ${g} ${b})`;
}

export function colorValueToCss(value: string): string {
  if (value.startsWith("#")) return hexToRgb(value);
  return value;
}
