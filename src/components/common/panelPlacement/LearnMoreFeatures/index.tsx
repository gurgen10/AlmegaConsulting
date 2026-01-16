'use client';

import { Box, Typography } from '@mui/material';
import { CONTAINER_STYLES, SECTION_STYLES_X, SECTION_STYLES_Y } from '@/shared/constants/spacing';
import { useTranslations } from 'next-intl';
import { LearnMoreGridRow } from '@/components/ui/LearnMoreItem/LearnMoreGridRow';
import {
  FINANCIAL_FORECASTING_URL,
  OBSTRUCTION_DETECTION_URL,
  ROOF_DETECTION,
  SHADING_ANALYSIS_URL,
} from '@/shared/constants/common';

export default function LearnMoreFeatures() {
  const t = useTranslations('panelPlacement');

  const learnMoreFeatures = [
    {
      title: 'panelPlacementLearnMore.roofDetectionTitle',
      description: 'panelPlacementLearnMore.roofDetectionDescription',
      url: ROOF_DETECTION,
      buttonText: 'learnMore',
      image: '/images/aI-powered-solar-sales/obstacle.svg',
    },
    {
      title: 'panelPlacementLearnMore.obstacleDetectionTitle',
      description: 'panelPlacementLearnMore.obstacleDetectionDescription',
      url: OBSTRUCTION_DETECTION_URL,
      buttonText: 'learnMore',
      image: '/images/aI-powered-solar-sales/shading.svg',
    },
    {
      title: 'panelPlacementLearnMore.shadingAnalysisTitle',
      description: 'panelPlacementLearnMore.shadingAnalysisDescription',
      url: SHADING_ANALYSIS_URL,
      buttonText: 'learnMore',
      image: '/images/aI-powered-solar-sales/inteligent.svg',
    },
    {
      title: 'panelPlacementLearnMore.financialForecastingTitle',
      description: 'panelPlacementLearnMore.financialForecastingDescription',
      url: FINANCIAL_FORECASTING_URL,
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
          {t('panelPlacementLearnMore.title')}
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
          {t('panelPlacementLearnMore.subtitle')}
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
