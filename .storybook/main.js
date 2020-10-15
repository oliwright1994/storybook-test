const path = require('path');

module.exports = {
  stories: ['../Docs/**/*.stories.mdx', '../src/**/*.stories.(tsx|mdx)'],
  addons: [
    '@storybook/addon-actions',
    '@storybook/addon-links',
    '@storybook/addon-a11y',
    '@storybook/addon-docs/preset',
    '@storybook/addon-essentials',
    'storybook-addon-designs',
    './test-addon/register.js'
  ],
  typescript: {
    reactDocgen: 'react-docgen',
  },
  webpackFinal: async config => {
    config.resolve.alias['@bright'] = path.resolve(__dirname, '../src/');
    config.resolve.alias.testing = path.resolve(__dirname, '../testing/');
    config.module.rules.push({
      test: /\.(ts|tsx)$/,
      use: [
        {
          loader: require.resolve('ts-loader'),
        },
        {
          loader: require.resolve('react-docgen-typescript-loader'),
        },
      ],
    });
    return config;
  },
};
