import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

function productionDeployPlugin() {
  return {
    name: 'production-deploy-plugin',
    async buildStart() {
      try {
        const sharp = (await import('sharp')).default;
        const inputPath = path.resolve(__dirname, 'public', 'favicon.png');
        const outPublic = path.resolve(__dirname, 'public', 'og-image.jpg');
        if (fs.existsSync(inputPath)) {
          await sharp(inputPath)
            .resize(1200, 630, {
              fit: 'contain',
              background: { r: 10, g: 10, b: 10, alpha: 1 }
            })
            .jpeg({ quality: 88, mozjpeg: true })
            .toFile(outPublic);
          console.log('[production-deploy-plugin] Generated public/og-image.jpg (1200x630)');
        }
      } catch (err) {
        console.error('[production-deploy-plugin] Error generating og-image.jpg:', err);
      }
    },
    closeBundle() {
      try {
        const distDir = path.resolve(__dirname, 'dist');
        if (fs.existsSync(distDir)) {
          // Guarantee .htaccess is present in dist root
          const htaccessSrc = path.resolve(__dirname, 'public', '.htaccess');
          const htaccessDest = path.resolve(distDir, '.htaccess');
          if (fs.existsSync(htaccessSrc)) {
            fs.copyFileSync(htaccessSrc, htaccessDest);
            console.log('[production-deploy-plugin] Copied .htaccess to dist/.htaccess');
          }
          // Guarantee og-image.jpg is present in dist root
          const ogSrc = path.resolve(__dirname, 'public', 'og-image.jpg');
          const ogDest = path.resolve(distDir, 'og-image.jpg');
          if (fs.existsSync(ogSrc)) {
            fs.copyFileSync(ogSrc, ogDest);
            console.log('[production-deploy-plugin] Copied og-image.jpg to dist/og-image.jpg');
          }
        }
      } catch (err) {
        console.error('[production-deploy-plugin] Error in closeBundle:', err);
      }
    }
  };
}

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), productionDeployPlugin()],
});

