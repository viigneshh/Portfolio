import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/portfolio/', // 👈 matches your repo name!
  plugins: [react()],
});
