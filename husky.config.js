module.exports = {
  hooks: {
    'pre-commit': 'lint-staged',
    'pre-push': 'npm run lint',
    'commit-msg': 'commitlint -E HUSKY_GIT_PARAMS',
  },
};
