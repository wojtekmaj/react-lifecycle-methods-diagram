import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { createHtmlPlugin } from 'vite-plugin-html';

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
      // Use React plugin in all *.jsx and *.tsx files
      include: '**/*.{jsx,tsx}',
    }),
    createHtmlPlugin({
      minify: true,
    }),
  ],
});
