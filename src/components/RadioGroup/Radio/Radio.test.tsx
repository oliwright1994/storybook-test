import React from 'react'
import { renderWithBrightTheme } from 'testing/helpers/themeHelper'

import Radio from '.'

describe('<Radio />', () => {
  const defaultProps = {
    id: 'testRadioId',
    value: 'testRadioValue',
  }
  const label = 'Radio Button text'

  it('should render as expected', () => {
    const { container } = renderWithBrightTheme(<Radio {...defaultProps}>{label}</Radio>)

    expect(container).toMatchSnapshot()
  })

  it('should render correct text', () => {
    const { container } = renderWithBrightTheme(<Radio {...defaultProps}>{label}</Radio>)

    expect(container).toHaveTextContent(label)
  })

  it('should have disabled attribute when passed isDisabled prop', () => {
    const { container } = renderWithBrightTheme(
      <Radio {...defaultProps} isDisabled>
        {label}
      </Radio>
    )

    expect(container.querySelector(`#${defaultProps.id}`)).toBeDisabled()
  })
})
