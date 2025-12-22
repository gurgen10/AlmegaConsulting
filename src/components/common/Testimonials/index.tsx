'use client';

import { Box, Typography } from '@mui/material';
import { useRef } from 'react';
import { useTheme } from '@mui/material';

import { CONTAINER_STYLES, SECTION_STYLES_X, SECTION_STYLES_Y } from '@/shared/constants/spacing';
import { useTranslations } from 'next-intl';
import Review from '@/components/common/Testimonials/Review';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';
import './styles.css';
import { Mousewheel, Autoplay } from 'swiper/modules';

export default function Testimonials() {
  const t = useTranslations('homePage');
  const theme = useTheme();
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const reviewers = [
    {
      name: 'John Doe',
      position: 'CEO, SolarGenix',
      review:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec metus vel ante bibendum facilisis. Nullam nec metus vel ante bibendum facilisis.',
      image: '/images/Testimonials/reviewer.svg',
    },
    {
      name: 'John Smith',
      position: 'CEO, SolarGenix',
      review:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec metus vel ante bibendum facilisis. Nullam nec metus vel ante bibendum facilisis.',
      image: '/images/Testimonials/reviewer.svg',
    },
    {
      name: 'John Carter',
      position: 'CEO, SolarGenix',
      review:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec metus vel ante bibendum facilisis. Nullam nec metus vel ante bibendum facilisis.',
      image: '/images/Testimonials/reviewer.svg',
    },
    {
      name: 'Sarah Johnson',
      position: 'CTO, SunPower',
      review:
        'Excellent software that streamlined our solar sales process. Highly recommended for any solar business.',
      image: '/images/Testimonials/reviewer.svg',
    },
    {
      name: 'Mike Wilson',
      position: 'Sales Director, SolarEdge',
      review:
        'The best investment we made this year. Increased our conversion rates by 40% in just 3 months.',
      image: '/images/Testimonials/reviewer.svg',
    },
    {
      name: 'Emma Davis',
      position: 'Operations Manager, GreenEnergy',
      review: 'User-friendly interface with powerful features. Our team adapted to it within days.',
      image: '/images/Testimonials/reviewer.svg',
    },
  ];

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
            overflowX: 'hidden',
          },
        })}
      >
        <Box
          ref={scrollContainerRef}
          sx={{
            ...CONTAINER_STYLES,
            position: 'relative',
            overflowX: 'auto',
            overflowY: 'hidden',
            whiteSpace: 'nowrap',
            scrollbarWidth: 'none',
            '&::-webkit-scrollbar': {
              display: 'none',
            },
            cursor: 'grab',
            '&:active': {
              cursor: 'grabbing',
            },
            [theme.breakpoints.down('lg')]: {
              width: '120%',
              overflowX: 'hidden',
            },
            [theme.breakpoints.down('sm')]: {
              width: '180%',
              overflowX: 'hidden',
            },
          }}
        >
          <Swiper
            slidesPerView={2}
            spaceBetween={8}
            centeredSlidesBounds={true}
            freeMode={true}
            autoplay={{
              delay: 2000,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
            loop={true}
            breakpoints={{
              640: {
                slidesPerView: 2,
              },

              900: {
                slidesPerView: 3,
              },
            }}
            mousewheel={true}
            modules={[Mousewheel, Autoplay]}
            className="swipe-testimonials"
            style={{
              width: '100%',
              height: '100%',
            }}
          >
            {reviewers.map((review, index) => (
              <SwiperSlide
                key={`${review}-${index}`}
                style={{
                  height: 'auto',
                }}
              >
                <Review
                  name={review.name}
                  position={review.position}
                  review={review.review}
                  image={review.image}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </Box>
      </Box>
    </Box>
  );
}
