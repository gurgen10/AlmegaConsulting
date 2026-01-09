'use client';

import { Box, Typography } from '@mui/material';
import { CONTAINER_STYLES, SECTION_STYLES_X, SECTION_STYLES_Y } from '@/shared/constants/spacing';
import { useTranslations } from 'next-intl';
import { LearnMoreGridRow } from '@/components/ui/LearnMoreItem/LearnMoreGridRow';

export default function LearnMoreFeatures() {
  const t = useTranslations('shadingAnalysis');

  const learnMoreFeatures = [
    {
      title: 'shadingAnalysisLearnMore.roofDetectionTitle',
      description: 'shadingAnalysisLearnMore.roofDetectionDescription',
      url: '',
      buttonText: 'learnMore',
      image: '/images/aI-powered-solar-sales/obstacle.svg',
    },
    {
      title: 'shadingAnalysisLearnMore.obstacleDetectionTitle',
      description: 'shadingAnalysisLearnMore.obstacleDetectionDescription',
      url: '',
      buttonText: 'learnMore',
      image: '/images/aI-powered-solar-sales/shading.svg',
    },
    {
      title: 'shadingAnalysisLearnMore.panelPlacementTitle',
      description: 'shadingAnalysisLearnMore.panelPlacementDescription',
      url: '',
      buttonText: 'learnMore',
      image: '/images/aI-powered-solar-sales/inteligent.svg',
    },
    {
      title: 'shadingAnalysisLearnMore.financialForecastingTitle',
      description: 'shadingAnalysisLearnMore.financialForecastingDescription',
      url: '',
      buttonText: 'learnMore',
      image: '/images/aI-powered-solar-sales/placement.svg',
    },
  ];

  return (
    <Box
      component="section"
      sx={{
        ...SECTION_STYLES_Y,
        ...SECTION_STYLES_X,
        backgroundColor: 'grey.50',
        boxShadow: 'inset 0 0 38px 0 rgba(0, 0, 0, 0.25)',
      }}
    >
      <Box {...CONTAINER_STYLES}>
        <Typography
          component="h2"
          variant="h3"
          sx={{
            maxWidth: 800,
            fontWeight: 500,
            textAlign: 'center',
            color: 'primary.dark',
            mx: 'auto',
            mb: 1,
          }}
        >
          {t('shadingAnalysisLearnMore.title')}
        </Typography>
        <Typography
          component="p"
          variant="subtitle2"
          sx={theme => ({
            fontWeight: 300,
            maxWidth: 800,
            textAlign: 'center',
            color: 'grey.900',
            mb: '64px',
            [theme.breakpoints.down('xl')]: {
              mb: 5,
            },
            [theme.breakpoints.down('md')]: {
              mb: 2,
            },
            mx: 'auto',
            px: '18px',
          })}
        >
          {t('shadingAnalysisLearnMore.subtitle')}
        </Typography>

        {/* First row */}
        <LearnMoreGridRow
          items={learnMoreFeatures.slice(0, 2)}
          rowIndex={0}
          totalItems={learnMoreFeatures.length}
          translation={t}
        />

        {/* Second row */}
        <LearnMoreGridRow
          items={learnMoreFeatures.slice(2)}
          rowIndex={1}
          totalItems={learnMoreFeatures.length}
          translation={t}
        />
      </Box>
    </Box>
  );
}
