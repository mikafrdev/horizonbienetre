import { Outlet } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop/ScrollToTop";
import GoogleTagManager from "./components/GoogleTagManager";

export default function Layout() {
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
