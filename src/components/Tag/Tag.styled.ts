import styled from 'styled-components';
import { typography, space, color, ColorProps, border, BorderProps, padding, PaddingProps, fontSize, FontSizeProps, fontWeight, FontWeightProps } from 'styled-system';

type TSTag = ColorProps & BorderProps & PaddingProps & FontSizeProps & FontWeightProps

export const STag = styled.div<TSTag>`
  display: inline-block;
  ${fontSize}
  ${padding}
  ${color}
  ${border}
  ${fontWeight}
`;
