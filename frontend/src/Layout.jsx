import { Outlet, Link } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop/ScrollToTop";
import GoogleAnalytics from "./components/GoogleAnalytics";

export default function Layout() {
   return (
      <>
         <ScrollToTop />
         <GoogleAnalytics />
         <Header />
         <Outlet />
         <Footer />
      </>
   );
}
