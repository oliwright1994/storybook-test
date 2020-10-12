import Tag from '@bright/components/Tag'
import { MessageType } from '@bright/constants'
import { Text } from '@chakra-ui/core'
import { Meta } from '@storybook/react/types-6-0'
import React from 'react'

import Card from './Card'

export default { component: Card, title: 'Components/Card' } as Meta
export const Standard = (): JSX.Element => (
  <Card>
    <Text>This is Text component inside Card component</Text>
    <Tag messageType={MessageType.success}>This is Tag component inside Card component</Tag>
  </Card>
)
