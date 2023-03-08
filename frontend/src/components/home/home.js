import React from "react";
import Query from "../Query/query";
import Header from '../header/header'
import Footer from '../footer/footer'
import HOME_QUERY from "../../queries/home_query";
import { useState } from "react";
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
                            <div className={`home-content`}>
                                <h1 ref={ref} className={`hero-headline ${inView ? 'animate-show' : ''}`}>{homepage.data.attributes.Headline}</h1>
                                <p ref={ref} className={`hero-paragraph ${inView ? 'animate-show' : ''}`}>{homepage.data.attributes.Paragraph}</p>
                                <div ref={ref} className={`button-wrap ${inView ? 'animate-show' : ''}`}>
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