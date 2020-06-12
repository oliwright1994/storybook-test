import React, { FC } from 'react';
import { Theme } from 'styled-system';
import mergeThemes from '../../utils/mergeThemes';
import { ThemeProvider } from 'styled-components';
import { ThemeProvider as ChakraThemeProvider } from '@chakra-ui/core';

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
