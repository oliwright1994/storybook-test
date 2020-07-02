import {
  FormControl,
  FormErrorMessage,
  FormHelperText,
  FormLabel,
  IInput as IChakraInput,
  Input as ChakraInput,
} from '@chakra-ui/core'
import React, { FC, FormEvent } from 'react'

import { Space } from '../../constants'
import Stack from '../Stack'

export interface IInput
  extends Pick<
    IChakraInput,
    'aria-label' | 'aria-describedby' | 'isDisabled' | 'isInvalid' | 'isRequired' | 'isFullWidth' | 'isReadOnly'
  > {
  id: string
  label?: string
  description?: string
  errorMessage?: string
  placeholder?: string
  value?: string
  onChange: (event: FormEvent<HTMLInputElement>) => void
}

const Input: FC<IInput> = ({
  id,
  label,
  description,
  errorMessage,
  isInvalid,
  isRequired,
  isFullWidth = false,
  ...props
}) => {
  return (
    <FormControl isInvalid={isInvalid} isRequired={isRequired}>
      <Stack space={Space.xxs}>
        {label && (
          <FormLabel htmlFor={id} padding={0} verticalAlign="baseline">
            {label}
          </FormLabel>
        )}
        {description && <FormHelperText margin={0}>{description}</FormHelperText>}
        <ChakraInput
          {...props}
          id={id}
          isInvalid={isInvalid}
          isFullWidth={isFullWidth}
          borderColor="gray.400"
          _hover={{ borderColor: 'gray.500' }}
        />
        {errorMessage && <FormErrorMessage>{errorMessage}</FormErrorMessage>}
      </Stack>
    </FormControl>
  )
}

export default Input
