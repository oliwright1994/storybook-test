import Radio from '@bright/components/RadioGroup/Radio'
import Stack from '@bright/components/Stack'
import { Space } from '@bright/constants'
import {
  FormControl,
  FormErrorMessage,
  FormHelperText,
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
}) => {
  return (
    <FormControl isInvalid={isInvalid} isRequired={isRequired}>
      <Stack space={Space.xxs}>
        <ChakraRadioGroup
          value={value}
          onChange={onChange}
          isInline={isInline}
          defaultValue={defaultValue}
          alignItems="baseline"
        >
          {children}
        </ChakraRadioGroup>
        {description && <FormHelperText margin={0}>{description}</FormHelperText>}
        {errorMessage && <FormErrorMessage>{errorMessage}</FormErrorMessage>}
      </Stack>
    </FormControl>
  )
}

RadioGroup.Radio = Radio

export default RadioGroup
