#!/usr/bin/env node
/**
 * Sync design tokens from Figma export (keystone-variables.json) to CSS.
 * Resolves references like {Colors.Gray (light mode).900} and outputs
 * --color-* variables in Tailwind v4 @theme format.
 *
 * Usage: node scripts/sync-tokens-from-figma.mjs
 * Output: src/styles/theme-from-figma.css (merge or replace sections in theme.css)
 */

import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, "..");
const JSON_PATH = path.join(ROOT, "src/styles/keystone-variables.json");
const OUT_PATH = path.join(ROOT, "src/styles/theme-from-figma.css");

// --- Build primitives map from _Primitives (path -> raw value)
function collectPrimitives(obj, pathParts = []) {
  const out = {};
  for (const [key, val] of Object.entries(obj)) {
    if (
      key.startsWith("$") ||
      key === "modes" ||
      key === "Style" ||
      key === "Light mode" ||
      key === "Dark mode"
    )
      continue;
    const nextPath = pathParts.concat(key);
    if (val && typeof val === "object" && "$value" in val) {
      out[nextPath.join(".")] = val.$value;
    } else if (val && typeof val === "object") {
      Object.assign(out, collectPrimitives(val, nextPath));
    }
  }
  return out;
}

function buildPrimitivesMap(data) {
  const primitives = data.find((item) => item._Primitives);
  if (!primitives?._Primitives?.modes?.Style) {
    throw new Error("_Primitives.modes.Style not found in JSON");
  }
  return collectPrimitives(primitives._Primitives.modes.Style, []);
}

// --- Resolve reference like "{Colors.Gray (light mode).900}" using primitives map
function resolveRef(ref, primitives) {
  if (typeof ref !== "string") return ref;
  const m = ref.match(/^\{(.+)}$/);
  if (!m) return ref;
  const path = m[1].trim();
  const value = primitives[path];
  if (value === undefined) return ref;
  return value;
}

// --- Convert color to CSS (hex -> rgb(r g b), rgba kept as-is or normalized)
function colorToCss(value) {
  if (typeof value !== "string") return String(value);
  const hex = value.match(/^#([0-9a-fA-F]{6}|[0-9a-fA-F]{8})$/);
  if (hex) {
    const s = hex[1];
    const r = parseInt(s.slice(0, 2), 16);
    const g = parseInt(s.slice(2, 4), 16);
    const b = parseInt(s.slice(4, 6), 16);
    const a = s.length === 8 ? parseInt(s.slice(6, 8), 16) / 255 : null;
    if (a != null && a < 1)
      return `rgb(${r} ${g} ${b} / ${(a * 100).toFixed(0)}%)`;
    return `rgb(${r} ${g} ${b})`;
  }
  const rgba = value.match(/^rgba?\(([^)]+)\)$/);
  if (rgba) return value;
  return value;
}

// --- Semantic token name to CSS variable name: "text-primary (900)" -> "text-primary"
function tokenNameToCssVar(name) {
  return name.replace(/\s*\([^)]*\)\s*$/, "").trim();
}

// --- Collect semantic tokens from a mode (Light mode / Dark mode)
function collectSemanticTokens(modeColors, primitives) {
  const vars = {};
  function walk(obj, prefix = "") {
    for (const [key, val] of Object.entries(obj)) {
      if (key.startsWith("$")) continue;
      if (val && typeof val === "object" && "$value" in val) {
        const resolved = resolveRef(val.$value, primitives);
        const cssValue =
          typeof resolved === "string" && resolved.startsWith("#")
            ? colorToCss(resolved)
            : typeof resolved === "number"
              ? `${resolved}px`
              : typeof resolved === "string"
                ? colorToCss(resolved)
                : String(resolved);
        const varName = tokenNameToCssVar(key);
        if (varName) vars[prefix + varName] = cssValue;
      } else if (val && typeof val === "object") {
        walk(val, prefix);
      }
    }
  }
  walk(modeColors);
  return vars;
}

// --- Build CSS block for a set of --color-* variables
function toCssBlock(vars, indent = "    ") {
  return Object.entries(vars)
    .map(([name, value]) => {
      const cssName = name.startsWith("--") ? name : `--color-${name}`;
      return `${indent}${cssName}: ${value};`;
    })
    .join("\n");
}

// --- Main: read JSON, build primitives, get color modes, output CSS
function main() {
  const raw = fs.readFileSync(JSON_PATH, "utf8");
  const data = JSON.parse(raw);

  const primitives = buildPrimitivesMap(data);
  const colorModes = data.find((item) => item["1. Color modes"]);
  if (!colorModes?.["1. Color modes"]?.modes) {
    throw new Error('"1. Color modes".modes not found');
  }

  const lightMode = colorModes["1. Color modes"].modes["Light mode"];
  const darkMode = colorModes["1. Color modes"].modes["Dark mode"];

  const lightVars = lightMode?.Colors
    ? collectSemanticTokens(lightMode.Colors, primitives)
    : {};
  const darkVars =
    darkMode?.Colors ?
      collectSemanticTokens(darkMode.Colors, primitives)
    : {};

  // Primitives: only Colors; exclude "Gray (dark mode)" so root uses light primitives
  const primitiveColorKeys = Object.keys(primitives).filter(
    (p) => p.startsWith("Colors.") && !p.includes("Gray (dark mode)")
  );
  const primitivesCss = {};
  for (const key of primitiveColorKeys) {
    const value = primitives[key];
    if (typeof value !== "string") continue;
    // "Colors.Base.white" -> "white", "Colors.Gray (light mode).900" -> "gray-900", "Colors.Brand.500" -> "brand-500"
    const rest = key.replace(/^Colors\./, "");
    const parts = rest.split(".");
    const category = parts[0]
      .replace(/\s*\([^)]*\)\s*/g, "")
      .replace(/\s+/g, "-")
      .toLowerCase();
    const name =
      category === "base" ? parts[1] : `${category}-${parts.slice(1).join("-")}`;
    primitivesCss[`--color-${name}`] = colorToCss(value);
  }

  const lines = [
    "/* Auto-generated from keystone-variables.json. Do not edit by hand. */",
    "/* Run: node scripts/sync-tokens-from-figma.mjs */",
    "",
    "@theme {",
    "    /* Primitives (Figma _Primitives) */",
    toCssBlock(primitivesCss),
    "",
    "    /* Light mode semantic tokens */",
    toCssBlock(lightVars),
    "}",
    "",
    "@layer base {",
    "    .dark-mode {",
    "        /* Dark mode semantic tokens */",
    toCssBlock(darkVars, "        "),
    "    }",
    "}",
    "",
  ];

  fs.writeFileSync(OUT_PATH, lines.join("\n"), "utf8");
  console.log("Wrote:", OUT_PATH);
  console.log(
    "Primitives:", primitiveColorKeys.length,
    "| Light vars:", Object.keys(lightVars).length,
    "| Dark vars:", Object.keys(darkVars).length
  );
}

main();
