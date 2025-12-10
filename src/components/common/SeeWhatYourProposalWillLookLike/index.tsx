'use client';

import { Box, Button, Typography } from '@mui/material';

import { CONTAINER_STYLES, SECTION_STYLES_X, SECTION_STYLES_Y } from '@/shared/constants/spacing';
import { useTranslations } from 'next-intl';
import { useTheme } from '@mui/material/styles';
import Image from 'next/image';

export default function SeeWhatYourProposalWillLookLike() {
  const t = useTranslations('homePage');
  const theme = useTheme();
  const points = [
    t('seeWhatYourProposalWillLookLikePoint1'),
    t('seeWhatYourProposalWillLookLikePoint2'),
    t('seeWhatYourProposalWillLookLikePoint3'),
    t('seeWhatYourProposalWillLookLikePoint4'),
  ];

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
        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            [theme.breakpoints.down('md')]: {
              gridTemplateColumns: '1fr',
              rowGap: 5,
            },
            justifyContent: 'space-between',
            alignItems: 'stretch',
          }}
        >
          <Box>
            <Typography
              component="h2"
              variant="h3"
              sx={{
                fontWeight: 500,
                color: 'primary.main',
                mb: 2,
              }}
            >
              {t('seeWhatYourProposalWillLookLike')}
            </Typography>
            <Typography
              component="h2"
              variant="subtitle2"
              sx={{
                fontWeight: 300,
                color: 'grey.900',
                mb: 2,
              }}
            >
              {t('seeWhatYourProposalWillLookLikeDescription')}
            </Typography>
            <Box component="ul" sx={{ mb: 2 }}>
              {points.map(point => (
                <Box
                  component="li"
                  key={point}
                  sx={{
                    '&::marker': {
                      color: 'primary.dark',
                      marginLeft: '-20px',
                    },
                    marginLeft: '-10px',
                  }}
                >
                  <Typography variant="subtitle2" sx={{ fontWeight: 500, color: 'primary.dark' }}>
                    {point}
                  </Typography>
                </Box>
              ))}
            </Box>
            <Button
              size="large"
              variant="contained"
              color="secondary"
              startIcon={
                <Image
                  src="/images/see-what-your-proposal-will-look-like/download.svg"
                  alt="download"
                  width={24}
                  height={24}
                />
              }
            >
              {t('downloadSampleProposal')}
            </Button>
          </Box>
          <Box
            sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%' }}
          >
            <Box
              sx={{
                maxWidth: '354px',
                width: '100%',
                height: '100%',
                borderRadius: '8px',
                border: `4px solid ${theme.palette.grey[25]}`,
                background:
                  'url(/images/see-what-your-proposal-will-look-like/perfect-proposal.png) lightgray 50% / cover no-repeat',
                boxShadow: '0 0 38px 0 rgba(0, 0, 0, 0.08)',
                aspectRatio: '354 / 368',
                [theme.breakpoints.down('lg')]: {
                  maxWidth: '340px',
                  height: 'auto',
                  aspectRatio: '1 / 1',
                },
                [theme.breakpoints.down('md')]: {
                  maxWidth: '100%',
                },
              }}
            ></Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
