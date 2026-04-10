/**
 * Regenerate hero WebPs from PNG sources in public/images/.
 * Add golf.png and good_beer.png, then: npm run optimize:images
 * Outputs golf.webp + good_beer.webp (max edge 1280px, ~80–120 KB typical).
 */
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import sharp from "sharp";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const imagesDir = path.join(__dirname, "..", "public", "images");

const jobs = [
  { input: "golf.png", output: "golf.webp" },
  { input: "good_beer.png", output: "good_beer.webp" },
];

const MAX_EDGE = 1280;
const WEBP_QUALITY = 82;

for (const { input, output } of jobs) {
  const inputPath = path.join(imagesDir, input);
  if (!fs.existsSync(inputPath)) {
    console.warn(`Skip (missing): ${inputPath}`);
    continue;
  }
  const outPath = path.join(imagesDir, output);
  await sharp(inputPath)
    .resize(MAX_EDGE, MAX_EDGE, { fit: "inside", withoutEnlargement: true })
    .webp({ quality: WEBP_QUALITY, effort: 4 })
    .toFile(outPath);
  const inStat = fs.statSync(inputPath);
  const outStat = fs.statSync(outPath);
  console.log(
    `${output}: ${(outStat.size / 1024).toFixed(0)} KB (was ${(inStat.size / 1024).toFixed(0)} KB PNG)`,
  );
}
