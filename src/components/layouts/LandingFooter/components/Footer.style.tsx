import { Box } from '@mui/material';
import { styled } from '@mui/system';

export const FooterLinkHeader = styled(Box)(({ theme }) => ({
  [theme.breakpoints.down('sm')]: {
    textAlign: 'center',
  },
}));
