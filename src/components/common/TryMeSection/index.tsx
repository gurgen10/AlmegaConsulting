'use client';

import { Box, Button, Stack, Typography } from '@mui/material';
import {
  CONTAINER_STYLES,
  SPACING_DEFAULT_X,
  SPACING_DEFAULT_Y,
  TEXT_COLOR,
} from '@/shared/constants/spacing';
import { useTranslations } from 'next-intl';
import { BOOK_DEMO_URL, REGISTER_URL } from '@/shared/constants/common';
import Link from 'next/link';
import QuoteConfiguration from '@/components/common/TryMeSection/components/QuoteConfiguration';

export default function TryMeSection() {
  const t = useTranslations('quotingSystemPage.tryMeSection');

  return (
    <Box py={SPACING_DEFAULT_Y} px={SPACING_DEFAULT_X}>
      <Box sx={CONTAINER_STYLES} color={TEXT_COLOR}>
        <Typography variant="h2" component="h1" fontWeight={300} textAlign="center" mb={1}>
          {t.rich('title', {
            primary: chunks => (
              <Typography variant="inherit" component="span" color="primary">
                {chunks}
              </Typography>
            ),
          })}
        </Typography>
        <Typography
          maxWidth={{ xs: 600, lg: 788 }}
          fontWeight={300}
          variant="subtitle1"
          component="div"
          textAlign="center"
          mx="auto"
          mb={3}
        >
          {t('description')}
        </Typography>
        <Stack direction="row" justifyContent="center" spacing={2} mb={{ xs: 5.125, md: 8 }}>
          <Button variant="contained" color="secondary" component="a" href={REGISTER_URL}>
            {t('signUp')}
          </Button>
          <Button variant="contained" component={Link} href={BOOK_DEMO_URL}>
            {t('bookDemo')}
          </Button>
        </Stack>
        <QuoteConfiguration />
      </Box>
    </Box>
  );
}
