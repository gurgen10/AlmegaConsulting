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

  const cycleStartTimeRef = useRef<number | null>(null);
  const isInitializedRef = useRef(false);
  const isHoveringRef = useRef(false);
  const lastScrollLeftRef = useRef(0);
  const shouldPauseAfterCurrentAnimationRef = useRef(false);
  const currentAnimationPhaseRef = useRef<'scrolling' | 'pausing'>('scrolling');

  const logoWidth = isMobile ? 150 : 180;

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

  const handleMouseLeave = () => {
    setIsDragging(false);
    setIsPaused(false);
    isHoveringRef.current = false;
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging || !scrollContainerRef.current) return;
    e.preventDefault();

    const x = e.pageX - scrollContainerRef.current.offsetLeft;
    const walk = (x - startX) * 2;
    scrollContainerRef.current.scrollLeft = scrollLeft - walk;
  };

  const SCROLL_CONFIG = {
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
    const updateItemWidth = () => {
      if (!scrollContainerRef.current) return;

      const container = scrollContainerRef.current;
      if (!container.firstChild?.firstChild) return;

      const item = container.firstChild.firstChild as HTMLDivElement;
      const itemWidth = item.offsetWidth;
      const computedStyle = window.getComputedStyle(container.firstChild as Element);
      const gap = parseInt(computedStyle.gap) || 24;

      setItemWidth(itemWidth + gap);
    };

    updateItemWidth();

    window.addEventListener('resize', updateItemWidth);

    const timeoutId = setTimeout(updateItemWidth, 100);

    return () => {
      window.removeEventListener('resize', updateItemWidth);
      clearTimeout(timeoutId);
    };
  }, []);

  const startAnimation = useCallback(() => {
    if (!scrollContainerRef.current || isPaused) {
      return;
    }

    const container = scrollContainerRef.current;

    if (!cycleStartTimeRef.current) {
      cycleStartTimeRef.current = performance.now();
      isInitializedRef.current = true;
      container.scrollLeft = 0;
    }

    const totalCycleTime =
      logos.length * SCROLL_CONFIG.itemDuration + logos.length * SCROLL_CONFIG.pauseDuration;

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
        const itemEnd = accumulatedTime + SCROLL_CONFIG.itemDuration;
        const pauseEnd = itemEnd + SCROLL_CONFIG.pauseDuration;

        if (cyclePosition < itemEnd) {
          currentItem = i;
          itemProgress = (cyclePosition - accumulatedTime) / SCROLL_CONFIG.itemDuration;
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
        // Store current time to continue from same position when resumed
        const elapsed = timestamp - cycleStartTimeRef.current;
        // Adjust cycle start time to maintain position
        cycleStartTimeRef.current = timestamp - (elapsed % totalCycleTime);
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
  }, [
    isMobile,
    isPaused,
    logos.length,
    itemWidth,
    SCROLL_CONFIG.itemDuration,
    SCROLL_CONFIG.pauseDuration,
  ]);

  const handleMouseEnter = () => {
    isHoveringRef.current = true;

    // Request to pause after current animation completes
    shouldPauseAfterCurrentAnimationRef.current = true;

    if (currentAnimationPhaseRef.current === 'pausing') {
      setIsPaused(true);
      shouldPauseAfterCurrentAnimationRef.current = false;
    }

    // Store current scroll position
    if (scrollContainerRef.current) {
      lastScrollLeftRef.current = scrollContainerRef.current.scrollLeft;
    }
  };

  const handleMouseLeaveContainer = () => {
    isHoveringRef.current = false;

    // Only resume if not dragging
    if (!isDragging) {
      // Cancel any pending pause request
      shouldPauseAfterCurrentAnimationRef.current = false;

      // Reset animation to start from current position
      if (scrollContainerRef.current && cycleStartTimeRef.current) {
        // Calculate which item we're currently showing
        const currentScrollLeft = scrollContainerRef.current.scrollLeft;
        const currentItemIndex = Math.floor(currentScrollLeft / itemWidth);
        const itemProgress = (currentScrollLeft % itemWidth) / itemWidth;

        // Calculate the time position in the cycle
        const now = performance.now();
        const totalItemTime = SCROLL_CONFIG.itemDuration + SCROLL_CONFIG.pauseDuration;

        // Adjust cycle start time so animation continues from current position
        const cycleTimeForCurrentItem =
          currentItemIndex * totalItemTime + itemProgress * SCROLL_CONFIG.itemDuration;
        cycleStartTimeRef.current = now - cycleTimeForCurrentItem;
      }

      setIsPaused(false);
    }
  };

  useEffect(() => {
    startAnimation();
    // if (!isMobile) {
    //   startAnimation();
    // } else {
    //   if (scrollContainerRef.current) {
    //     scrollContainerRef.current.scrollLeft = 0;
    //   }
    //   cycleStartTimeRef.current = null;
    //   isInitializedRef.current = false;
    //   shouldPauseAfterCurrentAnimationRef.current = false;
    // }
    //
    // return () => {
    //   if (animationRef.current) {
    //     cancelAnimationFrame(animationRef.current);
    //   }
    // };
  }, [startAnimation]);

  useEffect(() => {
    if (isPaused && animationRef.current) {
      cancelAnimationFrame(animationRef.current);
      animationRef.current = null;
    } else if (!isPaused && !animationRef.current) {
      startAnimation();
    }
  }, [isPaused, startAnimation]);

  useEffect(() => {
    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, []);

  return (
    <Box
      component="section"
      sx={{
        ...SECTION_STYLES_X,
        backgroundColor: 'primary.800',
        pt: 0,
        pb: 0,
        overflow: 'hidden',
      }}
    >
      <Box
        sx={theme => ({
          ...CONTAINER_STYLES,
          pt: 4,
          pb: 6,
          [theme.breakpoints.down('sm')]: {
            pt: 3,
            pb: 5,
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
          }}
        >
          <Box
            onMouseDown={handleMouseDown}
            onMouseLeave={handleMouseLeave}
            onMouseUp={handleMouseUp}
            onMouseMove={handleMouseMove}
            sx={{
              cursor: isDragging ? 'grabbing' : 'grab',
              display: 'inline-flex',
              gap: 1,
              minWidth: 'max-content',
            }}
          >
            {allLogos.map((review, index) => (
              <Box
                key={`${review}-${index}`}
                sx={{
                  display: 'inline-block',
                  flexShrink: 0,
                  maxWidth: '427px',
                  whiteSpace: 'normal',
                  verticalAlign: 'top',
                  width: logoWidth,
                }}
              >
                <TrustedLogo logo={review} logoWidth={logoWidth} />
              </Box>
            ))}
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
