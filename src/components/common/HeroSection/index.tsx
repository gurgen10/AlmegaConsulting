'use client';

import { Box, Typography } from '@mui/material';

import { CONTAINER_STYLES, SECTION_STYLES_Y, SECTION_STYLES_X } from '@/shared/constants/spacing';
import { useTranslations } from 'next-intl';
import './hero.css';

export default function HeroSection() {
  const t = useTranslations('homePage');
  return (
    <Box
      component="section"
      sx={theme => ({
        ...SECTION_STYLES_Y,
        ...SECTION_STYLES_X,
      })}
    >
      <Box {...CONTAINER_STYLES}>
        <Typography
          component={'h1'}
          typography={'h1'}
          className="explosive-text"
          sx={theme => ({
            color: theme.palette.primary.main,
            textAlign: 'center',
            width: '100%',
            letterSpacing: '0.1em',
            display: 'inline-block',
            position: 'relative',
            transition: 'transform 0.3s ease-in-out',
            '&:hover': {
              transform: 'scale(1.05)',
            },
          })}
        >
          Almega Consulting
        </Typography>
        <Typography sx={{ textAlign: 'center', width: '100%' }}>Comming soon...</Typography>
      </Box>
    </Box>
  );
}
