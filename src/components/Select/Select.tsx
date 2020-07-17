import Stack from '@bright/components/Stack'
import { Space } from '@bright/constants'
import {
  FormControl,
  FormErrorMessage,
  FormHelperText,
  FormLabel,
  Select as ChakraSelect,
  SelectProps as ChakraSelectProps,
} from '@chakra-ui/core'
import React, { FC } from 'react'

export interface SelectProps
  extends Pick<ChakraSelectProps, 'onChange' | 'isDisabled' | 'isInvalid' | 'isRequired' | 'isReadOnly'> {
  id: string
  label?: string
  description?: string
  errorMessage?: string
}

const Select: FC<SelectProps> = ({
  children,
  onChange,
  isDisabled,
  isInvalid,
  isRequired,
  isReadOnly,
  id,
  label,
  description,
  errorMessage,
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
        <ChakraSelect
          onChange={onChange}
          isDisabled={isDisabled}
          isInvalid={isInvalid}
          isRequired={isRequired}
          isReadOnly={isReadOnly}
          id={id}
        >
          {children}
        </ChakraSelect>
        {errorMessage && <FormErrorMessage>{errorMessage}</FormErrorMessage>}
      </Stack>
    </FormControl>
  )
}

export default Select
