import React from "react";
import Query from "../Query/query";
import Header from '../header/header'
import Footer from '../footer/footer'
import ABOUT_QUERY from "../../queries/about_query";

function About() {
    return (
        <div>
            <Header></Header>
            <div className="content-wrap">
                <Query query={ABOUT_QUERY}>
                    {({ data: { about } }) => {
                        return (
                            <div>
                                <h1 className="hero-headline">{about.data.attributes.Headline}</h1>
                                <p className="hero-paragraph">{about.data.attributes.Paragraph}</p>
                            </div>
                        );
                    }}
                </Query >
            </div >
            <Footer></Footer>
        </div>

    );
}

export default About