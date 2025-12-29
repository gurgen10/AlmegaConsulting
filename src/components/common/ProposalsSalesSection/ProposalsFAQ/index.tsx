import Faq from '@/components/ui/Faq';
import { useTranslations } from 'next-intl';

export default function LeadsFAQ() {
  const t = useTranslations('quotingSystemPage.faqSection');

  const faqs = [...new Array(6)].map((_, i) => ({
    id: `q_${i + 1}`,
    question: t(`faqs.q_${i + 1}.question`),
    answer: t(`faqs.q_${i + 1}.answer`),
  }));

  return <Faq title={t('title')} description={t('description')} faqs={faqs} />;
}
