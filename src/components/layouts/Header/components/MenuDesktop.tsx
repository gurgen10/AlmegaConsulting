import { Button, Link as MuiLink, Box } from '@mui/material';
import { menuItems as defaultMenuItems } from '@/components/layouts/Header/Header.constants';
import { useTranslations } from 'next-intl';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { LOGIN_URL, REGISTER_URL } from '@/shared/constants/common';
import MenuTooltip from '@/components/layouts/Header/components/MenuTooltip';
import { MenuItem } from '@/components/layouts/Header/header.types';
import { useState, useEffect } from 'react';

export default function MenuDesktop() {
  const t = useTranslations('header');
  const pathname = usePathname();
  const router = useRouter();
  const [activeItem, setActiveItem] = useState<string>('');

  useEffect(() => {
    if (defaultMenuItems.length > 0 && !activeItem) {
      setActiveItem(defaultMenuItems[0].key);
    }
  }, []);

  useEffect(() => {
    if (pathname) {
      const activeMenuItem = defaultMenuItems.find(
        item => pathname === item.url || (item.url !== '/' && pathname.startsWith(item.url))
      );
      if (activeMenuItem) {
        setActiveItem(activeMenuItem.key);
      }
    }
  }, [pathname]);

  const handleItemClick = (item: MenuItem) => {
    setActiveItem(item.key);
    router.push(item.url);
  };

  return (
    <>
      {defaultMenuItems.map(item => {
        const isActive = activeItem === item.key;
        const link = (
          <MuiLink
            key={item.key}
            sx={{
              padding: '6px 8px',
              color: isActive ? 'primary.500' : 'opacityDark.90',
              fontWeight: isActive ? 600 : 400,
              position: 'relative',
              cursor: 'pointer',
              '&:hover': {
                background: 'rgba(0, 5, 5, 0.04)',
              },
            }}
            underline="none"
            component="button"
            onClick={() => handleItemClick(item)}
            className={isActive ? 'active' : ''}
          >
            {t(item.key)}
          </MuiLink>
        );

        const menuItem = item.submenuItems?.length ? (
          <MenuTooltip key={item.key} subMenuItems={item.submenuItems}>
            {link}
          </MenuTooltip>
        ) : (
          <Box key={item.key} sx={{ display: 'inline-block' }}>
            {link}
          </Box>
        );

        return menuItem;
      })}
      <Button
        component={Link}
        color="primary"
        href={REGISTER_URL}
        size="medium"
        sx={{
          ml: 'auto',
          backgroundColor: 'secondary.500',
          color: 'grey.50',
          '&:hover': {
            backgroundColor: 'secondary.700',
          },
        }}
      >
        {t('bookDemo')}
      </Button>
      <Button
        color="inherit"
        href={LOGIN_URL}
        size="medium"
        sx={{
          backgroundColor: 'primary.500',
          borderRadius: '4px',
          color: 'grey.50',
          '&:hover': {
            backgroundColor: 'primary.600',
          },
        }}
      >
        {t('login')}
      </Button>
    </>
  );
}
