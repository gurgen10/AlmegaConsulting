import type { Metadata } from 'next';
import HeroSection from '@/components/common/HeroSection';
import TrustedIndustrySection from '@/components/common/TrustedIndustrySection';
import VideoBlockSection from '@/components/common/VideoBlockSection';
import AutomateYourSolarSection from '@/components/common/AutomateYourSolarSection';
import AIPoweredSolarSales from '@/components/common/AIPoweredSolarSales';
import Testimonials from '@/components/common/Testimonials';
import WhatMakesUsUnique from '@/components/common/WhatMakesUsUnique';
import Statistics from '@/components/common/Statistics';
import SeeWhatYourProposalWillLookLike from '@/components/common/SeeWhatYourProposalWillLookLike';
import WhySolarTeamsLoveOurSalesSoftware from '@/components/common/WhySolarTeamsLoveOurSalesSoftware';
import Faq from '@/components/common/Faq';
import BottomCallToAction from '@/components/common/BottomCallToAction';
import Forbs from '@/components/common/Forbs';

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
      <VideoBlockSection />
      <AutomateYourSolarSection />
      <AIPoweredSolarSales />
      <Forbs />
      <Testimonials />
      <WhatMakesUsUnique />
      <Statistics />
      <SeeWhatYourProposalWillLookLike />
      <WhySolarTeamsLoveOurSalesSoftware />
      <Faq />
      <BottomCallToAction />
    </>
  );
}
