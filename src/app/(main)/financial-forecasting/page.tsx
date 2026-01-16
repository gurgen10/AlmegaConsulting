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
  title: 'Solar Financial Forecasting for Smarter Savings | SolarGenix',
  description:
    'Show homeowners clear, data-backed savings with intelligent solar forecasting that delivers accurate energy production and financial estimates.',
  keywords: [],
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
