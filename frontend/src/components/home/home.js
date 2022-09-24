import React from "react";
import Query from "../Query/query";
import Header from '../header/header'
import Footer from '../footer/footer'
import HOME_QUERY from "../../queries/home_query";

function Home() {
    return (
        <div>
            <Header></Header>
            <div className="content-wrap">
                <Query query={HOME_QUERY}>
                    {({ data: { homepage } }) => {
                        return (
                            <div>
                                <h1 className="hero-headline">{homepage.data.attributes.Headline}</h1>
                                <p className="hero-paragraph">{homepage.data.attributes.Paragraph}</p>
                                <div className="button-wrap">
                                    <a href=""><button>blog.</button></a>
                                    <a href=""><button>portfolio.</button></a>
                                </div>
                            </div>
                        );
                    }}
                </Query >
            </div >
            <Footer></Footer>
        </div>

    );
}

export default Home