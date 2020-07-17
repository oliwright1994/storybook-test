import { fireEvent } from '@testing-library/react'
import React from 'react'
import { renderWithBrightTheme } from 'testing/helpers/themeHelper'

import Select from '.'

describe('<Select />', () => {
  const defaultOptions = ['first', 'second']
  const defaultId = 'testSelect'
  const generateDefaultOptions = (): JSX.Element[] => defaultOptions.map(value => <option>{value}</option>)
  const label = 'This is label'
  const description = 'This is label'
  const errorMessage = 'This is error message'

  it('should render as expected', () => {
    const { asFragment } = renderWithBrightTheme(<Select id={defaultId}>{generateDefaultOptions()}</Select>)
    expect(asFragment()).toMatchSnapshot()
  })

  it('displays text', () => {
    const { getByText } = renderWithBrightTheme(<Select id={defaultId}>{generateDefaultOptions()}</Select>)
    expect(getByText(new RegExp(defaultOptions[0], 'i'))).toBeTruthy()
  })

  it('displays label text', () => {
    const { getByText } = renderWithBrightTheme(
      <Select id={defaultId} label={label}>
        {generateDefaultOptions()}
      </Select>
    )
    expect(getByText(new RegExp(label, 'i'))).toBeTruthy()
  })

  it('displays description text', () => {
    const { getByText } = renderWithBrightTheme(
      <Select id={defaultId} description={description}>
        {generateDefaultOptions()}
      </Select>
    )
    expect(getByText(new RegExp(description, 'i'))).toBeTruthy()
  })

  it('displays error text', () => {
    const { getByText } = renderWithBrightTheme(
      <Select id={defaultId} errorMessage={errorMessage} isInvalid={!!errorMessage}>
        {generateDefaultOptions()}
      </Select>
    )
    expect(getByText(new RegExp(errorMessage, 'i'))).toBeTruthy()
  })

  it('fires onChange={} ', () => {
    const handleChange = jest.fn()
    const { getByLabelText } = renderWithBrightTheme(
      <Select id={defaultId} onChange={handleChange} label={label}>
        {generateDefaultOptions()}
      </Select>
    )
    const selectElement = getByLabelText(label)
    expect(handleChange).toHaveBeenCalledTimes(0)
    fireEvent.change(selectElement, { target: { value: defaultOptions[1] } })
    expect(handleChange).toHaveBeenCalled()
    expect(handleChange).toHaveBeenCalledTimes(1)
  })
})
