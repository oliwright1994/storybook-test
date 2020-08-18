import Stack from '@bright/components/Stack'
import { Space } from '@bright/constants'
import {
  Checkbox as ChakraCheckbox,
  FormControl,
  FormErrorMessage,
  FormHelperText,
  FormLabel,
  ICheckbox as ChakraICheckbox,
} from '@chakra-ui/core'
import React, { FC } from 'react'

interface ICheckbox
  extends Pick<ChakraICheckbox, 'isDisabled' | 'isInvalid' | 'isChecked' | 'isReadOnly' | 'onChange'> {
  id: string
  value: string | number
  label?: string
  errorMessage?: string
  description?: string
  variantColor?: string
  isRequired?: boolean
  size?: 'sm' | 'md' | 'lg'
}
const Checkbox: FC<ICheckbox> = ({
  id,
  label,
  description,
  variantColor,
  isChecked,
  onChange,
  isInvalid,
  isReadOnly,
  isDisabled,
  isRequired,
  errorMessage,
  size,
}) => {
  return (
    <FormControl isInvalid={isInvalid} isDisabled={isDisabled} isReadOnly={isReadOnly} isRequired={isRequired}>
      <Stack space={Space.xxs}>
        <ChakraCheckbox
          id={id}
          borderColor="gray.400"
          isInvalid={isInvalid}
          isDisabled={isDisabled}
          isReadOnly={isReadOnly}
          variantColor={variantColor}
          size={size}
          isChecked={isChecked}
          onChange={onChange}
          alignItems="baseline"
        >
          {label && (
            <FormLabel htmlFor={id} padding={0} verticalAlign="baseline">
              {label}
            </FormLabel>
          )}
          {description && <FormHelperText margin={0}>{description}</FormHelperText>}
        </ChakraCheckbox>
        {errorMessage && <FormErrorMessage>{errorMessage}</FormErrorMessage>}
      </Stack>
    </FormControl>
  )
}

export default Checkbox
