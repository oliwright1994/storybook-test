import React from 'react'
import createStory from '../../storybook/createStory'
import Button from '.'
import { ButtonStyleType } from './constants'

createStory(
  'COMPONENTS | Button',
  [
    {
      label: 'primary',
      jsx: () => (
        <>
          <Button onClick={() => {}} size={'sm'}>This is a primary sm button</Button>
          <Button onClick={() => {}} size={'lg'}>This is a primary lg button</Button>
        </>
      )
    },
    {
      label: 'secondary',
      jsx: () => (
        <Button style={ButtonStyleType.secondary} onClick={() => {}}>This is a secondary button</Button>
      )
    },
    {
      label: 'danger',
      jsx: () => (
        <Button style={ButtonStyleType.danger} onClick={() => {}}>This is a danger button</Button>
      )
    },
    {
      label: 'disabled',
      jsx: () => (
        <Button onClick={() => {}}  isDisabled={true}>This is a disabled button</Button>
      )
    },
    {
      label: 'with icon',
      jsx: () => (
        <>
          <div><Button style={ButtonStyleType.primary} onClick={() => {}} rightIcon={'email'}>This is a primary button with right icon</Button></div>
          <div><Button style={ButtonStyleType.primary} onClick={() => {}} leftIcon={'email'}>This is a primary button with left icon</Button></div>
        </>
      )
    },
  ],
  {}
);
