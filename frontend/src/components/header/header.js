import React from "react";
import Nav from '../nav/nav.js'
import ThemeToggle from "../theme/themeToggle.js";

function Header() {
    return (
        <header>
            <div id="image--logo" className="svg--filter-logo">
                <a href="/">
                    <img src="images/logos/logo_binder.svg" alt="Binder Logo" width="173" height="56" />
                </a>
            </div>
            <Nav></Nav>
            <ThemeToggle></ThemeToggle>
        </header>
    );
}

export default Header