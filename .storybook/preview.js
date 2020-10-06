import { addDecorator } from '@storybook/react'
import { withA11y } from '@storybook/addon-a11y'
import { withKnobs } from '@storybook/addon-knobs'
import withThemeProvider from '../src/storybook/withStorybookProviders/withStorybookProviders'

addDecorator(withThemeProvider())
addDecorator(withKnobs)
addDecorator(withA11y)
