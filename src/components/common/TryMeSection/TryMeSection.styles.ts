import { styled } from '@mui/system';
import { FormControl, Stack } from '@mui/material';
import { LayoutTypes } from '@/providers/QuoteSettingsProvider/QuoteSettingsProvider.types';

export const QuoteConfigurationWrapper = styled('div')(({ theme }) => ({
  maxWidth: 1136,
  maxHeight: 538,
  margin: '0 auto',
  padding: theme.spacing(0.75),
  borderRadius: '6px',
  background: theme.palette.primary.main,
  boxShadow: `0 2.896px 15.423px 1.448px rgba(0, 43, 43, 0.30)`,
  display: 'grid',
  gap: '5px',
  gridTemplateColumns: '1fr 300px',

  [theme.breakpoints.down('xl')]: {
    maxWidth: 972,
    maxHeight: 482,
    gridTemplateColumns: '1fr 220px',
  },
}));

export const QuoteConfigurationSettingsWrapper = styled(Stack)(({ theme }) => ({
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
}));

export const SettingBlock = styled('div')(({ theme }) => ({
  display: 'flex',
  padding: '8px 12px',
  flexDirection: 'column',
  gap: theme.spacing(2),
  borderRadius: '6px',
  background: theme.palette.grey[50],

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
      content: '""',
      width: '100%',
      maxWidth: 82,
    },
  },

  // [`@container (max-width: ${SMALL_CONTAINER_BREAKPOINT}px)`]: {
  //   '.MuiFormGroup-root': {
  //     gridTemplateColumns: 'repeat(2, 1fr)',
  //   },
  // },
}));
