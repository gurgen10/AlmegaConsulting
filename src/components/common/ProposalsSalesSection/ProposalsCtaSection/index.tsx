import CtaSection from '@/components/ui/CtaSection';
import { useTranslations } from 'next-intl';
import { BOOK_DEMO_URL, REGISTER_URL } from '@/shared/constants/common';

export default function ProposalsCtaSection() {
  const t = useTranslations('salesProposalsPage.ctaSection');

  return (
    <CtaSection
      title={t('title')}
      cta={{ children: t('cta'), href: BOOK_DEMO_URL }}
      mainCta={{ children: t('mainCta'), href: REGISTER_URL }}
    />
  );
}
