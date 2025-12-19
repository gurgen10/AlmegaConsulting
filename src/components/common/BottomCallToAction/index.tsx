import { useTranslations } from 'next-intl';
import { BOOK_DEMO_URL, REGISTER_URL } from '@/shared/constants/common';
import CtaSection from '@/components/ui/CtaSection';

export default function BottomCallToAction() {
  const t = useTranslations('homePage');

  return (
    <CtaSection
      title={t('bottomCallToActionTitle')}
      cta={{ children: t('bookDemo'), href: BOOK_DEMO_URL }}
      mainCta={{ children: t('startNow'), href: REGISTER_URL }}
    />
  );
}
