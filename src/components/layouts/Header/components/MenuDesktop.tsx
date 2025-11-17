import { Button, Divider } from '@mui/material';
import { menuItems } from '@/components/layouts/Header/Header.constants';
import { useTranslations } from 'next-intl';
import Link from 'next/link';
import { LOGIN_URL, REGISTER_URL } from '@/shared/constants/common';

export default function MenuDesktop() {
  const t = useTranslations('header');

  return (
    <>
      {menuItems.map(item => (
        <Button component={Link} color="inherit" key={item.key} href={item.url} size="medium">
          {t(item.key)}
        </Button>
      ))}
      <Button color="inherit" href={LOGIN_URL} size="medium" sx={{ ml: 'auto' }}>
        {t('login')}
      </Button>
      <Divider orientation="vertical" sx={{ height: 32, borderColor: 'tertiary.700' }} />
      <Button
        component={Link}
        color="primary"
        href={REGISTER_URL}
        size="medium"
        variant="outlined"
        sx={{ borderColor: 'primary.light', color: 'primary.300' }}
      >
        {t('getFreeProposals', { count: 5 })}
      </Button>
    </>
  );
}
