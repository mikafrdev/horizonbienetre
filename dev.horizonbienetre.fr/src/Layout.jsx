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


/* 
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";

import PageError from "./pages/PageError";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Massages from "./pages/Massages";
import Soins from "./pages/Soins";
import Formule from "./pages/Formule";
import Cadeau from "./pages/Cadeau";
import Salon from "./pages/Salon";
import Contacts from "./pages/Contacts";
import Tests from "./pages/Tests";
import ScrollToTop from "./components/ScrollToTop/ScrollToTop";
import "./index.css";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Root />,
        errorElement: <PageError />,
        children: [
            {
                path: "/",
                element: <Home />,
            },
            {
                path: "/massages",
                element: <Massages />,
            },
            {
                path: "/soins",
                element: <Soins />,
            },
            {
                path: "/formule",
                element: <Formule />,
            },
            {
                path: "/cadeau",
                element: <Cadeau />,
            },
            {
                path: "/contacts",
                element: <Contacts />,
            },
            {
                path: "/salon",
                element: <Salon />,
            },
            {
                path: "/tests",
                element: <Tests />,
            }
        ],
    },
]);

function Root() {
    return (
        <>
            <ScrollToTop />
            <Header />
            <Outlet />
            <Footer />
        </>
    );
}

createRoot(document.getElementById("root")).render(
    <StrictMode>
        <RouterProvider router={router} />
    </StrictMode>
);
 */



/*
<div>
      <header>
        <h1>Mon Site</h1>
        <nav>
          <Link to="/">Accueil</Link> | <Link to="/about">À propos</Link>
        </nav>
      </header>
      <hr />
      <main>
        <Outlet /> 
        </main>
        </div>
*/