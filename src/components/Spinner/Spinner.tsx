import { Spinner as ChakraSpinner, SpinnerProps as IChakraSpinner } from '@chakra-ui/core'
import React, { FC } from 'react'

interface ISpinner extends Pick<IChakraSpinner, 'thickness' | 'speed' | 'emptyColor' | 'color'> {
  size?: 'xl' | 'lg' | 'md' | 'sm' | 'xs'
}

const Spinner: FC<ISpinner> = ({ thickness, speed, emptyColor, color, size }) => (
  <ChakraSpinner thickness={thickness} speed={speed} emptyColor={emptyColor} color={color} size={size} />
)

export default Spinner
