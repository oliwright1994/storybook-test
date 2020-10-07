import { Meta } from '@storybook/react/types-6-0'
import React from 'react'

import RadioGroup, { IRadioGroupProps } from './RadioGroup'

export default { component: RadioGroup, title: 'RadioGroup' } as Meta
export const Standard = (args: IRadioGroupProps): JSX.Element => (
  <RadioGroup {...args}>
    <RadioGroup.Radio id="1" value="1">
      Value 1
    </RadioGroup.Radio>
    <RadioGroup.Radio id="2" value="2">
      Value 2
    </RadioGroup.Radio>
    <RadioGroup.Radio id="3" value="3">
      Value 3
    </RadioGroup.Radio>
  </RadioGroup>
)
Standard.args = {
  description: 'This is a RadioGroup with three options',
  isInline: false,
  isRequired: false,
  isInvalid: false,
  label: 'Radio group',
  errorMessage: 'There has been an error',
}
