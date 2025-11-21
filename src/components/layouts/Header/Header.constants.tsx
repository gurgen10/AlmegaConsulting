import { SubMenuItem } from '@/components/layouts/Header/header.types';

const featureSubmenuItems: SubMenuItem[] = [
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
  {
    key: 'proposalGeneration',
    title: 'proposalGeneration',
    description: 'proposalGenerationDescription',
    icon: '/icons/header/proposal-generation.svg',
    url: '/#proposalGeneration',
  },
];

const productSubmenuItems: SubMenuItem[] = [
  {
    key: 'solarProposal',
    title: 'solarProposal',
    description: 'solarProposalDescription',
    url: '/#solarProposal',
    icon: '/icons/header/solar-proposal.svg',
  },
  {
    key: 'leadCapture',
    title: 'leadCapture',
    description: 'leadCaptureDescription',
    url: '/#leadCapture',
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
    url: '/#pricing',
  },
  {
    key: 'features',
    url: '/#features',
    submenuItems: featureSubmenuItems,
  },
  {
    key: 'blog',
    url: '/#blog',
  },
  {
    key: 'aboutUs',
    url: '/#about-us',
  },
  {
    key: 'aboutUs',
    url: '/#about-us',
  },
];
