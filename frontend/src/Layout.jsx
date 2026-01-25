import { Outlet } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop/ScrollToTop";
import GoogleTagManager from "./components/GoogleTagManager";
import { useTrackPageView } from "./components/TrackPageView";

export default function Layout() {
   useTrackPageView();
   return (
      <>
         <GoogleTagManager />
         <ScrollToTop />
         <Header />
         <Outlet />
         <Footer />
      </>
   );
}
