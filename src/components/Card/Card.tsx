import { Space } from '@bright/constants'
import { Box } from '@chakra-ui/core'
import React, { FC } from 'react'

const Card: FC = ({ children }) => {
  return (
    <Box p={Space.l} border="1px" color="grey">
      {children}
    </Box>
  )
}

export default Card
