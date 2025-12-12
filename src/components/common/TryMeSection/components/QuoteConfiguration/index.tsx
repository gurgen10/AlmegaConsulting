import { QuoteConfigurationWrapper } from '@/components/common/TryMeSection/TryMeSection.styles';

import { QuoteSettingsProvider } from '@/providers/QuoteSettingsProvider';
import QuoteConfigurationSettings from '@/components/common/TryMeSection/components/QuoteConfigurationSettings';
import QuotePreview from '@/components/common/TryMeSection/components/QuotePreview';
import { Box } from '@mui/material';

export default function QuoteConfiguration() {
  return (
    <QuoteSettingsProvider>
      <QuoteConfigurationWrapper>
        <Box flexGrow={1} borderRadius="6px" overflow="hidden">
          <QuotePreview />
        </Box>
        <QuoteConfigurationSettings />
      </QuoteConfigurationWrapper>
    </QuoteSettingsProvider>
  );
}
