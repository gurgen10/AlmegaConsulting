'use client';

import { Box, Typography } from '@mui/material';
import { useRef, useEffect, useState, useCallback } from 'react';
import { useTheme, useMediaQuery } from '@mui/material';

import { CONTAINER_STYLES, SECTION_STYLES_X, SECTION_STYLES_Y } from '@/shared/constants/spacing';
import { useTranslations } from 'next-intl';
import Review from '@/components/common/Testimonials/Review';

export default function Testimonials() {
  const t = useTranslations('homePage');
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const animationRef = useRef<number | null>(null);
  const [isPaused, setIsPaused] = useState(false);
  const [itemWidth, setItemWidth] = useState(1000); // Default width for desktop

  const SCROLL_CONFIG = {
    itemDuration: 3000,
    pauseDuration: 0,
  };

  const reviewers = [
    {
      name: 'John Doe',
      position: 'CEO, SolarGenix',
      review:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec metus vel ante bibendum facilisis. Nullam nec metus vel ante bibendum facilisis.',
      image: '/images/Testimonials/1.jpg',
    },
    {
      name: 'John Smith',
      position: 'CEO, SolarGenix',
      review:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec metus vel ante bibendum facilisis. Nullam nec metus vel ante bibendum facilisis.',
      image: '/images/Testimonials/2.jpg',
    },
    {
      name: 'John Carter',
      position: 'CEO, SolarGenix',
      review:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec metus vel ante bibendum facilisis. Nullam nec metus vel ante bibendum facilisis.',
      image: '/images/Testimonials/3.jpg',
    },
    {
      name: 'Sarah Johnson',
      position: 'CTO, SunPower',
      review:
        'Excellent software that streamlined our solar sales process. Highly recommended for any solar business.',
      image: '/images/Testimonials/4.jpg',
    },
    {
      name: 'Mike Wilson',
      position: 'Sales Director, SolarEdge',
      review:
        'The best investment we made this year. Increased our conversion rates by 40% in just 3 months.',
      image: '/images/Testimonials/5.jpg',
    },
    {
      name: 'Emma Davis',
      position: 'Operations Manager, GreenEnergy',
      review: 'User-friendly interface with powerful features. Our team adapted to it within days.',
      image: '/images/Testimonials/6.jpg',
    },
  ];

  // Duplicate reviewers for seamless scrolling
  const allReviewers = [...reviewers, ...reviewers];

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
  }, [isMobile]);

  const startAnimation = useCallback(() => {
    if (!scrollContainerRef.current || isMobile || isPaused) {
      return;
    }

    const container = scrollContainerRef.current;
    let startTime: number | null = null;
    let isInPause = false;
    let cycleStartTime: number | null = null;

    const animate = (timestamp: number) => {
      if (!startTime) {
        startTime = timestamp;
        cycleStartTime = timestamp;
      }
      if (isPaused) return;

      const totalCycleTime =
        reviewers.length * SCROLL_CONFIG.itemDuration + SCROLL_CONFIG.pauseDuration;
      const cycleElapsed = timestamp - (cycleStartTime ?? 0);

      // Calculate which cycle we're in
      if (cycleElapsed % totalCycleTime < reviewers.length * SCROLL_CONFIG.itemDuration) {
        isInPause = false;

        // Calculate which item we should be showing
        const scrollPhaseTime = cycleElapsed % totalCycleTime;
        const itemIndex = Math.floor(scrollPhaseTime / SCROLL_CONFIG.itemDuration);

        // Calculate progress within current item
        const itemProgress =
          (scrollPhaseTime % SCROLL_CONFIG.itemDuration) / SCROLL_CONFIG.itemDuration;

        // Calculate scroll position with easing
        const easeInOut = (t: number) => (t < 0.5 ? 2 * t * t : 1 - Math.pow(-2 * t + 2, 2) / 2);
        const easedProgress = easeInOut(itemProgress);

        // Calculate the base position for the current item
        const basePosition = itemIndex * itemWidth;

        // Add the progress within the current item and Apply scroll
        container.scrollLeft = basePosition + itemWidth * easedProgress;
      } else {
        if (!isInPause) {
          container.scrollLeft = 0;
          isInPause = true;
        }
      }

      animationRef.current = requestAnimationFrame(animate);
    };

    container.scrollLeft = 0;
    animationRef.current = requestAnimationFrame(animate);
  }, [
    isMobile,
    isPaused,
    reviewers.length,
    itemWidth,
    SCROLL_CONFIG.itemDuration,
    SCROLL_CONFIG.pauseDuration,
  ]);

  const handleMouseEnter = () => setIsPaused(true);
  const handleMouseLeave = () => setIsPaused(false);

  useEffect(() => {
    if (!isMobile) {
      startAnimation();
    } else {
      if (scrollContainerRef.current) {
        scrollContainerRef.current.scrollLeft = 0;
      }
    }

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [startAnimation, isMobile]);

  useEffect(() => {
    if (!isPaused && !isMobile) {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
      startAnimation();
    }
  }, [isPaused, startAnimation, isMobile]);

  return (
    <Box sx={{ backgroundColor: 'primary.800', boxShadow: '0 0 38px 0 rgba(0, 0, 0, 0.25)' }}>
      <Box
        component="section"
        sx={{
          ...SECTION_STYLES_Y,
          ...SECTION_STYLES_X,
          paddingBottom: '0 !important',
        }}
      >
        <Box {...CONTAINER_STYLES}>
          <Typography
            component="h2"
            variant="h3"
            sx={{
              fontWeight: 500,
              textAlign: 'center',
              color: 'grey.25',
              mb: 5,
              px: 3,
            }}
          >
            {t('whatOurCustomerAreSayingAboutOurSolarSalesSoftware')}
          </Typography>
        </Box>
      </Box>
      <Box
        sx={theme => ({
          ...SECTION_STYLES_X,
          ...SECTION_STYLES_Y,
          paddingTop: '0 !important',
          backgroundColor: 'primary.800',
          marginTop: -1,
          [theme.breakpoints.down('lg')]: {
            paddingRight: '0 !important',
          },
        })}
      >
        <Box
          ref={scrollContainerRef}
          onMouseEnter={!isMobile ? handleMouseEnter : undefined}
          onMouseLeave={!isMobile ? handleMouseLeave : undefined}
          sx={{
            ...CONTAINER_STYLES,
            position: 'relative',
            overflowX: isMobile ? 'auto' : 'auto',
            overflowY: 'hidden',
            whiteSpace: 'nowrap',
            scrollbarWidth: 'none',
            '&::-webkit-scrollbar': {
              display: 'none',
            },
            cursor: isMobile ? 'grab' : 'grab',
            '&:active': {
              cursor: 'grabbing',
            },
          }}
        >
          <Box
            sx={{
              display: 'inline-flex',
              gap: 1,
              py: 2,
              minWidth: 'max-content',
            }}
          >
            {allReviewers.map((review, index) => (
              <Box
                key={`${review.name}-${index}`}
                sx={theme => ({
                  display: 'inline-block',
                  flexShrink: 0,
                  maxWidth: '427px',
                  whiteSpace: 'normal',
                  verticalAlign: 'top',
                  [theme.breakpoints.down('xl')]: {
                    width: 315,
                  },
                  [theme.breakpoints.down('lg')]: {
                    width: 380,
                  },
                  [theme.breakpoints.down('sm')]: {
                    width: 300,
                  },
                })}
              >
                <Review name={review.name} position={review.position} review={review.review} />
              </Box>
            ))}
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
