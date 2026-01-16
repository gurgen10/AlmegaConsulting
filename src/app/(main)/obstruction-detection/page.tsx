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
  title: 'AI Obstacle Detection for Solar Panel Placement | SolarGenix',
  description:
    'Identify vents, chimneys, and roof obstructions automatically using AI-powered obstacle detection for accurate panel layouts.',
  keywords: [],
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
