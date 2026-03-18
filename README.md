# Keystone Design System

Biblioteca de componentes (React + TypeScript + Tailwind) com documentação no **Storybook**.

## Consumir o DS

| Caminho | Onde |
|--------|------|
| **Skill (recomendado)** | Storybook → **Skill** → Copiar prompt / Baixar `.md` |
| **Manual** | Storybook → **Clonar / Instalação Manual** (tokens, tema, componentes) |

Arquivos servidos em `public/`:

- `keystone-skill-prompt.txt` — prompt para colar na IA
- `keystone-skill.md` — guideline para instalar como Skill no Cursor (ou outra IDE)

## Desenvolvimento

```bash
npm install
npm run dev              # app Vite
npm run storybook        # http://localhost:6006
```

## Tokens (Figma)

```bash
npm run sync-tokens      # gera theme-from-figma.css a partir de keystone-variables.json
```

Ver `src/styles/README-tokens.md` para detalhes.

## Build e deploy

```bash
npm run build
npm run build-storybook  # saída em storybook-static/
```

O workflow em `.github/workflows/` publica o Storybook (ex.: GitHub Pages em `/keystone/`).

---

Stack base: Vite, React, TypeScript, Tailwind CSS 4, Untitled UI PRO patterns.
