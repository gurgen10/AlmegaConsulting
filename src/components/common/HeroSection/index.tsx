'use client';

import { Box, Button, Stack, Typography } from '@mui/material';

import { CONTAINER_STYLES, SECTION_STYLES_Y, SECTION_STYLES_X } from '@/shared/constants/spacing';
import { BOOK_DEMO_URL, REGISTER_URL } from '@/shared/constants/common';
import Link from 'next/link';
import { useTranslations } from 'next-intl';

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
        backgroundColor: theme.palette.grey[200],
        backgroundImage: 'url(/images/hero-section.png)',
        backgroundPosition: 'calc(100% + 100px) 100%',
        backgroundAttachment: 'scroll',
        backgroundRepeat: 'no-repeat',
        [theme.breakpoints.down('xl')]: {
          backgroundPosition: 'calc(100% + 400px) 115%',
        },
        [theme.breakpoints.down('lg')]: {
          backgroundPosition: 'calc(100% + 500px) 115%',
        },
        [theme.breakpoints.down('md')]: {
          backgroundSize: '465px auto',
          backgroundPosition: '100% 100%',
          minHeight: '740px',
        },
        [theme.breakpoints.down('sm')]: {
          backgroundSize: '408px auto',
          backgroundPosition: '100% 100%',
          minHeight: '631px',
        },
      })}
    >
      <Box {...CONTAINER_STYLES}>
        <Stack
          sx={theme => ({
            maxWidth: 600,
            justifyContent: 'center',
            py: 12,

            [theme.breakpoints.down('xl')]: {
              maxWidth: 500,
              minHeight: '605px',
              py: 9,
            },
            [theme.breakpoints.down('lg')]: {
              maxWidth: 460,
              minHeight: '530px',
              py: 4,
            },
            [theme.breakpoints.down('md')]: {
              maxWidth: '100%',
              minHeight: '0',
              py: 0,
            },
          })}
          gap={2.75}
        >
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
          <Stack direction="row" gap={2}>
            <Button
              size="medium"
              variant="contained"
              color="secondary"
              component="a"
              href={REGISTER_URL}
            >
              {t('getStartedFree')}
            </Button>
            <Button size="medium" variant="contained" component={Link} href={BOOK_DEMO_URL}>
              {t('bookDemo')}
            </Button>
          </Stack>
        </Stack>
      </Box>
    </Box>
  );
}
