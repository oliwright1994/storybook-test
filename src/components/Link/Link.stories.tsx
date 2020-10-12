import { Meta } from '@storybook/react/types-6-0'
import React from 'react'

import Link, { ILink } from './Link'

export default { component: Link, title: 'Components/Link' } as Meta
export const Standard = (args: ILink): JSX.Element => <Link {...args} />
Standard.args = {
  children: 'link',
  isExternal: false,
  isDisabled: false,
  as: '',
  href: '/',
}
