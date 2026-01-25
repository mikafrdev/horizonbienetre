import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useMatomo } from '@streamr/matomo-tracker-react';

export function useTrackPageView() {
   const location = useLocation();
   const { trackPageView } = useMatomo();

   useEffect(() => {
      trackPageView(); 
   }, [location.pathname]);
}
