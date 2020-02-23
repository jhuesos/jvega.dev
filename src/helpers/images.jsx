import React from 'react';
import ResponsiveImage from '../components/shared/ResponsiveImage';

const importAll = require =>
  require.keys().reduce((acc, next) => {
    // eslint-disable-next-line import/no-dynamic-require
    acc[next.replace('./', '')] = require(next).default;
    return acc;
  }, {});

const allImages = importAll(
  require.context('../../static/images', false, /\.(jpe?g|webp)$/),
);

const getResponsiveImage = (imageName, alt, sizesCalc) => {
  const sizes = [200, 300, 400, 600];

  const images = Object.keys(allImages).filter(image =>
    image.startsWith(imageName),
  );

  const [filesJpg, filesWebp] = images.reduce(
    ([jpgFiles, webPFiles], current) => {
      const filePath = allImages[current];

      return /\.webp$/.test(current)
        ? [jpgFiles, [...webPFiles, filePath]]
        : [[...jpgFiles, filePath], webPFiles];
    },
    [[], []],
  );

  const imagesInfo = {
    sizes,
    filesJpg,
    filesWebp,
    alt,
    sizesCalc,
  };

  return (
    <ResponsiveImage
      alt={imagesInfo.alt}
      sizesCalc={imagesInfo.sizesCalc}
      sizes={imagesInfo.sizes}
      filesJpg={imagesInfo.filesJpg}
      filesWebp={imagesInfo.filesWebp}
    />
  );
};

export const SecurityHeaderImage = () => {
  return getResponsiveImage(
    'security-headers',
    'A+ score that the jvega.dev website obtained in the website securityheaders.com',
    '(max-width: 559px) 100vw, 66vw',
  );
};

export const ProfilePicImage = () => {
  return getResponsiveImage(
    'profile-pic',
    `Jaime Vega's face`,
    '(max-width: 559px) 100vw, 20vw',
  );
};

export const PerformanceScoreImage = () => {
  return getResponsiveImage(
    'performance-score',
    'The performance score obtained from the web.dev website. The value it shows is 97',
    '(max-width: 559px) 100vw, 66vw',
  );
};
