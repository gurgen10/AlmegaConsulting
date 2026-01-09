import { useTranslations } from 'next-intl';
import InfoGrid from '@/components/ui/InfoGrid';
import { Box } from '@mui/material';
import HandShaking from '@/components/ui/icons/HandShaking';
import Rocket from '@/components/ui/icons/Rocket';
import SettingUp from '@/components/ui/icons/SettingUp';
import Increase from '@/components/ui/icons/Increase';

export default function WhyPanelPlacement() {
  const t = useTranslations('panelPlacement');

  const points = [
    {
      title: t('whyPanelPlacement.point1.title'),
      text: t('whyPanelPlacement.point1.description'),
      icon: <Rocket />,
    },
    {
      title: t('whyPanelPlacement.point2.title'),
      text: t('whyPanelPlacement.point2.description'),
      icon: <SettingUp />,
    },
    {
      title: t('whyPanelPlacement.point3.title'),
      text: t('whyPanelPlacement.point3.description'),
      icon: <Increase />,
    },
    {
      title: t('whyPanelPlacement.point4.title'),
      text: t('whyPanelPlacement.point4.description'),
      icon: <HandShaking />,
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
      <InfoGrid title={t('whyPanelPlacementTitle')} points={points} titleMaxWidth={930} />
    </Box>
  );
}
