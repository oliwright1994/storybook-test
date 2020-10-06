import createStory from '@bright/storybook/createStory'
import React from 'react'

import Stack from '../Stack'
import Text from './Text'

createStory('COMPONENTS | Text', [
  {
    label: 'Text',
    jsx: () => {
      return (
        <Stack>
          <Text>Paragraph</Text>
          <Text as="i">Italic</Text>
          <Text as="span">Span</Text>
          <Text as="strong">Strong</Text>
        </Stack>
      )
    },
  },
])
