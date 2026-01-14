'use client';

import Loading from '@/components/ui/Loading';
import { useEffect, useState } from 'react';

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

    const timers: NodeJS.Timeout[] = [];
    setIsLoading(true);

    const timer1 = setTimeout(() => {
      const timer2 = setTimeout(() => {
        sessionStorage.setItem('status', 'ready');
        setIsLoading(false);

        document.body.style.overflow = 'auto';
      }, 500);

      timers.push(timer2);
    }, 4000);

    timers.push(timer1);

    return () => {
      timers.forEach(timer => clearTimeout(timer));
      document.body.style.overflow = 'auto';
    };
  }, []);

  if (!isLoading) {
    return null;
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-white">
      <Loading />
    </div>
  );
}
