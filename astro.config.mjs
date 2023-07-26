import { defineConfig } from "astro/config";
import relativeLinks from "astro-relative-links";
import image from "@astrojs/image";

// https://astro.build/config
export default defineConfig({
  integrations: [image(), relativeLinks()],
});
