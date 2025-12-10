'use client';

import { Box, Button, Typography } from '@mui/material';

import { CONTAINER_STYLES, SECTION_STYLES_X, SECTION_STYLES_Y } from '@/shared/constants/spacing';
import { useTranslations } from 'next-intl';
import Image from 'next/image';

export default function AutomateYourSolarSection() {
  const t = useTranslations('homePage');
  const makeStunningArray = [
    {
      title: t('roofDetection'),
      icon: '/images/automate-solar/roof-detect.svg',
    },
    {
      title: t('shadingAnalysis'),
      icon: '/images/automate-solar/shading-analysis.svg',
    },
    {
      title: t('financialForecasts'),
      icon: '/images/automate-solar/dollar.svg',
    },
    {
      title: t('panelPlacement'),
      icon: '/images/automate-solar/panel-place.svg',
    },
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
        <Typography
          component="h2"
          variant="h3"
          sx={{
            fontWeight: 500,
            textAlign: 'center',
            color: 'primary.main',
            mb: 5,
            px: 3,
          }}
        >
          {t('automateYourSolar')}
        </Typography>
        <Box>
          {/* First */}
          <Box
            sx={{
              display: 'grid',
              gridTemplateColumns: {
                xs: '1fr',
                md: '1fr 1fr',
              },
              gap: 4,
              py: 0.5,
              px: 0.5,
              borderRadius: '16px',
              backgroundImage: 'linear-gradient(243deg, #469F9F 32.53%, #215F5F 98.97%)',
              boxShadow: '0 0 41px 0 rgba(0, 0, 0, 0.19)',
            }}
          >
            <Box
              sx={{
                borderRadius: '16px',
                flex: 1,
                px: { xs: 1, sm: 2, md: 3, lg: 4 },
                py: { xs: 1.5, lg: 2, xl: 4 },
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
              }}
            >
              <Box sx={{ width: { xs: 32, lg: 48 }, height: { xs: 32, lg: 48 } }}>
                <Image
                  src="/images/automate-solar/document.svg"
                  alt="document"
                  width={48}
                  height={48}
                  style={{ width: '100%', height: '100%' }}
                  priority
                />
              </Box>
              <Box sx={{ mt: 1 }}>
                <Typography
                  variant="h4"
                  component="h2"
                  sx={{
                    color: 'grey.25',
                    fontWeight: 500,
                    mb: 2,
                  }}
                >
                  {t('makeStunningSolarProposals')}
                </Typography>
                <Typography variant="subtitle2" sx={{ fontWeight: 300, color: 'grey.25', mb: 2 }}>
                  {t('makeStunningSolarProposalsDescription1')}
                </Typography>
                <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap', mb: 2, maxWidth: 358 }}>
                  {makeStunningArray.map(el => (
                    <Box
                      key={el.title}
                      sx={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: 1,
                        py: 0.5,
                        px: 1,
                        borderRadius: '8px',
                        backgroundColor: 'opacityLight.16',
                      }}
                    >
                      <Box sx={{ width: { xs: 18, lg: 24 }, height: { xs: 18, lg: 24 } }}>
                        <Image
                          src={el.icon}
                          alt={el.title}
                          width={24}
                          height={24}
                          style={{ width: '100%', height: '100%' }}
                        />
                      </Box>
                      <Typography variant="body2" sx={{ fontWeight: 500, color: 'grey.25' }}>
                        {el.title}
                      </Typography>
                    </Box>
                  ))}
                </Box>
                <Typography variant="subtitle2" sx={{ fontWeight: 300, color: 'grey.25', mb: 2 }}>
                  {t('makeStunningSolarProposalsDescription2')}
                </Typography>
                <Button size="large" variant="contained" color="secondary" component="a" href="#">
                  {t('learnMore')}{' '}
                  <Image
                    src="/images/automate-solar/chevron-right.svg"
                    width="20"
                    height="20"
                    alt="chevron-right"
                  />
                </Button>
              </Box>
            </Box>
            <Box
              sx={{
                flex: 1,
                padding: 1.5,
                borderRadius: '12px',
                backgroundColor: 'grey.50',
                boxShadow: '-10px 0 21.3px 2px rgba(0, 43, 43, 0.30)',
              }}
            >
              <Box sx={{ width: '100%', height: { xs: '100%', xl: 600 } }}>
                <Image
                  src="/images/automate-solar/makeStunning.png"
                  alt="makeStunning"
                  width={600}
                  height={600}
                  style={{
                    width: '100%',
                    height: '100%',
                    maxHeight: '600px',
                  }}
                  priority
                />
              </Box>
            </Box>
          </Box>
          {/* Second */}
          <Box
            sx={{
              display: 'grid',
              gridTemplateColumns: {
                xs: '1fr',
                md: '1fr 1fr',
              },
              mt: 3,
              gap: 4,
              py: 0.5,
              px: 0.5,
              borderRadius: '16px',
              backgroundImage: 'linear-gradient(243deg, #469F9F 32.53%, #215F5F 98.97%)',
              boxShadow: '0 0 41px 0 rgba(0, 0, 0, 0.19)',
            }}
          >
            <Box
              sx={{
                flex: 1,
                order: { sm: 1, md: 0 },
                padding: 1.5,
                borderRadius: '12px',
                backgroundColor: 'grey.50',
                boxShadow: '-10px 0 21.3px 2px rgba(0, 43, 43, 0.30)',
              }}
            >
              <Box sx={{ width: '100%', height: { xs: '100%', xl: 600 } }}>
                <Image
                  src="/images/automate-solar/makeStunning.png"
                  alt="makeStunning"
                  width={600}
                  height={600}
                  style={{
                    width: '100%',
                    height: '100%',
                    maxHeight: '600px',
                  }}
                  priority
                />
              </Box>
            </Box>
            <Box
              sx={{
                borderRadius: '16px',
                flex: 1,
                order: { sm: 0, md: 1 },
                px: { xs: 1, sm: 2, md: 3, lg: 4 },
                py: { xs: 1.5, lg: 2, xl: 4 },
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
              }}
            >
              <Box sx={{ width: { xs: 32, lg: 48 }, height: { xs: 32, lg: 48 } }}>
                <Image
                  src="/images/automate-solar/course-up.svg"
                  alt="document"
                  width={48}
                  height={48}
                  style={{ width: '100%', height: '100%' }}
                  priority
                />
              </Box>
              <Box sx={{ mt: 1 }}>
                <Typography
                  variant="h4"
                  component="h2"
                  sx={{
                    color: 'grey.25',
                    fontWeight: 500,
                    mb: 2,
                  }}
                >
                  {t('boostConversionsWithInstantQuotes')}
                </Typography>
                <Typography variant="subtitle2" sx={{ fontWeight: 300, color: 'grey.25', mb: 2 }}>
                  {t('boostConversionsWithInstantQuotesDescription')}
                </Typography>
                <Button size="large" variant="contained" color="secondary" component="a" href="#">
                  {t('learnMore')}{' '}
                  <Image
                    src="/images/automate-solar/chevron-right.svg"
                    width="20"
                    height="20"
                    alt="chevron-right"
                  />
                </Button>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
