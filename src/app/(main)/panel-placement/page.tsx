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
  title: 'AI-powered Solar Panel Placement for Smart Layout | SolarGenix',
  description:
    'Optimize panel layouts automatically with an AI-powered solar panel placement tool for faster, smarter designs.',
  keywords: [],
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
