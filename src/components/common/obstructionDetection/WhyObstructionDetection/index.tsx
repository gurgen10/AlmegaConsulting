import { useTranslations } from 'next-intl';
import InfoGrid from '@/components/ui/InfoGrid';
import { Box } from '@mui/material';
import AimArrow from '@/components/ui/icons/AimArrow';
import Reduce from '@/components/ui/icons/Reduce';
import Rocket from '@/components/ui/icons/Rocket';
import SettingUp from '@/components/ui/icons/SettingUp';

export default function WhyFinancialForecasting() {
  const t = useTranslations('obstructionDetection');

  const points = [
    {
      title: t('whyObstructionDetection.point1.title'),
      text: t('whyObstructionDetection.point1.description'),
      icon: <AimArrow />,
    },
    {
      title: t('whyObstructionDetection.point2.title'),
      text: t('whyObstructionDetection.point2.description'),
      icon: <Rocket />,
    },
    {
      title: t('whyObstructionDetection.point3.title'),
      text: t('whyObstructionDetection.point3.description'),
      icon: <Reduce />,
    },
    {
      title: t('whyObstructionDetection.point4.title'),
      text: t('whyObstructionDetection.point4.description'),
      icon: <SettingUp />,
    },
  ];

  return (
    <Box
      sx={{
        backgroundColor: 'primary.50',
        color: 'primary.900',
        svg: { color: 'primary.main' },
      }}
    >
      <InfoGrid title={t('whyObstructionDetectionTitle')} points={points} titleMaxWidth={930} />
    </Box>
  );
}
