import { Meta } from '@storybook/react/types-6-0'
import React from 'react'
import { withDesign } from 'storybook-addon-designs'

import Button, { IButton } from './Button'

export default { component: Button, title: 'Components/Button', decorators: [withDesign], parameters:{
  design:{
    type: 'figma',
    url: 'https://www.figma.com/file/p9KNWMib8ueXkYnCmMLwsZ/DS-V1.2-Smart?node-id=1%3A12231'
  }
} } as Meta

export const Standard = (args: IButton): JSX.Element => <Button {...args} />
Standard.args = {
  children: 'email button',
  variant: 'primary',
  size: 'md',
  isDisabled: false,
  leftIcon: 'email',
  rightIcon: '',
}
