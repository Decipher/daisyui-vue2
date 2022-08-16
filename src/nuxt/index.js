import { join } from 'path'

// eslint-disable-next-line no-unused-vars
const NuxtModule = function (moduleOptions = {}) {
  // Register components directories.
  this.nuxt.hook('components:dirs', dirs => {
    dirs.push({
      path: join(__dirname, 'components'),
      prefix: 'dui'
    })
  })

  // Nuxt Storybook.
  this.nuxt.hook('storybook:config', async ({ stories }) => {
    stories.push(join(__dirname, 'components/**/stories.mjs'))
  })
}

export default NuxtModule
