# shadcn-vue + originui-vue Integration Demo

This repository demonstrates how to integrate both [shadcn-vue](https://www.shadcn-vue.com/) and [originui-vue](https://originui-vue.pages.dev/) in a single Nuxt 3 application.

The goal is to prove that both libraries can coexist seamlessly, sharing styles, utilities, and auto-import configurations.

---

## 🧱 Stack

- [Nuxt 3](https://nuxt.com)
- [Tailwind CSS](https://tailwindcss.com)
- [RekaUI](https://reka-ui.com/)
- [color-mode](https://color-mode.nuxtjs.org)
- [shadcn-vue](https://www.shadcn-vue.com/)
- [originui-vue](https://originui-vue.pages.dev/)

---

## ✅ Prerequisites

If you already have `shadcn-vue` installed, **you don't need to install anything else** to use `originui-vue`.

- Tailwind CSS is already configured.
- `reka-ui` is already installed.
- Both libraries use the same CSS variable structure and animation keyframes.

👉 [originui-vue — CSS Variables](https://github.com/Jettonn/originui-vue?tab=readme-ov-file#css-variables)

---

## 🧠 Utilities

Utilities from both libraries (`shadcn-vue` and `originui-vue`) have been merged into a single utility file.

You can find the unified implementation here:  
👉 [lib/utils.ts](https://github.com/mtzrmzia/shadcn-originui-vue/blob/main/lib/utils.ts)

Original references:
- [shadcn-vue/lib/utils.ts](https://www.shadcn-vue.com/docs/installation/manual.html#add-a-cn-helper)
- [originui-vue/lib/utils.ts](https://github.com/Jettonn/originui-vue/blob/main/src/lib/utils.ts)

---

## 📦 Component Structure & Auto-Imports
This project uses Nuxt’s `components` configuration to automatically import UI components from both **Shadcn-Vue** and **OriginUI-Vue**, with clearly defined paths and prefixes to avoid conflicts:

`nuxt.config.ts`:

```ts
export default defineNuxtConfig({
  components: [
    {
      path: '~/components',
      pathPrefix: false,
      // Register general components directly from /components without requiring subfolder prefixes
      // Excludes UI libraries to avoid duplicate registration
      ignore: ['~/components/ui', '~/components/originui']
    },
    {
      path: '~/components/ui',
      pathPrefix: false,
      // Components from shadcn-vue are auto-registered via the shadcn module
      // No prefix here because it's handled below in the `shadcn` module config
    },
    {
      path: '~/components/originui',
      pathPrefix: false,
      prefix: 'OU', // Adds "OU" prefix to avoid naming collisions with other libraries
      ignore: ['**/index.ts'] // Prevent Nuxt from treating index.ts as a default component
    }
  ],
  modules: [
    'shadcn-nuxt',
    '@nuxtjs/color-mode'
  ],
  shadcn: {
    prefix: 'SC',
    componentDir: './components/ui',
  },
  colorMode: {
    classSuffix: '',
  },
})
```

Note: `shadcn-vue` uses its own Nuxt module for automatic component registration with the `SC` prefix, so it is not set via `components.prefix`.

### 🔀 Component Prefixes

- `shadcn-vue` components:
    - Folder: `components/ui`
    - Prefix: `SC`
    - Usage: `<SCButton />`, `<SCAccordion />`

- `originui-vue` components:
    - Folder: `components/originui`
    - Prefix: `OU`
    - Usage: `<OUButton />`, `<OUAccordion />`

---

## 📄 Demo Pages

The project includes demo pages for each library:

- `/shadcn-vue`: Demos of shadcn-vue components
- `/originui-vue`: Demos of originui-vue components

  The layout uses the `Sidebar` component from `shadcn-vue` as its main navigation element.
---

## 🚀 Getting Started

```bash
# Clone the repo
git clone https://github.com/mtzrmzia/shadcn-originui-vue.git

cd shadcnvue-originuivue

# Install dependencies
yarn install

# Run dev server
yarn dev
```

---

## 🌗 Color Mode

This project uses the `@nuxtjs/color-mode` module.  
Dark mode support is already included via `class="dark"` and CSS variables.

---

## 🚧 WIP

This is a **work-in-progress**. More demo components will be added to showcase compatibility between `shadcn-vue` and `originui-vue`.

---

## 📌️ NOTE

This project is just an example of integration. It is **not** the only way to combine both libraries, and **not** an official setup.

Use it as inspiration — adapt it to your stack!
