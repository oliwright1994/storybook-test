import { Stack } from '@chakra-ui/core'
import { Meta } from '@storybook/react/types-6-0'
import { withDesign } from 'storybook-addon-designs'

import React from 'react'
import InputDocs from './docs/InputDocs'
import Input, { IInput } from './Input'

export default { component: Input, title: 'Components/Input', decorators: [withDesign], parameters: {
  componentSubtitle: 'Used to collect information from the used',
  docs: {
    page: (): JSX.Element => <InputDocs />
  },
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/p9KNWMib8ueXkYnCmMLwsZ/DS-V1.2-Smart?node-id=2%3A13152',
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
