import { SubMenuItem } from '@/components/layouts/Header/header.types';
import {
  FINANCIAL_FORECASTING_URL,
  OBSTRUCTION_DETECTION_URL,
  PANEL_PLACEMENT_URL,
  QUOTING_SYSTEM_URL,
  ROOF_DETECTION,
  SALES_PROPOSAL_URL,
  SHADING_ANALYSIS_URL,
} from '@/shared/constants/common';

export const featureSubmenuItems: SubMenuItem[] = [
  {
    key: 'roofDetection',
    title: 'roofDetection',
    description: 'roofDetectionDescription',
    icon: '/icons/header/roof-detection.svg',
    url: ROOF_DETECTION,
  },
  {
    key: 'obstructionDetection',
    title: 'obstructionDetection',
    description: 'obstructionDetectionDescription',
    icon: '/icons/header/obstruction-detection.svg',
    url: OBSTRUCTION_DETECTION_URL,
  },
  {
    key: 'shadingAnalysis',
    title: 'shadingAnalysis',
    description: 'shadingAnalysisDescription',
    icon: '/icons/header/shading-analysis.svg',
    url: SHADING_ANALYSIS_URL,
  },
  {
    key: 'panelPlacement',
    title: 'panelPlacement',
    description: 'panelPlacementDescription',
    icon: '/icons/header/panel-placement.svg',
    url: PANEL_PLACEMENT_URL,
  },
  {
    key: 'financialForecasting',
    title: 'financialForecasting',
    description: 'financialForecastingDescription',
    icon: '/icons/header/financial-forecasting.svg',
    url: FINANCIAL_FORECASTING_URL,
  },
  // {
  //   key: 'proposalGeneration',
  //   title: 'proposalGeneration',
  //   description: 'proposalGenerationDescription',
  //   icon: '/icons/header/proposal-generation.svg',
  //   url: '/#proposal-generation',
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

interface MenuItem {
  key: string;
  url: string;
  submenuItems?: SubMenuItem[];
}

export const menuItems: MenuItem[] = [
  {
    key: 'resources',
    url: '/#resources',
  },
  {
    key: 'trainings',
    url: '/#trainings',
  },
  {
    key: 'services',
    url: '/#services',
  },
  {
    key: 'customers',
    url: '/#customers',
  },
  {
    key: 'aboutUs',
    url: '/#about-us',
  },
];

export const companyFooterItems = [
  {
    key: 'aboutUs',
    url: '/#about-us',
  },
  {
    key: 'blog',
    url: '/blog',
  },
  {
    key: 'pricing',
    url: '/pricing',
  },
  {
    key: 'contactUs',
    url: '/#contact-us',
  },
];
