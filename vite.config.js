import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import fs from 'fs'
import path from 'path'

function copyDir(src, dest) {
  if (!fs.existsSync(src)) return;
  if (!fs.existsSync(dest)) fs.mkdirSync(dest, { recursive: true });
  for (const entry of fs.readdirSync(src, { withFileTypes: true })) {
    const s = path.join(src, entry.name);
    const d = path.join(dest, entry.name);
    if (entry.isDirectory()) copyDir(s, d);
    else if (!fs.existsSync(d)) fs.copyFileSync(s, d);
  }
}

function copyStaticAssets() {
  return {
    name: 'copy-static-assets',
    closeBundle() {
      ['d', 'f', 'g', 't', 'thumb', 'assets'].forEach(dir => {
        copyDir(path.resolve(dir), path.resolve('dist', dir));
      });
    }
  }
}

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), copyStaticAssets()],
  server: {
    port: 5173,
    host: true
  }
})
