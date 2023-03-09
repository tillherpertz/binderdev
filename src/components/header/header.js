import React from "react";
import { NavLink } from "react-router-dom";
import Nav from '../nav/nav.js'
import ThemeSetter from "../theme/themeSetter.js";

function Header() {
    return (
        <header>
            <div id="image--logo" className="svg--filter-logo">
                <NavLink to="/">
                    <img src="/images/logos/logo_binder.svg" alt="Binder Logo" width="173" height="56" />
                </NavLink>
            </div>
            <Nav></Nav>
            <ThemeSetter></ThemeSetter>
        </header>
    );
}

export default Header