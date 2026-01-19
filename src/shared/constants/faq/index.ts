import {
  homeFaqs,
  obstructionDetectionFaqs,
  panelPlacementFaqs,
  shadingAnalysisFaqs,
  financialForecastingFaqs,
  leadFaqs,
  roofDetectionFaqs,
  proposalsFaqs,
} from '@/shared/constants/faq/faq';

export type FaqKey =
  | 'home'
  | 'lead'
  | 'proposals'
  | 'obstructionDetection'
  | 'panelPlacement'
  | 'financialForecasting'
  | 'roofDetection'
  | 'shadingAnalysis';

export interface FaqItem {
  id?: string;
  question: string;
  answer: string;
}

export type Faqs = {
  [key in FaqKey]: FaqItem[];
};

export const faqs: Faqs = {
  home: homeFaqs,
  obstructionDetection: obstructionDetectionFaqs,
  panelPlacement: panelPlacementFaqs,
  financialForecasting: financialForecastingFaqs,
  shadingAnalysis: shadingAnalysisFaqs,
  roofDetection: roofDetectionFaqs,
  lead: leadFaqs,
  proposals: proposalsFaqs,
};
