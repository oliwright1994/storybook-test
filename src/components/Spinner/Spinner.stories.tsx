import createStory from '@bright/storybook/createStory'
import { select } from '@storybook/addon-knobs'
import React from 'react'

import Spinner from '.'

createStory('COMPONENTS | Spinner', [
  {
    label: 'standard',
    jsx: () => {
      const size = select('Size', ['xl', 'lg', 'md', 'sm', 'xs'], 'lg')

      return <Spinner size={size} />
    },
  },
])
