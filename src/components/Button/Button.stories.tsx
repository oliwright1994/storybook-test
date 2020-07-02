import { boolean, radios, select } from '@storybook/addon-knobs'
import React from 'react'

import createStory from '../../storybook/createStory'
import Button from '.'
import { ButtonSize, ButtonVariant } from './constants'

createStory('COMPONENTS | Button', [
  {
    label: 'standard',
    jsx: () => {
      const variant = select('Variant', ButtonVariant, ButtonVariant.primary)
      const size = select('Size', ButtonSize, ButtonSize.lg)
      const disabled = boolean('Disabled', false)
      const icon = radios('Icon', { none: 'no', left: 'left', right: 'right' }, 'no')
      return (
        <Button
          onClick={() => {}}
          variant={variant}
          size={size}
          isDisabled={disabled}
          leftIcon={icon === 'left' ? 'email' : undefined}
          rightIcon={icon === 'right' ? 'email' : undefined}
        >
          I am a {variant} {size.toUpperCase()} button with {icon} icon
        </Button>
      )
    },
  },
])
