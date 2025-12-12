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
  const scrollContainerRef = useRef(null);
  const animationRef = useRef(null);
  const [isPaused, setIsPaused] = useState(false);
  const [itemWidth, setItemWidth] = useState(400); // Default width for desktop

  // Scroll configuration
  const SCROLL_CONFIG = {
    itemDuration: 3000, // 3 seconds to scroll one item
    pauseDuration: 3000, // 3 second pause after scrolling all items
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

  // Update item width on resize and mobile changes
  useEffect(() => {
    const updateItemWidth = () => {
      if (!scrollContainerRef.current) return;

      const container = scrollContainerRef.current;
      if (!container.firstChild?.firstChild) return;

      const item = container.firstChild.firstChild;
      const itemWidth = item.offsetWidth;
      const computedStyle = window.getComputedStyle(container.firstChild);
      const gap = parseInt(computedStyle.gap) || 24;

      setItemWidth(itemWidth + gap);
    };

    // Update initially
    updateItemWidth();

    // Update on resize
    window.addEventListener('resize', updateItemWidth);

    // Update when isMobile changes
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
    let startTime = null;
    const currentItemIndex = 0;
    let isInPause = false;
    let cycleStartTime = null;

    const animate = timestamp => {
      if (!startTime) {
        startTime = timestamp;
        cycleStartTime = timestamp;
      }
      if (isPaused) return;

      const elapsed = timestamp - startTime;
      const totalCycleTime =
        reviewers.length * SCROLL_CONFIG.itemDuration + SCROLL_CONFIG.pauseDuration;
      const cycleElapsed = timestamp - cycleStartTime;

      // Calculate which cycle we're in
      const cycleProgress = (cycleElapsed % totalCycleTime) / totalCycleTime;

      if (cycleElapsed % totalCycleTime < reviewers.length * SCROLL_CONFIG.itemDuration) {
        // We're in the scrolling phase
        isInPause = false;

        // Calculate which item we should be showing
        const scrollPhaseTime = cycleElapsed % totalCycleTime;
        const itemIndex = Math.floor(scrollPhaseTime / SCROLL_CONFIG.itemDuration);

        // Calculate progress within current item
        const itemProgress =
          (scrollPhaseTime % SCROLL_CONFIG.itemDuration) / SCROLL_CONFIG.itemDuration;

        // Calculate scroll position with easing
        const easeInOut = t => (t < 0.5 ? 2 * t * t : 1 - Math.pow(-2 * t + 2, 2) / 2);
        const easedProgress = easeInOut(itemProgress);

        // Calculate the base position for the current item
        const basePosition = itemIndex * itemWidth;
        // Add the progress within the current item
        const scrollPosition = basePosition + itemWidth * easedProgress;

        // Apply scroll
        container.scrollLeft = scrollPosition;
      } else {
        // We're in the pause phase
        if (!isInPause) {
          // Just entered pause phase - scroll to start of next cycle
          container.scrollLeft = 0;
          isInPause = true;
        }
        // During pause, maintain position at start
      }

      animationRef.current = requestAnimationFrame(animate);
    };

    // Reset scroll position to start
    container.scrollLeft = 0;
    animationRef.current = requestAnimationFrame(animate);
  }, [isMobile, isPaused, reviewers.length, itemWidth]);

  // Handle mouse events for pause on hover
  const handleMouseEnter = () => setIsPaused(true);
  const handleMouseLeave = () => setIsPaused(false);

  useEffect(() => {
    if (!isMobile) {
      startAnimation();
    } else {
      // On mobile, disable animation and reset scroll position
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

  // Reset animation when pause state changes
  useEffect(() => {
    if (!isPaused && !isMobile) {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
      startAnimation();
    }
  }, [isPaused, startAnimation, isMobile]);

  return (
    <Box
      component="section"
      sx={{
        ...SECTION_STYLES_Y,
        ...SECTION_STYLES_X,
        backgroundColor: 'primary.800',
        boxShadow: '0 0 38px 0 rgba(0, 0, 0, 0.25)',
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
        <Box
          ref={scrollContainerRef}
          onMouseEnter={!isMobile ? handleMouseEnter : undefined}
          onMouseLeave={!isMobile ? handleMouseLeave : undefined}
          sx={{
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
              gap: 3,
              py: 2,
              minWidth: 'max-content',
            }}
          >
            {allReviewers.map((review, index) => (
              <Box
                key={`${review.name}-${index}`}
                sx={{
                  display: 'inline-block',
                  flexShrink: 0,
                  width: {
                    xs: 'calc(100vw - 48px)', // Full viewport width minus padding
                    sm: 'calc(100vw - 96px)', // Adjust for tablet
                    md: '400px',
                  },
                  maxWidth: {
                    xs: '400px', // Maximum width on mobile
                    md: '400px',
                  },
                  whiteSpace: 'normal',
                  verticalAlign: 'top',
                }}
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
