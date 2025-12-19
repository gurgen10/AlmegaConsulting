import type { Metadata } from 'next';
import TrustedIndustrySection from '@/components/common/TrustedIndustrySection';
import LeadProductInfoSection from '@/components/common/SolarQuotingSystem/LeadProductInfoSection';
import TryMeSection from '@/components/common/SolarQuotingSystem/TryMeSection';
import Statistics from '@/components/common/Statistics';
import WhyLeadCapture from '@/components/common/WhyLeadCapture';
import Testimonials from '@/components/common/Testimonials';
import LeadProductGuideSection from '@/components/common/LeadProductGuideSection';
import LeadsFAQ from '@/components/common/LeadsFAQ';
import LeadsCtaSection from '@/components/common/LeadsCtaSection';

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
      <Statistics dividerColor="primary.200" color="primary.400" />
      <WhyLeadCapture />
      <Testimonials />
      <LeadProductGuideSection />
      <LeadsFAQ />
      <LeadsCtaSection />
    </>
  );
}
