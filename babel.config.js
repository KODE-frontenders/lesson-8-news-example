module.exports = function (api) {
  api.cache(true)
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      [
        'module-resolver',
        {
          extensions: ['.js', '.jsx', '.ts', '.tsx'],
          root: ['./src'],
          alias: {
            '@ui': './src/ui',
            '@api': './src/api',
            '@navigation': './src/navigation',
            '@features': './src/features',
          },
        },
      ],
    ],
  }
}
