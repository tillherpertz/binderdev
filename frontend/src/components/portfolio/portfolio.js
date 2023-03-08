import React, { useState } from "react";
import Query from "../Query/query";
import Header from '../header/header'
import Footer from '../footer/footer'
import PortfolioPostCreator from "./portfolioPostCreator";
import PORTFOLIO_COLLECTION_QUERY from "../../queries/portfolio_collection_query";
import { useInView } from 'react-intersection-observer';

function Portfolio() {
    const [hasBeenInView, setHasBeenInView] = useState(false);
    const { ref, inView } = useInView({
        skip: hasBeenInView,
    });

    // Update hasBeenInView to skip element
    if (inView && !hasBeenInView) {
        setHasBeenInView(true);
    }

    return (
        <div>
            <Header></Header>
            <div ref={ref} className="content-wrap is-portfolio">
                <h1 className={`hero-headline ${inView ? 'animate-show' : ''}`}>Portfolio.</h1>
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