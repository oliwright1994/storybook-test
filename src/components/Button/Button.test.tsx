import { fireEvent } from '@testing-library/react'
import React from 'react'
import { renderWithBrightTheme } from 'testing/helpers/themeHelper'

import Button from '.'

describe('<Button />', () => {
  const clickHandler = jest.fn()

  it('should render as expected', () => {
    const { asFragment } = renderWithBrightTheme(<Button onClick={() => {}}>I am a button</Button>)
    expect(asFragment()).toMatchSnapshot()
  })

  it('displays text', () => {
    const { getByText } = renderWithBrightTheme(<Button onClick={() => {}}>I am a button</Button>)
    expect(getByText(/i am a button/i)).toBeTruthy()
  })

  it('fires onClick', () => {
    const { getByText } = renderWithBrightTheme(<Button onClick={clickHandler}>Click me</Button>)
    fireEvent.click(getByText(/click/i))
    expect(clickHandler).toHaveBeenCalled()
  })
})
