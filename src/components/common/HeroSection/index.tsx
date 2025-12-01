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
        display: 'flex',
        alignItems: 'center',
      }}
    >
      <Box {...CONTAINER_STYLES}>
        <Stack maxWidth={{ xs: 494, md: 520, xl: 616 }} gap={2.75}>
          <Typography component="h1" variant="h3" fontWeight={500}>
            {t('createSolarPanel')}
          </Typography>
          <Typography variant="subtitle2" fontWeight={250}>
            {t.rich('description', {
              bold: chunks => (
                <Typography variant="inherit" component="strong" fontWeight={700}>
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
                href={REGISTER_URL}
              >
                {t('getStartedFree')}
              </Button>
              <DarkPrimaryButton
                size="large"
                variant="contained"
                component={Link}
                href={BOOK_DEMO_URL}
              >
                {t('bookDemo')}
              </DarkPrimaryButton>
            </Stack>
          </div>
        </Stack>
      </Box>
    </Box>
  );
}
