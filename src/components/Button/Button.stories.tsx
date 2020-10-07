import { Meta } from '@storybook/react/types-6-0'
import React from 'react'

import Button, { IButton } from './Button'

export default { component: Button, title: 'Button' } as Meta

export const Standard = (args: IButton): JSX.Element => <Button {...args} />
Standard.args = {
  children: 'email button',
  variant: 'primary',
  size: 'md',
  isDisabled: false,
  leftIcon: 'email',
  rightIcon: '',
}
