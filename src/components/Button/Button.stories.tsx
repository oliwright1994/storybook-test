import React from 'react'
import createStory from '../../storybook/createStory'
import Button from '.'
import { ButtonStyleType } from './constants'

const commonProps = {
  onClick: () => {}
}

const styleVariants = Object.keys(ButtonStyleType).map((variant) => {
  return (
    {
      label: variant,
      jsx: () => <Button {...commonProps} style={variant as ButtonStyleType}>This is a {variant} button</Button>
    }
  )
});

createStory(
  'COMPONENTS | Button',
  [
    ...styleVariants,
    {
      label: 'sizes',
      jsx: () => (
        <>
          <Button {...commonProps} size={'sm'}>This is a sm button</Button>
          <Button {...commonProps} size={'lg'}>This is a lg button</Button>
        </>
      )
    },
    {
      label: 'disabled',
      jsx: () => (
        <Button {...commonProps} isDisabled={true}>This is a disabled button</Button>
      )
    },
    {
      label: 'with icon',
      jsx: () => (
        <>
          <Button {...commonProps} rightIcon={'email'}>This is a button with right icon</Button>
          <Button {...commonProps} leftIcon={'email'}>This is a button with left icon</Button>
        </>
      )
    },
  ],
  {}
);
