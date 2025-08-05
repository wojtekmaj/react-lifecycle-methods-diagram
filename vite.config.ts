import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
import simpleHtmlPlugin from 'vite-plugin-simple-html';

export default defineConfig({
  base: './',
  plugins: [
    react(),
    simpleHtmlPlugin({
      minify: true,
    }),
  ],
});
