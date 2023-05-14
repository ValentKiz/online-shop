import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    open: true,
		port: 3000,
  },
	resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src/"),
			"@app": path.resolve(__dirname, "./src/app/"),
      "@components": path.resolve(__dirname, "./src/components/"),
			"@modules": path.resolve(__dirname, "./src/modules/"),
      "@pages": path.resolve(__dirname, "./src/pages"),
      "@shared": path.resolve(__dirname, "./src/shared"),
    },
	},
  plugins: [react()],
})
