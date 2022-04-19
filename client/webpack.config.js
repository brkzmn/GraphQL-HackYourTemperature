module.exports = {
  resolve: {
    fallback: {
      url: require.resolve("url/"),
      path: false,
      buffer: false,
      stream: false,
      crypto: false,
      http: false,
      util: false,
    },
  },
};
