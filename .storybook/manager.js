import { create } from '@storybook/theming/create';
import { addons } from '@storybook/addons';

export const yourTheme = create({
  base: 'light',

  colorPrimary: '#003357',
  colorSecondary: '#7BE0C2',

  // UI
  appBg: 'white',
  appContentBg: 'white',
  appBorderColor: 'grey',
  appBorderRadius: 4,

  // Typography
  fontBase: '"Lato", "Open Sans", sans-serif',
  fontCode: 'monospace',

  // Text colors
  textColor: '#222222',
  textInverseColor: 'rgba(255,255,255,0.9)',

  // Toolbar default and active colors
  barTextColor: '#7BE0C2',
  barSelectedColor: 'white',
  barBg: '#003357',

  // Form colors
  inputBg: 'white',
  inputBorder: 'silver',
  inputTextColor: '#222222',
  inputBorderRadius: 4,

  brandTitle: 'Bright',
  brandUrl: 'https://www.smart.co/',
  brandImage: 'https://assets-global.website-files.com/5ce68aba5375cabb8f952335/5cf14689e9439532a8caaa6e_Smart-Logo-Positive%403x.png',
});


addons.setConfig({
  theme: yourTheme,
});
