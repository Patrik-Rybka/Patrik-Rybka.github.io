// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import react from '@astrojs/react';
import keystatic from '@keystatic/astro';

// Při produkčním sestavení pro čistě statické GitHub Pages vynecháme SSR admin routy,
// v dev režimu (lokálně na počítači) je Keystatic plně aktivní.
const isBuild = process.argv.includes('build');

// https://astro.build/config
export default defineConfig({
  site: 'https://patrikrybka.me',
  output: 'static',

  vite: {
    plugins: [tailwindcss()]
  },

  integrations: [
    react(),
    ...(isBuild ? [] : [keystatic()])
  ]
});
