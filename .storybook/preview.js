import { addDecorator } from '@storybook/react'
import { withA11y } from '@storybook/addon-a11y'
import withThemeProvider from '../src/storybook/withStorybookProviders/withStorybookProviders'
import { lightTheme, darkTheme } from './themes'

addDecorator(withThemeProvider())
addDecorator(withA11y)

export const parameters = {
  docs: {
    theme: lightTheme,
  },
  options: {
    storySort: {
      order: ['Design System', ['Start Smart', 'Foundations', 'Status', 'Write Smart',], 'Components'],
    },
  }
}

export const globalTypes = {
  theme: {
    name: 'Theme',
    description: 'Global theme for components',
    defaultValue: 'light',
    toolbar: {
      icon: 'switchalt',
      items: ['light', 'dark'],
    },
  },
};
