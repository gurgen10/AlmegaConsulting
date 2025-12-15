import type { Metadata } from 'next';
import TryMeSection from '@/components/common/TryMeSection';
import TrustedIndustrySection from '@/components/common/TrustedIndustrySection';
import LeadProductInfoSection from '@/components/common/LeadProductInfoSection';

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
      <LeadProductInfoSection />
    </>
  );
}
