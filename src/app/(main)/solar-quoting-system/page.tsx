import type { Metadata } from 'next';
import TryMeSection from '@/components/common/TryMeSection';
import TrustedIndustrySection from '@/components/common/TrustedIndustrySection';

export const metadata: Metadata = {
  title: 'Leads | SolarGenix',
  description: '',
  keywords: [],
};

export default async function Leads() {
  return (
    <>
      <TryMeSection />
      <TrustedIndustrySection />
    </>
  );
}
