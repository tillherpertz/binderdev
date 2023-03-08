import React from "react";
import Query from "../Query/query";
import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";

import CAT_QUERY from "../../queries/categories_query";
import { recallCache } from "@apollo/client/cache/inmemory/reactiveVars";

class Nav extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            navOpen: false
        }
    }

    navToggle() {
        const idNavbar = document.getElementById('navbar');
        const idLogo = document.getElementById('image--logo');
        const classIconToggle = document.getElementsByClassName('icon--toggle-menu')[0];
        if (this.state.navOpen === false) {
            this.setState({
                navOpen: true
            })
            document.body.classList.add('nav-open');
            idLogo.classList.remove('svg--filter-logo')
            idNavbar.classList.add('show');
            idLogo.classList.add('svg--filter-light')
            classIconToggle.classList.toggle('open');

        } else {
            this.setState({
                navOpen: false
            })
            document.body.classList.remove('nav-open');
            idLogo.classList.remove('.svg--filter-dark')
            idLogo.classList.add('svg--filter-logo')
            idLogo.classList.remove('svg--filter-light')
            idNavbar.classList.remove('show');
            classIconToggle.classList.toggle('open');
        }
    }
    render() {
        return (
            <div className="navigation-wrapper">
                <button
                    className="icon--toggle-menu"
                    type="button"
                    onClick={() => {
                        this.navToggle()
                    }}>
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
                                            <NavLink
                                                onClick={() => {
                                                    this.navToggle()
                                                }}
                                                to="/"
                                                end
                                                className={({ isActive }) => (isActive ? 'active' : undefined)}>
                                                home.
                                            </NavLink>
                                        </li>
                                        {categories.data.map((category) => {
                                            return (
                                                <li key={category.attributes.Slug}>
                                                    <NavLink
                                                        onClick={() => {
                                                            this.navToggle()
                                                        }}
                                                        to={'/' + category.attributes.Slug}
                                                        className={({ isActive }) => (isActive ? 'active' : undefined)}>
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
}

export default Nav