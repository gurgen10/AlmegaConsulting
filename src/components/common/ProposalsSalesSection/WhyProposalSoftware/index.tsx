import { useTranslations } from 'next-intl';
import InfoGrid from '@/components/ui/InfoGrid';
import { Box } from '@mui/material';
import RateOutlined from '@/components/ui/icons/RateOutlined';
import TargetOutlined from '@/components/ui/icons/TargetOutlined';
import UserHeartOutlied from '@/components/ui/icons/UserHeartOutlied';
import ClockCogOutlied from '@/components/ui/icons/ClockCogOutlied';

export default function WhyProposalSoftware() {
  const t = useTranslations('salesProposalsPage.whyProposalSoftware');

  const points = [
    {
      title: t('rates.title'),
      text: t('rates.description'),
      icon: <RateOutlined />,
    },
    {
      title: t('accurateProposals.title'),
      text: t('accurateProposals.description'),
      icon: <TargetOutlined />,
    },
    {
      title: t('trust.title'),
      text: t('trust.description'),
      icon: <UserHeartOutlied />,
    },
    {
      title: t('productivity.title'),
      text: t('productivity.description'),
      icon: <ClockCogOutlied />,
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
