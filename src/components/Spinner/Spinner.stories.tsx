import { Stack } from '@bright/components'
import createStory from '@bright/storybook/createStory'
import { select } from '@storybook/addon-knobs'
import React from 'react'

import Spinner from '.'

createStory('COMPONENTS | Spinner', [
  {
    label: 'standard',
    jsx: () => {
      const thickness = '3px'
      const speed = '0.8s'
      const emptyColor = 'gray.200'
      const color = 'blue.500'
      const size = select('Size', { xl: 'xl', lg: 'lg', md: 'md', sm: 'sm', xs: 'xs' }, 'lg')

      return (
        <Stack>
          <Spinner size={size} speed={speed} color={color} emptyColor={emptyColor} thickness={thickness} />
        </Stack>
      )
    },
  },
])
