import { IRadio as IChakraIRadio, Radio as ChakraRadio } from '@chakra-ui/core'
import React, { FC } from 'react'

interface IRadio extends Pick<IChakraIRadio, 'value' | 'isDisabled' | 'isChecked' | 'onChange'> {
  id: string
}

const Radio: FC<IRadio> = ({ id, isDisabled, value, children, isChecked, onChange }) => {
  return (
    <ChakraRadio id={id} isDisabled={isDisabled} value={value} isChecked={isChecked} onChange={onChange}>
      {children}
    </ChakraRadio>
  )
}

export default Radio
