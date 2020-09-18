import createStory from '@bright/storybook/createStory'
import { Box } from '@chakra-ui/core'
import { boolean, CHANGE, text } from '@storybook/addon-knobs'
import { addons } from '@storybook/addons'
import React from 'react'

import Button from '../Button'
import Input from '../Input'
import Text from '../Text'
import Modal from '.'

createStory('COMPONENTS | Modal', [
  {
    label: 'Modal',
    jsx: () => {
      const channel = addons.getChannel()
      const isOpenIdentifier = 'Modal open'
      const onOpen = (): void => {
        channel.emit(CHANGE, {
          name: isOpenIdentifier,
          value: true,
        })
      }

      const onClose = (): void => {
        channel.emit(CHANGE, {
          name: isOpenIdentifier,
          value: false,
        })
      }

      const isOpen = boolean(isOpenIdentifier, false)
      const title = text('Modal title', 'The Test Modal')
      return (
        <>
          <Button onClick={onOpen}>Open Modal</Button>
          <Modal isOpen={isOpen} onClose={onClose}>
            <Modal.Header>{title}</Modal.Header>
            <Modal.CloseButton />
            <Modal.Body>
              <Text>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
                ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
                fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia
                deserunt mollit anim id est laborum.
              </Text>
              <Box p="5">
                <Input
                  id="confirm"
                  onChange={() => {}}
                  label="Confirm"
                  description={'Please type "CONFIRM" below to confirm your submission'}
                />
              </Box>
            </Modal.Body>
            <Modal.Footer>
              <Button onClick={() => {}}> Submit</Button>
            </Modal.Footer>
          </Modal>
        </>
      )
    },
  },
])
