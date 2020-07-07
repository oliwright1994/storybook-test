import { Text } from '@chakra-ui/core'
import React from 'react'

import { MessageType } from '../../constants'
import createStory from '../../storybook/createStory'
import Tag from '../Tag'
import Card from './Card'

createStory('COMPONENTS | Card', [
  {
    label: 'Card',
    jsx: () => {
      return (
        <Card>
          <Text>This is Text component inside Card component</Text>
          <Tag messageType={MessageType.success}>This is Tag component inside Card component</Tag>
        </Card>
      )
    },
  },
])
