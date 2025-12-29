'use client';

import { Box, Typography } from '@mui/material';

import { CONTAINER_STYLES, SECTION_STYLES_X, SECTION_STYLES_Y } from '@/shared/constants/spacing';
import { useTranslations } from 'next-intl';
import { useTheme } from '@mui/material/styles';

export default function VideoBlockSection() {
  const t = useTranslations('homePage');
  const theme = useTheme();

  return (
    <Box
      component="section"
      sx={{
        ...SECTION_STYLES_Y,
        ...SECTION_STYLES_X,
        backgroundColor: 'grey.200',
        boxShadow: 'inset 0 0 38px 0 rgba(0, 0, 0, 0.25)',
      }}
    >
      <Box {...CONTAINER_STYLES}>
        <Typography
          component="h2"
          variant="h3"
          sx={{
            maxWidth: '768px',
            width: '100%',
            fontWeight: 500,
            textAlign: 'center',
            color: 'primary.900',
            mx: 'auto',
            mb: 5,
          }}
        >
          {t('videoBlockTitle')}
        </Typography>
        <Box
          sx={{
            textAlign: 'center',
            borderRadius: '16px',
            border: `2px solid ${theme.palette.tertiary.light}`,
            padding: 1,
            maxHeight: '575px',
            height: '100%',
            aspectRatio: '16/10',
            mx: 'auto',
          }}
        >
          <Box
            sx={{
              width: '100%',
              height: '100%',
              borderRadius: '8px',
            }}
            component="video"
            controls
            preload="none"
          >
            <source src="/" type="video/mp4" />
            <track src="/" kind="subtitles" srcLang="en" label="English" />
            Your browser does not support the video tag.
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
