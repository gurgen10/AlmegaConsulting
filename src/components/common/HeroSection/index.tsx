'use client';

import { Box, Button, Stack, Typography } from '@mui/material';

import { CONTAINER_STYLES, SECTION_STYLES_Y, SECTION_STYLES_X } from '@/shared/constants/spacing';
import { useTranslations } from 'next-intl';
import Image from 'next/image';

export default function HeroSection() {
  const t = useTranslations('homePage');
  return (
    <Box
      component="section"
      sx={theme => ({
        ...SECTION_STYLES_Y,
        ...SECTION_STYLES_X,
        position: 'relative',
        overflow: 'hidden',
        height: '100svh',
        backgroundImage: 'url(/images/bg-hero-1.webp)',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
      })}
    >
      <Box {...CONTAINER_STYLES}>
        <Stack
          sx={{
            maxWidth: 600,
            justifyContent: 'center',
          }}
          gap={2.75}
        >
          <Box
            id="header-logo"
            sx={{
              cursor: 'pointer',
              width: 165,
              height: 'auto',
            }}
          >
            <Image src="/icons/almega-logo.png" alt="Almega Logo" width={165} height={100} />
          </Box>
          <Typography
            component="h1"
            variant="h3"
            fontWeight={500}
            sx={theme => ({ color: theme.palette.common.white })}
          >
            {t('heroTitle')}
          </Typography>
          <Typography
            component="p"
            variant="subtitle2"
            fontWeight={300}
            sx={theme => ({ color: theme.palette.tertiary.main })}
          >
            {t.rich('heroSubtilte', {
              bold: chunks => (
                <Typography variant="inherit" component="strong" fontWeight={700}>
                  {chunks}
                </Typography>
              ),
            })}
          </Typography>
          <Typography
            component="p"
            variant="subtitle2"
            fontWeight={300}
            sx={theme => ({ color: theme.palette.tertiary.main })}
          >
            {t.rich('bodyTitle', {
              bold: chunks => (
                <Typography variant="inherit" component="strong" fontWeight={700}>
                  {chunks}
                </Typography>
              ),
            })}
          </Typography>
          <Stack direction="row" gap={2}>
            <Button
              size="medium"
              variant="contained"
              color="secondary"
              component="a"
              target="_blank"
              href="https://calendly.com/almega-consulting/30min?month=2024-06"
            >
              {t('primaryAction')}
            </Button>
            <Button
              size="medium"
              variant="contained"
              component="a"
              target="_blank"
              href="https://calendly.com/almega-consulting/30min?month=2024-06"
            >
              {t('secondaryAction')}
            </Button>
          </Stack>
        </Stack>
      </Box>
    </Box>
  );
}
