import { fireEvent } from '@testing-library/react'
import React from 'react'
import { renderWithBrightTheme } from 'testing/helpers/themeHelper'

import RadioGroup from '.'

describe('<RadioGroup />', () => {
  const defaultGroupProps = {
    description: 'This is a description',
    errorMessage: 'This is an error message',
  }
  const getLabel = (id: string): string => `Option ${id}`
  const radioButtons = ['1', '2'].map(id => (
    <RadioGroup.Radio key={id} id={id} value={id}>
      {getLabel(id)}
    </RadioGroup.Radio>
  ))

  it('should render as expected', () => {
    const { container } = renderWithBrightTheme(<RadioGroup {...defaultGroupProps}>{radioButtons}</RadioGroup>)

    expect(container).toMatchSnapshot()
  })

  it('should render child radio inputs as expected', () => {
    const { container } = renderWithBrightTheme(<RadioGroup {...defaultGroupProps}>{radioButtons}</RadioGroup>)

    expect(container.querySelectorAll('input[type="radio"]')).toHaveLength(2)
    expect(container).toHaveTextContent(getLabel('1'))
    expect(container).toHaveTextContent(getLabel('2'))
  })

  it('should render description', () => {
    const { container } = renderWithBrightTheme(<RadioGroup {...defaultGroupProps}>{radioButtons}</RadioGroup>)

    expect(container).toHaveTextContent(defaultGroupProps.description)
  })

  it('should render error message when isInvalid', () => {
    const { container } = renderWithBrightTheme(
      <RadioGroup {...defaultGroupProps} isInvalid>
        {radioButtons}
      </RadioGroup>
    )

    expect(container).toHaveTextContent(defaultGroupProps.errorMessage)
  })

  it('should fire onChange function', () => {
    const handleChange = jest.fn()
    const { getByText } = renderWithBrightTheme(
      <RadioGroup {...defaultGroupProps} onChange={handleChange}>
        {radioButtons}
      </RadioGroup>
    )
    const radioInput = getByText(getLabel('2'))

    expect(handleChange).toHaveBeenCalledTimes(0)
    fireEvent.click(radioInput)
    expect(handleChange).toHaveBeenCalledTimes(1)
  })
})
