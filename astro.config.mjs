// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import { gemeinde } from './src/config/gemeinde.ts';

// Der Stream-Server liegt meist auf einer eigenen Domain und muss in der CSP erlaubt werden
const streamHosts = [...new Set([gemeinde.stream.url, gemeinde.stream.statusUrl].map((url) => new URL(url).origin))];

export default defineConfig({
  site: gemeinde.site,
  trailingSlash: 'never',
  integrations: [sitemap()],
  security: {
    // Astro ergänzt script-src und style-src mit Hashes der eigenen Skripte und Styles.
    // Die CSP landet als <meta>-Tag im HTML; frame-ancestors und HSTS müssen als
    // HTTP-Header beim Hoster gesetzt werden.
    csp: {
      directives: [
        "default-src 'self'",
        "img-src 'self' data:",
        "font-src 'self'",
        `connect-src 'self' ${streamHosts.join(' ')}`,
        `media-src 'self' ${streamHosts.join(' ')}`,
        "object-src 'none'",
        "base-uri 'self'",
        "form-action 'none'",
      ],
    },
  },
});
