import Text from '@bright/components/Text'
import { Icon } from '@chakra-ui/core'
import { Meta } from '@storybook/react/types-6-0'
import React from 'react'

import Tooltip, { ITooltip } from './Tooltip'

export default { component: Tooltip, title: 'Components/Tooltip' } as Meta
const props = {
  label: 'This is the tooltip text',
  areaLabel: 'This is the aria-label',
  shouldWrapChildren: true,
}
export const Standard = (args: ITooltip): JSX.Element => (
  <Text>
    Hover or focus for tooltip: &nbsp;
    <Tooltip {...args}>
      <Icon color="gray.500" name="question-outline" />
    </Tooltip>
  </Text>
)
Standard.args = {
  ...props,
}
export const TextAnchor = (args: ITooltip): JSX.Element => (
  <Text>
    Hover or focus for tooltip: &nbsp;
    <Tooltip {...args}>Text Anchor</Tooltip>
  </Text>
)
TextAnchor.args = {
  ...props,
}
