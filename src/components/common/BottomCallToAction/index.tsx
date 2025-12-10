'use client';

import { Box, Button, Stack, Typography } from '@mui/material';

import { CONTAINER_STYLES, SECTION_STYLES_X, SECTION_STYLES_Y } from '@/shared/constants/spacing';
import { useTranslations } from 'next-intl';
import { BOOK_DEMO_URL, REGISTER_URL } from '@/shared/constants/common';
import Link from 'next/link';

export default function BottomCallToAction() {
  const t = useTranslations('homePage');

  return (
    <Box
      component="section"
      sx={{
        ...SECTION_STYLES_Y,
        ...SECTION_STYLES_X,
        backgroundColor: 'tertiary.100',
        position: 'relative',
        '&::after': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          boxShadow: 'inset 0 0 38px 0 rgba(0, 0, 0, 0.15)',
          pointerEvents: 'none',
          borderRadius: '8px',
        },
        pt: 'calc(6 * 8px) !important',
        pb: 'calc(6 * 8px) !important',
      }}
    >
      <Box {...CONTAINER_STYLES}>
        <Typography
          component="h2"
          variant="h3"
          sx={{
            fontWeight: 500,
            color: 'tertiary.800',
            textAlign: 'center',
            mb: 5,
          }}
        >
          {t('bottomCallToActionTitle')}
        </Typography>
        <Stack direction="row" gap={2} justifyContent="center">
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
      </Box>
    </Box>
  );
}
