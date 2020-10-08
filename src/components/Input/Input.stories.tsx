import { Stack } from '@chakra-ui/core'
import { Meta } from '@storybook/react/types-6-0'
import React from 'react'

import Input, { IInput } from './Input'

export default { component: Input, title: 'Input', parameters: {
  componentSubtitle: 'Used to collect information from the used',
}, } as Meta
export const Standard = (args: IInput): JSX.Element => (
  <Stack>
    <Input {...args} />
  </Stack>
)
Standard.args = {
  errorMessage: 'This value is invalid.',
  isDisabled: false,
  isInvalid: false,
  isReadOnly: false,
  isRequired: false,
  isFullWidth: false,
  placeholder: 'basic',
  label: 'Pot value',
  id: 'amount',
  description: 'Minimum investment: £5,000.00',
}
