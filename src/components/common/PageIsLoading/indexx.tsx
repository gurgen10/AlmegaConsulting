'use client';

import Loading from '@/components/ui/Loading';
import { useEffect, useState } from 'react';
import { Box } from '@mui/material';

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
  const [isLoading, setIsLoading] = useState<boolean | null>(null);

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

  if (isLoading === null) {
    return (
      <Box
        sx={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100vw',
          height: '100vh',
          backgroundColor: 'grey.25',
          zIndex: 999999,
        }}
      ></Box>
    );
  }

  if (!isLoading) {
    return null;
  }

  return <Loading loadingTexts={loadingTexts} />;
}
