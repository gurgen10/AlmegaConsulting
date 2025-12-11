'use client';

import { Box, Typography } from '@mui/material';

import { CONTAINER_STYLES, SECTION_STYLES_X, SECTION_STYLES_Y } from '@/shared/constants/spacing';
import { useTranslations } from 'next-intl';
import Review from '@/components/common/Testimonials/Review';

export default function Testimonials() {
  const t = useTranslations('homePage');

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
  ];

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
          sx={{
            display: 'grid',
            gridTemplateColumns: {
              xs: '1fr',
              md: '1fr 1fr 1fr',
            },
            borderRadius: '8px',
            overflow: 'hidden',
            gap: 1,
          }}
        >
          {reviewers.map(review => (
            <Box key={review.name}>
              <Review name={review.name} position={review.position} review={review.review} />
            </Box>
          ))}
        </Box>
      </Box>
    </Box>
  );
}
