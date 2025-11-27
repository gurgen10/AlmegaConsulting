import { Box, Button, Stack, Typography } from '@mui/material';
import { getTranslations } from 'next-intl/server';
import { CONTAINER_STYLES } from '@/shared/constants/spacing';
import DarkPrimaryButton from '@/components/ui/DarkPrimaryButton';
import { BOOK_DEMO_URL, REGISTER_URL } from '@/shared/constants/common';
import Link from 'next/link';

export default async function HeroSection() {
  const t = await getTranslations('heroSection');

  return (
    <Box
      component="section"
      sx={{
        minHeight: '93vh',
        color: 'grey.25',
        display: 'flex',
        alignItems: 'center',
        background:
          'linear-gradient(271deg, rgba(0, 0, 0, 0.00) 42.2%, rgba(0, 0, 0, 0.45) 64.87%, rgba(0, 0, 0, 0.50) 98.88%), url(/images/bg-foto.webp) center / cover',
      }}>
      <Box {...CONTAINER_STYLES}>
        <Stack maxWidth={{ xs: 494, md: 520, xl: 616 }} gap={2.75}>
          <Typography variant="h1" fontWeight={250}>
            {t('makingSolarSimple')}
          </Typography>
          <Typography variant="h5" fontWeight={250}>
            {t.rich('description', {
              bold: chunks => (
                <Typography variant="inherit" component="strong" fontWeight={500}>
                  {chunks}
                </Typography>
              ),
            })}
          </Typography>
          <div>
            <Stack direction="row" gap={2}>
              <Button
                size="large"
                variant="contained"
                color="secondary"
                component="a"
                href={REGISTER_URL}>
                {t('getStartedFree')}
              </Button>
              <DarkPrimaryButton
                size="large"
                variant="contained"
                component={Link}
                href={BOOK_DEMO_URL}>
                {t('bookDemo')}
              </DarkPrimaryButton>
            </Stack>
            <Typography variant="subtitle2" mt={1} fontWeight={250}>
              {t('noCreditCardRequired')}
            </Typography>
          </div>
        </Stack>
      </Box>
    </Box>
  );
}
