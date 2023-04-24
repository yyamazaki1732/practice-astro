import { defineConfig } from 'astro/config';
import image from '@astrojs/image';

// https://astro.build/config
export default defineConfig({
  vite: {
    build: {
      rollupOptions: {
        output: {
          entryFileNames: 'entry.[hash].js',
          chunkFileNames: 'chunks/chunk.[hash].js',
          assetFileNames: 'assets/asset.[hash][extname]',
        },
      },
    },
  },
  optimize: {
    plugins: [
      {
        name: "css",
        options: {
          output: "/assets/css/styles.css",
        },
      },
    ],
  },
  integrations: [image()],
})


