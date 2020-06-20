import {
  DefaultTheme as ChakraTheme,
  theme as chakraTheme,
  ThemeProvider as ChakraThemeProvider,
} from '@chakra-ui/core';
import { StoryDecorator } from '@storybook/react';
import React from 'react';
import { createGlobalStyle, ThemeProvider } from 'styled-components';
import { Theme } from 'styled-system';

import defaultTheme from '../../theme/default';

const mergedChakraTheme = {
  ...defaultTheme,
  opacity: chakraTheme.opacity,
  icons: chakraTheme.icons,
};

const GlobalStyle = createGlobalStyle<{ theme: Theme }>`
  body {
    font-family: 'Lato', sans-serif;
  }
`;

export default (): StoryDecorator => (story: () => React.ReactNode): JSX.Element => (
  <ThemeProvider theme={defaultTheme}>
    <ChakraThemeProvider theme={(mergedChakraTheme as unknown) as ChakraTheme}>
      <GlobalStyle />
      {story()}
    </ChakraThemeProvider>
  </ThemeProvider>
);
