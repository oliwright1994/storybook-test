import styled from 'styled-components';
import {
  border,
  BorderProps,
  PaddingProps,
  padding,
  layout,
  LayoutProps,
  position,
  PositionProps,
  fontWeight,
  FontWeightProps,
} from 'styled-system';

export const TableWrap = styled.div<LayoutProps & BorderProps>`
  ${layout}
  ${border}
`;

export const TableHead = styled.div``;
export const TableBody = styled.div``;

export const TableRow = styled.div<BorderProps & PaddingProps & FontWeightProps & LayoutProps>`
  ${border}
  ${padding}
  ${fontWeight}
  ${layout}
`;

export const TableCell = styled.div<LayoutProps & PositionProps>`
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
  ${layout}
  ${position}
`;

export const Resizer = styled.div`
  display: inline-block;
  width: 5px;
  height: 100%;
  position: absolute;
  right: 0;
  top: 0;
  transform: translateX(50%);
  z-index: 1;
`;
