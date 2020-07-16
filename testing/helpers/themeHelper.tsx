import BrightProvider from '@bright/providers/BrightProvider'
import defaultTheme from '@bright/theme/default'
import { render, RenderResult } from '@testing-library/react'
import React from 'react'

export const renderWithBrightTheme = (element: React.ReactNode): RenderResult => {
  return render(<BrightProvider theme={defaultTheme}>{element}</BrightProvider>)
}
