import styled from 'styled-components'
import {
  border,
  BorderProps,
  fontSize,
  FontSizeProps,
  fontWeight,
  FontWeightProps,
  layout,
  LayoutProps,
  padding,
  PaddingProps,
  typography,
  TypographyProps,
} from 'styled-system'

export const TableWrap = styled.table`
  border-collapse: collapse;
`

export const TableHead = styled.thead``
export const TableBody = styled.tbody``
export const TableHeadCell = styled.th<TypographyProps & PaddingProps & FontWeightProps & FontSizeProps>`
  ${typography}
  ${padding}
  ${fontWeight}
  ${fontSize}
`

export const TableRow = styled.tr<BorderProps & PaddingProps & LayoutProps>`
  ${border}
  ${padding}
  ${layout}
`

export const TableCell = styled.td<LayoutProps & PaddingProps & FontSizeProps>`
  ${layout}
  ${padding}
  ${fontSize}
`
