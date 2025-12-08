'use client';

import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Stack,
  Typography,
} from '@mui/material';

import { CONTAINER_STYLES, SECTION_STYLES_X, SECTION_STYLES_Y } from '@/shared/constants/spacing';
import { useTranslations } from 'next-intl';
import FaqArrow from '@/components/common/Faq/FaqArrow';
import { SyntheticEvent, useState } from 'react';

const faqs = [
  {
    title: 'How does your solar sales software help sales teams?',
    text: 'It takes care of the heavy lifting in your sales process, from roof analysis and system design to instant quoting and proposal generation. Reps can create accurate, sales-ready proposals in minutes instead of hours, respond to leads faster, and spend more time actually selling instead of doing manual admin work.',
  },
  {
    title: 'Do I need technical solar design experience to use this tool?',
    text: 'It takes care of the heavy lifting in your sales process, from roof analysis and system design to instant quoting and proposal generation. Reps can create accurate, sales-ready proposals in minutes instead of hours, respond to leads faster, and spend more time actually selling instead of doing manual admin work.',
  },
  {
    title: 'Can I customize proposal templates with my branding and pricing?',
    text: 'It takes care of the heavy lifting in your sales process, from roof analysis and system design to instant quoting and proposal generation. Reps can create accurate, sales-ready proposals in minutes instead of hours, respond to leads faster, and spend more time actually selling instead of doing manual admin work.',
  },
  {
    title: 'Does the system calculate savings, payback period, and financial forecasts?',
    text: 'It takes care of the heavy lifting in your sales process, from roof analysis and system design to instant quoting and proposal generation. Reps can create accurate, sales-ready proposals in minutes instead of hours, respond to leads faster, and spend more time actually selling instead of doing manual admin work.',
  },
];

export default function Faq() {
  const t = useTranslations('heroSection');
  const [expanded, setExpanded] = useState<string | false>('faq1');

  const handleChange = (panel: string) => (event: SyntheticEvent, newExpanded: boolean) => {
    setExpanded(newExpanded ? panel : false);
  };

  return (
    <Box
      component="section"
      sx={{
        ...SECTION_STYLES_Y,
        ...SECTION_STYLES_X,
        backgroundColor: 'tertiary.50',
      }}
    >
      <Box {...CONTAINER_STYLES}>
        <Box
          sx={theme => ({
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: 5,
            [theme.breakpoints.down('md')]: {
              gridTemplateColumns: '1fr',
              gap: 0,
            },
          })}
        >
          <Box>
            <Typography
              component="h2"
              variant="h3"
              sx={{
                fontWeight: 500,
                color: 'primary.main',
                maxWidth: 500,
                mb: 2,
              }}
            >
              {t('faq')}
            </Typography>
            <Typography
              variant="subtitle2"
              sx={{
                fontWeight: 300,
                color: 'grey.900',
                mb: 3,
              }}
            >
              {t('faqSubtitle')}
            </Typography>
          </Box>
          <Stack rowGap={1}>
            {faqs.map((faq, index) => (
              <Accordion
                expanded={expanded === `faq${index + 1}`}
                onChange={handleChange(`faq${index + 1}`)}
                key={faq.title}
                sx={{
                  borderRadius: '8px !important',
                  borderWidth: '1px',
                  borderStyle: 'solid',
                  borderColor: 'tertiary.400',
                  backgroundColor: 'tertiary.100',
                  boxShadow: '0 0 17.3px 4px rgba(0, 43, 43, 0.06)',
                  '&:before': {
                    display: 'none',
                  },
                  '&.Mui-expanded': {
                    margin: 0,
                    backgroundColor: 'tertiary.50',
                  },
                }}
              >
                <AccordionSummary
                  expandIcon={
                    <FaqArrow
                      color={expanded === `faq${index + 1}` ? 'primary.main' : 'grey.900'}
                    />
                  }
                  aria-controls={`faq-content`}
                  id={`faq${index + 1}-header`}
                  sx={{
                    '& .MuiAccordionSummary-content': {
                      my: 2,
                      '&.Mui-expanded': {
                        my: 2,
                      },
                    },
                  }}
                >
                  <Typography component="h2" variant="subtitle2" fontWeight={500} color="grey.900">
                    {faq.title}
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography color="grey.900" variant="body2" fontWeight={300}>
                    {faq.text}
                  </Typography>
                </AccordionDetails>
              </Accordion>
            ))}
          </Stack>
        </Box>
      </Box>
    </Box>
  );
}
