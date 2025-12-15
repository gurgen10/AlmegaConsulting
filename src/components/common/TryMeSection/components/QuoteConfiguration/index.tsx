import { QuoteConfigurationWrapper } from '@/components/common/TryMeSection/TryMeSection.styles';

import { QuoteSettingsProvider } from '@/providers/QuoteSettingsProvider';
import QuoteConfigurationSettings from '@/components/common/TryMeSection/components/QuoteConfigurationSettings';
import QuotePreview from '@/components/common/TryMeSection/components/QuotePreview';

export default function QuoteConfiguration() {
  return (
    <QuoteSettingsProvider>
      <QuoteConfigurationWrapper>
        <QuotePreview />
        <QuoteConfigurationSettings />
      </QuoteConfigurationWrapper>
    </QuoteSettingsProvider>
  );
}
