import React from "react";
import Query from "../Query/query";
import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";

import CAT_QUERY from "../../queries/categories/categories";

function Nav() {
    let activeStyle = {
    };

    return (
        <div className="navigation-wrapper">
            <button className="icon--toggle-menu" type="button">
                <span></span>
                <span></span>
            </button>
            <div className="collapsed" id="navbar">
                <Query query={CAT_QUERY} id={null}>
                    {({ data: { categories } }) => {
                        return (
                            <nav>
                                <ul>
                                    <li key="home">
                                        <NavLink to="/" end style={({ isActive }) =>
                                            isActive ? activeStyle : undefined
                                        }>
                                            home.
                                        </NavLink>
                                    </li>
                                    {categories.data.map((category) => {
                                        return (
                                            <li key={category.attributes.Slug}>
                                                <NavLink to={category.attributes.Slug} style={({ isActive }) =>
                                                    isActive ? activeStyle : undefined
                                                }>
                                                    {category.attributes.Name}.
                                                </NavLink>
                                            </li>

                                        );
                                    })}
                                </ul>
                            </nav>
                        );
                    }}
                </Query >
            </div>
        </div>
    );
}

export default Nav