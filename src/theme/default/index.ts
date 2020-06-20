import { Theme } from 'styled-system';

import borders from './borders';
import breakpoints from './breakpoints';
import colors from './colors';
import { fonts, fontSizes, fontWeights, letterSpacings, lineHeights } from './font';
import radii from './radii';
import shadows from './shadows';
import sizes from './sizes';
import space from './space';
import zIndices from './zIndices';

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
  sizes,
};

export default defaultTheme;
