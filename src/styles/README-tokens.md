# Tokens do Keystone 2.0

## `keystone-variables.json`

Export das **variáveis do Figma** (Keystone 2.0). Este arquivo é a fonte de verdade para cores, espaçamentos e tokens semânticos.

### Estrutura do JSON

1. **`_Primitives`** (primeiro item do array)
   - **Colors:** Base (white, black, transparent), Gray (light/dark), Brand, Error, Warning, Success, Moss, Purple, Orange dark
   - **Size:** escala de espaçamento (0–480px + Full), em `$value` como número em px

2. **`1. Color modes`**
   - **Light mode** (e provavelmente **Dark mode**): tokens semânticos que referenciam os primitivos
   - **Text:** `text-primary`, `text-secondary`, `text-tertiary`, etc. (referências tipo `{Colors.Gray (light mode).900}`)
   - **Border:** `border-primary`, `border-secondary`, etc.
   - **Foreground:** `fg-primary`, `fg-secondary`, etc.
   - **Background:** `bg-primary`, `bg-secondary`, etc.

### Relação com `theme.css`

O `theme.css` já usa os mesmos **nomes semânticos** que o Figma:

- `--color-text-primary`, `--color-text-secondary`, …
- `--color-border-primary`, `--color-fg-primary`, `--color-bg-primary`, …
- Primitivos: `--color-gray-*`, `--color-brand-*`, `--color-error-*`, etc.

Os valores em `theme.css` podem ser atualizados a partir deste JSON quando o design system for alterado no Figma (exportar de novo e, se necessário, rodar um script de sincronização ou ajustar manualmente).

### Sincronizar tokens do Figma para CSS

Foi criado um script que lê `keystone-variables.json`, resolve as referências (`{Colors.Gray (light mode).900}` etc.) e gera um arquivo CSS com os tokens.

**Comando:**

```bash
npm run sync-tokens
```

**Saída:** `src/styles/theme-from-figma.css` (primitivos + tokens semânticos Light e Dark em formato `@theme` + `.dark-mode`).

**Usar os tokens do Figma no projeto:**

- Opção 1 — Substituir: em `src/styles/globals.css`, trocar o `@import "./theme.css"` por `@import "./theme-from-figma.css"` (e remover ou comentar o import do theme.css se não quiser misturar).
- Opção 2 — Sobrescrever: em `globals.css`, após `@import "./theme.css"`, adicionar `@import "./theme-from-figma.css"` para que os valores do Figma sobrescrevam os do theme atual.

**Referência:** abrir o JSON para ver valores hex e referências do Figma.
