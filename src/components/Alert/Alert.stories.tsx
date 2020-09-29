import { AlertVariant } from '@bright/constants'
import createStory from '@bright/storybook/createStory'
import { Text } from '@chakra-ui/core'
import { select } from '@storybook/addon-knobs'
import React from 'react'

import Alert from './Alert'

createStory('COMPONENTS | Alert', [
  {
    label: 'Alert',
    jsx: () => {
      const variant = select('Variant', AlertVariant, AlertVariant.info)
      return (
        <Alert variant={variant}>
          <Text>This is a Text component inside an Alert component</Text>
        </Alert>
      )
    },
  },
])
