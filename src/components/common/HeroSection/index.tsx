'use client';

import { Box, Button, Stack, Typography } from '@mui/material';

import Image from 'next/image';
import { CONTAINER_STYLES, SECTION_STYLES_X, SECTION_STYLES_Y } from '@/shared/constants/spacing';
import DarkPrimaryButton from '@/components/ui/DarkPrimaryButton';
import { BOOK_DEMO_URL, REGISTER_URL } from '@/shared/constants/common';
import Link from 'next/link';
import { useTranslations } from 'next-intl';

export default function HeroSection() {
  const t = useTranslations('homePage');
  return (
    <Box
      component="section"
      sx={{
        ...SECTION_STYLES_Y,
        ...SECTION_STYLES_X,
        minHeight: '93vh',
        display: 'flex',
        alignItems: 'center',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <Box {...CONTAINER_STYLES}>
        <Box
          sx={theme => ({
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: 2,
            [theme.breakpoints.down('lg')]: { gridTemplateColumns: '1fr' },
          })}
        >
          <Stack maxWidth={{ xs: 494, md: 520, xl: 616 }} gap={2.75}>
            <Typography component="h1" variant="h3" fontWeight={500}>
              {t('createSolarPanel')}
            </Typography>
            <Typography variant="subtitle2" fontWeight={250}>
              {t.rich('description', {
                bold: chunks => (
                  <Typography variant="inherit" component="strong" fontWeight={700}>
                    {chunks}
                  </Typography>
                ),
              })}
            </Typography>
            <div>
              <Stack direction="row" gap={2}>
                <Button
                  size="large"
                  variant="contained"
                  color="secondary"
                  component="a"
                  href={REGISTER_URL}
                >
                  {t('getStartedFree')}
                </Button>
                <DarkPrimaryButton
                  size="large"
                  variant="contained"
                  component={Link}
                  href={BOOK_DEMO_URL}
                >
                  {t('bookDemo')}
                </DarkPrimaryButton>
              </Stack>
            </div>
          </Stack>
          <Box
            sx={{
              position: 'relative',
            }}
          >
            <Image
              src="/images/hero-section.png"
              alt="hero-section"
              width={815}
              height={600}
              style={{
                width: '100%',
                height: 'auto',
                position: 'absolute',
                bottom: 0,
                right: 0,
              }}
              priority
            />
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
