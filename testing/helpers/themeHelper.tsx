import { render, RenderResult } from '@testing-library/react'
import React from 'react'

import BrightProvider from '../../src/providers/BrightProvider'
import defaultTheme from '../../src/theme/default'

export const renderWithBrightTheme = (element: React.ReactNode): RenderResult => {
  return render(<BrightProvider theme={defaultTheme}>{element}</BrightProvider>)
}
