'use client';

import { AppBar, Box, Drawer, Toolbar, useMediaQuery, useTheme } from '@mui/material';
import Image from 'next/image';
import { useCallback, useEffect, useLayoutEffect, useRef, useState } from 'react';

import MenuDesktop from '@/components/layouts/Header/components/MenuDesktop';
import MenuMobile from '@/components/layouts/Header/components/MenuMobile';
import Burger from '@/components/ui/Burger';
import { HEADER_STYLES } from '@/shared/constants/spacing';
import { useRouter } from 'next/navigation';

export default function Header() {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('lg'));
  const headerRef = useRef<HTMLDivElement>(null);
  const [headerWidth, setHeaderWidth] = useState<number>(0);
  const router = useRouter();

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

  const updateHeaderWidth = useCallback(() => {
    if (headerRef.current) {
      const width = headerRef.current.offsetWidth;
      setHeaderWidth(width);
    }
  }, []);

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
              const isShrunk = !entry.isIntersecting;
              headerRef.current?.classList.toggle('header-shrink', isShrunk);
              setTimeout(updateHeaderWidth, 200);
            },
            { threshold: 0 }
          );
          observer.observe(sentinel);
        } else if (headerRef.current) {
          const scrollHandler = () => {
            const isShrunk = window.scrollY > 60;
            headerRef.current?.classList.toggle('header-shrink', isShrunk);
            setTimeout(updateHeaderWidth, 200);
          };

          window.addEventListener('scroll', scrollHandler);

          return () => {
            window.removeEventListener('scroll', scrollHandler);
          };
        }
      });
    };

    handleScroll();
    document.addEventListener('scroll', handleScroll);

    return () => document.removeEventListener('scroll', handleScroll);
  }, [drawerOpen, updateHeaderWidth]);

  useEffect(() => {
    updateHeaderWidth();

    const handleResize = () => {
      updateHeaderWidth();
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [updateHeaderWidth]);

  useEffect(() => {
    if (headerRef.current) {
      const observer = new MutationObserver(mutations => {
        mutations.forEach(mutation => {
          if (mutation.type === 'attributes' && mutation.attributeName === 'class') {
            setTimeout(updateHeaderWidth, 200);
          }
        });
      });

      observer.observe(headerRef.current, {
        attributes: true,
        attributeFilter: ['class'],
      });

      return () => observer.disconnect();
    }
  }, [updateHeaderWidth]);

  useEffect(() => {
    const headerElement = headerRef.current;
    const handleTransitionEnd = (e: TransitionEvent) => {
      if (e.propertyName.includes('margin') || e.propertyName.includes('padding')) {
        updateHeaderWidth();
      }
    };

    if (headerElement) {
      headerElement.addEventListener('transitionend', handleTransitionEnd as EventListener);
    }

    return () => {
      if (headerElement) {
        headerElement.removeEventListener('transitionend', handleTransitionEnd as EventListener);
      }
    };
  }, [updateHeaderWidth]);

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
          backgroundColor: isMobile ? 'grey.25' : 'transparent',
          zIndex: 1201,
          boxShadow: 'none',
          px: 2,
          [theme.breakpoints.down('lg')]: {
            px: '0',
          },
        }}
      >
        <Toolbar
          ref={headerRef}
          sx={{
            ...HEADER_STYLES,
            transition: '0.2s linear',
            minHeight: '48px !important',
            my: isMobile ? 0 : 1,
            py: 1.5,
            position: 'relative',
            overflow: 'hidden',
            lineHeight: '26px',
            backgroundColor: isMobile ? 'grey.25' : 'opacityLight.60',
            backdropFilter: 'blur(5px)',
            boxShadow: '0 4px 8.3px -1px rgba(0, 43, 43, 0.20)',

            img: {
              transition: '0.2s linear',
            },

            '.nav-menu-items': {
              display: 'flex',
              alignItems: 'center',
              gap: 2,
              mr: 'auto',
              ml: 6,
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
                ml: 4,
              },
            },

            '&.drawer-open': {
              borderBottom: `2px solid ${theme.palette.primary.main}`,
              my: isMobile ? 0 : 1,
              py: 1.5,
              img: {
                height: 34,
                width: 165,
              },
            },
            borderRadius: isMobile ? 0 : '8px',
            [theme.breakpoints.down('lg')]: {
              my: '0 !important',
            },
          }}
        >
          <Box
            id="header-logo"
            sx={{
              cursor: 'pointer',
            }}
            lineHeight={1}
            onClick={() => {
              setDrawerOpen(false);
              headerRef.current?.classList?.remove('drawer-open');
              router.push('/');
            }}
          >
            <Image
              width={165}
              height={32}
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
                hideBackdrop
                slotProps={{
                  paper: {
                    sx: {
                      height: '100vh',
                      backgroundColor: 'transparent',
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
              <MenuDesktop headerWidth={headerWidth} headerRef={headerRef.current} />
            )}
          </Box>
        </Toolbar>
      </AppBar>
    </>
  );
}
