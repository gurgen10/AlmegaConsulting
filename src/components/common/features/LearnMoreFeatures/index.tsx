'use client';

import { Box, Typography, useTheme } from '@mui/material';
import { CONTAINER_STYLES, SECTION_STYLES_X, SECTION_STYLES_Y } from '@/shared/constants/spacing';
import { useTranslations } from 'next-intl';
import LearnMoreItem from '../../../ui/LearnMoreItem';

export default function LearnMoreFeatures() {
  const t = useTranslations('roofDetection');
  const theme = useTheme();

  const learnMoreFeatures = [
    {
      title: 'roofDetectionLearnMore.obstacleDetection.title',
      description: 'roofDetectionLearnMore.obstacleDetection.description',
      url: '',
      buttonText: 'learnMore',
      image: '/images/aI-powered-solar-sales/obstacle.svg',
    },
    {
      title: 'roofDetectionLearnMore.aIPoweredShadingAnalysis.title',
      description: 'roofDetectionLearnMore.aIPoweredShadingAnalysis.description',
      url: '',
      buttonText: 'learnMore',
      image: '/images/aI-powered-solar-sales/shading.svg',
    },
    {
      title: 'roofDetectionLearnMore.intelligentFinancialForecasting.title',
      description: 'roofDetectionLearnMore.intelligentFinancialForecasting.description',
      url: '',
      buttonText: 'learnMore',
      image: '/images/aI-powered-solar-sales/inteligent.svg',
    },
    {
      title: 'roofDetectionLearnMore.aIOptimizedPanelPlacement.title',
      description: 'roofDetectionLearnMore.aIOptimizedPanelPlacement.description',
      url: '',
      buttonText: 'learnMore',
      image: '/images/aI-powered-solar-sales/placement.svg',
    },
  ];

  const renderGridRow = (items: typeof learnMoreFeatures, rowIndex: number) => (
    <Box
      sx={{
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        [theme.breakpoints.down('md')]: {
          gridTemplateColumns: '1fr',
        },
        position: 'relative',
        marginBottom: '1px',
        marginTop: rowIndex === 0 ? '-1px' : 0,
        '&::before': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          width: '100%',
          height: rowIndex === 0 ? 0 : '1px',
          backgroundImage: 'linear-gradient(90deg, #FAFAFA 0%, #96B0B0 50.15%, #FAFAFA 100%)',
        },
      }}
    >
      {items.map((item, itemIndex) => {
        return (
          <LearnMoreItem
            key={itemIndex}
            item={item}
            index={itemIndex}
            totalItems={learnMoreFeatures.length}
            translation={t}
          />
        );
      })}
    </Box>
  );

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
          {t('roofDetectionLearnMore.title')}
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
          {t('roofDetectionLearnMore.subtitle')}
        </Typography>

        {/* First row */}
        {renderGridRow(learnMoreFeatures.slice(0, 2), 0)}

        {/* Second row */}
        {renderGridRow(learnMoreFeatures.slice(2), 1)}
      </Box>
    </Box>
  );
}
