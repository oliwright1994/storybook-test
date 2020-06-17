import styled from 'styled-components';
import {
  border, BorderProps, color, ColorProps, fontSize, FontSizeProps, fontWeight, FontWeightProps, padding, PaddingProps, space, typography,
} from 'styled-system';

type TSTag = ColorProps & BorderProps & PaddingProps & FontSizeProps & FontWeightProps;

export const STag = styled.div<TSTag>`
  display: inline-block;
  ${fontSize}
  ${padding}
  ${color}
  ${border}
  ${fontWeight}
`;
