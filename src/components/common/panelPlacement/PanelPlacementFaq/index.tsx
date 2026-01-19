import { useTranslations } from 'next-intl';
import Faq from '@/components/ui/Faq';

export default function PanelPlacementFaq() {
  const t = useTranslations('homePage');

  return <Faq title={t('faq')} description={t('faqSubtitle')} faqPage={'panelPlacement'} />;
}
