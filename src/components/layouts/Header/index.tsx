'use client';

import { AppBar, Box, Drawer, Toolbar, useMediaQuery, useTheme } from '@mui/material';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useLayoutEffect, useRef, useState } from 'react';

import MenuDesktop from '@/components/layouts/Header/components/MenuDesktop';
import MenuMobile from '@/components/layouts/Header/components/MenuMobile';
import Burger from '@/components/ui/Burger';
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
          const sentinel = document.getElementById('header-observer');

          if (!sentinel) {
            return;
          }

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
    <>
      <div id="header-observer" style={{ top: 0, position: 'absolute' }}></div>
      <AppBar
        sx={{
          position: 'sticky',
          backgroundColor: 'transparent',
          zIndex: 1201,
          boxShadow: 'none',
          px: '80px',
          [theme.breakpoints.down('lg')]: {
            px: '0',
          },
        }}
      >
        <Toolbar
          ref={headerRef}
          data-header="site-header"
          sx={{
            ...HEADER_STYLES,
            transition: '0.2s linear',
            minHeight: '48px !important',
            my: isMobile ? 0 : 1,
            py: 1.5,
            backdropFilter: 'blur(2px) saturate(120%)',
            WebkitBackdropFilter: 'blur(2px) saturate(120%)',
            position: 'relative',
            overflow: 'hidden',
            lineHeight: '26px',
            backgroundBlendMode: 'plus-lighter',
            borderTop: '1px solid #FFF',
            borderBottom: '1px solid #FFF',
            backgroundColor: 'opacityDark.4',

            '&::before': {
              content: '""',
              position: 'absolute',
              inset: 0,
              pointerEvents: 'none',
              height: '62px',
              transform: 'translateX(-40%)',
              filter: 'blur(0px)',
              transition: 'transform 0.9s ease',
            },
            '&:hover::before': {
              transform: 'translateX(40%)',
            },

            img: {
              transition: '0.2s linear',
            },
            '.nav-menu-items': {
              display: 'flex',
              alignItems: 'center',
              gap: 2,
              mr: 'auto',
              ml: 4,
              width: '100%',
              transition: '0.2s linear',
            },

            '&.header-shrink': {
              my: isMobile ? 0 : 1.5,
              py: 1,
              maxWidth: 1376,

              '&::before': {
                transform: 'translateX(-20%)',
                opacity: 0.9,
              },
              '.nav-menu-items': {
                ml: 6,
              },
            },
            // When a tooltip is open, increase fogginess
            '&.tooltip-open': {
              left: '4%',
              backdropFilter: 'blur(16px) saturate(140%)',
              WebkitBackdropFilter: 'blur(16px) saturate(140%)',
            },

            '&.drawer-open': {
              img: {
                height: 34,
                width: 165,
              },
            },
            borderRadius: isMobile ? 0 : '8px',
            [theme.breakpoints.down('lg')]: {
              my: '0 !important',
              backgroundColor: 'opacityLight.90',
              borderBottom: `1px solid ${theme.palette.primary.main}`,
            },
          }}
        >
          <Box component={Link} href="/" lineHeight={1}>
            <Image
              width={165}
              height={34}
              src="/icons/solar-genix-dark.svg"
              alt="SolarGenix Logo"
            />
          </Box>
          <Box className="nav-menu-items">
            <Box
              ml="auto"
              alignItems="center"
              onClick={toggleDrawer}
              display={{ xs: 'flex', lg: 'none' }}
            >
              <Burger open={drawerOpen} />
            </Box>
            {isMobile ? (
              <Drawer
                slotProps={{
                  paper: {
                    sx: {
                      maxHeight: `calc(100% - 68px)`,
                      backgroundColor: 'opacityLight.4',
                      borderRadius: '0 0 20px 20px',
                    },
                  },
                }}
                anchor="top"
                open={drawerOpen}
                onClose={toggleDrawer}
              >
                <MenuMobile />
              </Drawer>
            ) : (
              <Box
                component="nav"
                display={{ xs: 'none', lg: 'flex' }}
                alignItems="center"
                gap={2}
                mr="auto"
                width="100%"
              >
                <MenuDesktop />
              </Box>
            )}
          </Box>
        </Toolbar>
      </AppBar>
    </>
  );
}
