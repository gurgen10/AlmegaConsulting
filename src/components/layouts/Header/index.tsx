'use client';

import { AppBar, Box, Drawer, Toolbar, useMediaQuery, useTheme } from '@mui/material';
import { useEffect, useLayoutEffect, useRef, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Burger from '@/components/ui/Burger';
import MenuDesktop from '@/components/layouts/Header/components/MenuDesktop';
import MenuMobile from '@/components/layouts/Header/components/MenuMobile';
import { HEADER_STYLES } from '@/shared/constants/spacing';

export default function Header() {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('lg'));
  const headerRef = useRef<HTMLDivElement>(null);

  const toggleDrawer = () => {
    setDrawerOpen(open => {
      if (!open) {
        headerRef.current?.classList?.add('drawer-open');
      } else {
        headerRef.current?.classList?.remove('drawer-open');
      }

      return !open;
    });
  };

  useLayoutEffect(() => {
    const handleScroll = () => {
      requestAnimationFrame(() => {
        if (headerRef.current && 'IntersectionObserver' in window) {
          const sentinel = document.createElement('div');
          sentinel.style.position = 'absolute';
          sentinel.style.top = '0';
          document.body.prepend(sentinel);

          const observer = new IntersectionObserver(
            ([entry]) => {
              headerRef.current?.classList.toggle('header-shrink', !entry.isIntersecting);
            },
            { threshold: 0 }
          );
          observer.observe(sentinel);
        } else if (headerRef.current) {
          window.addEventListener('scroll', () => {
            headerRef.current?.classList.toggle('header-shrink', window.scrollY > 60);
          });
        }
      });
    };
    handleScroll();
    document.addEventListener('scroll', handleScroll);

    return () => document.removeEventListener('scroll', handleScroll);
  }, [drawerOpen]);

  useEffect(() => {
    if (window.scrollY > 0 && window.scrollY < 100) {
      window.scrollTo(0, 0);
    }
    document.body.style.overflow = drawerOpen ? 'hidden' : 'auto';
  }, [drawerOpen]);

  return (
    <AppBar position="sticky" sx={{ backgroundColor: 'grey.200', zIndex: 1201, boxShadow: 'none' }}>
      <Toolbar
        ref={headerRef}
        sx={{
          ...HEADER_STYLES,
          transition: '0.2s linear',
          minHeight: '48px !important',
          py: 2,

          img: {
            transition: '0.2s linear',
          },

          '&.header-shrink': {
            py: 1.5,

            img: {
              height: 24,
              width: 124,
            },
          },
          '&.drawer-open': {
            py: 2,

            img: {
              height: 34,
              width: 165,
            },
          },
        }}>
        <Box component={Link} href="/" lineHeight={1}>
          <Image width={165} height={34} src="/icons/solar-genix-dark.svg" alt="SolarGenix Logo" />
        </Box>
        <Box display="flex" alignItems="center" gap={2} mr="auto" ml={6} width="100%">
          <Box
            ml="auto"
            alignItems="center"
            onClick={toggleDrawer}
            display={{ xs: 'flex', lg: 'none' }}>
            <Burger open={drawerOpen} />
          </Box>
          {isMobile ? (
            <Drawer
              slotProps={{
                paper: {
                  sx: {
                    marginTop: `68px`,
                    maxHeight: `calc(100% - 68px)`,
                    backgroundColor: 'tertiary.900',
                    borderRadius: '0 0 20px 20px',
                  },
                },
              }}
              anchor="top"
              open={drawerOpen}
              onClose={toggleDrawer}>
              <MenuMobile onClose={toggleDrawer} />
            </Drawer>
          ) : (
            <Box
              component="nav"
              display={{ xs: 'none', lg: 'flex' }}
              alignItems="center"
              gap={2}
              mr="auto"
              width="100%">
              <MenuDesktop />
            </Box>
          )}
        </Box>
      </Toolbar>
    </AppBar>
  );
}
