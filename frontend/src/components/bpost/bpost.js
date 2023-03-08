import React from "react";
import Query from "../Query/query";
import Header from '../header/header'
import Footer from '../footer/footer'
import BLOG_SINGLE_QUERY from "../../queries/blog_single_query";
import { useParams } from "react-router";
import { useState } from "react";
import { useInView } from 'react-intersection-observer';

function Post() {
    let { slug } = useParams();

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
            <div className="content-wrap is-single-post">
                <Query query={BLOG_SINGLE_QUERY} slug={slug}>
                    {({ data: { blogposts } }) => {
                        return (
                            <div className="post-wrapper">
                                {blogposts.data.map((blogpost) => {
                                    return (
                                        <div ref={ref} className={`post-listing ${inView ? 'animate-show' : ''}`}>
                                            <div className="post-image-wrap">
                                                <img alt="" width={328} height={218} src={process.env.REACT_APP_BACKEND_URL + blogpost.attributes.Image.data.attributes.url} />
                                            </div>
                                            <div className="post-desc">
                                                <h1>{blogpost.attributes.Title}.</h1>
                                                <p>{blogpost.attributes.Description}</p>
                                                <p>{blogpost.attributes.Content}</p>
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
        </div>
    );
}

export default Post