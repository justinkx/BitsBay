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
            screens: './src/screens',
            styles: './src/styles',
            services: './src/services',
            sagas: './src/store/sagas',
            actions: './src/store/actions',
            reducers: './src/store/reducers',
            selectors: './src/store/selectors',
          },
        },
      ],
      'react-native-reanimated/plugin',
    ],
    env: {
      production: {
        plugins: ['transform-remove-console'],
      },
    },
  }
}
