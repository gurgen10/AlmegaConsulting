import type { Metadata } from 'next';
import { ReactNode } from 'react';
import Header from '@/components/layouts/Header';
import Footer from '@/components/layouts/Footer';
import BaseLayout, { metadata as baseMetadata } from '@/components/layouts/BaseLayout';

export const metadata: Metadata = {
  ...baseMetadata,
};

export default function MainLayout({
  children,
  params,
}: {
  children: ReactNode;
  params: Promise<{ locale?: string }>;
}) {
  return (
    <BaseLayout header={<Header />} footer={<div></div>} params={Promise.resolve(params)}>
      {children}
    </BaseLayout>
  );
}
