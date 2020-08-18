import { fireEvent } from '@testing-library/react'
import React from 'react'
import { renderWithBrightTheme } from 'testing/helpers/themeHelper'

import Checkbox from '.'

describe('<Checkbox />', () => {
  const defaultProps = {
    id: 'testCheckbox',
    value: 'testValue',
  }
  const label = 'This is a label'
  const description = 'This is a description'
  const errorMessage = 'This is an error message'

  it('should render as expected', () => {
    const { container } = renderWithBrightTheme(<Checkbox {...defaultProps} label={label} description={description} />)
    expect(container).toMatchSnapshot()
  })

  it('renders label', () => {
    const { getByText } = renderWithBrightTheme(<Checkbox {...defaultProps} label={label} />)
    expect(getByText(new RegExp(label, 'i'))).toBeTruthy()
  })

  it('renders description', () => {
    const { getByText } = renderWithBrightTheme(<Checkbox {...defaultProps} description={description} />)
    expect(getByText(new RegExp(description, 'i'))).toBeTruthy()
  })

  it('renders error message when isInvalid', () => {
    const { getByText } = renderWithBrightTheme(<Checkbox {...defaultProps} isInvalid errorMessage={errorMessage} />)
    expect(getByText(new RegExp(errorMessage, 'i'))).toBeTruthy()
  })

  it('has disabled attribute when passed isDisabled prop', () => {
    const { container } = renderWithBrightTheme(<Checkbox {...defaultProps} isDisabled />)
    expect(container.querySelector(`#${defaultProps.id}`)).toBeDisabled()
  })

  it('fires onChange={} ', () => {
    const handleChange = jest.fn()
    const { getByLabelText } = renderWithBrightTheme(
      <Checkbox {...defaultProps} label={label} onChange={handleChange} />
    )
    const checkboxElement = getByLabelText(label)
    expect(handleChange).toHaveBeenCalledTimes(0)
    fireEvent.click(checkboxElement)
    expect(handleChange).toHaveBeenCalledTimes(1)
  })
})
