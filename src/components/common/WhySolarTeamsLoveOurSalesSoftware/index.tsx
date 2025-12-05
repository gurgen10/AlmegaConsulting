'use client';

import { Box, Typography } from '@mui/material';

import { CONTAINER_STYLES, SECTION_STYLES_X, SECTION_STYLES_Y } from '@/shared/constants/spacing';
import { useTranslations } from 'next-intl';
import LovePoints from '@/components/common/WhySolarTeamsLoveOurSalesSoftware/LovePoints';

export default function WhySolarTeamsLoveOurSalesSoftware() {
  const t = useTranslations('heroSection');

  const points = [
    {
      title: 'whySolarTeamsLoveOurSalesSoftwareTitle1',
      text: 'whySolarTeamsLoveOurSalesSoftwareDescription1',
      image: '/images/why-solar-teams-love-our-sales-software/rocket.svg',
    },
    {
      title: 'whySolarTeamsLoveOurSalesSoftwareTitle2',
      text: 'whySolarTeamsLoveOurSalesSoftwareDescription2',
      image: '/images/why-solar-teams-love-our-sales-software/aim.svg',
    },
    {
      title: 'whySolarTeamsLoveOurSalesSoftwareTitle3',
      text: 'whySolarTeamsLoveOurSalesSoftwareDescription3',
      image: '/images/why-solar-teams-love-our-sales-software/clock.svg',
    },
    {
      title: 'whySolarTeamsLoveOurSalesSoftwareTitle4',
      text: 'whySolarTeamsLoveOurSalesSoftwareDescription4',
      image: '/images/why-solar-teams-love-our-sales-software/users.svg',
    },
  ];

  return (
    <Box
      component="section"
      sx={{
        ...SECTION_STYLES_Y,
        ...SECTION_STYLES_X,
        backgroundColor: 'tertiary.100',
      }}
    >
      <Box {...CONTAINER_STYLES}>
        <Typography
          component="h2"
          variant="h3"
          sx={{
            fontWeight: 500,
            color: 'primary.900',
            maxWidth: 800,
            mb: 5,
          }}
        >
          {t('whySolarTeamsLoveOurSalesSoftware')}
        </Typography>
        <Box
          sx={theme => ({
            display: 'grid',
            gap: 5,
            gridTemplateColumns: '1fr 1fr',
            [theme.breakpoints.down('lg')]: {
              gap: 3,
            },
            [theme.breakpoints.down('md')]: {
              gridTemplateColumns: '1fr',
              gap: 4,
            },
          })}
        >
          {points.map(point => (
            <Box key={point.title}>
              <LovePoints title={t(point.title)} text={t(point.text)} image={point.image} />
            </Box>
          ))}
        </Box>
      </Box>
    </Box>
  );
}
