import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { useTranslations } from 'next-intl';
import { useQuoteSettings } from '@/providers/QuoteSettingsProvider';
import Image from 'next/image';
import { QuoteLayoutProps } from '@/components/common/SolarQuotingSystem/TryMeSection/components/QuoteLayouts/QuoteLayouts.types';
import { SideImageLayoutWrapper } from '@/components/common/SolarQuotingSystem/TryMeSection/components/QuoteLayouts/QuoteLayouts.styles';
import QuoteForm from '@/components/common/SolarQuotingSystem/TryMeSection/components/QuoteLayouts/QuoteForm';
import QuoteFooter from '@/components/common/SolarQuotingSystem/TryMeSection/components/QuoteLayouts/QuoteFooter';

export default function SideImage(props: QuoteLayoutProps) {
  const t = useTranslations('quotingSystemPage.quotePreview');
  const { settings } = useQuoteSettings();

  return (
    <SideImageLayoutWrapper {...props}>
      <Box className="lm-bg" sx={{ backgroundImage: `url(${settings.background})` }} />
      <div className="lm-form">
        {settings.companyLogo ? (
          <Image
            width={0}
            height={0}
            src={settings.companyLogo}
            alt="Website preview logo"
            className="lm-logo"
          />
        ) : (
          <Typography fontSize="26px !important" fontWeight={500}>
            {t('logoPlaceholder')}
          </Typography>
        )}
        <div>
          <Typography mb={2} variant="h4" fontWeight={300} color={settings.titleColor}>
            {t('title')}
          </Typography>
          <Typography gutterBottom variant="body2" mb={3} fontWeight={300}>
            {t('description')}
          </Typography>
          <QuoteForm
            buttonColor={settings.buttonColor}
            buttonTextColor={settings.buttonTextColor}
          />
        </div>
        <QuoteFooter />
      </div>
    </SideImageLayoutWrapper>
  );
}
