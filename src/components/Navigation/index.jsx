import { NavLink } from "react-router-dom";
import "./style.css";

export default function Navigation() {
    const dataNavigation = [
        {
            PageName: "Accueil",
            UrlPage: "/",
        },
        {
            PageName: "Prestations - Massages",
            UrlPage: "/massages",
        },
        {
            PageName: "Prestations - Soins énergétiques",
            UrlPage: "/soins",
        },
        {
            PageName: "Prestation - Formule détante profonde",
            UrlPage: "/formule",
        },
        {
            PageName: "Carte Cadeau",
            UrlPage: "/cadeau",
        },
        {
            PageName: "Contacts",
            UrlPage: "/contacts",
        },
        {
            PageName: "Salon",
            UrlPage: "/salon",
        },
    ];

    return (
        <div className="navigation">
            <ul>
                {dataNavigation.map((item, index) => (
                    <li>
                        <NavLink
                            to={item.UrlPage}
                            className={({ isActive, isPending }) => {
                                return isActive
                                    ? "active"
                                    : isPending
                                    ? "pending"
                                    : "";
                            }}
                        >
                            {item.PageName}
                        </NavLink>
                    </li>
                ))}
            </ul>
        </div>
    );
}
