import createStory from '@bright/storybook/createStory'
import { Stack } from '@chakra-ui/core'
import React from 'react'

import Heading from './Heading'

createStory('COMPONENTS | Heading', [
  {
    label: 'Text',
    jsx: () => {
      return (
        <Stack>
          <Heading as="h1">H1 Heading</Heading>
          <Heading as="h2">H2 Heading</Heading>
          <Heading as="h3">H3 Heading</Heading>
          <Heading as="h4">H4 Heading</Heading>
          <Heading as="h5">H5 Heading</Heading>
          <Heading as="h6">H6 Heading</Heading>
        </Stack>
      )
    },
  },
])
