import React from 'react';
import PropTypes from 'prop-types';

export default function ProgressBar({ percentage }) {
  return (
    <div
      style={{
        width: '100%',
        height: '18px',
        margin: '8px 0',
        background: `linear-gradient(90deg, rgba(11,130,150,1) 0%, rgba(11,130,150,1) ${percentage}%, rgba(82,86,89,1) ${percentage}%, rgba(82,86,89,1) 100%)`,
      }}
    />
  );
}

ProgressBar.propTypes = {
  percentage: PropTypes.string.isRequired,
};
