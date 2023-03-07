import React from "react";
import Query from "../Query/query";
import Header from '../header/header'
import Footer from '../footer/footer'
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
                            <div className="portfolio-wrapper">
                                {portfolios.data.map((portfolio) => {
                                    return (
                                        <div className="portfolio-listing">
                                            <div className="portfolio-contents">
                                                <div className="portfolio-image-wrap">
                                                    <Link to={portfolio.attributes.Slug}>
                                                        <img src={process.env.REACT_APP_BACKEND_URL + portfolio.attributes.Image.data.attributes.url} alt="" />
                                                    </Link>
                                                </div>
                                                <div className="portfolio-info-wrap">
                                                    <div className="portfolio-desc">
                                                        <h2>{portfolio.attributes.Title}</h2>
                                                        <p>{portfolio.attributes.Description}</p>
                                                    </div>
                                                    <div className="portfolio-link">
                                                        <Link to={portfolio.attributes.Slug}>
                                                            <button>read more.</button>
                                                        </Link>
                                                    </div>
                                                </div>
                                            </div>
                                            <hr className="portfolio-spacer"></hr>
                                        </div>
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