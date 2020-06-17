import { Theme } from 'styled-system';

import { borders, radii, shadows } from './border';
import colors from './colors';
import {
  fonts, fontSizes, fontWeights, letterSpacings, lineHeights,
} from './font';
import { breakpoints, space, zIndices } from './position';

const defaultTheme: Theme = {
  breakpoints,
  colors,
  space,
  zIndices,
  shadows,
  fonts,
  fontSizes,
  fontWeights,
  letterSpacings,
  lineHeights,
  borders,
  radii,
};

export default defaultTheme;
