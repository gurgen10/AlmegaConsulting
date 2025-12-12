import { Box, Fade } from '@mui/material';
import { useQuoteSettings } from '@/providers/QuoteSettingsProvider';
import ZoomedElement from '@/components/ui/ZoomedElement';
import { WEBSITE_PREVIEW_WIDTH } from '@/components/ui/WebsitePreview/WebsitePreview.constants';
import WebsitePreview from '@/components/ui/WebsitePreview';
import { LayoutTypes } from '@/providers/QuoteSettingsProvider/QuoteSettingsProvider.types';
import Background from '@/components/common/TryMeSection/components/QuoteLayouts/Background';
import SideImage from '@/components/common/TryMeSection/components/QuoteLayouts/SideImage';

export default function QuotePreview() {
  const { settings } = useQuoteSettings();

  return (
    <ZoomedElement contentWidth={WEBSITE_PREVIEW_WIDTH}>
      <WebsitePreview domain="solarvere.com">
        {settings.layoutType === LayoutTypes.Background && (
          <Fade in>
            <Background />
          </Fade>
        )}
        {/*{settings.layoutType === LayoutTypes.SideImage && (*/}
        {/*  <Fade in>*/}
        {/*    <SideImage />*/}
        {/*  </Fade>*/}
        {/*)}*/}
        {/*{settings.layoutType === LayoutTypes.Minimalistic && (*/}
        {/*  <Fade in>*/}
        {/*    <Minimalistic />*/}
        {/*  </Fade>*/}
        {/*)}*/}
        {/*{settings.layoutType === LayoutTypes.Elegant && (*/}
        {/*  <Fade in>*/}
        {/*    <Elegant />*/}
        {/*  </Fade>*/}
        {/*)}*/}
      </WebsitePreview>
    </ZoomedElement>
  );
}
