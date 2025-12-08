'use client';

import { Box, Typography, useMediaQuery } from '@mui/material';
import { useEffect, useRef, useState, useCallback } from 'react';
import Image from 'next/image';
import { CONTAINER_STYLES, SECTION_STYLES_X } from '@/shared/constants/spacing';
import { useTranslations } from 'next-intl';

export default function TrustedIndustrySection() {
  const t = useTranslations('homePage');
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const animationFrameRef = useRef<number>(0);
  const isScrolling = useRef<boolean>(true);
  const [isDragging, setIsDragging] = useState(false);
  const dragStartX = useRef<number>(0);
  const dragScrollLeft = useRef<number>(0);
  const scrollPosition = useRef<number>(0);
  const [isHovering, setIsHovering] = useState(false);

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
  const scrollSpeed = useRef(0.5); // pixels per frame for auto-scroll

  // Calculate dimensions
  const logoWidthWithGap = logoWidth + gap;
  const totalWidth = logoWidthWithGap * logos.length;

  // Start/stop auto-scroll
  const startAutoScroll = useCallback(() => {
    if (!isScrolling.current || isDragging) return;

    const animate = (timestamp: number) => {
      if (!scrollContainerRef.current || !isScrolling.current || isDragging) return;

      // Auto-scroll logic
      scrollPosition.current = scrollPosition.current + scrollSpeed.current;

      // Reset position when we've scrolled through one complete set
      if (scrollPosition.current >= totalWidth) {
        scrollPosition.current = 0;
      }

      scrollContainerRef.current.style.transform = `translateX(-${scrollPosition.current}px)`;
      animationFrameRef.current = requestAnimationFrame(animate);
    };

    animationFrameRef.current = requestAnimationFrame(animate);
  }, [isDragging, totalWidth]);

  const stopAutoScroll = useCallback(() => {
    isScrolling.current = false;
    if (animationFrameRef.current) {
      cancelAnimationFrame(animationFrameRef.current);
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

  const handleMouseMove = useCallback(
    (e: MouseEvent) => {
      if (!isDragging || !scrollContainerRef.current) return;

      const x = e.pageX - scrollContainerRef.current.offsetLeft;
      const walk = (x - dragStartX.current) * 1.5; // Scroll speed multiplier
      const newPosition = dragScrollLeft.current - walk;

      // Update scroll position with boundary checking
      scrollPosition.current = Math.max(0, newPosition);

      // Allow infinite scrolling by resetting position
      if (scrollPosition.current >= totalWidth) {
        scrollPosition.current = scrollPosition.current % totalWidth;
      }

      scrollContainerRef.current.style.transform = `translateX(-${scrollPosition.current}px)`;
    },
    [isDragging, totalWidth]
  );

  const handleMouseUp = useCallback(() => {
    if (!isDragging) return;

    setIsDragging(false);
    document.body.style.cursor = '';
    document.body.style.userSelect = '';

    // Resume auto-scroll after a delay if not hovering
    if (!isHovering) {
      setTimeout(() => {
        isScrolling.current = true;
        startAutoScroll();
      }, 1000);
    }
  }, [isDragging, isHovering, startAutoScroll]);

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
      if (!isDragging || !scrollContainerRef.current) return;

      const touch = e.touches[0];
      const x = touch.pageX - scrollContainerRef.current.offsetLeft;
      const walk = (x - dragStartX.current) * 1.5;
      const newPosition = dragScrollLeft.current - walk;

      scrollPosition.current = Math.max(0, newPosition);

      if (scrollPosition.current >= totalWidth) {
        scrollPosition.current = scrollPosition.current % totalWidth;
      }

      scrollContainerRef.current.style.transform = `translateX(-${scrollPosition.current}px)`;
    },
    [isDragging, totalWidth]
  );

  const handleTouchEnd = useCallback(() => {
    setIsDragging(false);

    if (!isHovering) {
      setTimeout(() => {
        isScrolling.current = true;
        startAutoScroll();
      }, 1000);
    }
  }, [isHovering, startAutoScroll]);

  // Hover handlers
  const handleMouseEnter = useCallback(() => {
    setIsHovering(true);
    stopAutoScroll();
  }, [stopAutoScroll]);

  const handleMouseLeave = useCallback(() => {
    setIsHovering(false);
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
          onMouseEnter={handleMouseEnter}
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
                opacity: isHovering ? 1 : 0.6,
                transition: 'opacity 0.3s ease',
              }}
            >
              <span>← Drag to scroll →</span>
            </Box>
          )}

          <Box
            ref={scrollContainerRef}
            onMouseDown={handleMouseDown}
            onTouchStart={handleTouchStart}
            sx={{
              display: 'flex',
              alignItems: 'center',
              gap: `${gap}px`,
              willChange: 'transform',
              touchAction: 'none', // Prevent browser touch actions
            }}
          >
            {/* Render logos multiple times for seamless infinite scroll */}
            {[...logos, ...logos, ...logos].map((logo, index) => (
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
                  opacity: isDragging ? 1 : 0.9,
                  transition: 'opacity 0.3s ease',
                  transform: isDragging ? 'scale(1.02)' : 'scale(1)',
                  transitionProperty: 'opacity, transform',
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
            ))}
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
