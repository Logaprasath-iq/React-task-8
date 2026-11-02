const fs = require('fs');
const https = require('https');

const urls = [
  "https://api.figmamarket.com/uploads/previewImages-1769003247744-950968785-compressed.webp",
  "https://api.figmamarket.com/uploads/previewImages-1769003247745-427957290-compressed.webp",
  "https://api.figmamarket.com/uploads/previewImages-1769003247747-273004872-compressed.webp",
  "https://api.figmamarket.com/uploads/previewImages-1769003247747-46659826-compressed.webp",
  "https://api.figmamarket.com/uploads/previewImages-1769003247748-905973146-compressed.webp",
  "https://api.figmamarket.com/uploads/thumbnail-1769003247739-425722199-compressed.webp"
];

urls.forEach((url, idx) => {
  const filename = `preview_${idx + 1}.webp`;
  const file = fs.createWriteStream(filename);
  https.get(url, (res) => {
    res.pipe(file);
    file.on('finish', () => {
      file.close();
      console.log(`Downloaded ${filename}`);
    });
  }).on('error', (err) => {
    console.error(`Error downloading ${filename}:`, err);
  });
});
