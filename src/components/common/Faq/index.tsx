'use client';

import { Box, Typography } from '@mui/material';

import { CONTAINER_STYLES, SECTION_STYLES_X, SECTION_STYLES_Y } from '@/shared/constants/spacing';
import { useTranslations } from 'next-intl';
import FaqItem from '@/components/common/Faq/FaqItem';

export default function Faq() {
  const t = useTranslations('heroSection');

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
        <Box>
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
          <Box>
            {faqs.map(faq => (
              <Box key={faq.title}>
                <FaqItem title={faq.title} text={faq.text} />
              </Box>
            ))}
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
