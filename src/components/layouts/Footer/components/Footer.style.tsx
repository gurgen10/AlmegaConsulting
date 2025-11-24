import { Box, Link } from '@mui/material';
import { styled } from '@mui/system';

export const FooterLogoContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  height: '100%',

  [theme.breakpoints.down('sm')]: {
    '& a:first-of-type': {
      margin: '0 auto',
      textAlign: 'center',
    },
  },
}));

export const FooterLink = styled(Link)(({ theme }) => ({
  display: 'inline-block',
  textDecoration: 'none',
  marginBottom: '8px',
  color: theme.palette.grey[25],
  whiteSpace: 'nowrap',
  textAlign: 'left',

  '&:hover': {
    textDecoration: 'underline',
  },

  [theme.breakpoints.down('sm')]: {
    textAlign: 'center',
    margin: '0 auto',
    width: '100%',
  },
}));

export const FooterContainer = styled(Box)(({ theme }) => ({
  display: 'grid',
  gridTemplateColumns: '260px 1fr',
  gap: theme.spacing(6),
  alignItems: 'start',

  [theme.breakpoints.down('md')]: {
    gridTemplateColumns: '1fr',
    paddingTop: 2,
    gap: theme.spacing(3),
  },
}));

export const FooterLinkContainer = styled(Box)(({ theme }) => ({
  display: 'grid',
  gridTemplateColumns: 'repeat(3, minmax(120px, 1fr))',
  gap: theme.spacing(4),
  [theme.breakpoints.down('md')]: {
    gridTemplateColumns: 'repeat(3, 1fr)',
  },
  [theme.breakpoints.down('sm')]: {
    gridTemplateColumns: '1fr',
    gap: theme.spacing(3),
    textAlign: 'center',
    maxWidth: '157px',
    margin: '0 auto',
  },
}));

export const FooterLinkBlock = styled(Box)(({ theme }) => ({
  textAlign: 'left',
  minWidth: 0,
  maxWidth: '100%',
  margin: '0',
  position: 'relative',

  [theme.breakpoints.down('sm')]: {
    textAlign: 'center',
  },
}));

export const FooterLinkHeader = styled(Box)(({ theme }) => ({
  [theme.breakpoints.down('sm')]: {
    textAlign: 'center',
  },
}));

export const FooterLinkItems = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  pr: '20%',
  [theme.breakpoints.down('sm')]: {
    textAlign: 'center',
    pr: theme.spacing(1),
    pl: theme.spacing(1),
  },
}));

export const FooterFollowUsContainerMobile = styled(Box)(({ theme }) => ({
  width: '100%',
  display: 'none',

  [theme.breakpoints.down('md')]: {
    display: 'flex',
    textAlign: 'left',
    marginTop: theme.spacing(4),
  },
  [theme.breakpoints.down('sm')]: {
    justifyContent: 'center',
    textAlign: 'center',
    marginTop: theme.spacing(6),
  },
}));

export const FooterCopyRightContainer = styled(Box)(({ theme }) => ({
  marginTop: theme.spacing(2),
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',

  [theme.breakpoints.down('sm')]: {
    display: 'block',
    textAlign: 'center',
    '& .copy-right': {
      display: 'block',
      marginBottom: theme.spacing(1),
    },
  },
}));
