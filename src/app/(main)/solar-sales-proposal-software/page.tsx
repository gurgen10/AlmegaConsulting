import type { Metadata } from 'next';
import TrustedIndustrySection from '@/components/common/TrustedIndustrySection';
import Statistics from '@/components/common/ProposalsSalesSection/Statistics';
import Testimonials from '@/components/common/Testimonials';
import ProposalsHeroSection from '@/components/common/ProposalsSalesSection/ProposalsHeroSection';
import ProposalsProductInfoSection from '@/components/common/ProposalsSalesSection/ProposalsProductInfoSection';
import WhyProposalSoftware from '@/components/common/ProposalsSalesSection/WhyProposalSoftware';
import WhyChooseProposalsSoftware from '@/components/common/ProposalsSalesSection/WhyChooseProposalsSoftware';
import QualifyLeadsBeforeSendingProposal from '@/components/common/ProposalsSalesSection/QualifyLeadsBeforeSendingProposal';
import ProposalsFAQ from '@/components/common/ProposalsSalesSection/ProposalsFAQ';
import ProposalsCtaSection from '@/components/common/ProposalsSalesSection/ProposalsCtaSection';

export const metadata: Metadata = {
  title: 'AI Solar Proposal Software to Boost Your Sales | SolarGenix',
  description:
    'Turn leads into customers with solar sales proposal software to create data-backed, sales-ready proposals designed to build trust and boost conversions',
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
      <ProposalsCtaSection />
    </>
  );
}
