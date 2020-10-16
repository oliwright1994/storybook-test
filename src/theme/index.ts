import { default as CommonBrightTheme } from './common'
import { default as lightColors } from './light/colors'
import { default as darkColors } from './dark/colors'
import { Theme } from 'styled-system'

export const defaultBrightTheme: Theme = {...CommonBrightTheme, colors: lightColors}
export const darkBrightTheme: Theme = {...CommonBrightTheme, colors: darkColors}

export { default as mergeTheme } from './mergeTheme'
