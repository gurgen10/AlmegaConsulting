import { createContext, useContext, useState, ReactNode } from 'react';
import {
  LayoutTypes,
  Mode,
  QuoteSettings,
  QuoteSettingsContextType,
} from '@/providers/QuoteSettingsProvider/QuoteSettingsProvider.types';

const initialSettings: QuoteSettings = {
  layoutType: LayoutTypes.Background,
  mode: Mode.Light,
  titleColor: '#000505',
  buttonColor: '#F99429',
  buttonTextColor: '#fff',
  background: '/images/website-preview/background.jpg',
  companyLogo: '/images/website-preview/solarvere-logo.svg',
};

const QuoteSettingsContext = createContext<QuoteSettingsContextType | undefined>(undefined);

export function QuoteSettingsProvider({ children }: { children: ReactNode }) {
  const [settings, setSettings] = useState<QuoteSettings>(initialSettings);

  return (
    <QuoteSettingsContext.Provider value={{ settings, setSettings }}>
      {children}
    </QuoteSettingsContext.Provider>
  );
}

export function useQuoteSettings() {
  const context = useContext(QuoteSettingsContext);
  if (!context) {
    throw new Error('useQuoteSettings must be used within a QuoteSettingsProvider');
  }
  return context;
}
