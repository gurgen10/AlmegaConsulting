'use client';

import { createTheme } from '@mui/material/styles';

import { BREAKPOINTS } from '@/shared/constants/breakpoints';
import { buildTypography } from '@/shared/utils/typography';
import { TYPE_SCALE } from '@/shared/constants/typography';
import { makePalette } from '@/shared/utils/colors';
import { Theme, ThemeOptions } from '@mui/material';
import { alpha } from '@mui/system';

const commonConfigs: ThemeOptions = {
  breakpoints: {
    values: {
      xs: BREAKPOINTS.mobile,
      sm: BREAKPOINTS.tabletMid,
      md: BREAKPOINTS.tablet,
      lg: BREAKPOINTS.mid,
      xl: BREAKPOINTS.big,
    },
  },
  zIndex: {
    modal: 1700,
    snackbar: 3000,
  },
  typography: buildTypography(TYPE_SCALE),
  shape: { borderRadius: 4 },
  components: {
    MuiTab: {
      styleOverrides: {
        root: {
          textTransform: 'none',
          [`@media (max-width:${BREAKPOINTS.tabletMid}px)`]: {
            fontSize: 13,
          },
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          '& .MuiInputLabel-root, & .MuiInputBase-root, & .MuiFormHelperText-root': {
            fontWeight: 300,
          },
          '::selection': {
            backgroundColor: 'var(--mui-palette-primary-100)',
          },
          '& input:-webkit-autofill': {
            WebkitBoxShadow: '0 0 0 1000px var(--mui-palette-primary-50)  inset',
            WebkitTextFillColor: 'var(--mui-palette-text-primary)',
            caretColor: 'var(--mui-palette-text-primary)',
          },
          'input, input::-webkit-outer-spin-button, input::-webkit-inner-spin-button': {
            appearance: 'none',
          },
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'none',
          borderRadius: 4,
        },
        sizeLarge: {
          padding: '8px 22px',
          '&.text-button': {
            padding: '8px 11px',
          },
        },
        sizeMedium: {
          padding: '6px 16px',
          '&.text-button': {
            padding: '6px 8px',
          },
        },
        sizeSmall: {
          padding: '4px 10px',
          '&.text-button': {
            padding: '4px 5px',
          },
        },
        text: {
          '&:hover': (theme: Theme) => alpha(theme.palette.secondary.main, 0.04),
        },
      },
    },
    MuiTypography: {
      styleOverrides: {
        root: {
          fontVariantNumeric: 'lining-nums tabular-nums',
          fontFeatureSettings: "'case' on",
        },
        button: {
          textTransform: 'none',
        },
        body2: {
          fontWeight: 300,
        },
      },
    },
    MuiInput: {
      styleOverrides: {
        root: {
          fontWeight: 300,
        },
      },
    },
    MuiMenuItem: {
      styleOverrides: {
        root: {
          fontWeight: 300,
        },
      },
    },
    MuiFormControlLabel: {
      styleOverrides: {
        root: {
          marginLeft: 0,
        },
      },
    },
    MuiPaginationItem: {
      styleOverrides: {
        text: {
          fontWeight: 300,
        },
      },
    },
  },
};

export const darkTheme = createTheme({
  cssVariables: true,
  palette: {
    mode: 'dark',
    primary: makePalette('primary'),
    secondary: makePalette('secondary'),
    grey: makePalette('grey'),
    tertiary: makePalette('tertiary'),
    opacityDark: makePalette('opacityDark'),
    opacityLight: makePalette('opacityLight'),

    background: {
      default: '#FCFCFC',
    },
  },
  ...commonConfigs,
});

export const lightTheme = createTheme({
  cssVariables: true,
  palette: {
    mode: 'light',
    primary: makePalette('primary'),
    secondary: makePalette('secondary'),
    grey: makePalette('grey'),
    tertiary: makePalette('tertiary'),
    opacityDark: makePalette('opacityDark'),
    opacityLight: makePalette('opacityLight'),

    background: {
      default: '#FCFCFC',
    },
  },
  ...commonConfigs,
});
