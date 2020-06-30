import { Box, Flex } from '@chakra-ui/core'
import React, { FC } from 'react'

import { HorizontalAlignment, Space } from '../../constants'
import { StackElement } from './constants'

interface IStack {
  as?: StackElement
  space?: Space
  alignItems?: HorizontalAlignment
  dividers?: boolean
}

const { ol, ul, div } = StackElement

const alignItemsMap = {
  left: 'flex-start',
  center: 'center',
  right: 'flex-end',
}

const Stack: FC<IStack> = ({
  children,
  as = div,
  space = Space.none,
  alignItems = HorizontalAlignment.left,
  dividers,
}) => {
  const isList = as === ol || as === ul
  const stackItemComponent = isList ? 'li' : div

  return (
    <Flex as={as} flexDirection="column" alignItems={alignItemsMap[alignItems]}>
      {React.Children.map(children, (child, index) =>
        index === 0 ? (
          <Box as={stackItemComponent}>{child}</Box>
        ) : (
          <>
            {dividers && <Box as="hr" alignSelf="stretch" mt={space} />}
            <Box as={stackItemComponent} mt={space}>
              {child}
            </Box>
          </>
        )
      )}
    </Flex>
  )
}

export default Stack
