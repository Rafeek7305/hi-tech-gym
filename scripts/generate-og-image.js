import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, '..');

async function createOgImage() {
  const sharp = (await import('sharp')).default;
  const inputPath = path.join(rootDir, 'public', 'favicon.png');
  const outPublic = path.join(rootDir, 'public', 'og-image.jpg');
  const outDist = path.join(rootDir, 'dist', 'og-image.jpg');

  // Generate a standard 1200x630 Open Graph image with dark luxury background
  await sharp(inputPath)
    .resize(1200, 630, {
      fit: 'contain',
      background: { r: 10, g: 10, b: 10, alpha: 1 }
    })
    .jpeg({ quality: 88, mozjpeg: true })
    .toFile(outPublic);

  console.log('Created public/og-image.jpg (1200x630)');

  // Also copy to dist if dist exists
  if (fs.existsSync(path.join(rootDir, 'dist'))) {
    fs.copyFileSync(outPublic, outDist);
    console.log('Copied to dist/og-image.jpg');
  }
}

createOgImage().catch(console.error);
