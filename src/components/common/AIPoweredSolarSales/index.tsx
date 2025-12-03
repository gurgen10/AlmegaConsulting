'use client';

import { Box, Button, Typography } from '@mui/material';

import { CONTAINER_STYLES, SECTION_STYLES_X, SECTION_STYLES_Y } from '@/shared/constants/spacing';
import { useTranslations } from 'next-intl';
import Image from 'next/image';
import DescriptionBlock from '@/components/common/AIPoweredSolarSales/DescriptionBlock';

export default function AIPoweredSolarSales() {
  const t = useTranslations('heroSection');
  const aIDrivenRoofDetection = {
    title: 'aIDrivenRoofDetection',
    points: [
      'aIDrivenRoofDetectionDescription1',
      'aIDrivenRoofDetectionDescription2',
      'aIDrivenRoofDetectionDescription3',
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
  const stylishSalesReadyProposalGeneration = {
    title: 'stylishSalesReadyProposalGeneration',
    points: [
      'stylishSalesReadyProposalGenerationDescription1',
      'stylishSalesReadyProposalGenerationDescription2',
      'stylishSalesReadyProposalGenerationDescription3',
    ],
    url: '#',
  };
  const instantSolarQuotingSystem = {
    title: 'instantSolarQuotingSystem',
    points: [
      'instantSolarQuotingSystemDescription1',
      'instantSolarQuotingSystemDescription2',
      'instantSolarQuotingSystemDescription3',
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
            gridTemplateColumns: '1fr 1fr',
          }}
        >
          <Box sx={{ padding: 6 }}>
            <DescriptionBlock
              title={aIDrivenRoofDetection.title}
              points={aIDrivenRoofDetection.points}
              url=""
            />
          </Box>
          <Box sx={{ padding: 6 }}>
            <Image
              src="/images/aI-powered-solar-sales/roofDetection.svg"
              alt="roofDetection"
              width={386}
              height={342}
            />
          </Box>
        </Box>
        {/* Second */}
        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
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
              padding: 6,
              position: 'relative',
              '&::before': {
                content: '""',
                position: 'absolute',
                top: 0,
                right: 0,
                width: '1px',
                height: '100%',
                backgroundColor: 'tertiary.main',
              },
            }}
          >
            <DescriptionBlock
              title={aIPoweredShadingAnalysis.title}
              points={aIPoweredShadingAnalysis.points}
              url=""
            />
            <Box>
              <Image
                src="/images/aI-powered-solar-sales/shading.svg"
                alt="roofDetection"
                width={386}
                height={342}
              />
            </Box>
          </Box>
          <Box
            sx={{
              padding: 6,
            }}
          >
            <DescriptionBlock
              title={intelligentFinancialForecasting.title}
              points={intelligentFinancialForecasting.points}
              url=""
            />
            <Box>
              <Image
                src="/images/aI-powered-solar-sales/inteligent.svg"
                alt="roofDetection"
                width={386}
                height={342}
              />
            </Box>
          </Box>
        </Box>
        {/* Third */}
        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
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
              padding: 6,
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
              padding: 6,
            }}
          >
            <Image
              src="/images/aI-powered-solar-sales/placement.svg"
              alt="placement"
              width={386}
              height={342}
            />
          </Box>
        </Box>
        {/* Fourth */}
        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
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
            '&::after': {
              content: '""',
              position: 'absolute',
              bottom: 0,
              right: 0,
              left: 0,
              width: '100%',
              height: '80px',
              backgroundImage:
                'linear-gradient(180deg, rgba(250, 250, 250, 0.00) 0%, rgba(250, 250, 250, 0.64) 38.94%, #FAFAFA 87.98%)',
            },
          }}
        >
          <Box
            sx={{
              padding: 6,
              position: 'relative',
              '&::before': {
                content: '""',
                position: 'absolute',
                top: 0,
                right: 0,
                width: '1px',
                height: '100%',
                backgroundImage: 'linear-gradient(90deg, #96B0B0 0%, #FAFAFA 74.5%)',
              },
            }}
          >
            <DescriptionBlock
              title={stylishSalesReadyProposalGeneration.title}
              points={stylishSalesReadyProposalGeneration.points}
              url=""
            />
            <Box>
              <Image
                src="/images/aI-powered-solar-sales/proposal.svg"
                alt="roofDetection"
                width={386}
                height={342}
              />
            </Box>
          </Box>
          <Box
            sx={{
              padding: 6,
            }}
          >
            <DescriptionBlock
              title={instantSolarQuotingSystem.title}
              points={instantSolarQuotingSystem.points}
              url=""
            />
            <Box>
              <Image
                src="/images/aI-powered-solar-sales/quote.jpg"
                alt="roofDetection"
                width={386}
                height={342}
              />
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
