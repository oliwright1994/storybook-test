import { addDecorator } from '@storybook/react'
import { withA11y } from '@storybook/addon-a11y'
import withThemeProvider from '../src/storybook/withStorybookProviders/withStorybookProviders'
import { create } from '@storybook/theming/create';


addDecorator(withThemeProvider())
addDecorator(withA11y)

const myTheme = create({
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

  brandTitle: 'Bright',
  brandUrl: 'https://example.com',
  brandImage: 'https://assets-global.website-files.com/5ce68aba5375cabb8f952335/5cf14689e9439532a8caaa6e_Smart-Logo-Positive%403x.png',
});

export const options = {
  storySort: {
    order: ['Design System', ['Introduction', 'Foundations', 'Status', 'Write Smart', ['How we write for Smart', 'Grammer and formatting', 'Voice and Tone', 'Vocabulary', 'Quick tips']], 'Components'],
  },
};

export const parameters = {
  docs: {
    theme: myTheme,
  }
}
