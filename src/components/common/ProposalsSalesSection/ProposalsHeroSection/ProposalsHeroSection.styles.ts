import { styled } from '@mui/system';

export const CardWrapper = styled('div')(({ theme }) => ({
  borderRadius: '8px',
  background: theme.palette.grey[25],
  boxShadow:
    '0 2px 16px 1px rgba(0, 0, 0, 0.12), 0 7px 10px 1px rgba(0, 0, 0, 0.14), 0 4px 5px -2px rgba(0, 0, 0, 0.20)',
  position: 'absolute',

  [theme.breakpoints.down('sm')]: {
    padding: theme.spacing(0.75),
  },
}));
