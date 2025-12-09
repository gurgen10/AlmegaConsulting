import type { Metadata } from 'next';
import { ReactNode } from 'react';
import LandingHeader from '@/components/layouts/LandingHeader';
import LandingFooter from '@/components/layouts/LandingFooter';
import BaseLayout, { metadata as baseMetadata } from '@/components/layouts/BaseLayout';

export const metadata: Metadata = {
  ...baseMetadata,
};

export default function LandingLayout({
  children,
  params,
}: {
  children: ReactNode;
  params: { locale: string };
}) {
  return (
    <BaseLayout
      header={<LandingHeader />}
      footer={<LandingFooter />}
      params={Promise.resolve(params)}
    >
      {children}
    </BaseLayout>
  );
}
