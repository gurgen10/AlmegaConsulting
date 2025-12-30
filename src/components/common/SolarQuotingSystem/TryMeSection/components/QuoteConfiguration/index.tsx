import { QuoteSettingsProvider } from '@/providers/QuoteSettingsProvider';
import { QuoteConfigurationWrapper } from '@/components/common/SolarQuotingSystem/TryMeSection/TryMeSection.styles';
import QuotePreview from '@/components/common/SolarQuotingSystem/TryMeSection/components/QuotePreview';
import QuoteConfigurationSettings from '@/components/common/SolarQuotingSystem/TryMeSection/components/QuoteConfigurationSettings';

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
