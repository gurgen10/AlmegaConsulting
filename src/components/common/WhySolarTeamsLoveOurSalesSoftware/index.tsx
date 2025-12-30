import { useTranslations } from 'next-intl';
import InfoGrid from '@/components/ui/InfoGrid';
import ClockFilled from '@/components/ui/icons/ClockFilled';
import AimFilled from '@/components/ui/icons/AimFilled';
import UsersFilled from '@/components/ui/icons/UsersFilled';
import RocketFilled from '@/components/ui/icons/RocketFilled';
import { Box } from '@mui/material';

export default function WhySolarTeamsLoveOurSalesSoftware() {
  const t = useTranslations('homePage');

  const points = [
    {
      title: t('whySolarTeamsLoveOurSalesSoftwareTitle1'),
      text: t('whySolarTeamsLoveOurSalesSoftwareDescription1'),
      icon: <RocketFilled />,
    },
    {
      title: t('whySolarTeamsLoveOurSalesSoftwareTitle2'),
      text: t('whySolarTeamsLoveOurSalesSoftwareDescription2'),
      icon: <AimFilled />,
    },
    {
      title: t('whySolarTeamsLoveOurSalesSoftwareTitle3'),
      text: t('whySolarTeamsLoveOurSalesSoftwareDescription3'),
      icon: <ClockFilled />,
    },
    {
      title: t('whySolarTeamsLoveOurSalesSoftwareTitle4'),
      text: t('whySolarTeamsLoveOurSalesSoftwareDescription4'),
      icon: <UsersFilled />,
    },
  ];

  return (
    <Box
      sx={{
        backgroundColor: 'tertiary.100',
        color: 'primary.900',
        svg: { color: 'primary.main' },
      }}
    >
      <InfoGrid title={t('whySolarTeamsLoveOurSalesSoftware')} points={points} />
    </Box>
  );
}
