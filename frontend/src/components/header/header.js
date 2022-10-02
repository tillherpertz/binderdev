import React from "react";
import Nav from '../nav/nav.js'
import ThemeSetter from "../theme/themeSetter.js";

function Header() {
    return (
        <header>
            <div id="image--logo" className="svg--filter-logo">
                <a href="/">
                    <img src="images/logos/logo_binder.svg" alt="Binder Logo" width="173" height="56" />
                </a>
            </div>
            <Nav></Nav>
            <ThemeSetter></ThemeSetter>
        </header>
    );
}

export default Header