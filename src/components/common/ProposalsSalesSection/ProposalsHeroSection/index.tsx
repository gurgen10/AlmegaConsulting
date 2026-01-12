'use client';

import { Box, Button, Typography } from '@mui/material';
import {
  CONTAINER_STYLES,
  SPACING_DEFAULT_X,
  SPACING_DEFAULT_Y,
  TEXT_COLOR,
} from '@/shared/constants/spacing';
import { useTranslations } from 'next-intl';
import { BOOK_DEMO_URL, REGISTER_URL } from '@/shared/constants/common';
import Link from 'next/link';

export default function ProposalsHeroSection() {
  const t = useTranslations('salesProposalsPage.heroSection');

  return (
    <Box
      component="section"
      px={SPACING_DEFAULT_X}
      color={TEXT_COLOR}
      sx={{
        backgroundColor: 'grey.200',
        backgroundImage: 'url(/images/proposals/background.jpg)',
        backgroundSize: 'cover',
        backgroundPosition: 'bottom',
      }}
    >
      <Box
        sx={CONTAINER_STYLES}
        height={{ xs: 631, sm: 740, md: 530, lg: 605, xl: 700 }}
        py={SPACING_DEFAULT_Y}
        display="flex"
        alignItems={{ xs: 'flex-end', sm: 'flex-start', md: 'center' }}
      >
        <Box width={{ sm: 390, lg: 480, xl: 648 }}>
          <Typography variant="h2" component="h1" fontWeight={300}>
            {t.rich('title', {
              primary: chunks => (
                <Typography component="span" variant="inherit" color="primary">
                  {chunks}
                </Typography>
              ),
            })}
          </Typography>
          <Typography variant="subtitle1" component="div" fontWeight={300} mt={1} mb={3}>
            {t('description')}
          </Typography>
          <Box
            display="grid"
            gap={{ xs: 1, sm: 2 }}
            gridTemplateColumns={{ xs: '1fr 1fr', sm: 'max-content max-content' }}
          >
            <Button variant="contained" color="secondary" component="a" href={REGISTER_URL}>
              {t('getStarted')}
            </Button>
            <Button variant="contained" color="primary" component={Link} href={BOOK_DEMO_URL}>
              {t('bookDemo')}
            </Button>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
