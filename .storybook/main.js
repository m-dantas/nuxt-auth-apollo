const { nuxifyStorybook } = require('../.nuxt-storybook/storybook/main')

module.exports = nuxifyStorybook({
  webpackFinal (config, options) {
    return config
  },
  stories: [
    '../components/**/*.stories.mdx',
  ],
  addons: []
})