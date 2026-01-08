'use client';

import { Box, Button, Stack, Typography } from '@mui/material';

import { CONTAINER_STYLES, SECTION_STYLES_Y, SECTION_STYLES_X } from '@/shared/constants/spacing';
import { REGISTER_URL } from '@/shared/constants/common';
import { useTranslations } from 'next-intl';

interface HeroSectionProps {
  translationNamespace: string;
  heroImageUrl: string;
  heroButtonUrl?: string;
}

export default function HeroSectionBlock({
  translationNamespace,
  heroImageUrl,
  heroButtonUrl = REGISTER_URL,
}: HeroSectionProps) {
  const t = useTranslations(translationNamespace);

  return (
    <Box
      component="section"
      sx={theme => ({
        ...SECTION_STYLES_Y,
        ...SECTION_STYLES_X,
        position: 'relative',
        overflow: 'hidden',
        backgroundColor: theme.palette.grey[200],
        backgroundImage: `url(${heroImageUrl})`,
        backgroundPosition: 'calc(50% + 350px) 100%',
        backgroundAttachment: 'scroll',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'auto 80%',
        backgroundPositionY: 'bottom',
        [theme.breakpoints.up('xl')]: {
          backgroundPosition: 'calc(50% + 600px) bottom',
          backgroundSize: 'auto 90%',
        },
        [theme.breakpoints.between('lg', 'xl')]: {
          backgroundPosition: 'calc(30% + 700px) bottom',
          backgroundSize: 'auto 85%',
        },
        [theme.breakpoints.between('md', 'lg')]: {
          backgroundPosition: 'calc(50% + 500px) bottom',
          backgroundSize: 'auto 75%',
        },
        [theme.breakpoints.down('md')]: {
          backgroundSize: 'auto 50%',
          backgroundPosition: 'calc(50% + 200px) bottom',
          minHeight: '740px',
        },
        [theme.breakpoints.down('sm')]: {
          backgroundSize: 'auto 50%',
          minHeight: '631px',
          backgroundPosition: 'calc(50% + 80px) 20px',
          display: 'flex',
          alignItems: 'end',
        },
      })}
    >
      <Box {...CONTAINER_STYLES}>
        <Box
          sx={theme => ({
            display: 'none',
            [theme.breakpoints.down('sm')]: {
              display: 'inline-block',
              minHeight: 300,
            },
          })}
        ></Box>
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
          <Box>
            <Typography
              component="h1"
              variant="h4"
              sx={{
                color: 'grey.900',
                fontWeight: 300,
                marginBottom: 1,
              }}
            >
              {t.rich('heroTitle', {
                sp: chunks => (
                  <Typography
                    variant="h4"
                    component="div"
                    sx={{
                      color: 'grey.25',
                      maxWidth: 'fit-content',
                      backgroundColor: 'primary.light',
                      borderRadius: '8px',
                      lineHeight: '44px',
                      padding: '0 12px',
                      fontWeight: 300,
                      marginBottom: '4px',
                    }}
                  >
                    {chunks}
                  </Typography>
                ),
              })}
            </Typography>
            <Typography component="p" variant="subtitle2" fontWeight={300} marginBottom={3}>
              {t.rich('heroDescription', {
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
                href={heroButtonUrl}
              >
                {t('heroButtonLabel')}
              </Button>
            </Stack>
          </Box>
        </Stack>
      </Box>
    </Box>
  );
}
