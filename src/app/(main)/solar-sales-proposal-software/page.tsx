import type { Metadata } from 'next';
import TrustedIndustrySection from '@/components/common/TrustedIndustrySection';
import Statistics from '@/components/common/Statistics';
import Testimonials from '@/components/common/Testimonials';
import ProposalsHeroSection from '@/components/common/ProposalsSalesSection/ProposalsHeroSection';
import ProposalsProductInfoSection from '@/components/common/ProposalsSalesSection/ProposalsProductInfoSection';
import WhyProposalSoftware from '@/components/common/ProposalsSalesSection/WhyProposalSoftware';
import WhyChooseProposalsSoftware from '@/components/common/ProposalsSalesSection/WhyChooseProposalsSoftware';
import QualifyLeadsBeforeSendingProposal from '@/components/common/ProposalsSalesSection/QualifyLeadsBeforeSendingProposal';
import ProposalsFAQ from '@/components/common/SolarQuotingSystem/LeadsFAQ';
import LeadsCtaSection from '@/components/common/SolarQuotingSystem/LeadsCtaSection';

export const metadata: Metadata = {
  title: 'Proposals | SolarGenix',
  description: '',
  keywords: [],
};

export default async function SolarSalesProposalSoftwarePage() {
  return (
    <>
      <ProposalsHeroSection />
      <TrustedIndustrySection />
      <ProposalsProductInfoSection />
      <Statistics dividerColor="primary.200" color="primary.400" />
      <WhyProposalSoftware />
      <Testimonials />
      <WhyChooseProposalsSoftware />
      <QualifyLeadsBeforeSendingProposal />
      <ProposalsFAQ />
      <LeadsCtaSection />
    </>
  );
}
