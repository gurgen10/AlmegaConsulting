import { useTranslations } from 'next-intl';
import Faq from '@/components/ui/Faq';

export default function FinancialForeCastFaq() {
  const t = useTranslations('homePage');

  return <Faq title={t('faq')} description={t('faqSubtitle')} faqPage={'financialForecasting'} />;
}
