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
  title: 'Solar Roof Detection for Accurate System Design | SolarGenix',
  description:
    'Send proposals faster with our AI roof detection that identifies usable roof areas, angles, and dimensions in seconds. No manual measurements required.',
  keywords: [],
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
