module.exports = {
  env: {
    browser: true,
  },
  overrides: [
    {
      files: ['*.test.jsx'],
      env: {
        jest: true,
      },
    },
  ],
};
