import React from "react";

function Nav() {
    return (
        <div className="navigation-wrapper">
            <button className="icon--toggle-menu" type="button">
                <span></span>
                <span></span>
            </button>
            <div className="collapsed" id="navbar">
                <nav>
                    <a href="" className="is--active">home.</a>
                    <a href="">blog.</a>
                    <a href="">portfolio.</a>
                    <a href="">about. </a>
                </nav>
            </div>
        </div>
    );
}

export default Nav