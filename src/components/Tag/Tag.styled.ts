import styled from 'styled-components'
import {
  border,
  BorderProps,
  color,
  ColorProps,
  fontSize,
  FontSizeProps,
  fontWeight,
  FontWeightProps,
  padding,
  PaddingProps,
  margin,
  MarginProps
} from 'styled-system'

type TSTag = ColorProps & BorderProps & PaddingProps & FontSizeProps & FontWeightProps & MarginProps

export const STag = styled.div<TSTag>`
  display: inline-block;
  ${fontSize}
  ${padding}
  ${color}
  ${border}
  ${fontWeight}
  ${margin}
`
