'use client';

import { GuideBlock } from '@/components/ui/GuideBlock';
import { useTranslations } from 'next-intl';
import Link from 'next/link';
import { SALES_PROPOSAL_URL } from '@/shared/constants/common';

export default function LeadProductGuideSection() {
  const t = useTranslations('quotingSystemPage.leadProductGuide');

  return (
    <GuideBlock
      title={t('title')}
      cta={{ children: t('cta'), component: Link, href: SALES_PROPOSAL_URL }}
      content={t('description')}
      img={{ src: '/images/lead-product-guide/img.png' }}
    />
  );
}
