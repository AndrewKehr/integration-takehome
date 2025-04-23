'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

export default function RouteChangeTracker() {
  const pathname = usePathname();

  useEffect(() => {
    if (window.dataLayer) {
      window.dataLayer.push({
        event: 'page_view',
        page: pathname,
      });
      console.log('Pushed page_view event to dataLayer:', pathname);
    } else {
      console.warn('dataLayer is not defined');
    }
  }, [pathname]);

  return null;
}
