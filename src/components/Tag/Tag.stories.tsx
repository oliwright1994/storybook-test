import { MessageType } from '@bright/constants'
import createStory from '@bright/storybook/createStory'
import { select } from '@storybook/addon-knobs'
import React from 'react'

import Tag from '.'

createStory('COMPONENTS | Tag', [
  {
    label: 'standard',
    jsx: () => {
      const messageType = select('messageType', MessageType, MessageType.success, 'messageType')
      return <Tag messageType={messageType}>{messageType}</Tag>
    },
  },
])
