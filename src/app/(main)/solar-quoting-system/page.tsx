import type { Metadata } from 'next';
import TrustedIndustrySection from '@/components/common/TrustedIndustrySection';
import LeadProductInfoSection from '@/components/common/SolarQuotingSystem/LeadProductInfoSection';
import TryMeSection from '@/components/common/SolarQuotingSystem/TryMeSection';
import Statistics from '@/components/common/SolarQuotingSystem/Statistics';
import Testimonials from '@/components/common/Testimonials';
import WhyLeadCapture from '@/components/common/SolarQuotingSystem/WhyLeadCapture';
import LeadProductGuideSection from '@/components/common/SolarQuotingSystem/LeadProductGuideSection';
import LeadsFAQ from '@/components/common/SolarQuotingSystem/LeadsFAQ';
import LeadsCtaSection from '@/components/common/SolarQuotingSystem/LeadsCtaSection';

export const metadata: Metadata = {
  title: 'Leads | SolarGenix',
  description: '',
  keywords: [],
};

export default async function SolarQuotingSystemPage() {
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
