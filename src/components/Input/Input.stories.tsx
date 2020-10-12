import { Stack } from '@chakra-ui/core'
import { Meta } from '@storybook/react/types-6-0'
import { withDesign } from 'storybook-addon-designs'

import React from 'react'

import Input, { IInput } from './Input'

export default { component: Input, title: 'Components/Input', decorators: [withDesign], parameters: {
  componentSubtitle: 'Used to collect information from the used',
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/s1QI9G4WvO7Lm5bXuNviOv/DS_UX_Forms_0.3?node-id=5%3A0',
  },
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
