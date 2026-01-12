import type { Metadata } from 'next';
import TrustedIndustrySection from '@/components/common/TrustedIndustrySection';
import Testimonials from '@/components/common/Testimonials';
import Statistics from '@/components/common/Statistics';

import HeroSection from '@/components/common/shadingAnalysis/HeroSection';
import WhatMakesShadingAnalysisEssential from '@/components/common/shadingAnalysis/WhatMakesShadingAnalysisEssential';
import WhyPanelPlacement from '@/components/common/shadingAnalysis/WhyPanelPlacement';
import LearnMoreFeatures from '@/components/common/shadingAnalysis/LearnMoreFeatures';
import ShadingAnalysisFaq from '@/components/common/shadingAnalysis/ShadingAnalysisFaq';
import BottomCallToAction from '@/components/common/shadingAnalysis/BottomCallToAction';

export const metadata: Metadata = {
  title: 'Fastest AI Solar Sales Proposal Software | SolarGenix',
  description:
    'Boost your solar sales with Solargenix.ai – the fastest and easiest AI-powered solar proposal creation tool. Automate and simplify your solar business with precision and speed.',
  keywords: [
    'solar sales proposal',
    'AI solar proposal',
    'fastest solar proposal tool',
    'easy solar sales',
    'Solargenix.ai',
    'solar business automation',
    'solar software',
    'solar quoting tool',
  ],
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
