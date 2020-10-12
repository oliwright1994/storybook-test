import { Text } from '@chakra-ui/core'
import { Meta } from '@storybook/react/types-6-0'
import React from 'react'

import Stack, { IStack } from './Stack'

export default { component: Stack, title: 'Components/Stack' } as Meta
export const Standard = (args: IStack): JSX.Element => (
  <Stack {...args}>
    <Text>Test one</Text>
    <Text>Test two</Text>
    <Text>Test Three</Text>
  </Stack>
)
Standard.args = {
  as: 'div',
  alignItems: 'left',
  dividers: false,
  space: 's',
}
