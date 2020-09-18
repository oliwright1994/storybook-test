import Radio from '@bright/components/RadioGroup/Radio'
import Stack from '@bright/components/Stack'
import { Space } from '@bright/constants'
import {
  FormControl,
  FormErrorMessage,
  FormHelperText,
  FormLabel,
  IRadioGroup as ChakraIRadioGroup,
  RadioGroup as ChakraRadioGroup,
} from '@chakra-ui/core'
import React, { FC } from 'react'

interface IRadioGroupProps extends Pick<ChakraIRadioGroup, 'onChange' | 'value'> {
  errorMessage?: string
  description?: string
  defaultValue?: string | number
  isRequired?: boolean
  isInline?: boolean
  isInvalid?: boolean
  label?: string
}

interface IRadioGroup extends FC<IRadioGroupProps> {
  Radio: typeof Radio
}

const RadioGroup: IRadioGroup = ({
  children,
  description,
  onChange,
  isInvalid,
  isRequired,
  defaultValue,
  isInline,
  value,
  errorMessage,
  label,
}) => {
  return (
    <FormControl isInvalid={isInvalid} isRequired={isRequired} as="fieldset">
      <Stack space={Space.xxs}>
        {label && (
          <FormLabel padding={0} as="legend">
            {label}
          </FormLabel>
        )}
        {description && <FormHelperText margin={0}>{description}</FormHelperText>}
        <ChakraRadioGroup
          value={value}
          onChange={onChange}
          isInline={isInline}
          defaultValue={defaultValue}
          alignItems="baseline"
        >
          {children}
        </ChakraRadioGroup>
        {errorMessage && <FormErrorMessage>{errorMessage}</FormErrorMessage>}
      </Stack>
    </FormControl>
  )
}

RadioGroup.Radio = Radio

export default RadioGroup
