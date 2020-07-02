import { Box, Flex } from '@chakra-ui/core'
import React, { FC } from 'react'

import { HorizontalAlignment, Space } from '../../constants'
import { StackElement, StackItemElement } from './constants'

interface IStack {
  as?: StackElement
  space?: Space
  alignItems?: HorizontalAlignment
  dividers?: boolean
}
interface IStackItem {
  as: StackItemElement
  space?: Space
  alignItems: HorizontalAlignment
}

const alignItemsMap = {
  left: 'flex-start',
  center: 'center',
  right: 'flex-end',
}

const StackItem: FC<IStackItem> = ({ alignItems, space, ...props }) => (
  <Flex direction="column" alignItems={alignItemsMap[alignItems]} mt={space} {...props} />
)

const Stack: FC<IStack> = ({
  children,
  as = StackElement.div,
  space = Space.none,
  alignItems = HorizontalAlignment.left,
  dividers,
}) => {
  const isList = as === StackElement.ol || as === StackElement.ul
  const stackItemElement = isList ? StackItemElement.div : StackItemElement.li
  const stackItemProps: IStackItem = {
    as: stackItemElement,
    alignItems,
  }

  return (
    <Box as={as}>
      {React.Children.map(children, (child, index) =>
        index === 0 ? (
          <StackItem {...stackItemProps}>{child}</StackItem>
        ) : (
          <>
            {dividers && <Box as="hr" mt={space} />}
            <StackItem {...stackItemProps} space={space}>
              {child}
            </StackItem>
          </>
        )
      )}
    </Box>
  )
}

export default Stack
