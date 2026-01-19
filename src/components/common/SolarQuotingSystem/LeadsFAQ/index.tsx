import Faq from '@/components/ui/Faq';
import { useTranslations } from 'next-intl';

export default function LeadsFAQ() {
  const t = useTranslations('quotingSystemPage.faqSection');

  return <Faq title={t('title')} description={t('description')} faqPage={'lead'} />;
}
