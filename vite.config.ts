import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

const BASE_URL = '/github-pages-playground';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: process.env.RUNWAY ? `${BASE_URL}/` + process.env.RUNWAY : BASE_URL,
});
