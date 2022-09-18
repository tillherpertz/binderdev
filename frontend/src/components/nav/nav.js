import React from "react";
import Query from "../Query/query";
import { Link } from "react-router-dom";

import CAT_QUERY from "../../queries/categories/categories";

function Nav() {
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
                                    {categories.data.map((category) => {
                                        return (
                                            <li key={category.attributes.Slug}>
                                                <a href={category.attributes.Slug} className="">{category.attributes.Name}.</a>
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