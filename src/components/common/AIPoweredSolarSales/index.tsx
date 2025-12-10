'use client';

import { Box, Typography } from '@mui/material';

import { CONTAINER_STYLES, SECTION_STYLES_X, SECTION_STYLES_Y } from '@/shared/constants/spacing';
import { useTranslations } from 'next-intl';
import Image from 'next/image';
import DescriptionBlock from '@/components/common/AIPoweredSolarSales/DescriptionBlock';
import VerticalGradient from '@/components/common/AIPoweredSolarSales/VerticalGradient';

export default function AIPoweredSolarSales() {
  const t = useTranslations('homePage');
  const aIDrivenRoofDetection = {
    title: 'aIDrivenRoofDetection',
    points: [
      'aIDrivenRoofDetectionDescription1',
      'aIDrivenRoofDetectionDescription2',
      'aIDrivenRoofDetectionDescription3',
    ],
    url: '#',
  };
  const obstacleDetection = {
    title: 'obstacleDetection',
    points: [
      'obstacleDetectionDescription1',
      'obstacleDetectionDescription2',
      'obstacleDetectionDescription3',
    ],
    url: '#',
  };
  const aIPoweredShadingAnalysis = {
    title: 'aIPoweredShadingAnalysis',
    points: [
      'aIPoweredShadingAnalysisDescription1',
      'aIPoweredShadingAnalysisDescription2',
      'aIPoweredShadingAnalysisDescription3',
    ],
    url: '#',
  };
  const intelligentFinancialForecasting = {
    title: 'intelligentFinancialForecasting',
    points: [
      'intelligentFinancialForecastingDescription1',
      'intelligentFinancialForecastingDescription2',
      'intelligentFinancialForecastingDescription3',
    ],
    url: '#',
  };
  const aIOptimizedPanelPlacement = {
    title: 'aIOptimizedPanelPlacement',
    points: [
      'aIOptimizedPanelPlacementDescription1',
      'aIOptimizedPanelPlacementDescription2',
      'aIOptimizedPanelPlacementDescription3',
    ],
    url: '#',
  };

  return (
    <Box
      component="section"
      sx={{
        ...SECTION_STYLES_Y,
        ...SECTION_STYLES_X,
        backgroundColor: 'grey.50',
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
            gridTemplateColumns: {
              xs: '1fr',
              md: '1fr 1fr',
            },
            marginBottom: '1px',
          }}
        >
          <VerticalGradient />
          <Box
            sx={{
              padding: { xs: 0, md: 4, xl: 6 },
              mt: { xs: 3, md: 0 },
              overflow: 'hidden',
              position: 'relative',
            }}
          >
            <DescriptionBlock
              title={aIDrivenRoofDetection.title}
              points={aIDrivenRoofDetection.points}
              url=""
            />
          </Box>
          <Box
            sx={{
              padding: { xs: 0, md: 4, xl: 6 },
              mb: { xs: 3, md: 0 },
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
        {/* Second */}
        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: {
              xs: '1fr',
              md: '1fr 1fr',
            },
            position: 'relative',
            marginBottom: '1px',
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
          <VerticalGradient />
          <Box
            sx={{
              padding: { xs: 0, md: 4, xl: 6 },
              mt: { xs: 3, md: 0 },
              position: 'relative',
            }}
          >
            <Box
              sx={{
                position: 'absolute',
                bottom: 0,
                right: 0,
                left: 0,
                width: '100%',
                height: '80px',
                backgroundImage:
                  'linear-gradient(180deg, rgba(250, 250, 250, 0.00) 0%, rgba(250, 250, 250, 0.64) 38.94%, #FAFAFA 87.98%)',
              }}
            ></Box>
            <DescriptionBlock
              title={obstacleDetection.title}
              points={obstacleDetection.points}
              url=""
            />
            <Box
              sx={{
                padding: { xs: 0, md: 4, xl: 6 },
                mb: { xs: 3, md: 0 },
                overflow: 'hidden',
                position: 'relative',
              }}
            >
              <Image
                src="/images/aI-powered-solar-sales/obstacle.svg"
                alt="obstacle"
                width={386}
                height={342}
                style={{ width: '100%', height: '100%' }}
              />
            </Box>
          </Box>
          <Box
            sx={{
              padding: { xs: 0, md: 4, xl: 6 },
              mt: { xs: 3, md: 0 },
              position: 'relative',
              '&::before': {
                content: '""',
                position: 'absolute',
                top: 0,
                right: 0,
                width: {
                  xs: '0',
                  md: '1px',
                },
                height: '100%',
                backgroundColor: 'tertiary.main',
              },
              '&::after': {
                content: '""',
                position: 'absolute',
                bottom: 0,
                left: 0,
                width: '100%',
                height: {
                  xs: '1px',
                  md: '0',
                },
                backgroundImage: 'linear-gradient(90deg, #FAFAFA 0%, #96B0B0 50.15%, #FAFAFA 100%)',
              },
            }}
          >
            <Box
              sx={{
                position: 'absolute',
                bottom: 0,
                right: 0,
                left: 0,
                width: '100%',
                height: {
                  xs: '80px',
                  xl: '0',
                },
                backgroundImage:
                  'linear-gradient(180deg, rgba(250, 250, 250, 0.00) 0%, rgba(250, 250, 250, 0.64) 38.94%, #FAFAFA 87.98%)',
              }}
            ></Box>
            <DescriptionBlock
              title={aIPoweredShadingAnalysis.title}
              points={aIPoweredShadingAnalysis.points}
              url=""
            />
            <Box
              sx={{
                padding: { xs: 0, md: 4, xl: 6 },
                mb: { xs: 3, md: 0 },
                overflow: 'hidden',
                position: 'relative',
              }}
            >
              <Image
                src="/images/aI-powered-solar-sales/shading.svg"
                alt="roofDetection"
                width={386}
                height={342}
                style={{ width: '100%', height: '100%' }}
              />
            </Box>
          </Box>
        </Box>
        {/* Third */}
        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: {
              xs: '1fr',
              md: '1fr 1fr',
            },
            position: 'relative',
            marginBottom: '1px',
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
          <VerticalGradient />
          <Box
            sx={{
              padding: { xs: 0, md: 4, xl: 6 },
              mt: { xs: 3, md: 0 },
              position: 'relative',
            }}
          >
            <Box
              sx={{
                position: 'absolute',
                bottom: 0,
                right: 0,
                left: 0,
                width: '100%',
                height: '80px',
                backgroundImage:
                  'linear-gradient(180deg, rgba(250, 250, 250, 0.00) 0%, rgba(250, 250, 250, 0.64) 38.94%, #FAFAFA 87.98%)',
              }}
            ></Box>
            <DescriptionBlock
              title={intelligentFinancialForecasting.title}
              points={intelligentFinancialForecasting.points}
              url=""
            />
            <Box
              sx={{
                padding: { xs: 0, md: 4, xl: 6 },
                mb: { xs: 3, md: 0 },
                overflow: 'hidden',
                position: 'relative',
              }}
            >
              <Image
                src="/images/aI-powered-solar-sales/inteligent.svg"
                alt="roofDetection"
                width={386}
                height={342}
                style={{ width: '100%', height: '100%' }}
              />
            </Box>
          </Box>
          <Box
            sx={{
              display: 'grid',
              gridTemplateColumns: '1fr',
              position: 'relative',
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
            <Box
              sx={{
                padding: { xs: 0, md: 4, xl: 6 },
                mt: { xs: 3, md: 0 },
              }}
            >
              <DescriptionBlock
                title={aIOptimizedPanelPlacement.title}
                points={aIOptimizedPanelPlacement.points}
                url=""
              />
            </Box>
            <Box
              sx={{
                padding: { xs: 0, md: 4, xl: 6 },
                mb: { xs: 3, md: 0 },
                overflow: 'hidden',
                position: 'relative',
              }}
            >
              <Image
                src="/images/aI-powered-solar-sales/placement.svg"
                alt="placement"
                width={386}
                height={342}
                style={{ width: '100%', height: '100%' }}
              />
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
