'use client';

import Loading from '@/components/ui/Loading';
import { useEffect, useState } from 'react';

const loadingTexts = [
  'Powering Tomorrow',
  'Charging the Future',
  'Go Solar Now',
  'Brighten Your World',
  'Shine Smarter',
  'Live Sun-Driven',
  'Switch to Clean',
  'Unleash Clean Energy',
  'Energize Green',
  'Save More with the Sun',
  'Solar That Pays You Back',
  'The Smartest Energy Choice',
  'The Future of Energy',
  'Invest in the Sun',
  'Skyrocket Your Solar Sales',
  'Unlock Solar Sales Success',
  'Turn Leads Into Solar Deals',
  'Sun-Powered, Future-Ready',
  'Smarter Homes Run on Solar',
  'Start Saving from Day One',
  'Stop Renting Power. Own It.',
];

export default function PageIsLoading() {
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const isBrowser = typeof window !== 'undefined';

    if (!isBrowser) return;

    const isReady = sessionStorage.getItem('status') === 'ready';

    if (isReady) {
      setIsLoading(false);
      return;
    }

    document.body.style.overflow = 'hidden';

    setIsLoading(true);

    const timer1 = setTimeout(() => {
      sessionStorage.setItem('status', 'ready');
      setIsLoading(false);

      document.body.style.overflow = 'auto';
    }, 4000);

    return () => {
      clearTimeout(timer1);
      document.body.style.overflow = 'auto';
    };
  }, []);

  if (!isLoading) {
    return null;
  }

  return <Loading loadingTexts={loadingTexts} />;
}
