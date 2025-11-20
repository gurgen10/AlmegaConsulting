// theme.d.ts
import { PaletteColor, PaletteColorOptions } from '@mui/material/styles';

declare module '@mui/material/styles' {
  interface Palette {
    tertiary: PaletteColor;
    opacityDark: PaletteColor[];
    opacityLight: PaletteColor[];
  }

  interface PaletteOptions {
    tertiary?: PaletteColorOptions;
    opacityDark?: PaletteColorOptions;
    opacityLight?: PaletteColorOptions;
  }
}

declare module '@mui/material/Button' {
  interface ButtonPropsColorOverrides {
    tertiary: true;
  }
}
