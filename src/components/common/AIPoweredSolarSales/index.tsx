'use client';

import { Box, Typography, useTheme } from '@mui/material';

import { CONTAINER_STYLES, SECTION_STYLES_X, SECTION_STYLES_Y } from '@/shared/constants/spacing';
import { useTranslations } from 'next-intl';
import Image from 'next/image';
import DescriptionBlock from '@/components/ui/LearnMoreItem/DescriptionBlock';
import VerticalGradient from '@/components/common/AIPoweredSolarSales/VerticalGradient';
import LearnMoreItem from '@/components/ui/LearnMoreItem';

export default function AIPoweredSolarSales() {
  const t = useTranslations('homePage');
  const theme = useTheme();

  const aIDrivenRoofDetection = {
    title: t('aIDrivenRoofDetection'),
    points: [
      t('aIDrivenRoofDetectionDescription1'),
      t('aIDrivenRoofDetectionDescription2'),
      t('aIDrivenRoofDetectionDescription3'),
    ],
    url: '#',
  };

  const learnMoreFeatures = [
    {
      title: 'obstacleDetection',
      points: [
        t('obstacleDetectionDescription1'),
        t('obstacleDetectionDescription2'),
        t('obstacleDetectionDescription3'),
      ],
      url: '#',
      buttonText: 'learnMore',
      image: '/images/aI-powered-solar-sales/obstacle.svg',
    },
    {
      title: 'aIPoweredShadingAnalysis',
      points: [
        t('aIPoweredShadingAnalysisDescription1'),
        t('aIPoweredShadingAnalysisDescription2'),
        t('aIPoweredShadingAnalysisDescription3'),
      ],
      buttonText: 'learnMore',
      image: '/images/aI-powered-solar-sales/shading.svg',
    },
    {
      title: 'intelligentFinancialForecasting',
      points: [
        t('intelligentFinancialForecastingDescription1'),
        t('intelligentFinancialForecastingDescription2'),
        t('intelligentFinancialForecastingDescription3'),
      ],
      url: '#',
      buttonText: 'learnMore',
      image: '/images/aI-powered-solar-sales/inteligent.svg',
    },
    {
      title: 'aIOptimizedPanelPlacement',
      points: [
        t('aIOptimizedPanelPlacementDescription1'),
        t('aIOptimizedPanelPlacementDescription2'),
        t('aIOptimizedPanelPlacementDescription3'),
      ],
      url: '#',
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
          height: '1px',
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
            fontWeight: 500,
            textAlign: 'center',
            color: 'primary.900',
            mb: 5,
            px: 3,
          }}
        >
          {t('aiPoweredSolarSalesSoftware')}
        </Typography>
        {/* First */}
        <Box
          sx={{
            display: 'grid',
            position: 'relative',
            gridTemplateColumns: '1fr 1fr',
            padding: 6,
            [theme.breakpoints.down('lg')]: {
              padding: 4,
            },
            [theme.breakpoints.down('md')]: {
              gridTemplateColumns: '1fr',
              padding: 0,
            },
            marginBottom: '1px',
          }}
        >
          <VerticalGradient />
          <Box
            sx={{
              mt: 0,
              [theme.breakpoints.down('md')]: {
                mt: 3,
              },
              overflow: 'hidden',
              position: 'relative',
            }}
          >
            <DescriptionBlock
              title={aIDrivenRoofDetection.title}
              points={aIDrivenRoofDetection.points}
              url=""
              buttonText={t('learnMore')}
            />
          </Box>
          <Box
            sx={{
              mb: 0,
              [theme.breakpoints.down('md')]: {
                mb: 3,
              },
              overflow: 'hidden',
              position: 'relative',
            }}
          >
            <Image
              src="/images/aI-powered-solar-sales/roofDetection.svg"
              alt="roofDetection"
              width={386}
              height={342}
              style={{ width: '100%', height: '100%' }}
            />
          </Box>
        </Box>
        {/* First row */}
        {renderGridRow(learnMoreFeatures.slice(0, 2), 0)}

        {/* Second row */}
        {renderGridRow(learnMoreFeatures.slice(2), 1)}
      </Box>
    </Box>
  );
}
