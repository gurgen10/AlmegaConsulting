'use client';

import { Box, Typography } from '@mui/material';
import { CONTAINER_STYLES, SECTION_STYLES_X, SECTION_STYLES_Y } from '@/shared/constants/spacing';
import { ReactNode } from 'react';

interface FeatureSectionProps {
  title: string;
  children: ReactNode;
  backgroundColor?: string;
  containerStyles?: object;
  titleStyles?: object;
}

export default function FeatureSection({
  title,
  children,
  backgroundColor = 'grey.50',
  containerStyles = {},
  titleStyles = {},
}: FeatureSectionProps) {
  return (
    <Box
      component="section"
      sx={{
        ...SECTION_STYLES_Y,
        ...SECTION_STYLES_X,
        backgroundColor,
        boxShadow: 'inset 0 0 38px 0 rgba(0, 0, 0, 0.25)',
      }}
    >
      <Box {...CONTAINER_STYLES} sx={containerStyles}>
        <Typography
          component="h2"
          variant="h3"
          sx={{
            fontWeight: 500,
            textAlign: 'center',
            color: 'primary.900',
            mb: 5,
            px: 3,
            ...titleStyles,
          }}
        >
          {title}
        </Typography>
        {children}
      </Box>
    </Box>
  );
}
