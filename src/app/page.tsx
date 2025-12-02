import type { Metadata } from 'next';
import HeroSection from '@/components/common/HeroSection';
import ProductDescriptionSection from '@/components/common/ProductDescriptionSection';
import FeaturesSection from '@/components/common/FeaturesSection';
import TrustedIndustrySection from '@/components/common/TrustedIndustrySection';
import VideoBlockSection from '@/components/common/VideoBlockSection';

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
      <ProductDescriptionSection />
      <FeaturesSection />
    </>
  );
}
