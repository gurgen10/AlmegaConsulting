import { getTranslations } from 'next-intl/server';
import { Box, Typography } from '@mui/material';
import { CONTAINER_STYLES } from '@/shared/constants/spacing';

export default async function ProductDescriptionSection() {
  const t = await getTranslations('productDescription');

  return (
    <Box
      component="section"
      textAlign="center"
      sx={{
        borderTop: '1px solid var(--mui-palette-grey-25)',
        background: 'var(--mui-palette-primary-900)',
      }}>
      <Box {...CONTAINER_STYLES}>
        <Typography variant="h2" fontWeight={250} color="secondary.400">
          {t('title')}
        </Typography>
        <Typography
          variant="subtitle2"
          fontWeight={300}
          color="grey.25"
          mt={{ xs: 3, lg: 4 }}
          pb={{ xs: 7, sm: 0 }}>
          {t('description')}
        </Typography>
      </Box>
    </Box>
  );
}
