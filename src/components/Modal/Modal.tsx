import Body from '@bright/components/Modal/Body'
import CloseButton from '@bright/components/Modal/CloseButton'
import Footer from '@bright/components/Modal/Footer'
import Header from '@bright/components/Modal/Header'
import {
  IModal as IChakraModal,
  Modal as ChakraModal,
  ModalContent as ChakraModalContent,
  ModalOverlay as ChakraModalOverlay,
} from '@chakra-ui/core'
import React, { FC } from 'react'

type IModalProps = Pick<IChakraModal, 'initialFocusRef' | 'returnFocusOnClose' | 'isOpen' | 'onClose'>

interface IModal extends FC<IModalProps> {
  CloseButton: typeof CloseButton
  Header: typeof Header
  Body: typeof Body
  Footer: typeof Footer
}

const Modal: IModal = ({ children, isOpen, onClose }) => {
  return (
    <ChakraModal
      addAriaLabels
      blockScrollOnMount
      closeOnOverlayClick
      closeOnEsc
      scrollBehavior="inside"
      size="md"
      returnFocusOnClose
      useInert
      isOpen={isOpen}
      onClose={onClose}
    >
      <ChakraModalOverlay backgroundColor="blackAlpha.400" />
      <ChakraModalContent>{children}</ChakraModalContent>
    </ChakraModal>
  )
}

Modal.CloseButton = CloseButton
Modal.Header = Header
Modal.Body = Body
Modal.Footer = Footer

export default Modal
