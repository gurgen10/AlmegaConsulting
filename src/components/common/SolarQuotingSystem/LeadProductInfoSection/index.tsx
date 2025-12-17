import {
  CONTAINER_STYLES,
  SPACING_DEFAULT_X,
  SPACING_DEFAULT_Y,
  TEXT_COLOR,
} from '@/shared/constants/spacing';
import { Box } from '@mui/material';
import { useTranslations } from 'next-intl';
import GradientDivider from '@/components/ui/GradientDivider';
import { REGISTER_URL } from '@/shared/constants/common';
import LeadInfoBlock from '@/components/common/SolarQuotingSystem/LeadProductInfoSection/components/LeadInfoBlock';

export default function LeadProductInfoSection() {
  const t = useTranslations('quotingSystemPage.leadProductInfo');

  const signUpButtonProps = {
    text: t('sendQuotes.cta'),
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
        <LeadInfoBlock
          title={t('launchLandingPage.title')}
          description={t('launchLandingPage.description')}
          cta={signUpButtonProps}
          reverse
        />
        <GradientDivider />
        <LeadInfoBlock
          title={t('captureVerifiedLeads.title')}
          description={t('captureVerifiedLeads.description')}
          cta={signUpButtonProps}
        />
        <GradientDivider />
        <LeadInfoBlock
          title={t('sendQuotes.title')}
          description={t('sendQuotes.description')}
          cta={signUpButtonProps}
          reverse
        />
      </Box>
    </Box>
  );
}
