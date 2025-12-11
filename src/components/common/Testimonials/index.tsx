'use client';

import { Box, Typography } from '@mui/material';
import { useRef } from 'react';
import { useTheme, useMediaQuery } from '@mui/material';

import { CONTAINER_STYLES, SECTION_STYLES_X, SECTION_STYLES_Y } from '@/shared/constants/spacing';
import { useTranslations } from 'next-intl';
import Review from '@/components/common/Testimonials/Review';

export default function Testimonials() {
  const t = useTranslations('homePage');
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const scrollContainerRef = useRef(null);

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
          sx={{
            position: 'relative',
            overflow: 'hidden',
            '&:hover .scroll-content': {
              animationPlayState: 'paused',
            },
          }}
        >
          <Box
            className="scroll-content"
            sx={{
              display: 'flex',
              gap: 3,
              py: 2,
              animation: !isMobile ? 'scroll 30s linear infinite' : 'none',
              '@keyframes scroll': {
                '0%': {
                  transform: 'translateX(0)',
                },
                '100%': {
                  transform: 'translateX(-50%)',
                },
              },
            }}
          >
            {allReviewers.map((review, index) => (
              <Box
                key={`${review.name}-${index}`}
                sx={{
                  flex: '0 0 auto',
                  width: {
                    xs: '100%',
                    md: '400px',
                  },
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
