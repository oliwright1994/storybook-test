import { Box } from '@chakra-ui/core'
import { Meta } from '@storybook/react/types-6-0'
import React, { useState } from 'react'

import Button from '../Button'
import Input from '../Input'
import Text from '../Text'
import Modal, { IModalProps } from './Modal'

export default { component: Modal, title: 'Modal' } as Meta
export const Standard = (args: IModalProps): JSX.Element => {
  const [isOpen, setIsOpen] = useState(false)
  const onOpen = (): void => {
    setIsOpen(true)
  }

  const onClose = (): void => {
    setIsOpen(false)
  }

  return (
    <>
      <Button onClick={onOpen}>Open Modal</Button>
      <Modal isOpen={isOpen} onClose={onClose} {...args}>
        <Modal.Header>The Test Modal</Modal.Header>
        <Modal.CloseButton />
        <Modal.Body>
          <Text>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
            ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
            fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
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
}
