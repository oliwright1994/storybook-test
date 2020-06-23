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

export const STableWrap = styled.table`
  border-collapse: collapse;
`

export const STableHead = styled.thead``
export const STableBody = styled.tbody``
export const STableHeadCell = styled.th<TypographyProps & PaddingProps & FontWeightProps & FontSizeProps>`
  ${typography}
  ${padding}
  ${fontWeight}
  ${fontSize}
`

export const STableRow = styled.tr<BorderProps & PaddingProps & LayoutProps>`
  ${border}
  ${padding}
  ${layout}
`

export const STableCell = styled.td<LayoutProps & PaddingProps & FontSizeProps>`
  ${layout}
  ${padding}
  ${fontSize}
`
