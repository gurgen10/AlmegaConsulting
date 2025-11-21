'use client';

import { Box, Typography, Link as MuiLink } from '@mui/material';
import { FOOTER_STYLES } from '@/shared/constants/spacing';
import Link from 'next/link';
import Image from 'next/image';
import { useTranslations } from 'next-intl';
import {
  featureSubmenuItems,
  menuItems,
  productSubmenuItems,
} from '@/components/layouts/Header/Header.constants';
import { useMemo } from 'react';
import FooterMenuWrapper from '@/components/layouts/Footer/components/FooterMenuWrapper';
import { useTheme } from '@mui/material/styles';
import {
  FooterContainer,
  FooterLink,
  FooterLinkBlock,
  FooterLinkContainer,
} from '@/components/layouts/Footer/components/Footer.style';
import FollowUs from '@/components/layouts/Footer/components/FollowUs';

export default function Footer() {
  const t = useTranslations();
  const theme = useTheme();

  const filteredMenuItems = useMemo(() => {
    return menuItems.filter(item => !item.submenuItems);
  }, []);
  return (
    <Box
      sx={{
        backgroundColor: 'tertiary.700',
      }}>
      <Box
        component="footer"
        sx={{
          ...FOOTER_STYLES,
        }}>
        <Box
          sx={{
            borderBottomWidth: '1px',
            borderBottomStyle: 'solid',
            borderBottomColor: 'opacityLight.30',
            paddingBottom: 4,
          }}>
          <FooterContainer>
            <Box
              component={Link}
              href="/"
              lineHeight={1}
              sx={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                marginBottom: 4,
              }}>
              <Image width={165} height={34} src="/icons/solar-genix.svg" alt="SolarGenix Logo" />
              <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
                <FollowUs />
              </Box>
            </Box>
            <FooterLinkContainer>
              <FooterLinkBlock>
                <FooterMenuWrapper>{t('header.product')}</FooterMenuWrapper>
                <Box sx={{ display: 'flex', flexDirection: 'column', pr: '20%' }}>
                  {productSubmenuItems.map(item => (
                    <Box key={item.key}>
                      <FooterLink variant="body2" href={item.url}>
                        {t(`header.${item.key}`)}
                      </FooterLink>
                    </Box>
                  ))}
                </Box>
              </FooterLinkBlock>
              <FooterLinkBlock>
                <FooterMenuWrapper>{t('header.features')}</FooterMenuWrapper>
                <Box sx={{ display: 'flex', flexDirection: 'column', pr: '20%' }}>
                  {featureSubmenuItems.map(item => (
                    <Box key={item.key}>
                      <FooterLink variant="body2" href={item.url}>
                        {t(`header.${item.key}`)}
                      </FooterLink>
                    </Box>
                  ))}
                </Box>
              </FooterLinkBlock>
              <FooterLinkBlock>
                <FooterMenuWrapper>{t('header.company')}</FooterMenuWrapper>
                <Box sx={{ display: 'flex', flexDirection: 'column', pr: '20%' }}>
                  {filteredMenuItems.map(item => (
                    <Box key={item.key}>
                      <FooterLink variant="body2" href={item.url}>
                        {t(`header.${item.key}`)}
                      </FooterLink>
                    </Box>
                  ))}
                </Box>
              </FooterLinkBlock>
            </FooterLinkContainer>
          </FooterContainer>
          <Box sx={{ display: { xs: 'flex', md: 'none' }, width: '100%' }}>
            <FollowUs />
          </Box>
        </Box>
        <Box sx={{ marginTop: 2, display: 'flex', justifyContent: 'space-between' }}>
          <Typography variant="caption" color="grey.300">
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
              href="/#policy">
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
              href="/#term">
              {t('footer.terms')}
            </MuiLink>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
