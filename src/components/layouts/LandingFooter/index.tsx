'use client';

import { Box, Link as MuiLink, Typography } from '@mui/material';
import Image from 'next/image';
import Link from 'next/link';
import { useTranslations } from 'next-intl';
import { useMemo } from 'react';
import FooterMenuWrapper from '@/components/layouts/Footer/components/FooterMenuWrapper';

import FollowUs from '@/components/layouts/Footer/components/FollowUs';
import {
  FooterContainer,
  FooterCopyRightContainer,
  FooterFollowUsContainerMobile,
  FooterLink,
  FooterLinkBlock,
  FooterLinkContainer,
  FooterLinkItems,
  FooterLogoContainer,
} from '@/components/layouts/Footer/components/Footer.style';
import {
  featureSubmenuItems,
  menuItems,
  productSubmenuItems,
} from '@/components/layouts/Header/Header.constants';
import { FOOTER_STYLES } from '@/shared/constants/spacing';

export default function LandingFooter() {
  const t = useTranslations();

  const filteredMenuItems = useMemo(() => {
    return menuItems.filter(item => !item.submenuItems);
  }, []);
  return (
    <Box
      sx={{
        backgroundColor: 'tertiary.700',
      }}
    >
      <Box
        component="footer"
        sx={{
          ...FOOTER_STYLES,
        }}
      >
        <Box
          sx={{
            borderBottomWidth: '1px',
            borderBottomStyle: 'solid',
            borderBottomColor: 'opacityLight.30',
            paddingBottom: 4,
          }}
        >
          <FooterContainer>
            <FooterLogoContainer>
              <Link href="/">
                <Image width={165} height={34} src="/icons/solar-genix.svg" alt="SolarGenix Logo" />
              </Link>
              <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
                <FollowUs />
              </Box>
            </FooterLogoContainer>
          </FooterContainer>
          <FooterFollowUsContainerMobile>
            <FollowUs />
          </FooterFollowUsContainerMobile>
        </Box>
        <FooterCopyRightContainer>
          <Typography className="copy-right" variant="caption" color="grey.300">
            SolarGenix © 2025, {t('footer.allRightsReserved')}.
          </Typography>
          <Box>
            <MuiLink
              variant="body2"
              sx={{
                color: 'grey.300',
                textDecoration: 'underline',
                '&:hover': { color: 'primary.500' },
              }}
              href="/#policy"
            >
              {t('footer.privacyPolicy')}
            </MuiLink>
            <MuiLink
              variant="body2"
              sx={{
                ml: 2,
                textDecoration: 'underline',
                color: 'grey.300',
                '&:hover': { color: 'primary.500' },
              }}
              href="/#term"
            >
              {t('footer.terms')}
            </MuiLink>
          </Box>
        </FooterCopyRightContainer>
      </Box>
    </Box>
  );
}
