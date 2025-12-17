import { Fade, Typography } from '@mui/material';
import { useQuoteSettings } from '@/providers/QuoteSettingsProvider';
import WebsitePreview from '@/components/ui/WebsitePreview';
import { LayoutTypes } from '@/providers/QuoteSettingsProvider/QuoteSettingsProvider.types';
import { useTranslations } from 'next-intl';
import { QuoteConfigurationPreviewWrapper } from '@/components/common/SolarQuotingSystem/TryMeSection/TryMeSection.styles';
import SideImage from '@/components/common/SolarQuotingSystem/TryMeSection/components/QuoteLayouts/SideImage';
import Minimalistic from '@/components/common/SolarQuotingSystem/TryMeSection/components/QuoteLayouts/Minimalistic';
import Elegant from '@/components/common/SolarQuotingSystem/TryMeSection/components/QuoteLayouts/Elegant';
import Background from '@/components/common/SolarQuotingSystem/TryMeSection/components/QuoteLayouts/Background';

export default function QuotePreview() {
  const t = useTranslations('quotingSystemPage.quotePreview');
  const { settings } = useQuoteSettings();

  return (
    <QuoteConfigurationPreviewWrapper data-mode={settings.mode}>
      <WebsitePreview domain="solarvere.com">
        {settings.layoutType === LayoutTypes.SideImage && (
          <Fade in>
            <SideImage />
          </Fade>
        )}
        {settings.layoutType === LayoutTypes.Minimalistic && (
          <Fade in>
            <Minimalistic />
          </Fade>
        )}
        {settings.layoutType === LayoutTypes.Elegant && (
          <Fade in>
            <Elegant />
          </Fade>
        )}
        <Fade in={settings.layoutType === LayoutTypes.Background} appear={false}>
          <Background />
        </Fade>
      </WebsitePreview>
      <Typography className="badge" variant="h5" component="div" color="secondary">
        {t('tryMe')}
      </Typography>
    </QuoteConfigurationPreviewWrapper>
  );
}
