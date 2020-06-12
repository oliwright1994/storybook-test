import merge from 'lodash.merge';
import { Theme } from 'styled-system';
import { theme as defaultChakraTheme, DefaultTheme as DefaultChakraTheme } from '@chakra-ui/core';

export default function mergeThemes(themes: Theme[], chakraTheme: DefaultChakraTheme = defaultChakraTheme) {
  return {
    ...merge(themes),
    opacity: chakraTheme.opacity,
    icons: chakraTheme.icons,
  };
}
