import { styled } from '@mui/system';
import { Accordion, AccordionProps } from '@mui/material';

export const FaqAccordion = styled((props: AccordionProps) => (
  <Accordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  borderRadius: '8px !important',
  borderWidth: '1px',
  borderStyle: 'solid',
  borderColor: theme.palette.tertiary[400],
  backgroundColor: theme.palette.tertiary[100],
  boxShadow: '0 0 17.3px 4px rgba(0, 43, 43, 0.06)',

  '&:before': { display: 'none' },

  svg: {
    color: theme.palette.grey[900],
  },

  '&.Mui-expanded': {
    margin: 0,
    backgroundColor: theme.palette.tertiary[50],

    svg: {
      color: theme.palette.primary.main,
    },
  },

  '& .MuiAccordionSummary-content': {
    my: 2,
    '&.Mui-expanded': {
      my: 2,
    },
  },
}));
