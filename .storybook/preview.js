import { addDecorator } from '@storybook/react'
import { withA11y } from '@storybook/addon-a11y'
import withThemeProvider from '../src/storybook/withStorybookProviders/withStorybookProviders'

addDecorator(withThemeProvider())
addDecorator(withA11y)
