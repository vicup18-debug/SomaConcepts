import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// The site's public address. Change it here if the live domain changes.
export default defineConfig({
  site: 'https://somaconcepts.com.ng',
  integrations: [sitemap()],
  build: { inlineStylesheets: 'auto' },
});
