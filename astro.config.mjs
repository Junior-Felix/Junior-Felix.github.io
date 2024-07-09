import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";
import tailwind from "@astrojs/tailwind";
import remarkToc from "remark-toc";
import remarkCollapse from "remark-collapse";

import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  site: "https://juniorfelix.com/",
  integrations: [sitemap(), tailwind({
    applyBaseStyles: false
  }), react()],
  markdown: {
    remarkPlugins: [remarkToc, [remarkCollapse, {
      test: "Table of contents"
    }]]
  }
});