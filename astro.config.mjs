import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
  output: 'static',
  site: 'https://talesecamila2026.netlify.app',
  integrations: [tailwind({ applyBaseStyles: false })],
});
