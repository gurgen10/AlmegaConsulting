import { styled } from '@mui/system';
import { FormControl } from '@mui/material';
import { LayoutTypes, Mode } from '@/providers/QuoteSettingsProvider/QuoteSettingsProvider.types';

export const QuoteConfigurationWrapper = styled('div')(({ theme }) => ({
  maxWidth: 1136,
  margin: '0 auto',
  borderRadius: '6px',
  background: theme.palette.primary.main,
  boxShadow: `0 0 0 6px ${theme.palette.primary.main}, 0 2.896px 15.423px 1.448px rgba(0, 43, 43, 0.30)`,
  display: 'grid',
  gap: '5px',
  gridTemplateColumns: '1fr 300px',

  [theme.breakpoints.down('xl')]: {
    maxWidth: 960,
    gridTemplateColumns: '1fr 220px',
  },

  [theme.breakpoints.down('lg')]: {
    maxWidth: 780,
  },

  [theme.breakpoints.down('md')]: {
    maxWidth: 480,
    gridTemplateColumns: '1fr',
  },

  [theme.breakpoints.down('sm')]: {
    maxWidth: '100%',
    gridTemplateColumns: '1fr',
  },
}));

export const QuoteConfigurationPreviewWrapper = styled('div')(({ theme }) => ({
  background: '#d0d7de',
  borderRadius: '6px',
  overflow: 'hidden',
  height: 531,
  position: 'relative',

  '--background-color': 'rgba(247, 252, 252, 0.90)',
  '--background-color-secondary': 'rgba(255, 255, 255, 1)',
  '--border-color': 'rgba(245, 245, 245, 1)',
  '--form-background-color': 'rgba(247, 252, 252, 0.90)',
  '--text-color': 'rgba(0, 5, 5, 1)',
  '--text-field-color': 'rgba(0, 5, 5, 0.7)',
  '--text-field-border-color': 'rgba(0, 5, 5, 0.20)',
  '--text-field-background': 'rgba(250, 250, 250, 0.8)',
  '--box-shadow':
    '0 1.221px 6.105px 0 rgba(0, 0, 0, 0.12), 0 2.442px 2.442px 0 rgba(0, 0, 0, 0.14), 0 3.663px 1.221px -2.442px rgba(0, 0, 0, 0.20)',
  '--backdrop-filter': 'blur(20.757020950317383px)',
  '--footer-color': 'rgba(0, 5, 5, 0.9)',
  '--opacity-30': 'rgba(255, 255, 255, 0.3)',
  '--tab-background': '#F2F2F5',
  '--tab-color': '#616161',
  '--tab-input-background': '#ffffff',

  [`&[data-mode="${Mode.Dark}"]`]: {
    '--background-color': 'rgba(27,27,27,0.9)',
    '--background-color-secondary': 'rgba(66, 66, 66, 1)',
    '--border-color': 'rgba(117, 117, 117, 1)',
    '--form-background-color': 'rgba(0, 5, 5, 0.7)',
    '--text-color': 'rgba(255, 255, 255, 1)',
    '--text-field-color': 'rgba(247, 252, 252, 0.9)',
    '--text-field-border-color': 'rgba(97, 97, 97, 1)',
    '--text-field-background': 'rgba(0, 5, 5, 0.6)',
    '--box-shadow':
      '0 1.221px 6.105px 0 rgba(0, 0, 0, 0.12), 0 2.442px 2.442px 0 rgba(0, 0, 0, 0.14), 0 3.663px 1.221px -2.442px rgba(0, 0, 0, 0.20)',
    '--backdrop-filter': 'blur(37px)',
    '--footer-color': 'rgba(247, 252, 252, 0.6)',
    '--opacity-30': 'rgba(0, 5, 5, 0.3)',
    '--tab-background': '#616161',
    '--tab-color': '#e0e0e0',
    '--tab-input-background': '#424242',
  },

  '.badge': {
    fontWeight: 700,
    position: 'absolute',
    zIndex: 100,
    left: -45,
    bottom: 39,
    width: 206,
    textAlign: 'center',
    padding: '3px',
    background: theme.palette.grey[25],
    filter: `drop-shadow(0 4px 21.3px rgba(0, 0, 0, 0.60))`,
    transform: 'rotate(45deg)',
  },

  [theme.breakpoints.down('xl')]: {
    height: 470,

    '.badge': {
      left: -50,
      bottom: 37,
    },
  },

  [theme.breakpoints.down('lg')]: {
    height: 355,

    '.badge': {
      left: -60,
      bottom: 30,
      padding: 0,
    },
  },

  [theme.breakpoints.down('md')]: {
    height: 306,
  },

  [theme.breakpoints.down('sm')]: {
    height: 'calc((982px * (100vw - 32px)) / 1536px)',

    '.badge': {
      bottom: 32,
    },
  },
}));

