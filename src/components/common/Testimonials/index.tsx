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
  const [itemWidth, setItemWidth] = useState(1000);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  // Store animation state in refs
  const cycleStartTimeRef = useRef<number | null>(null);
  const isInitializedRef = useRef(false);
  const isHoveringRef = useRef(false);
  const lastScrollLeftRef = useRef(0);

  const handleMouseDown = (e: React.MouseEvent) => {
    if (!scrollContainerRef.current) return;

    setIsDragging(true);
    setStartX(e.pageX - scrollContainerRef.current.offsetLeft);
    setScrollLeft(scrollContainerRef.current.scrollLeft);
    setIsPaused(true);

    // Cancel any ongoing animation immediately
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
    // Don't immediately resume - let the user decide
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

    // Initialize animation state
    if (!cycleStartTimeRef.current) {
      cycleStartTimeRef.current = performance.now();
      isInitializedRef.current = true;

      // Start from the beginning
      container.scrollLeft = 0;
    }

    const PAUSE_DURATION = 3000;
    const totalCycleTime =
      reviewers.length * SCROLL_CONFIG.itemDuration + reviewers.length * PAUSE_DURATION;

    const animate = (timestamp: number) => {
      if (isPaused) {
        // Store current time to continue from same position when resumed
        if (cycleStartTimeRef.current) {
          const elapsed = timestamp - cycleStartTimeRef.current;
          // Adjust cycle start time to maintain position
          cycleStartTimeRef.current = timestamp - (elapsed % totalCycleTime);
        }
        return;
      }

      if (!cycleStartTimeRef.current) {
        cycleStartTimeRef.current = timestamp;
      }

      const cycleElapsed = timestamp - cycleStartTimeRef.current;
      const cyclePosition = cycleElapsed % totalCycleTime;

      let accumulatedTime = 0;
      let currentItem = 0;
      let itemProgress = 0;
      let isInPause = false;

      for (let i = 0; i < reviewers.length; i++) {
        const itemEnd = accumulatedTime + SCROLL_CONFIG.itemDuration;
        const pauseEnd = itemEnd + PAUSE_DURATION;

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

      if (!isInPause) {
        const easeInOut = (t: number) => (t < 0.5 ? 2 * t * t : 1 - Math.pow(-2 * t + 2, 2) / 2);
        const easedProgress = easeInOut(itemProgress);
        const basePosition = currentItem * itemWidth;
        container.scrollLeft = basePosition + itemWidth * easedProgress;

        // Store the last scroll position
        lastScrollLeftRef.current = container.scrollLeft;
      } else if (currentItem === reviewers.length - 1 && itemProgress === 1) {
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
  }, [isMobile, isPaused, reviewers.length, itemWidth, SCROLL_CONFIG.itemDuration]);

  const handleMouseEnter = () => {
    isHoveringRef.current = true;
    setIsPaused(true);

    // Store current scroll position
    if (scrollContainerRef.current) {
      lastScrollLeftRef.current = scrollContainerRef.current.scrollLeft;
    }
  };

  const handleMouseLeaveContainer = () => {
    isHoveringRef.current = false;

    // Only resume if not dragging
    if (!isDragging) {
      // Reset animation to start from current position
      if (scrollContainerRef.current && cycleStartTimeRef.current) {
        // Calculate which item we're currently showing
        const currentScrollLeft = scrollContainerRef.current.scrollLeft;
        const currentItemIndex = Math.floor(currentScrollLeft / itemWidth);
        const itemProgress = (currentScrollLeft % itemWidth) / itemWidth;

        // Reverse the easing to get linear progress
        const reverseEase = (eased: number): number => {
          if (eased < 0.5) {
            return Math.sqrt(eased / 2);
          }
          return 1 - Math.sqrt((1 - eased) / 2);
        };

        const linearProgress = reverseEase(itemProgress);

        // Calculate the time position in the cycle
        const now = performance.now();
        const PAUSE_DURATION = 3000;
        const totalItemTime = SCROLL_CONFIG.itemDuration + PAUSE_DURATION;

        // Adjust cycle start time so animation continues from current position
        const cycleTimeForCurrentItem =
          currentItemIndex * totalItemTime + linearProgress * SCROLL_CONFIG.itemDuration;
        cycleStartTimeRef.current = now - cycleTimeForCurrentItem;
      }

      // Wait a bit before resuming to avoid immediate jump
      setTimeout(() => {
        if (!isHoveringRef.current && !isDragging) {
          setIsPaused(false);
        }
      }, 100);
    }
  };

  useEffect(() => {
    if (!isMobile) {
      startAnimation();
    } else {
      if (scrollContainerRef.current) {
        scrollContainerRef.current.scrollLeft = 0;
      }
      // Reset animation state on mobile
      cycleStartTimeRef.current = null;
      isInitializedRef.current = false;
    }

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [startAnimation, isMobile]);

  // Reset animation when paused state changes
  useEffect(() => {
    if (isPaused && animationRef.current) {
      cancelAnimationFrame(animationRef.current);
      animationRef.current = null;
    } else if (!isPaused && !isMobile && !animationRef.current) {
      startAnimation();
    }
  }, [isPaused, startAnimation, isMobile]);

  // Clean up animation on unmount
  useEffect(() => {
    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, []);

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
          onMouseLeave={!isMobile ? handleMouseLeaveContainer : undefined}
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
            onMouseDown={handleMouseDown}
            onMouseLeave={handleMouseLeave}
            onMouseUp={handleMouseUp}
            onMouseMove={handleMouseMove}
            sx={{
              cursor: isDragging ? 'grabbing' : 'grab',
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
