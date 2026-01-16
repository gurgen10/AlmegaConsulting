'use client';

import Loading from '@/components/ui/Loading';
import { useEffect, useState } from 'react';

const loadingTexts = [
  'poweringTomorrow',
  'chargingTheFuture',
  'goSolarNow',
  'brightenYourWorld',
  'shineSmarter',
  'liveSunDriven',
  'switchToClean',
  'unleashCleanEnergy',
  'energizeGreen',
  'saveMoreWithTheSun',
  'solarThatPaysYouBack',
  'theSmartestEnergyChoice',
  'theFutureOfEnergy',
  'investInTheSun',
  'skyrocketYourSolarSales',
  'unlockSolarSalesSuccess',
  'turnLeadsIntoSolarDeals',
  'sunPoweredFutureReady',
  'smarterHomesRunOnSolar',
  'startSavingFromDayOne',
  'stopRentingPowerOwnIt',
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