export const QuoteConfigurationSettingsWrapper = styled('div')(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  gap: theme.spacing(0.75),
  '.MuiButtonGroup-root': {
    borderRadius: '6px',
    boxShadow: `0 0.706px 3.529px 0 rgba(0, 0, 0, 0.12), 0 1.412px 1.412px 0 rgba(0, 0, 0, 0.14), 0 2.118px 0.706px -1.412px rgba(0, 0, 0, 0.20)`,
    overflow: 'hidden',

    '.MuiButtonGroup-grouped': {
      height: 24,
      width: 24,
      padding: theme.spacing(0.75),
      minWidth: 0,
      border: 'none',
    },
  },

  [theme.breakpoints.down('md')]: {
    display: 'grid',
    gridTemplateColumns: '217px 1fr',
    gridTemplateRows: '1fr min-content',

    '.layout-block': {
      gridRow: 'span 2',
    },
  },

  [theme.breakpoints.down('sm')]: {
    gridTemplateColumns: 'minmax(184px, 217px) 1fr',
  },
}));

export const SettingBlock = styled('div')(({ theme }) => ({
  display: 'flex',
  padding: '8px 12px',
  flexDirection: 'column',
  gap: theme.spacing(2),
  borderRadius: '6px',
  background: theme.palette.grey[50],

  '&.layout-block': {
    flexGrow: 1,
  },

  [theme.breakpoints.down('xl')]: {
    padding: 8,
    gap: theme.spacing(1.5),
  },

  [theme.breakpoints.down('lg')]: {
    padding: 6,
    gap: theme.spacing(1),
  },
}));

export const LayoutOptions = styled(FormControl)(({ theme }) => ({
  '.MuiFormGroup-root': {
    display: 'grid',
    gridTemplateColumns: 'repeat(2, 1fr)',
    gap: theme.spacing(1),
  },

  '.MuiFormControlLabel-root': {
    margin: '0 auto',
    position: 'relative',
    maxWidth: 123,
    width: '100%',

    '.MuiRadio-root': {
      position: 'absolute',
      left: 0,
      top: 0,
      padding: 0,
      width: 28,
      height: 28,
    },

    '::before': {
      content: '""',
      width: '100%',
      aspectRatio: '121/67',
      borderRadius: '4px',
      border: `1px solid ${theme.palette.grey[400]}`,
      background: '#ccc',
      marginBottom: theme.spacing(0.5),
    },

    ':has(input[checked])::before': {
      borderColor: theme.palette.primary[500],
    },
  },

  [`.MuiFormControlLabel-root:has(input[value="${LayoutTypes.Background}"])`]: {
    '::before': {
      backgroundImage: `url("/images/layout-options/background-layout.svg")`,
      backgroundSize: 'cover',
    },
  },
  [`.MuiFormControlLabel-root:has(input[value="${LayoutTypes.SideImage}"])`]: {
    '::before': {
      background: `url("/images/layout-options/side-image-layout.svg")`,
      backgroundSize: 'cover',
    },
  },
  [`.MuiFormControlLabel-root:has(input[value="${LayoutTypes.Elegant}"])`]: {
    '::before': {
      background: `url("/images/layout-options/elegant-layout.svg")`,
      backgroundSize: 'cover',
    },
  },
  [`.MuiFormControlLabel-root:has(input[value="${LayoutTypes.Minimalistic}"])`]: {
    '::before': {
      background: `url("/images/layout-options/minimalistic-layout.svg")`,
      backgroundSize: 'cover',
    },
  },

  [theme.breakpoints.down('xl')]: {
    '.MuiFormControlLabel-root': {
      maxWidth: 82,
    },
  },

  [theme.breakpoints.down('lg')]: {
    '.MuiFormControlLabel-root::before': {
      height: 40,
    },
  },

  [theme.breakpoints.down('md')]: {
    '.MuiFormControlLabel-root::before': {
      height: 46,
    },
  },
}));
