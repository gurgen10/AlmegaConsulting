import Typography from '@mui/material/Typography';
import { QuoteLayoutProps } from '@/components/common/TryMeSection/components/QuoteLayouts/QuoteLayouts.types';
import { useTranslations } from 'next-intl';
import { useQuoteSettings } from '@/providers/QuoteSettingsProvider';
import { MinimalisticLayoutWrapper } from '@/components/common/TryMeSection/components/QuoteLayouts/QuoteLayouts.styles';
import Image from 'next/image';
import QuoteForm from '@/components/common/TryMeSection/components/QuoteLayouts/QuoteForm';
import QuoteFooter from '@/components/common/TryMeSection/components/QuoteLayouts/QuoteFooter';

export default function Minimalistic(props: QuoteLayoutProps) {
  const t = useTranslations('quotingSystemPage.quotePreview');
  const { settings } = useQuoteSettings();

  return (
    <MinimalisticLayoutWrapper {...props}>
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
            Your Logo Here
          </Typography>
        )}
        <div>
          <Typography mb={2} variant="h4" fontWeight={300} color={settings.titleColor}>
            {t('title')}
          </Typography>
          <Typography variant="body2" mb={3} fontWeight={300}>
            {t('description')}
          </Typography>
          <QuoteForm
            buttonColor={settings.buttonColor}
            buttonTextColor={settings.buttonTextColor}
          />
        </div>
      </div>
      <QuoteFooter />
    </MinimalisticLayoutWrapper>
  );
}
