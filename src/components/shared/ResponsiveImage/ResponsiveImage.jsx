import React from 'react';
import PropTypes from 'prop-types';

const getSrcSet = (sizes, files) =>
  sizes.reduce(
    (acc, size, index) =>
      `${acc !== '' ? `${acc},` : ''} ${files[index]} ${size}w`,
    '',
  );

const ResposiveImage = ({ alt = '', sizesCalc = '', sizes, filesJpg, filesWebp }) => {
  const srcsetJpg = getSrcSet(sizes, filesJpg);
  const srcsetWebp = getSrcSet(sizes, filesWebp);
  const [largestImage] = filesJpg;

  return (
    <picture>
      <source type="image/webp" srcSet={srcsetWebp} sizes={sizesCalc} />
      <source type="image/jpeg" srcSet={srcsetJpg} sizes={sizesCalc} />
      <img src={largestImage} srcSet={srcsetJpg} sizes={sizesCalc} alt={alt} />
    </picture>
  );
};

ResposiveImage.propTypes = {
  alt: PropTypes.string.isRequired,
  sizesCalc: PropTypes.string.isRequired,
  sizes: PropTypes.arrayOf(PropTypes.number).isRequired,
  filesJpg: PropTypes.arrayOf(PropTypes.string).isRequired,
  filesWebp: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default ResposiveImage;
