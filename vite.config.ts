
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  plugins: [react()],

  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },

  build: {
    target: 'es2020',
    outDir: 'dist',
    assetsDir: 'assets',
    cssMinify: 'lightningcss',
    cssCodeSplit: true,
    sourcemap: false,

    // Generate hashed filenames for cache-safe deployments
    rollupOptions: {
      output: {
        entryFileNames: 'assets/[name]-[hash].js',
        chunkFileNames: 'assets/[name]-[hash].js',
        assetFileNames: 'assets/[name]-[hash][extname]',

        manualChunks: {
          'vendor-react': [
            'react',
            'react-dom',
            'react-router-dom',
          ],

          'vendor-animations': [
            'framer-motion',
            'lenis',
          ],

          'vendor-ui': [
            '@radix-ui/react-dialog',
            '@radix-ui/react-accordion',
            '@radix-ui/react-select',
            '@radix-ui/react-tooltip',
          ],

          'vendor-forms': [
            'react-hook-form',
            '@hookform/resolvers',
            'zod',
          ],
        },
      },
    },
  },
});
