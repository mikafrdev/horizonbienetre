import { Outlet } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop/ScrollToTop";
import GoogleTagManager from "./components/GoogleTagManager";
import MatomoTracking from "./components/MatomoTracking";

export default function Layout() {
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
