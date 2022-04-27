module.exports = function (api) {
  api.cache(true)
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      [
        'module-resolver',
        {
          root: './',
          alias: {
            src: './src',
            helpers: './src/helpers',
            navigation: './src/navigation',
            components: './src/components',
            redux: './src/redux',
            screens: './src/screens',
          },
        },
      ],
    ],
    env: {
      production: {
        plugins: ['transform-remove-console'],
      },
    },
  }
}
