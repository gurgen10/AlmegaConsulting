import { styled } from '@mui/system';
import { TableCell, TableRow } from '@mui/material';

export const StyledTableCell = styled(TableCell)(({ theme }) => ({
  position: 'relative',
  width: '18%',
  minWidth: 133,

  ':first-child': {
    minWidth: 180,
    width: '28%',
  },

  [theme.breakpoints.down('sm')]: {
    maxWidth: 124,
    width: 'auto',

    ':first-child': {
      maxWidth: 180,
      width: 'auto',
    },
  },
}));

export const TableHeadRow = styled(TableRow)(({ theme }) => ({
  th: {
    height: 76,
    lineHeight: 1,
    padding: 0,
  },
  '&:first-child th:nth-child(2)': {
    '&::before': {
      content: '""',
      position: 'absolute',
      bottom: -2,
      left: 0,
      height: 'calc(100% + 18px)',
      width: '100%',
      borderRadius: '8px 8px 0 0',
      backgroundColor: theme.palette.tertiary[50],
      border: `2px solid ${theme.palette.tertiary[400]}`,
      borderBottom: `2px solid ${theme.palette.TableCell.border}`,
      boxShadow: `0 20px 38px -5px rgba(0, 0, 0, 0.25)`,
    },
    img: {
      position: 'relative',
    },
  },
  '& th:nth-child(2)': {
    backgroundColor: theme.palette.tertiary[50],
    minWidth: 200,
  },

  [theme.breakpoints.down('sm')]: {
    th: {
      height: 64,
    },
    img: {
      height: 24,
      width: 'auto',
    },
    '& th:nth-child(2)': {
      minWidth: 130,
    },

    '.solargenix-logo': {
      '::before': {
        backgroundImage: 'url("/images/why-choose-our-solar-proposal-software/solargenix-24.png")',
        backgroundSize: '98px 41px',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
      },
      img: {
        visibility: 'hidden',
      },
    },
  },
}));

export const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.grey[50],
  },
  '&:nth-of-type(even)': {
    backgroundColor: theme.palette.grey[25],
  },

  '&:last-child': {
    'td, th': {
      border: 0,
      borderBottomLeftRadius: '16px',
      borderBottomRightRadius: '16px',
    },
  },

  '& td:nth-child(2), & th:nth-child(2)': {
    backgroundColor: theme.palette.tertiary[50],
    '&::before': {
      borderLeft: `2px solid ${theme.palette.tertiary[400]}`,
      borderRight: `2px solid ${theme.palette.tertiary[400]}`,
      content: '""',
      position: 'absolute',
      top: 0,
      left: 0,
      height: 'calc(100% + 1px)',
      width: '100%',
      borderBottom: 0,
      boxShadow: `0 20px 38px -5px rgba(0, 0, 0, 0.25)`,
    },
  },
}));
