/* istanbul ignore file */
import GlobalStyles from '@bright/style/GlobalStyles'
import mergeTheme from '@bright/theme/mergeTheme'
import { CSSReset, ThemeProvider as ChakraThemeProvider } from '@chakra-ui/core'
import React, { FC } from 'react'
import { ThemeProvider } from 'styled-components'
import { Theme } from 'styled-system'

interface IBrightProvider {
  theme: Theme
}

const BrightProvider: FC<IBrightProvider> = ({ children, theme }) => {
  const mergedTheme = mergeTheme(theme)

  return (
    <ThemeProvider theme={theme}>
      <ChakraThemeProvider theme={mergedTheme}>
        <CSSReset />
        <GlobalStyles />
        {children}
      </ChakraThemeProvider>
    </ThemeProvider>
  )
}

export default BrightProvider
