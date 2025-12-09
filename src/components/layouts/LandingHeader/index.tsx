'use client';

import { AppBar, Box, Toolbar } from '@mui/material';
import Image from 'next/image';
import Link from 'next/link';
import { useRef } from 'react';

import { HEADER_STYLES } from '@/shared/constants/spacing';

export default function LandingHeader() {
  const headerRef = useRef<HTMLDivElement>(null);

  return (
    <AppBar
      sx={{
        position: 'sticky',
        backgroundColor: 'grey.200',
        zIndex: 1201,
        boxShadow: 'none',
        '&.MuiAppBar-root ~ .MuiTooltip-popper .MuiTooltip-tooltip': {
          marginTop: '18px !important',
        },
        '&.MuiAppBar-root:has(.header-shrink) ~ .MuiTooltip-popper .MuiTooltip-tooltip': {
          marginTop: '14px !important',
        },
      }}
    >
      <Toolbar
        ref={headerRef}
        sx={{
          ...HEADER_STYLES,
          transition: '0.2s linear',
          minHeight: '48px !important',
          py: 2,
          display: 'flex',
          justifyContent: 'center',

          img: {
            transition: '0.2s linear',
          },
        }}
      >
        <Box component={Link} href="/" lineHeight={1}>
          <Image width={165} height={34} src="/icons/solar-genix-dark.svg" alt="SolarGenix Logo" />
        </Box>
      </Toolbar>
    </AppBar>
  );
}
