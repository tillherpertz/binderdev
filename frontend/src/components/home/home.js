import React, { useState } from "react";
import Query from "../Query/query";
import Header from '../header/header'
import Footer from '../footer/footer'
import HOME_QUERY from "../../queries/home_query";

import { useInView } from 'react-intersection-observer';

function Home() {
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
            <div className="content-wrap">
                <Query query={HOME_QUERY}>
                    {({ data: { homepage } }) => {
                        return (
                            <div ref={ref} className={`home-content`}>
                                <h1 className={`hero-headline ${inView ? 'animate-show' : ''}`}>{homepage.data.attributes.Headline}</h1>
                                <p className={`hero-paragraph ${inView ? 'animate-show' : ''}`}>{homepage.data.attributes.Paragraph}</p>
                                <div className={`button-wrap ${inView ? 'animate-show' : ''}`}>
                                    <a href="/portfolio"><button>portfolio.</button></a>
                                    <a href="/blog"><button>blog.</button></a>
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