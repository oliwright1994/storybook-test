import Stack from '@bright/components/Stack'
import { Space } from '@bright/constants'
import {
  Heading,
  Text,
  Input,
  Tabs,
} from '@bright/components'
import {Flex, Box} from '@chakra-ui/core'
import React, { FC, FormEvent } from 'react'
import {Preview, Canvas} from '@storybook/addon-docs/blocks'

const UI: FC = () => {
  return (
    <Box >
      <Heading as='h6'>Basic input field structure</Heading>
      <Canvas >
        <Input id='hm' onChange={()=> null} label='Surname' description="As shown in your passport" isInvalid errorMessage="Enter your surname"></Input>
      </Canvas>
      <Heading as='h6'>Overview</Heading>
      <Text>
        Input field allow for single line text writting. It can be used accordingly to many types of  information detailed below.
      </Text>
        Label
      <Text>
        Each field label should be unique, clear and concise.
      </Text>
      <Heading as='h6'>
          Hint text
      </Heading>
      <Text>
        Hint text is optional.
        Use placeholder text in order to support and give additional context to what information  needs to be entered.
      </Text>
        <Heading>
          Field size
        </Heading>
        <Text>
          On desktop if the field length in characters is known the field should reflect the information it contains.
          On mobile the field size should be the size of the viewport.
        </Text>
    </Box>
  )
}

export default UI
