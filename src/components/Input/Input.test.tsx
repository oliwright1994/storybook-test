import { fireEvent } from '@testing-library/react'
import React from 'react'

import { renderWithBrightTheme } from '../../../testing/helpers/themeHelper'
import Input, { IInput } from './Input'

const props: IInput = {
  id: 'input',
  'aria-label': 'aria label',
  'aria-describedby': 'aria describedby',
  isDisabled: false,
  isInvalid: false,
  isRequired: false,
  isFullWidth: false,
  isReadOnly: false,
  onChange: () => null,
}

describe('<Input />', () => {
  it('should render without errors', () => {
    const { asFragment } = renderWithBrightTheme(<Input {...props} label="label" />)
    expect(asFragment()).toMatchSnapshot()
  })

  it('should show label, description and placeholder', () => {
    const { getByPlaceholderText, getByText } = renderWithBrightTheme(
      <Input
        {...props}
        label="this is the label"
        description="this is the description"
        placeholder="this is the placeholder"
      />
    )
    expect(getByText(/this is the label/i)).toBeTruthy()
    expect(getByText(/this is the description/i)).toBeTruthy()
    expect(getByPlaceholderText(/this is the placeholder/i)).toBeTruthy()
  })

  it('should not be possible to focus on disabled', () => {
    const { getByDisplayValue } = renderWithBrightTheme(<Input {...props} isDisabled value="this is the value" />)
    expect(getByDisplayValue(/this is the value/i)).toBeDisabled()
  })

  it('should show error if invalid', () => {
    const { getByText } = renderWithBrightTheme(<Input {...props} isInvalid errorMessage="this is the error message" />)
    expect(getByText(/this is the error message/i)).toBeTruthy()
  })

  it('should show asterisk if required', () => {
    const { getByText } = renderWithBrightTheme(<Input {...props} isRequired label="this is the label" />)
    expect(getByText(/this is the label*/i)).toBeTruthy()
  })

  it('should show the initial value, and do callback once when changed (+ display it', () => {
    const changeHandler = jest.fn()
    const { getByDisplayValue } = renderWithBrightTheme(
      <Input {...props} onChange={changeHandler} value="this is the value" />
    )
    const input = getByDisplayValue(/this is the value/i)
    expect(input).toBeTruthy()
    fireEvent.change(input, { target: { value: 'this is the new value' } })
    expect(changeHandler).toHaveBeenCalledWith('this is the new value')
    expect(getByDisplayValue(/this is the new value/i)).toBeTruthy()
  })

  it('should show as invalid when changing to empty value, on required', () => {
    const changeHandler = jest.fn()
    const { getByText, getByDisplayValue, findByDisplayValue } = renderWithBrightTheme(
      <Input {...props} onChange={changeHandler} value="this is the value" isRequired />
    )
    // check initial state
    const input = getByDisplayValue(/this is the value/i)
    expect(input).toBeTruthy()
    // test the invalid message
    fireEvent.change(input, { target: { value: '' } })
    expect(changeHandler).not.toHaveBeenCalled()
    findByDisplayValue(/this is the value/i).then(result => expect(result.firstChild).toBeEmpty())
    expect(input).toHaveAttribute('aria-invalid', 'true')
    expect(getByText(/this value is required/i)).toBeTruthy()
    // test the invalid message disappears when filling again a value
    fireEvent.change(input, { target: { value: 'this is the new value' } })
    expect(changeHandler).toHaveBeenCalledWith('this is the new value')
    expect(getByDisplayValue(/this is the new value/i)).toBeTruthy()
    expect(input).toHaveAttribute('aria-invalid', 'false')
    findByDisplayValue(/this value is required/i).then(result => expect(result.firstChild).toBeEmpty())
  })
})
