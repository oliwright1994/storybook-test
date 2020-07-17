/* istanbul ignore file */
import mergeTheme from '@bright/theme/mergeTheme'
import { ThemeProvider as ChakraThemeProvider } from '@chakra-ui/core'
import React, { FC } from 'react'
import { ThemeProvider as StyledSystemThemeProvider } from 'styled-components'
import { Theme } from 'styled-system'

interface IThemeProvider {
  theme: Theme
}

const ThemeProvider: FC<IThemeProvider> = ({ children, theme }) => {
  const mergedTheme = mergeTheme(theme)

  return (
    <StyledSystemThemeProvider theme={theme}>
      <ChakraThemeProvider theme={mergedTheme}>{children}</ChakraThemeProvider>
    </StyledSystemThemeProvider>
  )
}

export default ThemeProvider
