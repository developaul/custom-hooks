import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";
import tailwind from "@astrojs/tailwind";

import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  integrations: [starlight({
    title: "Custom Hooks",
    social: {
      github: "https://github.com/developaul/custom-hooks"
    },
    sidebar: [{
      label: "Guides",
      autogenerate: {
        directory: "guides"
      }
    }, {
      label: "Hooks",
      autogenerate: {
        directory: "hooks"
      }
    }, {
      label: "Reference",
      autogenerate: {
        directory: "reference"
      }
    }],
    customCss: ["./src/tailwind.css"]
  }), tailwind({
    applyBaseStyles: false
  }), react()]
});