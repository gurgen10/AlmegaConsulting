import Faq from '@/components/ui/Faq';
import { useTranslations } from 'next-intl';

export default function ProposalsFAQ() {
  const t = useTranslations('salesProposalsPage.faqSection');

  return <Faq title={t('title')} description={t('description')} faqPage={'proposals'} />;
}
