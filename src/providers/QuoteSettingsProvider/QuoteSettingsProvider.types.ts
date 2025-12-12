import { Dispatch, SetStateAction } from 'react';

export enum Mode {
  Dark = 'dark',
  Light = 'light',
}

export enum LayoutTypes {
  Background = 'background',
  SideImage = 'sideImage',
  Minimalistic = 'minimalistic',
  Elegant = 'elegant',
}

export interface QuoteSettings {
  layoutType: LayoutTypes;
  mode: Mode;
  titleColor: string;
  buttonColor: string;
  buttonTextColor: string;
  background: string;
  companyLogo: string;
}

export interface QuoteSettingsContextType {
  settings: QuoteSettings;
  setSettings: Dispatch<SetStateAction<QuoteSettings>>;
}
