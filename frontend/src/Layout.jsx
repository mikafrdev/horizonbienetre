import { Outlet } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop/ScrollToTop";
import MatomoTracking from "./components/MatomoTracking";

export default function Layout() {
   return (
      <>
         <MatomoTracking siteId={2} />
         <ScrollToTop />
         <Header />
         <Outlet />
         <Footer />
      </>
   );
}
