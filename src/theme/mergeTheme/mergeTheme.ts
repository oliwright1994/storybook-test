import { DefaultTheme as DefaultChakraTheme, theme as defaultChakraTheme } from '@chakra-ui/core'
import { Theme } from 'styled-system'

export default function mergeTheme(
  theme: Theme,
  chakraTheme: DefaultChakraTheme = defaultChakraTheme
): DefaultChakraTheme {
  return ({
    ...theme,
    opacity: chakraTheme.opacity,
    icons: chakraTheme.icons,
  } as unknown) as DefaultChakraTheme
}
