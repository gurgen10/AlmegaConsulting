import { Box, Link } from '@mui/material';
import { styled } from '@mui/system';

export const FooterLink = styled(Link)(({ theme }) => ({
  display: 'inline-block',
  textDecoration: 'none',
  marginBottom: '8px',
  color: theme.palette.grey[25],
  '&:hover': {
    textDecoration: 'underline',
  },
}));

export const FooterContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexWrap: 'wrap',
  justifyContent: 'space-between',
  gap: 8,

  [theme.breakpoints.down('sm')]: {
    paddingTop: 2,
    display: 'grid',
    gridTemplateColumns: '1fr',

    margin: '0 auto',
  },
}));

export const FooterLinkContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'space-between',
  gap: theme.spacing(6),
  [theme.breakpoints.down('sm')]: {
    display: 'grid',
    gridTemplateColumns: '1fr',
  },
}));

export const FooterLinkBlock = styled(Box)(({ theme }) => ({
  textAlign: 'left',
  minWidth: '91px',
  maxWidth: '157px',
  margin: '0 auto',

  [theme.breakpoints.down('sm')]: {
    textAlign: 'center',
  },
}));
