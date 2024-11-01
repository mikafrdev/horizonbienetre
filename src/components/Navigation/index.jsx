import { NavLink } from "react-router-dom";
import dataNavigation from "../../data/navigation.json"
import "./style.css";

export default function Navigation(showNavigation) {

    return (
        <div className="navigation">
            <ul>
                {dataNavigation.map((item, index) => (
                    <li
                        key={index}
                        className={({ isActive, isPending }) => {
                            return isActive
                                ? "active"
                                : isPending
                                ? "pending"
                                : "";
                        }}
                    >
                        <NavLink to={item.UrlPage}>{item.PageName}</NavLink>
                    </li>
                ))}
            </ul>
        </div>
    );
}
