import { createBrowserRouter } from 'react-router-dom'

import PageError from "./pages/PageError";
import Home from "./pages/Home";
import Massages from "./pages/Massages";
import Soins from "./pages/Soins";
import Formule from "./pages/Formule";
import Cadeau from "./pages/Cadeau";
import Salon from "./pages/Salon";
import Contacts from "./pages/Contacts";
import Test from "./pages/Test";
import "./index.css";
import Layout from './Layout';

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
                path: "/contacts",
                element: <Contacts />,
            },
            {
                path: "/salon",
                element: <Salon />,
            },
            {
                path: "/test",
                element: <Test />,
            }
        ],
    },
]);

export default router