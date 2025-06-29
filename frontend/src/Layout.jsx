import { Outlet, Link } from 'react-router-dom'
import Header from "./components/Header";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop/ScrollToTop";


export default function Layout() {
  return (
    <>
            <ScrollToTop />
            <Header />
            <Outlet />
            <Footer />
        </>
    
  )
}