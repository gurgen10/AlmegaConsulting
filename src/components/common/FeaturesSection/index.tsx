import { CONTAINER_STYLES } from '@/shared/constants/spacing';
import { Box, Button, Stack, Typography } from '@mui/material';
import { getTranslations } from 'next-intl/server';
import Image from 'next/image';
import { features } from '@/components/common/FeaturesSection/FeaturesSection.constants';
import GradientDivider from '@/components/ui/GradientDivider';

export default async function FeaturesSection() {
  const t = await getTranslations('featuresSection');

  return (
    <Box component="section" {...CONTAINER_STYLES}>
      <Box mx="auto" maxWidth={{ xs: 520, md: '100%' }}>
        <Stack gap={{ xs: 6, md: 8 }}>
          {features.map(({ key, options, imgUrl }, index) => (
            <Box
              key={key}
              display="grid"
              gridTemplateColumns={{ md: '1fr 1fr' }}
              columnGap={7.5}
              rowGap={3}
            >
              <Typography
                variant="h3"
                component="h3"
                color="secondary.500"
                fontWeight="250"
                order={index}
                fontSize={{ xs: 24, sm: 28, md: 38, lg: 42, xl: 48 }}
              >
                {t(`${key}.title`)}
              </Typography>

              <Box gridRow="span 3" order={index % 2 ? index - 1 : index}>
                <Box position="relative" sx={{ aspectRatio: '550 / 410' }}>
                  <Image src={imgUrl} alt={t(`${key}.title`)} fill objectFit="cover" />
                </Box>
                <Typography
                  variant="subtitle2"
                  color="grey.800"
                  fontWeight={250}
                  display={{ xs: 'none', md: 'block' }}
                  mt={3}
                >
                  {t(`${key}.imgText`)}
                </Typography>
              </Box>

              <Box color="grey.800" order={index}>
                <Typography variant="subtitle2">{t(`${key}.subtitle`)}</Typography>
                <Typography variant="subtitle2" my={1} fontWeight={300}>
                  {t(`${key}.description`)}
                </Typography>
                <Box component="ul" pl={3.5} m={0}>
                  {options.map(option => (
                    <Typography key={option} variant="subtitle2" component="li">
                      {t(`${key}.list.${option}`)}
                    </Typography>
                  ))}
                </Box>
              </Box>
            </Box>
          ))}
        </Stack>
        <GradientDivider my={{ xs: 3, sm: 6 }} />
        <Typography variant="h4" fontWeight={250}>
          {t('muchMoreToCome.title')}
        </Typography>
        <Typography variant="subtitle2" fontWeight={300} mt={1} mb={3}>
          {t('muchMoreToCome.description')}
        </Typography>
        <Stack direction="row" spacing={2}>
          <Button variant="contained" color="secondary">
            {t('getStartedFree')}
          </Button>
          <Button variant="outlined">{t('bookDemo')}</Button>
        </Stack>
      </Box>
    </Box>
  );
}
