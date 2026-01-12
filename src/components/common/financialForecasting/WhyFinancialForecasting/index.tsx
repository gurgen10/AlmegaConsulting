import { useTranslations } from 'next-intl';
import InfoGrid from '@/components/ui/InfoGrid';
import { Box } from '@mui/material';
import AimArrow from '@/components/ui/icons/AimArrow';
import HandShaking from '@/components/ui/icons/HandShaking';
import Reduce from '@/components/ui/icons/Reduce';
import UserHart from '@/components/ui/icons/UserHart';

export default function WhyFinancialForecasting() {
  const t = useTranslations('financialForecasting');

  const points = [
    {
      title: t('whyFinancialForecasting.point1.title'),
      text: t('whyFinancialForecasting.point1.description'),
      icon: <AimArrow />,
    },
    {
      title: t('whyFinancialForecasting.point2.title'),
      text: t('whyFinancialForecasting.point2.description'),
      icon: <HandShaking />,
    },
    {
      title: t('whyFinancialForecasting.point3.title'),
      text: t('whyFinancialForecasting.point3.description'),
      icon: <Reduce />,
    },
    {
      title: t('whyFinancialForecasting.point4.title'),
      text: t('whyFinancialForecasting.point4.description'),
      icon: <UserHart />,
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
      <InfoGrid title={t('whyFinancialForecastingTitle')} points={points} titleMaxWidth={930} />
    </Box>
  );
}
