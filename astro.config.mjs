import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  site: 'https://www.airmax.hk',
  output: 'static',
  integrations: [
    tailwind({ applyBaseStyles: false }),
  ],
});
