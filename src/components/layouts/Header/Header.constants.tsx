import { SubMenuItem } from '@/components/layouts/Header/header.types';
import { QUOTING_SYSTEM_URL, SALES_PROPOSAL_URL } from '@/shared/constants/common';

export const featureSubmenuItems: SubMenuItem[] = [
  {
    key: 'roofDetection',
    title: 'roofDetection',
    description: 'roofDetectionDescription',
    url: '/#roofDetection',
    icon: '/icons/header/roof-detection.svg',
  },
  {
    key: 'obstructionDetection',
    title: 'obstructionDetection',
    description: 'obstructionDetectionDescription',
    icon: '/icons/header/obstruction-detection.svg',
    url: '/#obstructionDetection',
  },
  {
    key: 'shadingAnalysis',
    title: 'shadingAnalysis',
    description: 'shadingAnalysisDescription',
    icon: '/icons/header/shading-analysis.svg',
    url: '/#shadingAnalysis',
  },
  {
    key: 'panelPlacement',
    title: 'panelPlacement',
    description: 'panelPlacementDescription',
    icon: '/icons/header/panel-placement.svg',
    url: '/#panelPlacement',
  },
  {
    key: 'financialForecasting',
    title: 'financialForecasting',
    description: 'financialForecastingDescription',
    icon: '/icons/header/financial-forecasting.svg',
    url: '/#financialForecasting',
  },
  // {
  //   key: 'proposalGeneration',
  //   title: 'proposalGeneration',
  //   description: 'proposalGenerationDescription',
  //   icon: '/icons/header/proposal-generation.svg',
  //   url: '/#proposalGeneration',
  // },
];

export const productSubmenuItems: SubMenuItem[] = [
  {
    key: 'solarProposal',
    title: 'solarProposal',
    description: 'solarProposalDescription',
    url: SALES_PROPOSAL_URL,
    icon: '/icons/header/solar-proposal.svg',
  },
  {
    key: 'leadCapture',
    title: 'leadCapture',
    description: 'leadCaptureDescription',
    url: QUOTING_SYSTEM_URL,
    icon: '/icons/header/lead-capture.svg',
  },
];

export const menuItems = [
  {
    key: 'product',
    url: '/#product',
    submenuItems: productSubmenuItems,
  },
  {
    key: 'pricing',
    url: '/pricing',
  },
  {
    key: 'features',
    url: '/#features',
    submenuItems: featureSubmenuItems,
  },
  {
    key: 'blog',
    url: '/blog',
  },
  {
    key: 'aboutUs',
    url: '/#about-us',
  },
];
