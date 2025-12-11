'use client';

import { Box, Button, Link as MuiLink } from '@mui/material';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useTranslations } from 'next-intl';
import { useMemo } from 'react';

import MenuTooltip from '@/components/layouts/Header/components/MenuTooltip';
import { menuItems as defaultMenuItems } from '@/components/layouts/Header/Header.constants';
import { REGISTER_URL } from '@/shared/constants/common';

export default function MenuDesktop() {
  const t = useTranslations('header');
  const pathname = usePathname();

  const activeItem = useMemo(() => {
    const activeMenuItem = defaultMenuItems.find(
      item => pathname === item.url || (item.url !== '/' && pathname.startsWith(item.url))
    );

    return activeMenuItem ? activeMenuItem.key : '/';
  }, [pathname]);

  return (
    <>
      {defaultMenuItems.map(item => {
        const isActive = activeItem === item.key;
        const link = (
          <MuiLink
            sx={{
              backgroundColor: 'transparent',
              padding: '6px 8px',
              color: isActive ? 'primary.500' : 'opacityDark.90',
              position: 'relative',
              cursor: 'pointer',
              '&:hover': {
                background: 'rgba(0, 5, 5, 0.04)',
              },
            }}
            underline="none"
            href={item.url}
            component={item.submenuItems?.length ? 'button' : 'a'}
            className={isActive ? 'active' : ''}
          >
            {t(item.key)}
          </MuiLink>
        );

        return item.submenuItems?.length ? (
          <MenuTooltip key={item.key} subMenuItems={item.submenuItems}>
            {link}
          </MenuTooltip>
        ) : (
          <Box key={item.key} sx={{ display: 'inline-block' }}>
            {link}
          </Box>
        );
      })}
      <Box sx={{ ml: 'auto', display: 'flex', alignItems: 'center' }}>
        <Button
          component={Link}
          href="/#book-a-demo"
          size="medium"
          variant="text"
          color="secondary"
        >
          {t('bookDemo')}
        </Button>
        <Box
          sx={{
            width: '1px',
            height: '38px',
            backgroundColor: 'opacityDark.12',
            transition: 'width 0.3s',
            mx: 2,
          }}
        ></Box>
        <Button
          href={REGISTER_URL}
          component={Link}
          variant="outlined"
          size="medium"
          color="primary"
        >
          {t('signUp')}
        </Button>
      </Box>
    </>
  );
}
