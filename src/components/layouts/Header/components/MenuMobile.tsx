import { Box, Button, Divider, Stack } from '@mui/material';
import { menuItems } from '@/components/layouts/Header/Header.constants';
import { useTranslations } from 'next-intl';
import Link from 'next/link';
import { LOGIN_URL, REGISTER_URL } from '@/shared/constants/common';

export default function MenuMobile() {
  const t = useTranslations('header');

  return (
    <Box p={2} pt={1} textAlign="center" color="white" component="nav">
      <Box
        sx={{
          background:
            'linear-gradient(90deg, rgba(255, 255, 255, 0.00) 0%, rgba(255, 255, 255, 0.40) 46%, rgba(255, 255, 255, 0.00) 100%)',
          height: '1px',
          mb: 3,
        }}
      />
      <Stack mb={3} gap={1}>
        {menuItems.map(item => (
          <Button component={Link} color="inherit" key={item.key} href={item.url} size="medium">
            {t(item.key)}
          </Button>
        ))}
      </Stack>

      <Button color="inherit" href={LOGIN_URL} size="medium">
        {t('login')}
      </Button>
      <Divider orientation="horizontal" sx={{ borderColor: 'tertiary.700', my: 2 }} />
      <Button
        component={Link}
        color="primary"
        href={REGISTER_URL}
        size="medium"
        variant="outlined"
        fullWidth
        sx={{ borderColor: 'primary.light', color: 'primary.300' }}
      >
        {t('getFreeProposals', { count: 5 })}
      </Button>
    </Box>
  );
}
