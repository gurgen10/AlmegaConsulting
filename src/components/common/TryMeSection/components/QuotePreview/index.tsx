import { Fade, Typography } from '@mui/material';
import { useQuoteSettings } from '@/providers/QuoteSettingsProvider';
import WebsitePreview from '@/components/ui/WebsitePreview';
import { LayoutTypes } from '@/providers/QuoteSettingsProvider/QuoteSettingsProvider.types';
import Background from '@/components/common/TryMeSection/components/QuoteLayouts/Background';
import SideImage from '@/components/common/TryMeSection/components/QuoteLayouts/SideImage';
import { QuoteConfigurationPreviewWrapper } from '@/components/common/TryMeSection/TryMeSection.styles';
import Minimalistic from '@/components/common/TryMeSection/components/QuoteLayouts/Minimalistic';
import Elegant from '@/components/common/TryMeSection/components/QuoteLayouts/Elegant';
import { useTranslations } from 'next-intl';

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
