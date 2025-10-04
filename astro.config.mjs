// @ts-check
import { defineConfig, envField } from 'astro/config';

import react from '@astrojs/react';

import tailwindcss from '@tailwindcss/vite';

import sitemap from '@astrojs/sitemap';

import partytown from '@astrojs/partytown';

// https://astro.build/config
export default defineConfig({
  site: "https://example.com",

  integrations: [react(), sitemap(), partytown()],

  vite: {
    plugins: [tailwindcss()]
  },

  env: {
    schema: {
      MICROCMS_SERVICE_DOMAIN: envField.string({ context: "server", access: "secret" }),
      MICROCMS_API_KEY: envField.string({ context: "server", access: "secret" }),
    }
  },
});