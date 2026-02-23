import { ReactNode } from 'react';
import { Metadata } from 'next';
import { NextIntlClientProvider } from 'next-intl';
import { Alexandria } from 'next/font/google';
import { AppRouterCacheProvider } from '@mui/material-nextjs/v15-appRouter';
import { ThemeProvider } from '@mui/material/styles';
import { darkTheme, lightTheme } from '@/theme';
import { CssBaseline } from '@mui/material';

const alexandriaFont = Alexandria({
  weight: ['200', '300', '400', '500', '700'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-alexandria',
});

export const themes = {
  dark: darkTheme,
  light: lightTheme,
};

export const metadata: Metadata = {
  title: {
    template: '%s | Almega Consulting',
    default: 'Almega Consulting',
  },
  authors: [{ name: 'AlmegaConsulting.org' }],
  icons: {
    icon: [
      { url: '/favicons/favicon-16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicons/favicon-32.png', sizes: '32x32', type: 'image/png' },
    ],
  },
  openGraph: {
    url: 'https://almega-consulting.org',
    siteName: 'AlmegaConsulting',
    type: 'website',
    images: [],
  },
};

type BaseLayoutProps = {
  children: ReactNode;
  header: ReactNode;
  footer: ReactNode;
  params: Promise<{ locale?: string }>;
};

export default async function BaseLayout({ children, header, footer, params }: BaseLayoutProps) {
  const { locale } = await params;

  return (
    <html lang={locale} className={alexandriaFont.variable}>
      <body>
        <NextIntlClientProvider>
          <AppRouterCacheProvider>
            <ThemeProvider theme={themes.light}>
              <CssBaseline />
              {header}
              {children}
              {footer}
            </ThemeProvider>
          </AppRouterCacheProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
