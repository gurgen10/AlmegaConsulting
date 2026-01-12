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
import LeadInfoBlock from '@/components/ui/ProductInfoSection/components/ProductInfoBlock';

export default function WhatMakesShadingAnalysisEssential() {
  const t = useTranslations('shadingAnalysis');

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
          component="h2"
          variant="h3"
          sx={{ fontWeight: 500, color: 'primary.900', textAlign: 'center' }}
        >
          {t.rich('whatMakesShadingAnalysisEssentialTitle', {
            sp: chunks => (
              <Typography variant="h3" component="div">
                {chunks}
              </Typography>
            ),
          })}
        </Typography>
        <LeadInfoBlock
          title={t('dynamicShadingMaps')}
          description={t('dynamicShadingMapsDescription')}
          cta={signUpButtonProps}
          reverse
        />
        <GradientDivider />
        <LeadInfoBlock
          title={t('shadingAnalysisTrees')}
          description={t('shadingAnalysisTreesDescription')}
          cta={signUpButtonProps}
        />
        <GradientDivider />
        <LeadInfoBlock
          title={t('exposureScoringFind')}
          description={t('exposureScoringFindDescription')}
          cta={signUpButtonProps}
          reverse
        />
      </Box>
    </Box>
  );
}
