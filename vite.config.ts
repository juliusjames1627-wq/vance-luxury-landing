import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

export default defineConfig(() => {
  // Check environment variables injected by Vercel and GitHub Actions
  const isVercel = process.env.VERCEL === "1";
  const isGitHubActions = process.env.GITHUB_ACTIONS === "true";

  // Use repo name for GitHub Pages, '/' for Vercel and local development
  const basePath = isGitHubActions && !isVercel ? "/vance-luxury-landing/" : "/";

  return {
    base: basePath,
    plugins: [react()],
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "./src"),
      },
    },
  };
});
