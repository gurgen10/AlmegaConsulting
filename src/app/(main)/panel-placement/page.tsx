import type { Metadata } from 'next';
import TrustedIndustrySection from '@/components/common/TrustedIndustrySection';
import Testimonials from '@/components/common/Testimonials';
import Statistics from '@/components/common/panelPlacement/Statistics';

import HeroSection from '@/components/common/panelPlacement/HeroSection';
import WhatMakesPanelPlacementEssential from '@/components/common/panelPlacement/WhatMakesPanelPlacementEssential';
import WhyPanelPlacement from '@/components/common/panelPlacement/WhyPanelPlacement';
import LearnMoreFeatures from '@/components/common/panelPlacement/LearnMoreFeatures';
import PanelPlacementFaq from '@/components/common/panelPlacement/PanelPlacementFaq';
import BottomCallToAction from '@/components/common/panelPlacement/BottomCallToAction';

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
      <WhatMakesPanelPlacementEssential />
      <Statistics />
      <WhyPanelPlacement />
      <Testimonials />
      <LearnMoreFeatures />
      <PanelPlacementFaq />
      <BottomCallToAction />
    </>
  );
}
