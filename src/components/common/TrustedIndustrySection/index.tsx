'use client';

import { Box, Typography, useMediaQuery } from '@mui/material';
import { useEffect, useRef, useState, useCallback } from 'react';
import Image from 'next/image';
import { CONTAINER_STYLES, SECTION_STYLES_X } from '@/shared/constants/spacing';
import { useTranslations } from 'next-intl';

export default function TrustedIndustrySection() {
  const t = useTranslations('homePage');
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const animationFrameRef = useRef<number | null>(null);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  const isScrolling = useRef<boolean>(true);
  const [isDragging, setIsDragging] = useState(false);
  const dragStartX = useRef<number>(0);
  const dragScrollLeft = useRef<number>(0);
  const scrollPosition = useRef<number>(0);
  const [currentLogoIndex, setCurrentLogoIndex] = useState(0);

  const [logos] = useState([
    '/images/trusted-industry/Logo0.svg',
    '/images/trusted-industry/Logo1.svg',
    '/images/trusted-industry/Logo2.svg',
    '/images/trusted-industry/Logo3.svg',
    '/images/trusted-industry/Logo4.svg',
    '/images/trusted-industry/Logo5.svg',
    '/images/trusted-industry/Logo6.svg',
  ]);

  const isMobile = useMediaQuery('(max-width: 600px)');
  const logoWidth = isMobile ? 120 : 180;
  const gap = 8;

  // Calculate dimensions
  const logoWidthWithGap = logoWidth + gap;
  const totalWidth = logoWidthWithGap * logos.length;

  // Start auto-scroll with delay between logos
  const startAutoScroll = useCallback(() => {
    if (!isScrolling.current || isDragging) return;

    let isPaused = false;
    let targetPosition = logoWidthWithGap; // Start by moving to first logo

    const animate = () => {
      if (!scrollContainerRef.current || !isScrolling.current || isDragging) return;

      if (!isPaused) {
        // Smooth scroll to the current target position
        const distanceToTarget = targetPosition - scrollPosition.current;

        if (Math.abs(distanceToTarget) < 0.5) {
          // Reached target position, pause for 1 second
          isPaused = true;

          // Set timeout to resume after 1 second
          timeoutRef.current = setTimeout(() => {
            isPaused = false;

            // Update to next logo
            setCurrentLogoIndex(prev => {
              const nextIndex = (prev + 1) % logos.length;
              targetPosition = (nextIndex + 1) * logoWidthWithGap;

              // If we've scrolled through all logos in the current set, reset position
              if (targetPosition >= totalWidth) {
                scrollPosition.current = 0;
                targetPosition = logoWidthWithGap;
                return 0;
              }

              return nextIndex;
            });

            // Continue animation
            if (isScrolling.current && !isDragging) {
              animationFrameRef.current = requestAnimationFrame(animate);
            }
          }, 1000); // 1 second delay
        } else {
          // Smoothly scroll towards target position
          scrollPosition.current += distanceToTarget * 0.05; // Smooth easing

          // Update container position
          scrollContainerRef.current.style.transform = `translateX(-${scrollPosition.current}px)`;
          scrollContainerRef.current.style.transition = 'transform 0.1s linear';
        }
      }

      // Continue animation if not paused
      if (!isPaused) {
        animationFrameRef.current = requestAnimationFrame(animate);
      }
    };

    animationFrameRef.current = requestAnimationFrame(animate);
  }, [isDragging, logoWidthWithGap, logos.length, totalWidth]);

  const stopAutoScroll = useCallback(() => {
    isScrolling.current = false;
    if (animationFrameRef.current !== null) {
      cancelAnimationFrame(animationFrameRef.current);
      animationFrameRef.current = null;
    }
    if (timeoutRef.current !== null) {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    }
  }, []);

  // Manual scrolling handlers
  const handleMouseDown = useCallback(
    (e: React.MouseEvent) => {
      if (!scrollContainerRef.current) return;

      setIsDragging(true);
      stopAutoScroll();

      dragStartX.current = e.pageX - scrollContainerRef.current.offsetLeft;
      dragScrollLeft.current = scrollPosition.current;

      document.body.style.cursor = 'grabbing';
      document.body.style.userSelect = 'none';
    },
    [stopAutoScroll]
  );

  const updateScrollPosition = useCallback(
    (clientX: number) => {
      if (!scrollContainerRef.current) return;

      const x = clientX - scrollContainerRef.current.offsetLeft;
      const walk = (x - dragStartX.current) * 1.5;
      const newPosition = dragScrollLeft.current - walk;

      // Update scroll position with boundary checking
      scrollPosition.current = Math.max(0, newPosition);

      // Calculate which logo is currently centered
      const currentIndex = Math.round(scrollPosition.current / logoWidthWithGap) % logos.length;
      setCurrentLogoIndex(currentIndex);

      // Allow infinite scrolling by resetting position
      if (scrollPosition.current >= totalWidth) {
        scrollPosition.current = scrollPosition.current % totalWidth;
      }

      scrollContainerRef.current.style.transform = `translateX(-${scrollPosition.current}px)`;
      scrollContainerRef.current.style.transition = 'none'; // Remove transition during drag
    },
    [logoWidthWithGap, logos.length, totalWidth]
  );

  const handleMouseMove = useCallback(
    (e: MouseEvent) => {
      if (!isDragging) return;
      updateScrollPosition(e.pageX);
    },
    [isDragging, updateScrollPosition]
  );

  const handleMouseUp = useCallback(() => {
    if (!isDragging) return;

    setIsDragging(false);
    document.body.style.cursor = '';
    document.body.style.userSelect = '';

    // Snap to nearest logo when releasing drag
    if (scrollContainerRef.current) {
      scrollPosition.current =
        Math.round(scrollPosition.current / logoWidthWithGap) * logoWidthWithGap;
      scrollContainerRef.current.style.transform = `translateX(-${scrollPosition.current}px)`;
      scrollContainerRef.current.style.transition = 'transform 0.3s ease';

      const currentIndex = Math.round(scrollPosition.current / logoWidthWithGap) % logos.length;
      setCurrentLogoIndex(currentIndex);
    }

    // Resume auto-scroll after a delay if not hovering
    setTimeout(() => {
      isScrolling.current = true;
      startAutoScroll();
    }, 1000);
  }, [isDragging, startAutoScroll, logoWidthWithGap, logos.length]);

  // Touch handlers for mobile
  const handleTouchStart = useCallback(
    (e: React.TouchEvent) => {
      if (!scrollContainerRef.current) return;

      setIsDragging(true);
      stopAutoScroll();

      const touch = e.touches[0];
      dragStartX.current = touch.pageX - scrollContainerRef.current.offsetLeft;
      dragScrollLeft.current = scrollPosition.current;
    },
    [stopAutoScroll]
  );

  const handleTouchMove = useCallback(
    (e: TouchEvent) => {
      if (!isDragging) return;
      updateScrollPosition(e.touches[0].pageX);
    },
    [isDragging, updateScrollPosition]
  );

  const handleTouchEnd = useCallback(() => {
    setIsDragging(false);

    // Snap to nearest logo when releasing touch
    if (scrollContainerRef.current) {
      scrollPosition.current =
        Math.round(scrollPosition.current / logoWidthWithGap) * logoWidthWithGap;
      scrollContainerRef.current.style.transform = `translateX(-${scrollPosition.current}px)`;
      scrollContainerRef.current.style.transition = 'transform 0.3s ease';

      const currentIndex = Math.round(scrollPosition.current / logoWidthWithGap) % logos.length;
      setCurrentLogoIndex(currentIndex);
    }

    setTimeout(() => {
      isScrolling.current = true;
      startAutoScroll();
    }, 1000);
  }, [startAutoScroll, logoWidthWithGap, logos.length]);

  const handleMouseLeave = useCallback(() => {
    if (!isDragging) {
      isScrolling.current = true;
      startAutoScroll();
    }
  }, [isDragging, startAutoScroll]);

  // Initialize auto-scroll
  useEffect(() => {
    startAutoScroll();
    return () => {
      stopAutoScroll();
    };
  }, [startAutoScroll, stopAutoScroll]);

  // Add global mouse/touch event listeners
  useEffect(() => {
    if (isDragging) {
      document.addEventListener('mousemove', handleMouseMove);
      document.addEventListener('mouseup', handleMouseUp);
      document.addEventListener('touchmove', handleTouchMove);
      document.addEventListener('touchend', handleTouchEnd);
    }

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleMouseUp);
      document.removeEventListener('touchmove', handleTouchMove);
      document.removeEventListener('touchend', handleTouchEnd);
    };
  }, [isDragging, handleMouseMove, handleMouseUp, handleTouchMove, handleTouchEnd]);

  return (
    <Box
      component="section"
      sx={{
        ...SECTION_STYLES_X,
        backgroundColor: 'primary.800',
        pt: 2,
        pb: 4,
        overflow: 'hidden',
      }}
    >
      <Box {...CONTAINER_STYLES}>
        <Typography
          component="h2"
          variant="h6"
          fontWeight={500}
          textAlign={'center'}
          color={'grey.25'}
          sx={{
            mb: 3,
          }}
        >
          {t('trustedIndustry')}
        </Typography>

        <Box
          sx={{
            position: 'relative',
            width: '100%',
            overflow: 'hidden',
            userSelect: 'none',
            cursor: isDragging ? 'grabbing' : 'grab',
          }}
          // onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          {/* Gradient overlays */}
          <Box
            sx={{
              position: 'absolute',
              left: 0,
              top: 0,
              bottom: 0,
              width: '100px',
              zIndex: 2,
              pointerEvents: 'none',
            }}
          />
          <Box
            sx={{
              position: 'absolute',
              right: 0,
              top: 0,
              bottom: 0,
              width: '100px',
              zIndex: 2,
              pointerEvents: 'none',
            }}
          />

          {/* Scroll instruction hint */}
          {!isMobile && (
            <Box
              sx={{
                position: 'absolute',
                top: -30,
                right: 20,
                color: 'grey.400',
                fontSize: '0.75rem',
                display: 'flex',
                alignItems: 'center',
                gap: 0.5,
                zIndex: 3,
                opacity: 0.6,
                transition: 'opacity 0.3s ease',
              }}
            >
              <span>← Drag to scroll →</span>
            </Box>
          )}

          {/* Current logo indicator */}
          <Box
            sx={{
              position: 'absolute',
              top: -30,
              left: 20,
              color: 'grey.400',
              fontSize: '0.75rem',
              zIndex: 3,
              display: 'flex',
              alignItems: 'center',
              gap: 0.5,
            }}
          >
            <span>
              {currentLogoIndex + 1} / {logos.length}
            </span>
          </Box>

          <Box
            ref={scrollContainerRef}
            onMouseDown={handleMouseDown}
            onTouchStart={handleTouchStart}
            sx={{
              display: 'flex',
              alignItems: 'center',
              gap: `${gap}px`,
              willChange: 'transform',
              touchAction: 'none',
            }}
          >
            {/* Render logos multiple times for seamless infinite scroll */}
            {[...logos, ...logos, ...logos].map((logo, index) => {
              const logoSetIndex = index % logos.length;
              const isCurrentLogo = logoSetIndex === currentLogoIndex;

              return (
                <Box
                  key={`${logo}-${index}`}
                  sx={{
                    flexShrink: 0,
                    width: `${logoWidth}px`,
                    height: 'auto',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    filter: 'brightness(0) invert(1)',
                    opacity: 0.6,
                    transform: isCurrentLogo ? 'scale(1.05)' : 'scale(1)',
                    transition: 'opacity 0.3s ease, transform 0.3s ease',
                    '&:hover': {
                      opacity: 1,
                    },
                  }}
                >
                  <Image
                    src={logo}
                    alt=""
                    width={logoWidth}
                    height={40}
                    style={{
                      width: '100%',
                      height: '28px',
                      objectFit: 'contain',
                      pointerEvents: 'none',
                    }}
                    priority={index < 14}
                  />
                </Box>
              );
            })}
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
