import { expect, test, vi } from 'vitest';

vi.mock('next-intl', () => ({
  useTranslations: () => (key: string) => key,
}));
vi.mock('next/navigation', () => ({
  usePathname: () => '/',
  useRouter: () => ({ push: () => {} }),
}));

import { render, screen } from '@testing-library/react';
import { ThemeProvider } from '@mui/material/styles';
import { lightTheme } from '@/theme';
import Header from '../layouts/Header';
test('Header', () => {
  if (typeof window.matchMedia !== 'function') {
    window.matchMedia = (query: string) => ({
      matches: false,
      media: query,
      onchange: null,
      addListener: () => {},
      removeListener: () => {},
      addEventListener: () => {},
      removeEventListener: () => {},
      dispatchEvent: () => false,
    });
  }

  render(
    <ThemeProvider theme={lightTheme}>
      <Header />
    </ThemeProvider>
  );

  expect(screen.getByRole('link', { name: /SolarGenix Logo/i })).toBeDefined();
  expect(screen.getByRole('button', { name: /product/i })).toBeDefined();
});
