import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";
import tailwind from "@astrojs/tailwind";

import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  integrations: [
    starlight({
      title: "Custom Hooks",
      logo: {
        light: "./src/assets/logo.svg",
        dark: "./src/assets/logo.svg",
        replacesTitle: true,
      },
      social: {
        github: "https://github.com/developaul/custom-hooks",
      },
      sidebar: [
        {
          label: "Getting Started",
          autogenerate: {
            directory: "getting-started",
          },
        },
        {
          label: "Hooks",
          autogenerate: {
            directory: "hooks",
          },
        },
      ],
      customCss: ["./src/tailwind.css"],
    }),
    tailwind({
      applyBaseStyles: false,
    }),
    react(),
  ],
});
