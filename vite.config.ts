import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import simpleHtmlPlugin from 'vite-plugin-simple-html';

export default defineConfig({
  base: './',
  plugins: [
    react({
      babel: {
        env: {
          production: {
            plugins: ['transform-react-remove-prop-types'],
          },
        },
      },
    }),
    simpleHtmlPlugin({
      minify: true,
    }),
  ],
});
