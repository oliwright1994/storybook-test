import { DefaultTheme as DefaultChakraTheme, theme as defaultChakraTheme } from '@chakra-ui/core';
import merge from 'lodash.merge';
import { Theme } from 'styled-system';

export default function mergeThemes(themes: Theme[], chakraTheme: DefaultChakraTheme = defaultChakraTheme) {
  return {
    ...merge(themes),
    opacity: chakraTheme.opacity,
    icons: chakraTheme.icons,
  };
}
