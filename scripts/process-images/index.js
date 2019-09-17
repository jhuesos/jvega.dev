/* eslint-disable no-restricted-syntax, no-console */
const path = require('path');
const fs = require('fs');
const sharp = require('sharp');

// Configuration
const pathToImagesToProcess = path.join(__dirname, './to-process');
const output = path.join(__dirname, '../../static/images');
const sizes = [200, 300, 400, 600];

const fileExtensionRegex = /(\.(jpg|webp))$/;

(async () => {
  console.log('Proccesing image files...');

  const filesToProcess = fs
    .readdirSync(pathToImagesToProcess)
    .filter(f => f !== '.gitkeep');

  const jobs = filesToProcess.map(file => {
    const fullPathToFile = path.join(pathToImagesToProcess, file);
    const pipeline = sharp(fullPathToFile);

    const sizesOutputStreams = sizes.map(size => [
      size,
      pipeline.clone().resize(size),
    ]);

    return [
      fullPathToFile,
      sizesOutputStreams.flatMap(([size, outputStream]) => [
        outputStream
          .clone()
          .webp({ quality: 80 })
          .toFile(
            path.join(
              output,
              file.replace(fileExtensionRegex, `-${size}.webp`),
            ),
          ),
        outputStream
          .clone()
          .jpeg({ quality: 90 })
          .toFile(
            path.join(output, file.replace(fileExtensionRegex, `-${size}.jpg`)),
          ),
      ]),
    ];
  });

  const [filenames, operations] = jobs.reduce(
    ([outputFiles, outputOperations], [file, operation]) => [
      [...outputFiles, file],
      [...outputOperations, operation],
    ],
    [[], []],
  );

  Promise.all(operations).then(() => {
    console.log('Processed files:');
    filenames.forEach(file => console.log(`\t${file}`));
    console.log('The end.');
  });
})();
