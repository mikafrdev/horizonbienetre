import { NavLink } from "react-router-dom";
import React, { useState, useEffect, useRef } from "react";
import dataNavigation from "../../data/navigation.json";
import PictoClose from "../PictoClose";
import "./style.css";

export default function NavBar({ open, setOpen, toggleNavBar }) {
    return (
        <>
            {open && (
                <div className="navbar">
                    <div onClick={toggleNavBar} className="overlay"></div>
                    <div className="navbar-content">
                        <ul style={{ minHeight: screen.availHeight }}>
                            {dataNavigation.map((item, index) => (
                                <li key={index} onClick={toggleNavBar}>
                                    <NavLink to={item.UrlPage}>
                                        {item.PageName}
                                    </NavLink>
                                </li>
                            ))}
                        </ul>
                        <div className="navbar-close">
                            <button onClick={toggleNavBar}>
                                <PictoClose fillColor="#666" stroleColor="#666" />
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}
