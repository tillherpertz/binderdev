import React from "react";
import Nav from "./nav";

function Header() {
    return (
        <header>
            <div className="image--logo">
                <a href="#">
                    <img src="images/logos/logo_binder.svg" alt="Binder Logo" width="173" height="56" className="svg--filter-yellow" />
                </a>
            </div>
            <Nav></Nav>
        </header>
    );
}

export default Header