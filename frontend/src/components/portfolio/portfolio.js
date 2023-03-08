import React from "react";
import Query from "../Query/query";
import Header from '../header/header'
import Footer from '../footer/footer'
import PortfolioPostCreator from "./portfolioPostCreator";
import PORTFOLIO_COLLECTION_QUERY from "../../queries/portfolio_collection_query";

import { Link } from "react-router-dom";

function Portfolio() {
    return (
        <div>
            <Header></Header>
            <div className="content-wrap is-portfolio">
                <h1 className="hero-headline">Portfolio.</h1>
                <Query query={PORTFOLIO_COLLECTION_QUERY} id={null}>
                    {({ data: { portfolios } }) => {
                        return (
                            <div className="post-wrapper">
                                {portfolios.data.map((portfolio) => {
                                    return (
                                        <PortfolioPostCreator portfolio={portfolio}></PortfolioPostCreator>
                                    );
                                })}
                            </div>
                        );
                    }}
                </Query >
            </div>
            <Footer></Footer>
        </div>
    );
}

export default Portfolio