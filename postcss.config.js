const path = require('path');

module.exports = {
  plugins: {
    'postcss-custom-properties': {
      importFrom: [path.join(__dirname, './src/Theme.css')],
    },
  },
};
