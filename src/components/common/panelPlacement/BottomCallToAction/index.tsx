import { useTranslations } from 'next-intl';
import { REGISTER_URL } from '@/shared/constants/common';
import CtaSection from '@/components/ui/CtaSection';

export default function BottomCallToAction() {
  const t = useTranslations('panelPlacement');

  return (
    <CtaSection
      title={t('bottomCtaTitle')}
      mainCta={{ children: t('signUp'), href: REGISTER_URL, sx: { width: 240 } }}
    />
  );
}
