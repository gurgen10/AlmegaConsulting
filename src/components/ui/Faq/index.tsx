'use client';

import { AccordionDetails, AccordionSummary, Box, Stack, Typography } from '@mui/material';

import { CONTAINER_STYLES, SPACING_DEFAULT_X, SPACING_DEFAULT_Y } from '@/shared/constants/spacing';
import { SyntheticEvent, useState } from 'react';
import { FaqAccordion } from '@/components/ui/Faq/Faq.styles';
import { FaqProps } from '@/components/ui/Faq/Faq.types';
import ArrowOutlined from '@/components/ui/icons/ArrowOutlined';

export default function Faq({ title, description, faqs }: FaqProps) {
  const [expanded, setExpanded] = useState<string | false>('q-1');

  const handleChange = (panel: string) => (event: SyntheticEvent, newExpanded: boolean) => {
    setExpanded(newExpanded ? panel : false);
  };

  return (
    <Box
      component="section"
      py={SPACING_DEFAULT_Y}
      px={SPACING_DEFAULT_X}
      boxShadow="0 0 38px 0 rgba(0, 0, 0, 0.25)"
      sx={{ backgroundColor: 'tertiary.50' }}
      color="grey.900"
      position="relative"
    >
      <Box
        {...CONTAINER_STYLES}
        display="grid"
        rowGap={3}
        columnGap={5}
        gridTemplateColumns={{ md: '1fr 1fr' }}
      >
        <Box>
          <Typography component="h2" variant="h3" color="primary.main" fontWeight={500} mb={2}>
            {title}
          </Typography>
          <Typography variant="subtitle2" component="div" fontWeight={300}>
            {description}
          </Typography>
        </Box>
        <Stack rowGap={1}>
          {faqs.map((faq, index) => (
            <FaqAccordion
              expanded={expanded === `q-${index + 1}`}
              onChange={handleChange(`q-${index + 1}`)}
              key={faq.id || `q-${index + 1}`}
            >
              <AccordionSummary
                expandIcon={<ArrowOutlined />}
                aria-controls={`q-content`}
                id={`q-${index + 1}-header`}
              >
                <Typography component="h3" variant="subtitle2" fontWeight={500}>
                  {faq.question}
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography variant="body2" fontWeight={300}>
                  {faq.answer}
                </Typography>
              </AccordionDetails>
            </FaqAccordion>
          ))}
        </Stack>
      </Box>
    </Box>
  );
}
