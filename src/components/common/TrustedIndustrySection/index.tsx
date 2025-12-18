'use client';

import { Box, Typography } from '@mui/material';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';
import './styles.css';
import { Mousewheel, Autoplay } from 'swiper/modules';

import { CONTAINER_STYLES, SECTION_STYLES_X } from '@/shared/constants/spacing';
import { useTranslations } from 'next-intl';
import TrustedLogo from '@/components/common/TrustedIndustrySection/TrustedLogo';

export default function Testimonials() {
  const t = useTranslations('homePage');

  const logos = [
    '/images/trusted-industry/Logo0.svg',
    '/images/trusted-industry/Logo1.svg',
    '/images/trusted-industry/Logo2.svg',
    '/images/trusted-industry/Logo3.svg',
    '/images/trusted-industry/Logo4.svg',
    '/images/trusted-industry/Logo5.svg',
    '/images/trusted-industry/Logo6.svg',
  ];

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
        <Box>
          <Swiper
            slidesPerView={2}
            spaceBetween={8}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
            loop={true}
            breakpoints={{
              425: {
                slidesPerView: 3,
                spaceBetween: 16,
              },
              640: {
                slidesPerView: 3,
                spaceBetween: 16,
              },

              900: {
                slidesPerView: 5,
                spaceBetween: 24,
              },
              1200: {
                slidesPerView: 6,
                spaceBetween: 24,
              },
            }}
            mousewheel={true}
            modules={[Mousewheel, Autoplay]}
          >
            {logos.map((logo, index) => (
              <SwiperSlide key={`${logo}-${index}`}>
                <TrustedLogo logo={logo} />
              </SwiperSlide>
            ))}
          </Swiper>
        </Box>
      </Box>
    </Box>
  );
}
