import { Button, Divider, Link as MuiLink } from '@mui/material';
import { menuItems } from '@/components/layouts/Header/Header.constants';
import { useTranslations } from 'next-intl';
import Link from 'next/link';
import { LOGIN_URL, REGISTER_URL } from '@/shared/constants/common';

export default function MenuDesktop() {
  const t = useTranslations('header');

  return (
    <>
      {menuItems.map(item => (
        <MuiLink
          sx={{
            padding: '6px 8px',
            color: 'opacityDark.90',
            '&:hover': {
              color: 'primary.500',
            },
          }}
          underline="none"
          color="inherit"
          key={item.key}
          href={item.url}
        >
          {t(item.key)}
        </MuiLink>
      ))}
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
