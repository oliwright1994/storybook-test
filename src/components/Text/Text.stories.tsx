import { Meta } from '@storybook/react/types-6-0'
import React from 'react'

import Stack from '../Stack'
import Text, { IText } from './Text'

export default { component: Text, title: 'Text' } as Meta
export const Standard = (args: IText): JSX.Element => (
  <Stack>
    <Text {...args}>Text</Text>
  </Stack>
)
Standard.args = {
  as: 'p',
}
