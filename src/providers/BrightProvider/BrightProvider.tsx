import { ThemeProvider as ChakraThemeProvider } from '@chakra-ui/core';
import React, { FC } from 'react';
import { ThemeProvider } from 'styled-components';
import { Theme } from 'styled-system';

import mergeThemes from '../../utils/mergeThemes';

interface IBrightProvider {
  theme: Theme;
}

const BrightProvider: FC<IBrightProvider> = ({ children, theme }) => {
  const mergedTheme = mergeThemes([theme]);

  return (
    <ThemeProvider theme={theme}>
      <ChakraThemeProvider theme={mergedTheme}>{children}</ChakraThemeProvider>
    </ThemeProvider>
  );
};

export default BrightProvider;
