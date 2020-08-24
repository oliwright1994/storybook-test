import { act, fireEvent, screen } from '@testing-library/react'
import React from 'react'
import { renderWithBrightTheme } from 'testing/helpers/themeHelper'

import Tooltip from '.'

beforeAll(() => {
  jest.useFakeTimers()
})

afterAll(() => {
  jest.useRealTimers()
})

describe('<Tooltip />', () => {
  const anchorText = 'Test Text'

  const defaultProps = {
    label: 'Tooltip label',
    'aria-label': 'Tooltip aria-label',
    children: anchorText,
  }

  it('should render as expected', () => {
    const { container } = renderWithBrightTheme(<Tooltip {...defaultProps} />)
    expect(container).toMatchSnapshot()
  })

  it('should render passed children correctly', () => {
    const { getByText } = renderWithBrightTheme(<Tooltip {...defaultProps} />)

    expect(getByText(anchorText)).toBeTruthy()
  })

  it('should display tooltip on hover', () => {
    const { getByText } = renderWithBrightTheme(<Tooltip {...defaultProps} />)

    const tooltipAnchor = getByText(anchorText)
    expect(screen.queryByRole('tooltip')).toBeNull()
    act(() => {
      fireEvent.mouseOver(tooltipAnchor)
      jest.advanceTimersByTime(200)
    })
    expect(screen.queryByRole('tooltip')).toBeTruthy()

    act(() => {
      fireEvent.mouseOut(tooltipAnchor)
      jest.advanceTimersByTime(200)
    })
    expect(screen.queryByRole('tooltip')).toBeNull()
  })

  it('should display tooltip on focus', () => {
    const { getByText } = renderWithBrightTheme(<Tooltip {...defaultProps} />)

    const tooltipAnchor = getByText(anchorText)
    expect(screen.queryByRole('tooltip')).toBeNull()
    act(() => {
      fireEvent.focus(tooltipAnchor)
      jest.advanceTimersByTime(200)
    })
    expect(screen.queryByRole('tooltip')).toBeTruthy()

    act(() => {
      fireEvent.blur(tooltipAnchor)
      jest.advanceTimersByTime(200)
    })
    expect(screen.queryByRole('tooltip')).toBeNull()
  })

  it('should render aria-label correctly', () => {
    const { getByText } = renderWithBrightTheme(<Tooltip {...defaultProps} />)

    const tooltipAnchor = getByText(anchorText)
    act(() => {
      fireEvent.mouseOver(tooltipAnchor)
      jest.advanceTimersByTime(200)
    })
    expect(screen.getByText(defaultProps['aria-label'])).toBeTruthy()
  })
})
