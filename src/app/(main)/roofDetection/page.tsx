import type { Metadata } from 'next';
import HeroSection from '@/components/common/features/HeroSection';
import WhyYouNeedAIPoweredRoofDetection from '@/components/common/features/WhyYouNeedAIPoweredRoofDetection';
import TrustedIndustrySection from '@/components/common/TrustedIndustrySection';

import AIPoweredSolarSales from '@/components/common/AIPoweredSolarSales';
import Testimonials from '@/components/common/Testimonials';
import Statistics from '@/components/common/Statistics';
import FeaturesBottomCallToAction from '@/components/common/features/BottomCallToAction';
import FeaturesFaq from '@/components/common/features/FeaturesFaq';
import WhyAutomaticRoofDetection from '@/components/common/features/WhyAutomaticRoofDetection';
import LearnMoreFeatures from '@/components/common/features/LearnMoreFeatures';

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
      <WhyYouNeedAIPoweredRoofDetection />
      <Statistics />
      <WhyAutomaticRoofDetection />
      <Testimonials />
      <LearnMoreFeatures />
      <FeaturesFaq />
      <FeaturesBottomCallToAction />
    </>
  );
}
