import type { Metadata } from 'next';
import TrustedIndustrySection from '@/components/common/TrustedIndustrySection';
import Testimonials from '@/components/common/Testimonials';
import Statistics from '@/components/common/shadingAnalysis/Statistics';

import HeroSection from '@/components/common/shadingAnalysis/HeroSection';
import WhatMakesShadingAnalysisEssential from '@/components/common/shadingAnalysis/WhatMakesShadingAnalysisEssential';
import WhyPanelPlacement from '@/components/common/shadingAnalysis/WhyPanelPlacement';
import LearnMoreFeatures from '@/components/common/shadingAnalysis/LearnMoreFeatures';
import ShadingAnalysisFaq from '@/components/common/shadingAnalysis/ShadingAnalysisFaq';
import BottomCallToAction from '@/components/common/shadingAnalysis/BottomCallToAction';

export const metadata: Metadata = {
  title: 'AI Solar Shading Analysis for Better Performance | SolarGenix',
  description:
    'Analyze roof shading accurately with AI-powered solar shading analysis system. Create proposals faster with maximize system performance and energy output.',
  keywords: [],
};
export default async function Home() {
  return (
    <>
      <HeroSection />
      <TrustedIndustrySection />
      <WhatMakesShadingAnalysisEssential />
      <Statistics />
      <WhyPanelPlacement />
      <Testimonials />
      <LearnMoreFeatures />
      <ShadingAnalysisFaq />
      <BottomCallToAction />
    </>
  );
}
