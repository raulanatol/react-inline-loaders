module.exports = {
  modules: true,
  plugins: {
    autoprefixer: {
      grid: true
    },
    'postcss-modules': {
      generateScopedName: '[hash:base64:12]'
    }
  }
};
