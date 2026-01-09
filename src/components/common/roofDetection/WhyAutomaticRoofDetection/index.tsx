import { useTranslations } from 'next-intl';
import InfoGrid from '@/components/ui/InfoGrid';
import { Box } from '@mui/material';
import History from '@/components/ui/icons/History';
import DollarDown from '@/components/ui/icons/DollarDown';
import Home from '@/components/ui/icons/Home';
import Roof from '@/components/ui/icons/Roof';

export default function WhyAutomaticRoofDetection() {
  const t = useTranslations('roofDetection');

  const points = [
    {
      title: t('whyRoofDetection.point1.title'),
      text: t('whyRoofDetection.point1.description'),
      icon: <History />,
    },
    {
      title: t('whyRoofDetection.point2.title'),
      text: t('whyRoofDetection.point2.description'),
      icon: <Roof />,
    },
    {
      title: t('whyRoofDetection.point3.title'),
      text: t('whyRoofDetection.point3.description'),
      icon: <Home />,
    },
    {
      title: t('whyRoofDetection.point4.title'),
      text: t('whyRoofDetection.point4.description'),
      icon: <DollarDown />,
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
      <InfoGrid title={t('whyRoofDetectionTitle')} points={points} titleMaxWidth={930} />
    </Box>
  );
}
