/**
 * Automated Image Optimization Script for Hi-Tech Gym
 * Converts photographic PNG images to high-fidelity WebP format.
 *
 * To run:
 * 1. npm install -D sharp
 * 2. node scripts/convert-images.js
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, '..');

async function convertDir(dirPath) {
  let sharp;
  try {
    sharp = (await import('sharp')).default;
  } catch (err) {
    console.error('Error: sharp is not installed. Please run "npm install -D sharp" first.');
    process.exit(1);
  }

  const files = fs.readdirSync(dirPath);
  for (const file of files) {
    const fullPath = path.join(dirPath, file);
    const stat = fs.statSync(fullPath);

    if (stat.isDirectory()) {
      await convertDir(fullPath);
    } else if (file.endsWith('.png') && !file.includes('logo3') && !file.includes('favicon')) {
      const webpPath = fullPath.replace(/\.png$/, '.webp');
      const originalSize = stat.size;

      console.log(`Converting: ${file}...`);
      await sharp(fullPath)
        .webp({ quality: 85, effort: 6 })
        .toFile(webpPath);

      const newStat = fs.statSync(webpPath);
      const savings = (((originalSize - newStat.size) / originalSize) * 100).toFixed(1);
      console.log(` -> Created ${path.basename(webpPath)}: ${(newStat.size / 1024).toFixed(1)} KB (Saved ${savings}%)`);
    }
  }
}

async function main() {
  const assetsDir = path.join(rootDir, 'src', 'assets');
  console.log('Starting WebP conversion in:', assetsDir);
  await convertDir(assetsDir);
  console.log('\nAll photographic assets successfully converted to WebP!');
}

main().catch(console.error);
