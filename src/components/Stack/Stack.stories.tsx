import { Text } from '@chakra-ui/core'
import { select, boolean } from '@storybook/addon-knobs'
import React from 'react'

import Stack from './Stack'
import { HorizontalAlignment, Space } from '../../constants'

import createStory from '../../storybook/createStory'

createStory('COMPONENTS | Stack', [
  {
    label: 'Stack',
    jsx: () => {
      const space = select('Space', Space, Space.s)
      const alignItems = select('Align', HorizontalAlignment, HorizontalAlignment.left)
      const dividers = boolean('Dividers', true)

      return (
        <Stack space={space} alignItems={alignItems} dividers={dividers}>
          <Text>Test one</Text>
          <Text>Test two</Text>
          <Text>Test Three</Text>
        </Stack>
      )
    },
  },
])
