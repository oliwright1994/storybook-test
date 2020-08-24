import Text from '@bright/components/Text'
import createStory from '@bright/storybook/createStory'
import { Box, Icon } from '@chakra-ui/core'
import { boolean, radios, text } from '@storybook/addon-knobs'
import React from 'react'

import Tooltip from './Tooltip'

createStory(
  'COMPONENTS | Tooltip',
  [
    {
      label: 'Tooltip',
      jsx: () => {
        const tooltip = text('Tooltip', 'This is the tooltip text')
        const ariaLabel = text('Aria Label', 'This is the aria-label')
        const tooltipAnchor = radios('Tooltip Anchor', { Text: 'Text', Icon: 'Icon' }, 'Icon')
        const shouldWrapChildren = boolean('Should Wrap Children (in <span>)', true)
        const tooltipAnchorJSX = {
          Text: 'Text Anchor',
          Icon: <Icon color="gray.500" name="question-outline" />,
        }
        return (
          <Box p="l">
            <Text>
              Hover or focus for tooltip: &nbsp;
              <Tooltip label={tooltip} aria-label={ariaLabel} shouldWrapChildren={shouldWrapChildren}>
                {tooltipAnchorJSX[tooltipAnchor]}
              </Tooltip>
            </Text>
          </Box>
        )
      },
    },
  ],
  {
    liveEdit: {
      Component: Tooltip,
      render: 'return <Tooltip label="Tooltip" aria-label="Tooltip" > Edit this example Tooltip. </Tooltip>',
    },
  }
)
