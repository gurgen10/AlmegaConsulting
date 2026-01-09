import { useTranslations } from 'next-intl';
import InfoGrid from '@/components/ui/InfoGrid';
import { Box } from '@mui/material';
import HandShaking from '@/components/ui/icons/HandShaking';
import AimArrow from '@/components/ui/icons/AimArrow';
import DiagramUp from '@/components/ui/icons/DiagramUp';
import WindowEnergy from '@/components/ui/icons/WindowEnergy';

export default function WhyPanelPlacement() {
  const t = useTranslations('shadingAnalysis');

  const points = [
    {
      title: t('whyShadingAnalysis.point1.title'),
      text: t('whyShadingAnalysis.point1.description'),
      icon: <WindowEnergy />,
    },
    {
      title: t('whyShadingAnalysis.point2.title'),
      text: t('whyShadingAnalysis.point2.description'),
      icon: <HandShaking />,
    },
    {
      title: t('whyShadingAnalysis.point3.title'),
      text: t('whyShadingAnalysis.point3.description'),
      icon: <AimArrow />,
    },
    {
      title: t('whyShadingAnalysis.point4.title'),
      text: t('whyShadingAnalysis.point4.description'),
      icon: <DiagramUp />,
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
      <InfoGrid title={t('whyShadingAnalysisTitle')} points={points} titleMaxWidth={930} />
    </Box>
  );
}
