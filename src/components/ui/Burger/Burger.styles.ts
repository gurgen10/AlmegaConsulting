import { styled } from '@mui/system';

export const BurgerIcon = styled('div')(({ theme }) => ({
  display: 'inline-block',
  width: '32px',
  height: '32px',
  borderRadius: '4px',
  border: '1px solid rgba(0, 5, 5, 0.50)',
  cursor: 'pointer',
  position: 'relative',
  transition: '0.3s ease',

  span: {
    display: 'block',
    position: 'absolute',
    width: '16px',
    height: '2px',
    backgroundColor: theme.palette.grey[900],
    left: '50%',
    transform: 'translateX(-50%)',
    borderRadius: '1px',
    transition: '0.3s ease',
  },

  'span:first-of-type': {
    top: '8px',
  },

  'span:nth-of-type(2)': {
    top: '14px',
  },

  'span:last-of-type': {
    top: '20px',
  },

  '&.active span:first-of-type': {
    transform: 'translateX(-50%) rotate(45deg)',
    top: '14px',
  },

  '&.active span:nth-of-type(2)': {
    transform: 'scaleX(0)',
    opacity: 0,
  },

  '&.active span:last-of-type': {
    transform: 'translateX(-50%) rotate(-45deg)',
    top: '14px',
  },
}));
