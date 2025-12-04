'use client';

import { Box, Typography } from '@mui/material';

import { CONTAINER_STYLES, SECTION_STYLES_X, SECTION_STYLES_Y } from '@/shared/constants/spacing';
import { useTranslations } from 'next-intl';

export default function WhatMakesUsUnique() {
  const t = useTranslations('heroSection');

  const uniques = [
    {
      title: 'John Doe',
      text: 'CEO, SolarGenix',
      image: '/images/what-makes-us-unique/star.svg',
    },
  ];

  return (
    <Box
      component="section"
      sx={{
        ...SECTION_STYLES_Y,
        ...SECTION_STYLES_X,
        backgroundColor: 'primary.800',
        boxShadow: '0 0 38px 0 rgba(0, 0, 0, 0.25)',
      }}
    >
      <Box {...CONTAINER_STYLES}>
        <Typography
          component="h2"
          variant="h3"
          sx={{
            fontWeight: 500,
            textAlign: 'center',
            color: 'grey.25',
            mb: 5,
            px: 3,
          }}
        >
          {t('whatOurCustomerAreSayingAboutOurSolarSalesSoftware')}
        </Typography>
        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: {
              xs: '1fr',
              md: '1fr 1fr 1fr',
            },
            borderRadius: '8px',
            overflow: 'hidden',
            gap: 1,
          }}
        >
          {uniques.map(unique => (
            <Box key={unique.title}>
              <Typography variant="h4" sx={{ fontWeight: 500, color: 'grey.25' }}>
                {unique.title}
              </Typography>
              <Typography variant="subtitle2" sx={{ fontWeight: 300, color: 'grey.600' }}>
                {unique.text}
              </Typography>
            </Box>
          ))}
        </Box>
      </Box>
    </Box>
  );
}
