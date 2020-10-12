import { Meta } from '@storybook/react/types-6-0'
import React from 'react'

import Select, { SelectProps } from './Select'

export default { component: Select, title: 'Components/Select' } as Meta
export const Standard = (args: SelectProps): JSX.Element => (
  <Select {...args}>
    <option value="first">First value</option>
    <option value="second">Second value</option>
    <option value="third" disabled>
      Third value
    </option>
  </Select>
)
Standard.args = {
  id: 'storybookSelect',
  label: 'Storybook select',
  description: 'This is select description',
  errorMessage: 'This is error message',
  isDisabled: false,
  isInvalid: false,
  isRequired: false,
  isReadOnly: false,
}
