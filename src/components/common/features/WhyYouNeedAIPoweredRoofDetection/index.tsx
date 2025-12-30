import {
  CONTAINER_STYLES,
  SPACING_DEFAULT_X,
  SPACING_DEFAULT_Y,
  TEXT_COLOR,
} from '@/shared/constants/spacing';
import { Box, Typography } from '@mui/material';
import { useTranslations } from 'next-intl';
import GradientDivider from '@/components/ui/GradientDivider';
import { REGISTER_URL } from '@/shared/constants/common';
import LeadInfoBlock from '@/components/common/SolarQuotingSystem/LeadProductInfoSection/components/LeadInfoBlock';

export default function LeadProductInfoSection() {
  const t = useTranslations('roofDetection');

  const signUpButtonProps = {
    text: t('signUp'),
    href: REGISTER_URL,
  };

  return (
    <Box
      component="section"
      py={SPACING_DEFAULT_Y}
      px={SPACING_DEFAULT_X}
      sx={{ backgroundColor: 'grey.50' }}
    >
      <Box sx={CONTAINER_STYLES} color={TEXT_COLOR} display="grid" gap={{ xs: 5, md: 7 }}>
        <Typography
          px={SPACING_DEFAULT_X}
          component="h2"
          variant="h3"
          sx={{ fontWeight: 500, color: 'primary.900', textAlign: 'center' }}
        >
          {t('whyYouNeedAIPoweredRoofDetectionTitle')}
        </Typography>
        <LeadInfoBlock
          title={t('autoDetectRoofDimensionsTitle')}
          description={t('autoDetectRoofDimensionsDescription')}
          cta={signUpButtonProps}
          reverse
        />
        <GradientDivider />
        <LeadInfoBlock
          title={t('analyzePitchOrientationTitle')}
          description={t('analyzePitchOrientationDescription')}
          cta={signUpButtonProps}
        />
        <GradientDivider />
        <LeadInfoBlock
          title={t('identifyObstaclesResidentialTitle')}
          description={t('identifyObstaclesResidentialDescription')}
          cta={signUpButtonProps}
          reverse
        />
      </Box>
    </Box>
  );
}
