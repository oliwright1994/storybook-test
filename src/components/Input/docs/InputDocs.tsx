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
import BrightProvider from '@bright/providers/BrightProvider'
import defaultTheme from '@bright/theme/default'
import UI from './UI'
import UX from './UX'
import Research from './Research'

const InputDocs: FC = () => {
  return (
    <BrightProvider theme={defaultTheme}>
      <Flex px={20} direction='column' >
      <Heading as='h2'>Input Fields</Heading>
      <Tabs>
        <Tabs.TabList>
          <Tabs.Tab>UX</Tabs.Tab>
          <Tabs.Tab>UI</Tabs.Tab>
          <Tabs.Tab>Research</Tabs.Tab>
        </Tabs.TabList>
        <Tabs.TabPanels>
          <Tabs.TabPanel>
            <UX/>
          </Tabs.TabPanel>
          <Tabs.TabPanel>
            <UI/>
          </Tabs.TabPanel>
          <Tabs.TabPanel>
            <Research />
          </Tabs.TabPanel>
        </Tabs.TabPanels>
      </Tabs>
    </Flex>
    </BrightProvider>
  )
}

export default InputDocs
