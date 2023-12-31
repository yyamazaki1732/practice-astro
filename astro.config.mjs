import { defineConfig } from "astro/config";
import relativeLinks from "astro-relative-links";
import image from "@astrojs/image";
import tailwind from "@astrojs/tailwind";

import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  integrations: [image(), relativeLinks(), tailwind(), react()]
});