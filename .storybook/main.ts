import type { StorybookConfig } from '@storybook/nextjs'
const config: StorybookConfig = {
  stories: ['../src/components/**/stories.@(js|jsx|ts|tsx)'],
  addons: [
    '@storybook/addon-essentials'
  ],
  framework: {
    name: '@storybook/nextjs',
    options: {}
  },
  docs: {
    autodocs: 'tag'
  }
}
export default config
