import React from "react";
import Query from "../Query/query";
import Header from '../header/header'
import Footer from '../footer/footer'
import PORTFOLIO_SINGLE_QUERY from "../../queries/portfolio_single_query";
import { useParams } from "react-router";


function PortfolioPost() {
    let { slug } = useParams();

    return (
        <div>
            <Header></Header>
            <div className="content-wrap is-single-post">
                <Query query={PORTFOLIO_SINGLE_QUERY} slug={slug}>
                    {({ data: { portfolios } }) => {
                        return (
                            <div className="post-wrapper">
                                {portfolios.data.map((portfolio) => {
                                    return (
                                        <div className="post-listing">
                                            <div className="post-image-wrap">
                                                <img width={328} height={218} src={process.env.REACT_APP_BACKEND_URL + portfolio.attributes.Image.data.attributes.url} />
                                            </div>
                                            <div className="post-desc">
                                                <h1>{portfolio.attributes.Title}</h1>
                                                <p>{portfolio.attributes.Description}</p>
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>
                        );
                    }}
                </Query >
            </div>
            <Footer></Footer>
        </div >
    );
}

export default PortfolioPost