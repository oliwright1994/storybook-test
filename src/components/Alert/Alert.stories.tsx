import { Text } from '@chakra-ui/core'
import { Meta } from '@storybook/react/types-6-0'
import React from 'react'

import Alert, { IAlert } from './Alert'

export default { component: Alert, title: 'Components/Alert' } as Meta
export const Standard = (args: IAlert): JSX.Element => (
  <Alert {...args}>
    <Text>This is a Text component inside an Alert component</Text>
  </Alert>
)
Standard.args = {
  variant: 'success',
}
