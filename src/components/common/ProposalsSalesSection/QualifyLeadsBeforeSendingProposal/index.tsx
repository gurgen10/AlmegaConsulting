'use client';

import { GuideBlock } from '@/components/ui/GuideBlock';
import { useTranslations } from 'next-intl';
import Link from 'next/link';
import { QUOTING_SYSTEM_URL } from '@/shared/constants/common';

export default function QualifyLeadsBeforeSendingProposal() {
  const t = useTranslations('salesProposalsPage.qualifyLeadsBeforeSendingFirstProposal');

  return (
    <GuideBlock
      title={t('title')}
      cta={{ children: t('cta'), component: Link, href: QUOTING_SYSTEM_URL }}
      content={t('description')}
      img={{ src: '/images/lead-product-guide/img.png' }}
      backgroundColor="secondary.50"
      color="secondary.900"
    />
  );
}
