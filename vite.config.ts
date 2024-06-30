import { defineConfig } from 'vite'
import { resolve } from 'node:path'
import dts from 'vite-plugin-dts'

export default defineConfig({
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src'),
    },
  },
  build: {
    lib: {
      entry: resolve(__dirname, 'src/index.ts'),
      name: 'facebook-pixel',
      fileName: 'facebook-pixel',
    },
  },
  plugins: [
    dts({
      exclude: 'src/dev.ts',
    }),
  ],
})
