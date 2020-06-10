import React from 'react';
import { StoryDecorator } from '@storybook/react';
import { ThemeProvider, createGlobalStyle } from 'styled-components';
import {
  theme as chakraTheme,
  DefaultTheme as ChakraTheme,
  ThemeProvider as ChakraThemeProvider,
} from '@chakra-ui/core';

import defaultTheme from '../../theme/default';
import { Theme } from 'styled-system';

const mergedChakraTheme = {
  ...defaultTheme,
  opacity: chakraTheme.opacity,
  icons: chakraTheme.icons,
};

const GlobalStyle = createGlobalStyle<{ theme: Theme }>`
  body {
    // @ts-ignore
    font-family: ${p => p.theme.fonts.body}
  }
`;

export default (): StoryDecorator => (story: Function): JSX.Element => {
  return (
    <ThemeProvider theme={defaultTheme}>
      <ChakraThemeProvider theme={(mergedChakraTheme as unknown) as ChakraTheme}>
        <GlobalStyle />
        {story()}
      </ChakraThemeProvider>
    </ThemeProvider>
  );
};
