import { SubMenuItem } from '@/components/layouts/Header/header.types';

const featureSubmenuItems: SubMenuItem[] = [
  {
    key: 'roofDetection',
    title: 'Roof Detection',
    description:
      'Analyze aerial imagery and instantly model the roof’s shape and slope with AI-powered roof detection',
    url: '/#roofDetection',
    icon: '/icons/header/roof-detection.svg',
  },
  {
    key: 'obstructionDetection',
    title: 'Obstruction Detection',
    description:
      'Fully automated obstacle and fire setback detection for safe, accurate panel placement',
    icon: '/icons/header/obstruction-detection.svg',
    url: '/#obstructionDetection',
  },
  {
    key: 'shadingAnalysis',
    title: 'Shading Analysis',
    description:
      'Dynamic shading maps for panel zones, automatically generated from real-world sun movement',
    icon: '/icons/header/shading-analysis.svg',
    url: '/#shadingAnalysis',
  },
  {
    key: 'panelPlacement',
    title: 'Panel Placement',
    description: 'Get fully automated panel positioning with no manual input',
    icon: '/icons/header/panel-placement.svg',
    url: '/#panelPlacement',
  },
  {
    key: 'financialForecasting',
    title: 'Financial Forecasting ',
    description: 'Calculate ROI and payback period based on homeowner usage',
    icon: '/icons/header/financial-forecasting.svg',
    url: '/#financialForecasting',
  },
  {
    key: 'proposalGeneration',
    title: 'Proposal Generation',
    description: 'Calculate ROI and payback period based on homeowner usage',
    icon: '/icons/header/proposal-generation.svg',
    url: '/#proposalGeneration',
  },
];

const productSubmenuItems: SubMenuItem[] = [
  {
    key: 'solarProposal',
    title: 'Solar Proposal',
    description: 'Create sales-ready solar proposals instantly to close more deals',
    url: '/#product',
    icon: '/icons/header/solar-proposal.svg',
  },
  {
    key: 'leadCapture',
    title: 'Lead Capture',
    description: 'Capture and qualify solar leads with instant quote delivery',
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
    url: '#/blog',
  },
  {
    key: 'aboutUs',
    url: '#/about-us',
  },
];
