import { useTranslations } from 'next-intl';
import { REGISTER_URL } from '@/shared/constants/common';
import ProductInfoSection from '@/components/ui/ProductInfoSection';

export default function ProposalsProductInfoSection() {
  const t = useTranslations('salesProposalsPage.proposalsProductInfo');

  const cta = {
    text: t('cta'),
    href: REGISTER_URL,
  };

  const blocks = [
    'roofDetection',
    'shadingAnalysis',
    'financialForecasting',
    'panelPlacement',
    'salesReadyProposal',
  ].map(key => ({
    id: key,
    title: t(`${key}.title`),
    description: t(`${key}.description`),
    cta,
  }));

  return <ProductInfoSection blocks={blocks} />;
}
