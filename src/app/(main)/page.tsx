import type { Metadata } from 'next';
import HeroSection from '@/components/common/HeroSection';
import PageIsLoading from '@/components/common/PageIsLoading/indexx';

export const metadata: Metadata = {
  title: 'Amela Consulting - Coming Soon',
  description: 'Amela Consulting.',
  keywords: [],
};
export default function Home() {
  return (
    <>
      <PageIsLoading />
      <HeroSection />
    </>
  );
}
