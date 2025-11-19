import type { Metadata } from 'next';
import { ReactNode } from 'react';
import { NextIntlClientProvider } from 'next-intl';
import { Alexandria } from 'next/font/google';
import { AppRouterCacheProvider } from '@mui/material-nextjs/v15-appRouter';
import { ThemeProvider } from '@mui/material/styles';

import { darkTheme, lightTheme } from '@/theme';
import Header from '@/components/layouts/Header';
import { CssBaseline } from '@mui/material';

const alexandriaFont = Alexandria({
  weight: ['200', '300', '400', '500', '700'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-alexandria',
});

const themes = {
  dark: darkTheme,
  light: lightTheme,
};

export const metadata: Metadata = {
  title: {
    template: '%s | SolarGenix',
    default: 'SolarGenix',
  },
  authors: [{ name: 'SolarGenix.ai' }],
  icons: {
    icon: [
      {
        url: '/favicons/favicon-16.png',
        sizes: '16x16',
        type: 'image/png',
      },
      {
        url: '/favicons/favicon-32.png',
        sizes: '32x32',
        type: 'image/png',
      },
    ],
    apple: [
      {
        url: '/favicons/favicon-180.png',
        sizes: '180x180',
        type: 'image/png',
      },
      {
        url: '/favicons/favicon-180-dark.png',
        sizes: '180x180',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/favicons/favicon-180-light.png',
        sizes: '180x180',
        media: '(prefers-color-scheme: dark)',
      },
    ],
    other: [
      {
        rel: 'icon',
        url: '/favicons/favicon-16-dark.png',
        sizes: '16x16',
        type: 'image/png',
        media: '(prefers-color-scheme: light)',
      },
      {
        rel: 'icon',
        url: '/favicons/favicon-32-dark.png',
        sizes: '32x32',
        type: 'image/png',
        media: '(prefers-color-scheme: light)',
      },
      {
        rel: 'icon',
        url: '/favicons/favicon-16-light.png',
        sizes: '16x16',
        type: 'image/png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        rel: 'icon',
        url: '/favicons/favicon-32-light.png',
        sizes: '32x32',
        type: 'image/png',
        media: '(prefers-color-scheme: dark)',
      },
    ],
  },
  openGraph: {
    url: 'https://solargenix.ai',
    siteName: 'SolarGenix.ai',
    type: 'website',
    images: [
      {
        url: 'https://solargenix.ai/public/images/og-image-1200x630.jpg',
        width: 1200,
        height: 630,
        alt: 'SolarGenix.ai',
      },
      {
        url: 'https://solargenix.ai/public/images/og-image-600x315.jpg',
        width: 600,
        height: 315,
        alt: 'SolarGenix.ai',
      },
    ],
  },
};

export default async function RootLayout({
  children,
  params,
}: Readonly<{
  children: ReactNode;
  params: Promise<{ locale: string }>;
}>) {
  const { locale } = await params;

  console.log('cscscs');

  return (
    <html lang={locale} className={alexandriaFont.variable}>
      <body>
        <NextIntlClientProvider>
          <AppRouterCacheProvider>
            <ThemeProvider theme={themes.light}>
              <CssBaseline />
              <Header />
              {children}
            </ThemeProvider>
          </AppRouterCacheProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
