import { addDecorator } from '@storybook/react'
import { withKnobs } from '@storybook/addon-knobs'
import withThemeProvider from '../src/storybook/withStorybookProviders/withStorybookProviders'

addDecorator(withThemeProvider())
addDecorator(withKnobs)
