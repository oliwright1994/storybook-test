import Stack from '@bright/components/Stack'
import { Space } from '@bright/constants'
import {
  Heading,
  Text,
  Input,
  Tabs,
} from '@bright/components'
import {Flex} from '@chakra-ui/core'
import React, { FC, FormEvent } from 'react'
import {Preview, Canvas} from '@storybook/addon-docs/blocks'

const UI: FC = () => {
  return (
    <Canvas>
    <Input id='hm' onChange={()=> null} label='desc' description="hmmmm"></Input>
    </Canvas>
  )
}

export default UI
