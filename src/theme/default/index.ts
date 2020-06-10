import colors from './colors';
import { breakpoints, space, zIndices } from './position';
import { fonts, fontSizes, fontWeights, letterSpacings, lineHeights } from './font';
import { borders, radii, shadows } from './border';
import { Theme } from 'styled-system';


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
