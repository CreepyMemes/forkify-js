import { defineConfig } from 'vite';
import eslint from 'vite-plugin-eslint';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    eslint({
      failOnError: true, // Stop build on ESLint errors
      failOnWarning: false, // (Optional) Stop build on warnings
    }),
  ],
});
