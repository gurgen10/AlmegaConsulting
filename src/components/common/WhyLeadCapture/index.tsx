import { useTranslations } from 'next-intl';
import InfoGrid from '@/components/ui/InfoGrid';
import { Box } from '@mui/material';
import RateOutlined from '@/components/ui/icons/RateOutlined';
import AutomatedCycleOutlined from '@/components/ui/icons/AutomatedCycleOutlined';
import TimeOutlined from '@/components/ui/icons/TimeOutlined';
import BankNoteHandOutlined from '@/components/ui/icons/BankNoteHandOutlined';

export default function WhyLeadCapture() {
  const t = useTranslations('quotingSystemPage.whyLeadCapture');

  const points = [
    {
      title: t('conversionRate.title'),
      text: t('conversionRate.description'),
      icon: <RateOutlined />,
    },
    {
      title: t('shorterSalesCycle.title'),
      text: t('shorterSalesCycle.description'),
      icon: <AutomatedCycleOutlined />,
    },
    {
      title: t('timeUse.title'),
      text: t('timeUse.description'),
      icon: <TimeOutlined />,
    },
    {
      title: t('cost.title'),
      text: t('cost.description'),
      icon: <BankNoteHandOutlined />,
    },
  ];

  return (
    <Box
      sx={{
        backgroundColor: 'grey.50',
        color: 'grey.900',
        svg: { color: 'secondary.main' },
      }}
    >
      <InfoGrid title={t('title')} points={points} titleMaxWidth={930} />
    </Box>
  );
}
