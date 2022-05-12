import type { StorybookViteConfig } from '@storybook/builder-vite';

const config: StorybookViteConfig = {
  addons: [
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
    "@storybook/addon-links",
  ],
  core: {
    builder: '@storybook/builder-vite',
  },
  features: {
    storyStoreV7: true,
  },
  framework: '@storybook/react',
  stories: ['../src/**/*.stories.mdx', '../src/**/*.stories.@(ts|tsx)'],
  async viteFinal(config, { configType }) {
    // customize the Vite config here
    return config;
  },
};

export default config;
