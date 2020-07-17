/* istanbul ignore file */
import GlobalStyles from '@bright/style/GlobalStyles'
import { CSSReset } from '@chakra-ui/core'
import React, { FC } from 'react'
import { Theme } from 'styled-system'

import ThemeProvider from './ThemeProvider'

interface IBrightProvider {
  theme: Theme
}

const BrightProvider: FC<IBrightProvider> = ({ children, theme }) => {
  return (
    <ThemeProvider theme={theme}>
      <CSSReset />
      <GlobalStyles />
      {children}
    </ThemeProvider>
  )
}

export default BrightProvider
