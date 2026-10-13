// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import { gemeinde } from './src/config/gemeinde.ts';

export default defineConfig({
  site: gemeinde.site,
  trailingSlash: 'never',
  integrations: [sitemap()],
});
