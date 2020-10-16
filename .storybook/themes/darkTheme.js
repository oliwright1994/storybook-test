import { create } from '@storybook/theming/create';

const darkTheme = create({
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
  barTextColor: '#666666',
  barSelectedColor: 'white',
  barBg: '#003357',

  // Form colors
  inputBg: 'white',
  inputBorder: 'silver',
  inputTextColor: '#222222',
  inputBorderRadius: 4,

});

export default darkTheme
