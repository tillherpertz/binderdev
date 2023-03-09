import React, { useState } from "react";
import Query from "../Query/query";
import Header from '../header/header'
import Footer from '../footer/footer'
import ABOUT_QUERY from "../../queries/about_query";
import { useInView } from 'react-intersection-observer';
function About() {
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
                <Query query={ABOUT_QUERY}>
                    {({ data: { about } }) => {
                        return (
                            <div ref={ref} className={`about-content`}>
                                <h1 className={`hero-headline ${inView ? 'animate-show' : ''}`}>{about.data.attributes.Headline}</h1>
                                <p className={`hero-paragraph ${inView ? 'animate-show' : ''}`}>{about.data.attributes.Paragraph}</p>
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