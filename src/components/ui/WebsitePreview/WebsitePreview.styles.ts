import styled from '@mui/system/styled';

export const WebsitePreviewWrapper = styled('div')(({ theme }) => ({
  borderRadius: '6px',
  overflow: 'hidden',
  height: 982,
  width: 1536,
  transformOrigin: 'top left',
  transform: 'scale(0.5407331975560081)',
  '.browser-tab': {
    height: 37,
    background: 'var(--tab-background)',
    display: 'flex',
    padding: `8px 18px`,
    justifyContent: 'space-between',
    alignItems: 'center',
    position: 'relative',
    color: 'var(--tab-color)',
    '.url-input': {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      gap: 4,
      width: 309,
      height: 17,
      padding: '0 5.5px',
      borderRadius: 50,
      background: 'var(--tab-input-background)',
      position: 'absolute',
      left: '50%',
      top: 10,
      transform: 'translateX(-50%)',
      color: 'var(--tab-color)',

      '.MuiTypography-root': {
        fontSize: '6.474px',
        color: 'var(--tab-color)',
      },
    },
  },
  '.browser-body': {
    height: 'calc(100% - 27px)',
    overflow: 'hidden',
  },

  [theme.breakpoints.down('xl')]: {
    transform: 'scale(0.478515625)',
  },

  [theme.breakpoints.down('lg')]: {
    transform: 'scale(0.361328125)',
  },

  [theme.breakpoints.down('md')]: {
    transform: 'scale(0.3125)',
  },

  [theme.breakpoints.down('sm')]: {
    transform: 'scale(calc((100vw - 32px) / 1536px));',
  },
}));
