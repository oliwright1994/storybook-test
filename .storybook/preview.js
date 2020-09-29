import { addDecorator } from '@storybook/react'
import { withA11y } from '@storybook/addon-a11y'
import { withKnobs } from '@storybook/addon-knobs'

addDecorator(withKnobs)
addDecorator(withA11y)
