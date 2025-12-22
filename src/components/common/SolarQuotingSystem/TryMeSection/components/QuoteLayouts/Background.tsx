import Typography from '@mui/material/Typography';
import { useQuoteSettings } from '@/providers/QuoteSettingsProvider';
import Image from 'next/image';
import { useTranslations } from 'next-intl';
import { QuoteLayoutProps } from '@/components/common/SolarQuotingSystem/TryMeSection/components/QuoteLayouts/QuoteLayouts.types';
import { BackgroundLayoutWrapper } from '@/components/common/SolarQuotingSystem/TryMeSection/components/QuoteLayouts/QuoteLayouts.styles';
import QuoteFooter from '@/components/common/SolarQuotingSystem/TryMeSection/components/QuoteLayouts/QuoteFooter';
import QuoteForm from '@/components/common/SolarQuotingSystem/TryMeSection/components/QuoteLayouts/QuoteForm';

export default function Background(props: QuoteLayoutProps) {
  const t = useTranslations('quotingSystemPage.quotePreview');
  const { settings } = useQuoteSettings();

  return (
    <BackgroundLayoutWrapper sx={{ backgroundImage: `url(${settings.background})` }} {...props}>
      <div className="lm-form">
        <div>
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
          <Typography mt={4} mb={2} variant="h4" fontWeight={300} color={settings.titleColor}>
            {t('title')}
          </Typography>
          <Typography gutterBottom variant="body2" mb={0} fontWeight={300}>
            {t('description')}
          </Typography>
        </div>
        <QuoteForm buttonColor={settings.buttonColor} buttonTextColor={settings.buttonTextColor} />
        <QuoteFooter />
      </div>
    </BackgroundLayoutWrapper>
  );
}
