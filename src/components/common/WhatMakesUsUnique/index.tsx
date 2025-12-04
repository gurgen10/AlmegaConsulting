'use client';

import { Box, Button, Stack, Typography } from '@mui/material';

import { CONTAINER_STYLES, SECTION_STYLES_X, SECTION_STYLES_Y } from '@/shared/constants/spacing';
import { useTranslations } from 'next-intl';
import Unique from '@/components/common/WhatMakesUsUnique/Unique';
import { BOOK_DEMO_URL, REGISTER_URL } from '@/shared/constants/common';
import DarkPrimaryButton from '@/components/ui/DarkPrimaryButton';
import Link from 'next/link';

export default function WhatMakesUsUnique() {
  const t = useTranslations('heroSection');

  const uniques = [
    {
      title: 'unique1Title',
      text: 'unique1Text',
      image: '/images/what-makes-us-unique/star.svg',
    },
    {
      title: 'unique2Title',
      text: 'unique2Text',
      image: '/images/what-makes-us-unique/dolar.svg',
    },
    {
      title: 'unique3Title',
      text: 'unique3Text',
      image: '/images/what-makes-us-unique/setting.svg',
    },
  ];

  const aiUniques = {
    title: 'unique4Title',
    text: 'unique4Text',
    textAi: 'unique4AiText',
    image: '/images/what-makes-us-unique/ai.svg',
  };

  return (
    <Box
      component="section"
      sx={{
        ...SECTION_STYLES_Y,
        ...SECTION_STYLES_X,
        backgroundColor: 'grey.50',
        boxShadow: '0 0 38px 0 rgba(0, 0, 0, 0.25)',
      }}
    >
      <Box {...CONTAINER_STYLES}>
        <Typography
          component="h2"
          variant="h3"
          sx={{
            fontWeight: 500,
            color: 'primary.main',
            mb: 2,
          }}
        >
          {t('whatMakesUsUnique')}
        </Typography>
        <Typography
          component="p"
          variant="subtitle2"
          sx={{
            fontWeight: 300,
            color: 'grey.900',
            mb: 5,
          }}
        >
          {t('whatMakesUsUniqueDescription')}
        </Typography>
        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: {
              xs: '1fr',
              md: '1fr auto',
            },
            gap: 2,
            alignItems: 'stretch',
            '& > *': {
              height: '100%',
            },
          }}
        >
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              overflow: 'hidden',
              gap: 1,
            }}
          >
            {uniques.map(unique => (
              <Box key={unique.title}>
                <Unique title={t(unique.title)} text={t(unique.text)} image={unique.image} />
              </Box>
            ))}
          </Box>
          <Box
            sx={{
              height: '100%',
              maxWidth: { xs: '100%', md: 370 },
              display: 'flex',
              flexDirection: 'column',
            }}
          >
            <Unique
              title={t(aiUniques.title)}
              text={t(aiUniques.text)}
              image={aiUniques.image}
              textAi={aiUniques.textAi || ''}
            />
          </Box>
        </Box>
        <div>
          <Stack direction="row" gap={2} sx={{ mt: 5 }}>
            <Button
              size="large"
              variant="contained"
              color="secondary"
              component="a"
              href={REGISTER_URL}
            >
              {t('startNow')}
            </Button>
            <Button size="large" variant="outlined" component={Link} href={BOOK_DEMO_URL}>
              {t('bookDemo')}
            </Button>
          </Stack>
        </div>
      </Box>
    </Box>
  );
}
