'use client';

import { Box, Typography, useTheme } from '@mui/material';
import { CONTAINER_STYLES, SECTION_STYLES_X } from '@/shared/constants/spacing';
import { useTranslations } from 'next-intl';
import StatisticBlock from './StatisticBlok';

export default function Statistics() {
  const t = useTranslations('heroSection');
  const theme = useTheme();
  const statistics = [
    {
      value: '42,000',
      description: 'statisyicLabel1',
    },
    {
      value: '120,000',
      description: 'statisyicLabel2',
    },
    {
      value: '25%',
      description: 'statisyicLabel3',
    },
    {
      value: '3x',
      description: 'statisyicLabel4',
    },
  ];

  return (
    <Box
      component="section"
      sx={{
        ...SECTION_STYLES_X,
        backgroundColor: 'tertiary.800',
        boxShadow: '0 0 38px 0 rgba(0, 0, 0, 0.25)',
      }}
    >
      <Box {...CONTAINER_STYLES}>
        <Box
          sx={{
            display: 'grid',
            alignItems: 'center',
            gridTemplateColumns: '1fr 1fr',
            columnGap: 5,
            justifyContent: 'space-between',
            [theme.breakpoints.down('md')]: {
              gridTemplateColumns: '1fr',
              textAlign: 'center',
              rowGap: 5,
            },
            py: { xs: 6, md: 10 },
          }}
        >
          <Typography
            component="h2"
            variant="h3"
            sx={{
              fontWeight: 500,
              color: 'grey.25',
              minHeight: 165,
              [theme.breakpoints.down('lg')]: {
                minHeight: 'auto',
              },
            }}
          >
            {t('statisticsTitle')}
          </Typography>
          <Box
            sx={{
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              gap: 4,
            }}
          >
            {statistics.map((statistic, index) => (
              <StatisticBlock
                key={index}
                label={t(statistic.description)}
                value={statistic.value}
              />
            ))}
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
