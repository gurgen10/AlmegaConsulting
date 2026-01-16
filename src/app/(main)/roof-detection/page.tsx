import type { Metadata } from 'next';
import TrustedIndustrySection from '@/components/common/TrustedIndustrySection';
import Testimonials from '@/components/common/Testimonials';
import Statistics from '@/components/common/roofDetection/Statistics';

import HeroSection from '@/components/common/roofDetection/HeroSection';
import WhyYouNeedAIPoweredRoofDetection from '@/components/common/roofDetection/WhyYouNeedAIPoweredRoofDetection';
import RoofDetectionBottomCallToAction from '@/components/common/roofDetection/BottomCallToAction';
import RoofDetectionFaq from '@/components/common/roofDetection/RoofDetectionFaq';
import WhyAutomaticRoofDetection from '@/components/common/roofDetection/WhyAutomaticRoofDetection';
import LearnMoreFeatures from '@/components/common/roofDetection/LearnMoreFeatures';

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
      <RoofDetectionFaq />
      <RoofDetectionBottomCallToAction />
    </>
  );
}
