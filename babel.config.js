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
            '@navigation': './src/navigation',
            '@shared': './src/shared',
            '@store': './src/store',
            '@features': './src/features',
          },
        },
      ],
    ],
  }
}
