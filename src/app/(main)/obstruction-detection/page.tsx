import type { Metadata } from 'next';
import TrustedIndustrySection from '@/components/common/TrustedIndustrySection';
import Testimonials from '@/components/common/Testimonials';
import Statistics from '@/components/common/obstructionDetection/Statistics';

import HeroSection from '@/components/common/obstructionDetection/HeroSection';
import WhatMakesAIPoweredObstacleDetectionEssential from '@/components/common/obstructionDetection/WhatMakesAIPoweredObstacleDetectionEssential';
import WhyFinancialForecasting from '@/components/common/obstructionDetection/WhyObstructionDetection';
import LearnMoreFeatures from '@/components/common/obstructionDetection/LearnMoreFeatures';
import ObstructionDetectionFaq from '@/components/common/obstructionDetection/ObstructionDetectionFaq';
import BottomCallToAction from '@/components/common/obstructionDetection/BottomCallToAction';

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
      <WhatMakesAIPoweredObstacleDetectionEssential />
      <Statistics />
      <WhyFinancialForecasting />
      <Testimonials />
      <LearnMoreFeatures />
      <ObstructionDetectionFaq />
      <BottomCallToAction />
    </>
  );
}
