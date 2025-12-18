'use client';

import { Box, Typography } from '@mui/material';
import { useRef, useEffect, useState, useCallback } from 'react';
import { useTheme, useMediaQuery } from '@mui/material';

import { CONTAINER_STYLES, SECTION_STYLES_X } from '@/shared/constants/spacing';
import { useTranslations } from 'next-intl';
import TrustedLogo from '@/components/common/TrustedIndustrySection/TrustedLogo';

export default function Testimonials() {
  const t = useTranslations('homePage');
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const animationRef = useRef<number | null>(null);
  const [isPaused, setIsPaused] = useState(false);
  const [itemWidth, setItemWidth] = useState(1000);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const [isClient, setIsClient] = useState(false);

  const cycleStartTimeRef = useRef<number | null>(null);
  const isInitializedRef = useRef(false);
  const isHoveringRef = useRef(false);
  const lastScrollLeftRef = useRef(0);
  const shouldPauseAfterCurrentAnimationRef = useRef(false);
  const currentAnimationPhaseRef = useRef<'scrolling' | 'pausing'>('scrolling');
  const touchStartXRef = useRef(0);
  const touchScrollLeftRef = useRef(0);

  const logoWidth = 200;

  const SCROLL_CONFIG_TRUSTED = {
    itemDuration: 1000,
    pauseDuration: 1500,
  };

  const logos = [
    '/images/trusted-industry/Logo0.svg',
    '/images/trusted-industry/Logo1.svg',
    '/images/trusted-industry/Logo2.svg',
    '/images/trusted-industry/Logo3.svg',
    '/images/trusted-industry/Logo4.svg',
    '/images/trusted-industry/Logo5.svg',
    '/images/trusted-industry/Logo6.svg',
  ];

  const allLogos = [...logos, ...logos];

  useEffect(() => {
    setIsClient(true);
  }, []);

  const handleMouseDown = (e: React.MouseEvent) => {
    if (!scrollContainerRef.current) return;

    setIsDragging(true);
    setStartX(e.pageX - scrollContainerRef.current.offsetLeft);
    setScrollLeft(scrollContainerRef.current.scrollLeft);
    setIsPaused(true);

    if (animationRef.current) {
      cancelAnimationFrame(animationRef.current);
      animationRef.current = null;
    }
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    if (!scrollContainerRef.current) return;

    setIsDragging(true);
    const touch = e.touches[0];
    touchStartXRef.current = touch.pageX - scrollContainerRef.current.offsetLeft;
    touchScrollLeftRef.current = scrollContainerRef.current.scrollLeft;
    setIsPaused(true);

    if (animationRef.current) {
      cancelAnimationFrame(animationRef.current);
      animationRef.current = null;
    }
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isDragging || !scrollContainerRef.current) return;

    const touch = e.touches[0];
    const x = touch.pageX - scrollContainerRef.current.offsetLeft;
    const walk = (x - touchStartXRef.current) * 2;
    scrollContainerRef.current.scrollLeft = touchScrollLeftRef.current - walk;
  };

  const handleTouchEnd = () => {
    setIsDragging(false);
  };

  const handleMouseLeave = () => {
    setIsDragging(false);
    setIsPaused(false);
    isHoveringRef.current = false;
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging || !scrollContainerRef.current) return;
    e.preventDefault();

    const x = e.pageX - scrollContainerRef.current.offsetLeft;
    const walk = (x - startX) * 2;
    scrollContainerRef.current.scrollLeft = scrollLeft - walk;
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  useEffect(() => {
    const updateItemWidth = () => {
      if (!scrollContainerRef.current) return;

      const container = scrollContainerRef.current;
      if (!container.firstChild?.firstChild) return;

      const item = container.firstChild.firstChild as HTMLDivElement;
      const itemWidth = item.offsetWidth;
      const computedStyle = window.getComputedStyle(container.firstChild as Element);
      const gap = parseInt(computedStyle.gap) || 8;

      setItemWidth(itemWidth + gap);
    };

    if (typeof window !== 'undefined') {
      updateItemWidth();
      window.addEventListener('resize', updateItemWidth);

      const timeoutId = setTimeout(updateItemWidth, 100);

      return () => {
        window.removeEventListener('resize', updateItemWidth);
        clearTimeout(timeoutId);
      };
    }
  }, []);

  const startAnimation = useCallback(() => {
    if (!scrollContainerRef.current || isPaused || !isClient) {
      return;
    }

    const container = scrollContainerRef.current;

    // Reset animation if container doesn't exist or is on mobile
    // if (isMobile) {
    //   if (animationRef.current) {
    //     cancelAnimationFrame(animationRef.current);
    //     animationRef.current = null;
    //   }
    //   if (container) {
    //     container.scrollLeft = 0;
    //   }
    //   cycleStartTimeRef.current = null;
    //   return;
    // }

    if (!cycleStartTimeRef.current) {
      cycleStartTimeRef.current = performance.now();
      isInitializedRef.current = true;
      container.scrollLeft = 0;
    }

    const totalCycleTime =
      logos.length * SCROLL_CONFIG_TRUSTED.itemDuration +
      logos.length * SCROLL_CONFIG_TRUSTED.pauseDuration;

    const animate = (timestamp: number) => {
      if (!cycleStartTimeRef.current) {
        cycleStartTimeRef.current = timestamp;
      }

      const cycleElapsed = timestamp - cycleStartTimeRef.current;
      const cyclePosition = cycleElapsed % totalCycleTime;

      let accumulatedTime = 0;
      let currentItem = 0;
      let itemProgress = 0;
      let isInPause = false;

      for (let i = 0; i < logos.length; i++) {
        const itemEnd = accumulatedTime + SCROLL_CONFIG_TRUSTED.itemDuration;
        const pauseEnd = itemEnd + SCROLL_CONFIG_TRUSTED.pauseDuration;

        if (cyclePosition < itemEnd) {
          currentItem = i;
          itemProgress = (cyclePosition - accumulatedTime) / SCROLL_CONFIG_TRUSTED.itemDuration;
          isInPause = false;
          break;
        } else if (cyclePosition < pauseEnd) {
          currentItem = i;
          isInPause = true;
          itemProgress = 1;
          break;
        }
        accumulatedTime = pauseEnd;
      }

      currentAnimationPhaseRef.current = isInPause ? 'pausing' : 'scrolling';

      if (shouldPauseAfterCurrentAnimationRef.current && isInPause) {
        shouldPauseAfterCurrentAnimationRef.current = false;
        setIsPaused(true);
        return;
      }

      if (isPaused) {
        return;
      }

      if (!isInPause) {
        const liner = (t: number) => t;
        const easedProgress = liner(itemProgress);
        const basePosition = currentItem * itemWidth;
        container.scrollLeft = basePosition + itemWidth * easedProgress;

        lastScrollLeftRef.current = container.scrollLeft;
      } else if (currentItem === logos.length - 1 && itemProgress === 1) {
        container.scrollLeft = 0;
        lastScrollLeftRef.current = 0;
      }

      animationRef.current = requestAnimationFrame(animate);
    };

    animationRef.current = requestAnimationFrame(animate);

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [isPaused, logos.length, itemWidth, isMobile, isClient]);

  const handleMouseLeaveContainer = () => {
    if (isMobile) return;

    isHoveringRef.current = false;

    if (!isDragging) {
      shouldPauseAfterCurrentAnimationRef.current = false;

      if (scrollContainerRef.current && cycleStartTimeRef.current) {
        const currentScrollLeft = scrollContainerRef.current.scrollLeft;
        const currentItemIndex = Math.floor(currentScrollLeft / itemWidth);
        const itemProgress = (currentScrollLeft % itemWidth) / itemWidth;

        const now = performance.now();
        const totalItemTime =
          SCROLL_CONFIG_TRUSTED.itemDuration + SCROLL_CONFIG_TRUSTED.pauseDuration;
        const cycleTimeForCurrentItem =
          currentItemIndex * totalItemTime + itemProgress * SCROLL_CONFIG_TRUSTED.itemDuration;
        cycleStartTimeRef.current = now - cycleTimeForCurrentItem;
      }

      setIsPaused(false);
    }
  };

  const handleMouseEnter = () => {
    if (isMobile) return;

    isHoveringRef.current = true;
    shouldPauseAfterCurrentAnimationRef.current = true;

    if (currentAnimationPhaseRef.current === 'pausing') {
      setIsPaused(true);
      shouldPauseAfterCurrentAnimationRef.current = false;
    }

    if (scrollContainerRef.current) {
      lastScrollLeftRef.current = scrollContainerRef.current.scrollLeft;
    }
  };

  useEffect(() => {
    if (isClient) {
      startAnimation();
    }

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [startAnimation, isClient]);

  useEffect(() => {
    if (isPaused && animationRef.current) {
      cancelAnimationFrame(animationRef.current);
      animationRef.current = null;
    } else if (!isPaused && !animationRef.current && !isMobile && isClient) {
      startAnimation();
    }
  }, [isPaused, startAnimation, isMobile, isClient]);

  useEffect(() => {
    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, []);

  if (!isClient) {
    return null;
  }

  return (
    <Box
      component="section"
      sx={{
        ...SECTION_STYLES_X,
        backgroundColor: 'primary.800',
        pt: 0,
        pb: 0,
        overflow: 'hidden',
        userSelect: 'none',
      }}
    >
      <Box
        sx={theme => ({
          ...CONTAINER_STYLES,
          pt: 4,
          pb: 5,
          [theme.breakpoints.down('sm')]: {
            pt: 3,
            pb: 4,
          },
        })}
      >
        <Typography
          component="h2"
          variant="h6"
          fontWeight={500}
          textAlign={'center'}
          color={'grey.25'}
          mb={3}
        >
          {t('trustedIndustry')}
        </Typography>
        <Box
          ref={scrollContainerRef}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeaveContainer}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
          sx={{
            ...CONTAINER_STYLES,
            position: 'relative',
            overflowY: 'hidden',
            whiteSpace: 'nowrap',
            scrollbarWidth: 'none',
            '&::-webkit-scrollbar': {
              display: 'none',
            },
            '&:active': {
              cursor: 'grabbing',
            },
            touchAction: 'pan-x',
            WebkitOverflowScrolling: 'touch',
          }}
        >
          <Box
            onMouseDown={handleMouseDown}
            onMouseLeave={handleMouseLeave}
            onMouseUp={handleMouseUp}
            onMouseMove={handleMouseMove}
            sx={{
              cursor: isDragging ? 'grabbing' : isMobile ? 'default' : 'grab',
              display: 'inline-flex',
              gap: 3,
              minWidth: 'max-content',
              px: 1,
            }}
          >
            {allLogos.map((logo, index) => (
              <Box
                key={`${logo}-${index}`}
                sx={{
                  display: 'inline-block',
                  flexShrink: 0,
                  maxWidth: '427px',
                  whiteSpace: 'normal',
                  verticalAlign: 'top',
                  width: logoWidth,
                  height: 40,
                  position: 'relative',
                  // pointerEvents: 'none', // Prevent logo from interfering with drag
                }}
              >
                <TrustedLogo logo={logo} logoWidth={logoWidth} />
              </Box>
            ))}
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
