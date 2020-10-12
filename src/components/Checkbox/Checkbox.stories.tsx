import { Meta } from '@storybook/react/types-6-0'
import React from 'react'

import Checkbox, { ICheckbox } from './Checkbox'

export default { component: Checkbox, title: 'Components/Checkbox' } as Meta
export const Standard = (args: ICheckbox): JSX.Element => <Checkbox {...args} />
Standard.args = {
  label: 'Annual Management Charge',
  description: 'Charges will be disinvested annually',
  isDisabled: false,
  isInvalid: false,
  isRequired: false,
  isReadOnly: false,
  id: 'regulatory',
  value: 'regulatory_charge',
  errorMessage: 'You are not eligible for this charge configuration',
}
