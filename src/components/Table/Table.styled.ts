import styled from 'styled-components';
import {
  typography,
  space,
  color,
  size,
  border,
  SizeProps,
  BorderProps,
  PaddingProps,
  padding,
  layout,
  LayoutProps,
  margin,
  MarginProps,
} from 'styled-system';

export const STable = styled.table`
  ${color}
  table-layout: fixed;
  border-collapse: collapse;
  /* width: 100%; */
`;


export const STh = styled.th`
  text-align: left;
`

export const STd = styled.td<PaddingProps>`
  ${padding}
`;

export const STr = styled.tr<LayoutProps & BorderProps & PaddingProps>`
  ${layout}
  ${border}
  ${padding}
  overflow: hidden;
`;
