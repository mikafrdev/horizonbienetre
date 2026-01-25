import { Outlet } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop/ScrollToTop";
import GoogleTagManager from "./components/GoogleTagManager";
//import { useTrackPageView } from "./components/TrackPageView";
import MatomoTracking from './components/MatomoTracking';

export default function Layout() {
   //useTrackPageView();
   return (
      <>
      <MatomoTracking siteId={2} />
         <GoogleTagManager />
         <ScrollToTop />
         <Header />
         <Outlet />
         <Footer />
      </>
   );
}
