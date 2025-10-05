import { createBrowserRouter } from "react-router-dom";

import PageError from "./pages/PageError";
import Home from "./pages/Home";
import Massages from "./pages/Massages";
import Soins from "./pages/Soins";
import Formule from "./pages/Formule";
import Cadeau from "./pages/Cadeau";
import Salon from "./pages/Salon";
import Contact from "./pages/Contact";
import MentionsLegales from "./pages/Mentions-legales";
import PolitiqueConfidentialite from "./pages/Politique-confidentialite";
import CGV from "./pages/CGV";
import Test from "./pages/Test";
import "./index.css";
import Layout from "./Layout";

const router = createBrowserRouter([
   {
      path: "/",
      element: <Layout />,
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
            path: "/Contact",
            element: <Contact />,
         },
         {
            path: "/salon",
            element: <Salon />,
         },
         {
            path: "/mentions-legales",
            element: <MentionsLegales />,
         },
         {
            path: "/politique-confidentialite",
            element: <PolitiqueConfidentialite />,
         },
         {
            path: "/cgv",
            element: <CGV />,
         },
         {
            path: "/test",
            element: <Test />,
         },
      ],
   },
]);

export default router;
