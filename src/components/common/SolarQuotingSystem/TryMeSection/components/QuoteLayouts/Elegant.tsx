import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { useTranslations } from 'next-intl';
import { useQuoteSettings } from '@/providers/QuoteSettingsProvider';
import Image from 'next/image';
import { QuoteLayoutProps } from '@/components/common/SolarQuotingSystem/TryMeSection/components/QuoteLayouts/QuoteLayouts.types';
import { ElegantLayoutWrapper } from '@/components/common/SolarQuotingSystem/TryMeSection/components/QuoteLayouts/QuoteLayouts.styles';
import QuoteForm from '@/components/common/SolarQuotingSystem/TryMeSection/components/QuoteLayouts/QuoteForm';
import QuoteFooter from '@/components/common/SolarQuotingSystem/TryMeSection/components/QuoteLayouts/QuoteFooter';

export default function Elegant(props: QuoteLayoutProps) {
  const t = useTranslations('quotingSystemPage.quotePreview');
  const { settings } = useQuoteSettings();

  return (
    <ElegantLayoutWrapper {...props}>
      <Box
        display="flex"
        flexDirection="column"
        justifyContent="flex"
        textAlign="left"
        alignItems="flex-start"
        gap={2}
      >
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
        <Typography variant="body2" mb={3} fontWeight={300}>
          {t('description')}
        </Typography>
      </Box>
      <div className="lm-form">
        <Typography mb={5} variant="h4" fontWeight={300} color={settings.titleColor}>
          {t('title')}
        </Typography>
        <QuoteForm buttonColor={settings.buttonColor} buttonTextColor={settings.buttonTextColor} />
      </div>
      <QuoteFooter />
    </ElegantLayoutWrapper>
  );
}
