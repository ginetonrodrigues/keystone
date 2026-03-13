import React, { createContext, useContext, type ReactNode } from "react";

export type Locale = "pt" | "es" | "en";

const translations = {
  // PageLayout
  resources: { pt: "Recursos", es: "Recursos", en: "Resources" },
  resourceLink1: {
    pt: "🎨 Criar estilos de cor, texto, efeito e grid →",
    es: "🎨 Crear estilos de color, texto, efecto y grid →",
    en: "🎨 Create color, text, effect and layout grid styles →",
  },
  resourceLink2: {
    pt: "📺 Tutorial Figma: Criando Estilos →",
    es: "📺 Tutorial Figma: Creando Estilos →",
    en: "📺 Figma Tutorial: Creating Styles →",
  },
  footerTitle: {
    pt: "KEYSTONE Kit de UI e design system",
    es: "KEYSTONE Kit de UI y sistema de diseño",
    en: "KEYSTONE UI kit and design system",
  },
  footerCopy: {
    pt: "© 2026 KOIN • KEYSTONE",
    es: "© 2026 KOIN • KEYSTONE",
    en: "© 2026 KOIN • KEYSTONE",
  },
  variables: { pt: "Variáveis", es: "Variables", en: "Variables" },

  // Introduction
  introWelcome: {
    pt: "Bem-vindo ao **Keystone Design System** — uma biblioteca de componentes completa construída sobre o [Untitled UI PRO](https://www.untitledui.com/) com React, TypeScript e Tailwind CSS.",
    es: "Bienvenido al **Keystone Design System** — una biblioteca de componentes completa construida sobre [Untitled UI PRO](https://www.untitledui.com/) con React, TypeScript y Tailwind CSS.",
    en: "Welcome to the **Keystone Design System** — a comprehensive component library built on top of [Untitled UI PRO](https://www.untitledui.com/) with React, TypeScript, and Tailwind CSS.",
  },
  introOverviewTitle: { pt: "Visão geral", es: "Descripción general", en: "Overview" },
  introOverview: {
    pt: "O Keystone oferece um conjunto curado de componentes de UI acessíveis e customizáveis, projetados para manter a consistência em todos os produtos. O design system utiliza uma paleta de marca verde personalizada, mantendo o sistema completo de tokens do Untitled UI para cores semânticas, tipografia, espaçamento e sombras.",
    es: "Keystone ofrece un conjunto curado de componentes de UI accesibles y personalizables, diseñados para mantener la consistencia en todos los productos. El sistema de diseño utiliza una paleta de marca verde personalizada, manteniendo el sistema completo de tokens de Untitled UI para colores semánticos, tipografía, espaciado y sombras.",
    en: "Keystone provides a curated set of accessible, customizable UI components designed for consistency across all products. The design system uses a custom green brand palette while maintaining the full Untitled UI token system for semantic colors, typography, spacing, and shadows.",
  },
  introArchTitle: { pt: "Arquitetura", es: "Arquitectura", en: "Architecture" },
  introArch1: {
    pt: "**React + TypeScript** — Componentes com tipagem segura e suporte completo a IntelliSense",
    es: "**React + TypeScript** — Componentes con tipado seguro y soporte completo de IntelliSense",
    en: "**React + TypeScript** — Type-safe components with full IntelliSense support",
  },
  introArch2: {
    pt: "**React Aria Components** — Primitivos acessíveis da Adobe que gerenciam atributos ARIA, navegação por teclado e gerenciamento de foco",
    es: "**React Aria Components** — Primitivos accesibles de Adobe que manejan atributos ARIA, navegación por teclado y gestión de foco",
    en: "**React Aria Components** — Accessible primitives from Adobe that handle ARIA attributes, keyboard navigation, and focus management",
  },
  introArch3: {
    pt: "**Tailwind CSS v4** — Estilização utility-first usando propriedades CSS customizadas (design tokens)",
    es: "**Tailwind CSS v4** — Estilización utility-first usando propiedades CSS personalizadas (design tokens)",
    en: "**Tailwind CSS v4** — Utility-first styling using CSS custom properties (design tokens)",
  },
  introArch4: {
    pt: "**Tema Untitled UI** — Sistema completo de tokens para cores, tipografia, espaçamento, bordas e sombras",
    es: "**Tema Untitled UI** — Sistema completo de tokens para colores, tipografía, espaciado, bordes y sombras",
    en: "**Untitled UI Theme** — Complete token system for colors, typography, spacing, radii, and shadows",
  },
  introGettingStarted: { pt: "Começando", es: "Primeros pasos", en: "Getting Started" },
  introInstallation: { pt: "Instalação", es: "Instalación", en: "Installation" },
  introDevelopment: { pt: "Desenvolvimento", es: "Desarrollo", en: "Development" },
  introAddComponents: { pt: "Adicionando Componentes", es: "Agregando Componentes", en: "Adding Components" },
  introImportFrom: {
    pt: "Importe do diretório de componentes:",
    es: "Importe desde el directorio de componentes:",
    en: "Import from the components directory:",
  },
  introDesignPrinciples: { pt: "Princípios de Design", es: "Principios de diseño", en: "Design Principles" },
  introPrinciple1: {
    pt: "**Acessibilidade em Primeiro Lugar** — Todos os componentes seguem padrões WAI-ARIA e suportam navegação por teclado",
    es: "**Accesibilidad Primero** — Todos los componentes siguen patrones WAI-ARIA y soportan navegación por teclado",
    en: "**Accessibility First** — All components follow WAI-ARIA patterns and support keyboard navigation",
  },
  introPrinciple2: {
    pt: "**Tokens Consistentes** — Cada cor, espaçamento e valor tipográfico vem do tema",
    es: "**Tokens Consistentes** — Cada color, espaciado y valor tipográfico proviene del tema",
    en: "**Consistent Tokens** — Every color, spacing, and typography value comes from the theme",
  },
  introPrinciple3: {
    pt: "**Componível** — Os componentes são projetados para serem combinados e estendidos",
    es: "**Composable** — Los componentes están diseñados para combinarse y extenderse",
    en: "**Composable** — Components are designed to be combined and extended",
  },
  introPrinciple4: {
    pt: "**Responsivo** — Os componentes se adaptam a diferentes tamanhos de tela",
    es: "**Responsivo** — Los componentes se adaptan a diferentes tamaños de pantalla",
    en: "**Responsive** — Components adapt to different viewport sizes",
  },

  // Design Tokens
  dtTitle: { pt: "Design Tokens", es: "Design Tokens", en: "Design Tokens" },
  dtBreadcrumb: { pt: "Fundamentos -> Design Tokens", es: "Fundamentos -> Design Tokens", en: "Foundations -> Design Tokens" },
  dtDesc: {
    pt: "Design tokens são os valores fundamentais que orientam o design visual de cada componente. O Keystone usa propriedades CSS customizadas, tornando os tokens acessíveis tanto em classes Tailwind quanto em CSS puro. Esta página oferece uma visão geral de todas as categorias de tokens.",
    es: "Los design tokens son los valores fundamentales que guían el diseño visual de cada componente. Keystone usa propiedades CSS personalizadas, haciendo los tokens accesibles tanto en clases Tailwind como en CSS puro. Esta página ofrece una visión general de todas las categorías de tokens.",
    en: "Design tokens are the foundational values that drive the visual design of every component. Keystone uses CSS custom properties, making tokens accessible in both Tailwind classes and raw CSS. This page provides an overview of all token categories.",
  },
  spacing: { pt: "Espaçamento", es: "Espaciado", en: "Spacing" },
  spacingDesc: {
    pt: "Tokens de espaçamento para padding, margens e gaps. Baseado em uma unidade de grid de 4px para espaçamento proporcional consistente.",
    es: "Tokens de espaciado para padding, márgenes y gaps. Basado en una unidad de grid de 4px para espaciado proporcional consistente.",
    en: "Spacing tokens for padding, margins, and gaps. Based on a 4px grid unit for consistent proportional spacing.",
  },
  borderRadius: { pt: "Borda Arredondada", es: "Radio de borde", en: "Border Radius" },
  borderRadiusDesc: {
    pt: "Valores de raio pré-definidos para arredondar bordas de elementos. Derivados dos primitivos de espaçamento.",
    es: "Valores de radio predefinidos para redondear bordes de elementos. Derivados de los primitivos de espaciado.",
    en: "Pre-defined radius values for rounding edges of elements. Derived from the spacing primitives.",
  },
  shadows: { pt: "Sombras", es: "Sombras", en: "Shadows" },
  shadowsDesc: {
    pt: "Sombras de elevação para adicionar profundidade e hierarquia visual. Sete níveis do sutil ao dramático.",
    es: "Sombras de elevación para agregar profundidad y jerarquía visual. Siete niveles de sutil a dramático.",
    en: "Elevation shadows for adding depth and visual hierarchy. Seven levels from subtle to dramatic.",
  },
  breakpoints: { pt: "Pontos de Quebra", es: "Puntos de quiebre", en: "Breakpoints" },
  breakpointsDesc: {
    pt: "Pontos de quebra responsivos para adaptar layouts em diferentes tamanhos de tela.",
    es: "Puntos de quiebre responsivos para adaptar layouts en diferentes tamaños de pantalla.",
    en: "Responsive breakpoints for adapting layouts across different screen sizes.",
  },
  maxWidth: { pt: "Largura Máxima", es: "Ancho Máximo", en: "Max Width" },
  token: { pt: "Token", es: "Token", en: "Token" },
  value: { pt: "Valor", es: "Valor", en: "Value" },
  usage: { pt: "Uso", es: "Uso", en: "Usage" },
  preview: { pt: "Prévia", es: "Vista previa", en: "Preview" },
  name: { pt: "Nome", es: "Nombre", en: "Name" },
  unitsInRem: { pt: "Unidades (em rem)", es: "Unidades (en rem)", en: "Units (in rem)" },
  pixels: { pt: "Pixels", es: "Píxeles", en: "Pixels" },
  sizeInRem: { pt: "Tamanho (em rem)", es: "Tamaño (en rem)", en: "Size (in rem)" },
  radius: { pt: "Raio", es: "Radio", en: "Radius" },

  // Breakpoint usage
  smallMobile: { pt: "Mobile pequeno", es: "Móvil pequeño", en: "Small mobile" },
  largeMobile: { pt: "Mobile grande", es: "Móvil grande", en: "Large mobile" },
  smallTablet: { pt: "Tablet pequeno", es: "Tablet pequeña", en: "Small tablet" },
  tablet: { pt: "Tablet", es: "Tablet", en: "Tablet" },
  desktop: { pt: "Desktop", es: "Escritorio", en: "Desktop" },
  largeDesktop: { pt: "Desktop grande", es: "Escritorio grande", en: "Large desktop" },
  extraLarge: { pt: "Extra grande", es: "Extra grande", en: "Extra large" },

  // Spacing Primitives
  spPrimTitle: { pt: "Primitivos de espaçamento", es: "Primitivos de espaciado", en: "Spacing primitives" },
  spPrimBreadcrumb: { pt: "Fundamentos -> Espaçamento, raio & grids", es: "Fundamentos -> Espaciado, radio & grids", en: "Foundations -> Spacing, radius & grids" },
  spPrimDesc: {
    pt: "Assim como sua escala de cores, trabalhar com um sistema de espaçamento definido permite que você trabalhe mais rápido e com mais consistência. Espaçamento consistente e escalável ajuda a eliminar suposições durante o design e desenvolvimento, pois você está projetando com um conjunto limitado de opções.",
    es: "Al igual que su escala de colores, trabajar con un sistema de espaciado definido le permite trabajar más rápido y de manera más consistente. Un espaciado consistente y escalable le ayuda a eliminar conjeturas durante el diseño y desarrollo, ya que está diseñando con un conjunto limitado de opciones.",
    en: "Just like your color scale, working from a defined spacing system allows you to work faster and more consistently. Consistent and scalable spacing helps you eliminate guesswork whilst designing and developing because you're designing with a limited set of options.",
  },
  spPrimBody1: {
    pt: "Por padrão, o Keystone usa uma escala numérica de espaçamento com valores proporcionais onde uma unidade de espaçamento é igual a 0.25rem ou 4px. Por exemplo, 16px e 8px são espaçamentos pequenos (4), pois são nomeados 2 e 4 respectivamente.",
    es: "Por defecto, Keystone usa una escala numérica de espaciado con valores proporcionales donde una unidad de espaciado es igual a 0.25rem o 4px. Por ejemplo, 16px y 8px son espaciados pequeños (4), ya que se nombran 2 y 4 respectivamente.",
    en: "By default, Keystone uses a numeric spacing scale with proportional values where one spacing unit is equal to 0.25rem or 4px. As an example, 16px and 8px are small spacings (4), as they're named 2 and 4 respectively.",
  },
  spPrimBody2: {
    pt: "No entanto, você pode modificar essas variáveis para alterar a escala padrão de espaçamento e dimensionamento.",
    es: "Sin embargo, puede modificar estas variables para cambiar la escala predeterminada de espaciado y dimensionamiento.",
    en: "However, you can modify these variables to change the default spacing and sizing scale.",
  },

  // Radius
  radiusTitle: { pt: "Raio", es: "Radio", en: "Radius" },
  radiusDesc: {
    pt: "Use valores de borda arredondada para estilizar rapidamente o border-radius de um elemento. Valores de border-radius são úteis para arredondar bordas de imagens, botões ou qualquer outro elemento. Assim como valores de espaçamento pré-definidos, trabalhar com um sistema de border-radius definido permite que você trabalhe mais rápido e com mais consistência.",
    es: "Use valores de radio de borde para estilizar rápidamente el border-radius de un elemento. Los valores de border-radius son útiles para redondear bordes de imágenes, botones o cualquier otro elemento. Al igual que los valores de espaciado predefinidos, trabajar con un sistema de border-radius definido le permite trabajar más rápido y de manera más consistente.",
    en: "Use border radius values to quickly style the border-radius of an element. Border radius values are useful for rounding edges of images, buttons, or any other element. Just like pre-defined spacing values, working from a defined border radius system allows you to work faster and more consistently.",
  },
  radiusSectionDesc: {
    pt: "Trabalhar com um sistema de raio pré-definido e limitado para adicionar bordas arredondadas (ou raios) a elementos permite que você trabalhe mais rápido e com consistência. O Keystone usa um sistema de raio pré-definido e limitado derivado dos valores primitivos de espaçamento.",
    es: "Trabajar con un sistema de radio predefinido y limitado para agregar bordes redondeados (o radios) a elementos le permite trabajar más rápido y de manera consistente. Keystone usa un sistema de radio predefinido y limitado derivado de los valores primitivos de espaciado.",
    en: "Working from a pre-defined and limited radius system for adding border radiuses (or radii) to elements allows you to work faster and consistently. Keystone uses a pre-defined and limited radius system derived from the primitive spacing values.",
  },

  // Spacing page
  spacingTitle: { pt: "Espaçamento", es: "Espaciado", en: "Spacing" },
  spacingPageDesc: {
    pt: "Assim como sua escala de cores, trabalhar com um sistema de espaçamento definido permite que você trabalhe mais rápido e com mais consistência. Espaçamento consistente e escalável ajuda a eliminar suposições durante o design e desenvolvimento.",
    es: "Al igual que su escala de colores, trabajar con un sistema de espaciado definido le permite trabajar más rápido y de manera más consistente. Un espaciado consistente y escalable le ayuda a eliminar conjeturas durante el diseño y desarrollo.",
    en: "Just like your color scale, working from a defined spacing system allows you to work faster and more consistently. Consistent and scalable spacing helps you eliminate guesswork whilst designing and developing because you're designing with a limited set of options.",
  },
  spacingSectionDesc: {
    pt: "Tokens de espaçamento são usados para padding, margens e gaps. Construídos a partir de uma unidade base consistente para garantir espaçamento proporcional em todos os componentes e layouts.",
    es: "Los tokens de espaciado se usan para padding, márgenes y gaps. Construidos a partir de una unidad base consistente para garantizar un espaciado proporcional en todos los componentes y layouts.",
    en: "Spacing tokens are used for padding, margins, and gaps. They're built from a consistent base unit to ensure proportional spacing across all components and layouts.",
  },
  widths: { pt: "Larguras", es: "Anchos", en: "Widths" },
  widthsDesc: {
    pt: "Tokens de largura definem larguras fixas para containers, colunas de layout e dimensionamento comum de elementos de UI.",
    es: "Los tokens de ancho definen anchos fijos para contenedores, columnas de layout y dimensionamiento común de elementos de UI.",
    en: "Width tokens define fixed widths for containers, layout columns, and common UI element sizing.",
  },
  containers: { pt: "Containers", es: "Contenedores", en: "Containers" },
  containersDesc: {
    pt: "Containers pré-definidos para ajudar a manter a consistência em toda a aplicação. Use a largura do container como wrapper em layouts de nível superior.",
    es: "Contenedores predefinidos para ayudar a mantener la consistencia en toda la aplicación. Use el ancho del contenedor como wrapper en layouts de nivel superior.",
    en: "Pre-defined containers to help you maintain consistency throughout your application. Use the container width as a wrapper on top-level layouts and pages.",
  },
  paragraphMaxWidths: { pt: "Larguras máximas de parágrafo", es: "Anchos máximos de párrafo", en: "Paragraph max-widths" },
  paragraphDesc: {
    pt: "O comprimento ideal de linha é de 50-75 caracteres por linha. Usar a variável de largura máxima de parágrafo ajuda a alcançar larguras de parágrafo legíveis.",
    es: "La longitud ideal de línea es de 50-75 caracteres por línea. Usar la variable de ancho máximo de párrafo ayuda a lograr anchos de párrafo legibles.",
    en: "Ideal line length is around 50-75 characters per line. Using the paragraph max-width variable helps you achieve readable paragraph widths.",
  },

  // Grid Layouts
  gridTitle: { pt: "Layouts de grid", es: "Layouts de grid", en: "Grid layouts" },
  gridBreadcrumb: { pt: "Fundamentos -> Espaçamento, raio & grids", es: "Fundamentos -> Espaciado, radio & grids", en: "Foundations -> Spacing, radius & grids" },
  gridDesc: {
    pt: "Sistemas de grid fornecem estrutura e consistência em diferentes tamanhos de tela e dispositivos. Use essas configurações de grid pré-definidas para manter harmonia visual em seus designs.",
    es: "Los sistemas de grid proporcionan estructura y consistencia en diferentes tamaños de pantalla y dispositivos. Use estas configuraciones de grid predefinidas para mantener armonía visual en sus diseños.",
    en: "Grid systems provide structure and consistency across different screen sizes and devices. Use these predefined grid configurations to maintain visual harmony throughout your designs.",
  },
  gridLayouts: { pt: "Layouts de grid", es: "Layouts de grid", en: "Grid layouts" },
  commonGridLayouts: { pt: "Layouts de grid comuns", es: "Layouts de grid comunes", en: "Common grid layouts" },
  cols: { pt: "cols", es: "cols", en: "cols" },
  columns: { pt: "colunas", es: "columnas", en: "columns" },
  gutter: { pt: "gutter", es: "gutter", en: "gutter" },
  margin: { pt: "margem", es: "margen", en: "margin" },

  // Shadows page
  shadowsTitle: { pt: "Sombras", es: "Sombras", en: "Shadows" },
  shadowsBreadcrumb: { pt: "Fundamentos -> Estilos de efeito", es: "Fundamentos -> Estilos de efecto", en: "Foundations -> Effect styles" },
  shadowsPageDesc: {
    pt: "Sombras permitem adicionar profundidade e realismo aos designs posicionando elementos em um eixo z.",
    es: "Las sombras permiten agregar profundidad y realismo a los diseños posicionando elementos en un eje z.",
    en: "Shadows allow you to add depth and realism to designs by positioning elements on a z-axis.",
  },

  // Focus Rings
  focusTitle: { pt: "Anéis de foco", es: "Anillos de enfoque", en: "Focus rings" },
  focusBreadcrumb: { pt: "Fundamentos -> Estilos de efeito", es: "Fundamentos -> Estilos de efecto", en: "Foundations -> Effect styles" },
  focusDesc: {
    pt: "Um anel de foco (também conhecido como \"indicador de foco\") identifica o elemento atualmente focado na sua página.",
    es: "Un anillo de enfoque (también conocido como \"indicador de enfoque\") identifica el elemento actualmente enfocado en su página.",
    en: "A focus ring (also known as a \"focus indicator\") identifies the currently focused element on your page.",
  },
  focusRings: { pt: "Anéis de foco", es: "Anillos de enfoque", en: "Focus rings" },
  focusRingsDesc: {
    pt: "Anéis de foco de camada única são usados para elementos como toggles e checkboxes que não necessitam de sombra.",
    es: "Los anillos de enfoque de capa única se usan para elementos como toggles y checkboxes que no requieren sombra.",
    en: "Single layer focus rings are used for elements such as toggles and checkboxes that don't require a shadow.",
  },
  focusRingsWithShadows: { pt: "Anéis de foco com sombras", es: "Anillos de enfoque con sombras", en: "Focus rings with shadows" },
  focusRingsWithShadowsDesc: {
    pt: "Alguns elementos, como campos de entrada e botões, requerem uma sombra e um anel de foco. Atualmente, o Figma não suporta adicionar múltiplos estilos de efeito a elementos. Como alternativa, esses anéis de foco são combinados com estilos de sombra.",
    es: "Algunos elementos, como campos de entrada y botones, requieren una sombra y un anillo de enfoque. Actualmente, Figma no soporta agregar múltiples estilos de efecto a elementos. Como alternativa, estos anillos de enfoque se combinan con estilos de sombra.",
    en: "Some elements, such as input fields and buttons, require a shadow and a focus ring. Currently, Figma doesn't support adding multiple effects styles to elements. As a workaround, these focus rings are combined with shadow styles.",
  },

  // Typography
  typographyTitle: { pt: "Tipografia", es: "Tipografía", en: "Typography" },
  typographyBreadcrumb: { pt: "Fundamentos -> Tipografia", es: "Fundamentos -> Tipografía", en: "Foundations -> Typography" },
  typographyDesc: {
    pt: "Nosso design system utiliza uma escala tipográfica abrangente para garantir legibilidade em todos os dispositivos. Ele fornece padrões tipográficos consistentes para títulos, corpo de texto e texto fino, e é projetado para ser acessível para todos.",
    es: "Nuestro sistema de diseño utiliza una escala tipográfica integral para garantizar legibilidad en todos los dispositivos. Proporciona patrones tipográficos consistentes para títulos, cuerpo de texto y texto fino, y está diseñado para ser accesible para todos.",
    en: "Our design system leverages a comprehensive type scale to ensure readability across devices. It provides consistent typographic patterns for headings, body copy, and fine print, and is designed to be accessible for everyone.",
  },
  header: { pt: "Cabeçalho", es: "Encabezado", en: "Header" },
  body: { pt: "Corpo", es: "Cuerpo", en: "Body" },

  // Colors
  primaryColors: { pt: "Cores primárias", es: "Colores primarios", en: "Primary colors" },
  primaryColorsDesc: {
    pt: "Estas são as principais cores neutras, de marca e semânticas que compõem a maioria das cores usadas no design system e componentes.",
    es: "Estos son los principales colores neutros, de marca y semánticos que componen la mayoría de los colores utilizados en el sistema de diseño y componentes.",
    en: "These are the main neutral, brand and semantic colors that make up the majority of the colors used in the design system and components.",
  },
  supportColors: { pt: "Cores de suporte", es: "Colores de soporte", en: "Support colors" },
  secondaryColors: { pt: "Cores secundárias", es: "Colores secundarios", en: "Secondary colors" },
  secondaryColorsDesc: {
    pt: "Junto com as cores primárias, é útil ter uma seleção de cores secundárias para usar em componentes como pills, alertas e labels. Essas cores secundárias devem ser usadas com moderação ou como acentos.",
    es: "Junto con los colores primarios, es útil tener una selección de colores secundarios para usar en componentes como pills, alertas y etiquetas. Estos colores secundarios deben usarse con moderación o como acentos.",
    en: "Along with primary colors, it's helpful to have a selection of secondary colors to use in components such as pills, alerts and labels. These secondary colors should be used sparingly or as accents, whilst the primary color list should take precedence.",
  },
  colorsPageTitle: { pt: "Cores", es: "Colores", en: "Colors" },
  colorsPageDesc: {
    pt: "Nosso design system utiliza um conjunto intencional de estilos de cores como ponto de partida perfeito para qualquer marca ou projeto. Quando se trata de cor, o contraste é fundamental para garantir que o texto seja legível. Adicionamos taxas de contraste WCAG 2.2 ao nosso sistema de cores para que você possa garantir que está projetando com acessibilidade em mente.",
    es: "Nuestro sistema de diseño utiliza un conjunto intencional de estilos de color como el punto de partida perfecto para cualquier marca o proyecto. Cuando se trata de color, el contraste es fundamental para garantizar que el texto sea legible. Agregamos tasas de contraste WCAG 2.2 a nuestro sistema de colores para que pueda asegurarse de diseñar con accesibilidad en mente.",
    en: "Our design system leverages a purposeful set of color styles as the perfect starting point for any brand or project. When it comes to color, contrast is critical for ensuring text is legible. We've added WCAG 2.2 contrast ratios to our color system so you can make sure you're designing with accessibility in mind.",
  },
  base: { pt: "Base", es: "Base", en: "Base" },
  baseDesc: {
    pt: "Estas são as cores base que estarão em uso para alterações rápidas quando necessário.",
    es: "Estos son los colores base que estarán en uso para cambios rápidos cuando sea necesario.",
    en: "These are base colors and will be in use across to quickly touch stuff if you need to.",
  },

  // Color descriptions
  grayDesc: {
    pt: "Cinza, como cor neutra, é a base do sistema de cores. Quase tudo no design de UI — texto, campos de formulário, backgrounds, divisores — é cinza.",
    es: "Gris, como color neutro, es la base del sistema de colores. Casi todo en el diseño de UI — texto, campos de formulario, fondos, divisores — es gris.",
    en: "Gray, as a neutral color, is the foundation of the color system. Almost everything in UI design — text, form fields, backgrounds, dividers — are gray.",
  },
  brandDesc: {
    pt: "A cor da marca é sua cor \"primária\", e é usada em todos os elementos interativos como botões, links, inputs, etc. Esta cor define a aparência e sensação geral da interface.",
    es: "El color de marca es su color \"primario\", y se usa en todos los elementos interactivos como botones, enlaces, inputs, etc. Este color define la apariencia y sensación general de la interfaz.",
    en: "The brand color is your \"primary\" color, and is used across all interactive elements such as buttons, links, inputs, etc. This color can be for the overall feel and look of the interface.",
  },
  errorDesc: {
    pt: "Cores de erro são usadas em estados de erro e ações \"destrutivas\". Elas comunicam uma ação destrutiva/negativa, como remover um usuário da sua equipe.",
    es: "Los colores de error se usan en estados de error y acciones \"destructivas\". Comunican una acción destructiva/negativa, como eliminar un usuario de su equipo.",
    en: "Error colors are used across error states and \"destructive\" actions. They communicate a destructive/negative action, such as removing a user from your team.",
  },
  warningDesc: {
    pt: "Cores de alerta comunicam que uma ação é potencialmente destrutiva ou \"em espera\". Essas cores são comumente usadas em ações de confirmação, para chamar a atenção do usuário.",
    es: "Los colores de advertencia comunican que una acción es potencialmente destructiva o \"en espera\". Estos colores se usan comúnmente en acciones de confirmación, para llamar la atención del usuario.",
    en: "Warning colors are communicated that an action is potentially destructive or \"on-hold\". These colors are commonly used in confirmation actions, to grab the user attention.",
  },
  successDesc: {
    pt: "Cores de sucesso comunicam uma ação positiva, tendência positiva ou uma confirmação bem-sucedida.",
    es: "Los colores de éxito comunican una acción positiva, tendencia positiva o una confirmación exitosa.",
    en: "Success colors communicate a positive action, positive trend, or a successful confirmation.",
  },
  mossDesc: {
    pt: "Pode ser trocada pela cor de sucesso padrão.",
    es: "Puede intercambiarse con el color de éxito predeterminado.",
    en: "Can be swapped with the default success color.",
  },
  orangeDarkDesc: {
    pt: "Pode ser trocada pela cor de alerta padrão.",
    es: "Puede intercambiarse con el color de advertencia predeterminado.",
    en: "Can be swapped with the default warning color.",
  },

  // Changelog
  changelogTitle: { pt: "Changelog", es: "Changelog", en: "Changelog" },
  changelogBreadcrumb: { pt: "Keystone -> Changelog", es: "Keystone -> Changelog", en: "Keystone -> Changelog" },
  changelogDesc: {
    pt: "Histórico de todas as alterações, melhorias e correções do Keystone Design System. Mantenha-se atualizado com as últimas novidades.",
    es: "Historial de todos los cambios, mejoras y correcciones del Keystone Design System. Manténgase actualizado con las últimas novedades.",
    en: "History of all changes, improvements, and fixes in the Keystone Design System. Stay up to date with the latest updates.",
  },
  changelogAdded: { pt: "Adicionado", es: "Agregado", en: "Added" },
  changelogChanged: { pt: "Alterado", es: "Cambiado", en: "Changed" },
  changelogFixed: { pt: "Corrigido", es: "Corregido", en: "Fixed" },
  changelogRemoved: { pt: "Removido", es: "Eliminado", en: "Removed" },
  changelogInitialRelease: { pt: "Lançamento inicial", es: "Lanzamiento inicial", en: "Initial release" },

  // v1.0.0 entries
  cl100_added1: {
    pt: "Documentação completa do Design System publicada no Storybook",
    es: "Documentación completa del Design System publicada en Storybook",
    en: "Complete Design System documentation published on Storybook",
  },
  cl100_added2: {
    pt: "Página de introdução com visão geral da arquitetura e princípios de design",
    es: "Página de introducción con visión general de la arquitectura y principios de diseño",
    en: "Introduction page with architecture overview and design principles",
  },
  cl100_added3: {
    pt: "Documentação de Design Tokens: espaçamento, raio, sombras, breakpoints",
    es: "Documentación de Design Tokens: espaciado, radio, sombras, breakpoints",
    en: "Design Tokens documentation: spacing, radius, shadows, breakpoints",
  },
  cl100_added4: {
    pt: "Paleta de cores completa com 12 tons de marca (brand) e cores semânticas",
    es: "Paleta de colores completa con 12 tonos de marca (brand) y colores semánticos",
    en: "Complete color palette with 12 brand shades and semantic colors",
  },
  cl100_added5: {
    pt: "Documentação de tipografia com escala de tipos usando Plus Jakarta Sans e Inter",
    es: "Documentación de tipografía con escala de tipos usando Plus Jakarta Sans e Inter",
    en: "Typography documentation with type scale using Plus Jakarta Sans and Inter",
  },
  cl100_added6: {
    pt: "Primitivos de espaçamento, raio, grid layouts e estilos de efeito",
    es: "Primitivos de espaciado, radio, grid layouts y estilos de efecto",
    en: "Spacing primitives, radius, grid layouts, and effect styles",
  },
  cl100_added7: {
    pt: "Anéis de foco e documentação de sombras com exemplos visuais",
    es: "Anillos de enfoque y documentación de sombras con ejemplos visuales",
    en: "Focus rings and shadows documentation with visual examples",
  },
  cl100_added8: {
    pt: "Internacionalização (i18n) com suporte a Português, Espanhol e Inglês",
    es: "Internacionalización (i18n) con soporte para Portugués, Español e Inglés",
    en: "Internationalization (i18n) with Portuguese, Spanish, and English support",
  },
  cl100_added9: {
    pt: "Seletor de idioma integrado na toolbar do Storybook",
    es: "Selector de idioma integrado en la toolbar de Storybook",
    en: "Language selector integrated in the Storybook toolbar",
  },
  cl100_added10: {
    pt: "Página de Changelog para rastreamento de versões",
    es: "Página de Changelog para seguimiento de versiones",
    en: "Changelog page for version tracking",
  },
  cl100_changed1: {
    pt: "Paleta de brand personalizada com 12 tons de verde (50–950)",
    es: "Paleta de marca personalizada con 12 tonos de verde (50–950)",
    en: "Custom brand palette with 12 green shades (50–950)",
  },
  cl100_changed2: {
    pt: "Fonte de títulos atualizada para Plus Jakarta Sans (anteriormente Inter)",
    es: "Fuente de títulos actualizada a Plus Jakarta Sans (anteriormente Inter)",
    en: "Heading font updated to Plus Jakarta Sans (previously Inter)",
  },
} as const;

type TranslationKey = keyof typeof translations;

const I18nContext = createContext<Locale>("pt");

export const I18nProvider = ({ locale, children }: { locale: Locale; children: ReactNode }) => (
  <I18nContext.Provider value={locale}>{children}</I18nContext.Provider>
);

export const useLocale = () => useContext(I18nContext);

export const useT = () => {
  const locale = useLocale();
  return (key: TranslationKey) => translations[key][locale];
};

export const t = (key: TranslationKey, locale: Locale) => translations[key][locale];
