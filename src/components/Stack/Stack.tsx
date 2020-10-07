import { Box, Flex } from '@chakra-ui/core'
import React, { FC } from 'react'

export interface IStack {
  as?: 'div' | 'ol' | 'ul'
  space?: 'none' | 'xxs' | 'xs' | 's' | 'm' | 'l' | 'xl' | 'xxl'
  alignItems?: 'left' | 'center' | 'right'
  dividers?: boolean
}
interface IStackItem {
  as: 'div' | 'ol' | 'ul' | 'li'
  space?: 'none' | 'xxs' | 'xs' | 's' | 'm' | 'l' | 'xl' | 'xxl'
  alignItems: 'left' | 'center' | 'right'
}

const alignItemsMap = {
  left: 'flex-start',
  center: 'center',
  right: 'flex-end',
}

const StackItem: FC<IStackItem> = ({ alignItems, space, ...props }) => (
  <Flex direction="column" alignItems={alignItemsMap[alignItems]} mt={space} {...props} />
)

const Stack: FC<IStack> = ({ children, as = 'div', space = 'none', alignItems = 'left', dividers }) => {
  const isList = as === 'ol' || as === 'ul'
  const stackItemElement = isList ? 'div' : 'li'
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
