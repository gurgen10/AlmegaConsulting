import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';

export const ColorButton = styled(Button)(({ theme }) => ({
  height: 20,
  minWidth: 20,
  borderRadius: '2px',
  border: `1px solid ${theme.palette.grey[200]}`,
  boxShadow: `0 1px 1px 0 rgba(0, 0, 0, 0.25)`,
}));

export const ColorPicker = styled('div')(({ theme }) => ({
  borderRadius: 4,
  backgroundColor: theme.palette.background.default,
  width: 256,
  padding: theme.spacing(2),
  display: 'flex',
  flexDirection: 'column',
  gap: theme.spacing(2),

  '.react-colorful': {
    width: '100%',
    height: 174,
    gap: theme.spacing(2),

    '.react-colorful__saturation': {
      borderRadius: 4,
      borderBottom: 'none',
    },

    '.react-colorful__hue': {
      height: 8,
      borderRadius: 10,
    },

    '.react-colorful__saturation-pointer': {
      height: 14,
      width: 14,
    },

    '.react-colorful__pointer': {
      height: 10,
      width: 10,
    },
  },
}));
