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

});

export const parameters = {
  docs: {
    theme: myTheme,
  },
  options: {
    storySort: {
      order: ['Design System', ['Start Smart', 'Foundations', 'Status', 'Write Smart',], 'Components'],
    },
  }
}
