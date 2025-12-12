import Typography from '@mui/material/Typography';
import { BackgroundLayoutWrapper } from '@/components/common/TryMeSection/components/QuoteLayouts/QuoteLayouts.styles';
import { QuoteLayoutProps } from '@/components/common/TryMeSection/components/QuoteLayouts/QuoteLayouts.types';
import { useQuoteSettings } from '@/providers/QuoteSettingsProvider';
import QuoteForm from '@/components/common/TryMeSection/components/QuoteLayouts/QuoteForm';
import QuoteFooter from '@/components/common/TryMeSection/components/QuoteLayouts/QuoteFooter';
import Image from 'next/image';
import { useTranslations } from 'next-intl';

export default function Background(props: QuoteLayoutProps) {
  const t = useTranslations('quotingSystemPage.quotePreview');
  const { settings } = useQuoteSettings();

  return (
    <BackgroundLayoutWrapper
      data-mode={settings.mode}
      sx={{ backgroundImage: `url(${settings.background})` }}
      {...props}
    >
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
              Your Logo Here
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
