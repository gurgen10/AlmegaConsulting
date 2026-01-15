import type { Metadata } from 'next';
import TrustedIndustrySection from '@/components/common/TrustedIndustrySection';
import Testimonials from '@/components/common/Testimonials';
import Statistics from '@/components/common/financialForecasting/Statistics';

import HeroSection from '@/components/common/financialForecasting/HeroSection';
import WhatMakesIntelligentFinancialForecastingEssential from '@/components/common/financialForecasting/WhatMakesIntelligentFinancialForecastingEssential';
import WhyFinancialForecasting from '@/components/common/financialForecasting/WhyFinancialForecasting';
import LearnMoreFeatures from '@/components/common/financialForecasting/LearnMoreFeatures';
import FinancialForeCastFaq from '@/components/common/financialForecasting/FinancialForeCastFaq';
import BottomCallToAction from '@/components/common/financialForecasting/BottomCallToAction';

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
      <WhatMakesIntelligentFinancialForecastingEssential />
      <Statistics />
      <WhyFinancialForecasting />
      <Testimonials />
      <LearnMoreFeatures />
      <FinancialForeCastFaq />
      <BottomCallToAction />
    </>
  );
}
