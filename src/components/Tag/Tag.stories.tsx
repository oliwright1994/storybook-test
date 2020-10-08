import { Meta } from '@storybook/react/types-6-0'
import React from 'react'

import Tag from '.'
import { ITag } from './Tag.d'

export default { component: Tag, title: 'Tag' } as Meta
export const Standard = (args: ITag): JSX.Element => <Tag {...args}>{args.messageType}</Tag>
Standard.args = {
  messageType: 'success',
}
