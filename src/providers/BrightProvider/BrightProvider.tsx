/* istanbul ignore file */
import { ThemeProvider as ChakraThemeProvider } from '@chakra-ui/core'
import React, { FC } from 'react'
import { ThemeProvider } from 'styled-components'
import { Theme } from 'styled-system'

import GlobalStyles from '../../style/GlobalStyles'
import mergeTheme from '../../theme/mergeTheme'

interface IBrightProvider {
  theme: Theme
}

const BrightProvider: FC<IBrightProvider> = ({ children, theme }) => {
  const mergedTheme = mergeTheme(theme)

  return (
    <ThemeProvider theme={theme}>
      <ChakraThemeProvider theme={mergedTheme}>
        <GlobalStyles />
        {children}
      </ChakraThemeProvider>
    </ThemeProvider>
  )
}

export default BrightProvider
