import path from 'path';
import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig(({ mode }) => {
    const env = loadEnv(mode, '.', '');
    return {
      server: {
        port: 3000,
        host: '0.0.0.0',
      },
      plugins: [react()],
      define: {
        'process.env.API_KEY': JSON.stringify(env.GEMINI_API_KEY),
        'process.env.GEMINI_API_KEY': JSON.stringify(env.GEMINI_API_KEY),
        'process.env.NODE_ENV': JSON.stringify(mode)
      },
      resolve: {
        alias: {
          '@': path.resolve(__dirname, '.'),
        }
      },
      build: {
        outDir: 'dist',
        assetsDir: 'assets',
        minify: 'terser',
        cssCodeSplit: false,
        lib: {
          entry: path.resolve(__dirname, 'index.tsx'),
          name: 'FondoMatchApp',
          fileName: (format) => `index.js`
        },
        rollupOptions: {
          output: {
            format: 'iife',
            entryFileNames: 'index.js',
            chunkFileNames: '[name]-[hash].js',
            assetFileNames: (assetInfo) => {
              if (assetInfo.name.endsWith('.css')) {
                return 'index.css';
              }
              return '[name]-[hash][extname]';
            }
          },
          external: [],
        },
        terserOptions: {
          compress: {
            drop_console: true
          }
        }
      }
    };
});
