const path = require('path');

module.exports = {
  stories: ['../Docs/**/*.stories.mdx', '../src/**/*.stories.tsx'],
  addons: [
    '@storybook/addon-actions',
    '@storybook/addon-links',
    '@storybook/addon-a11y/register',
    '@storybook/addon-docs/preset',
    '@storybook/addon-essentials',
    'storybook-addon-designs'
  ],
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
    config.resolve.extensions.push('.ts', '.tsx');
    return config;
  },
};
