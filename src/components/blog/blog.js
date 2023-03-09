import React, { useState } from "react";
import Query from "../Query/query";
import Header from '../header/header';
import Footer from '../footer/footer';
import BLOG_COLLECTION_QUERY from "../../queries/blog_collection_query";
import PostCreator from "./postCreator";

import { useInView } from 'react-intersection-observer';

function Blog() {

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
            <div ref={ref} className="content-wrap is-blog">
                <h1 className={`hero-headline ${inView ? 'animate-show' : ''}`}>Blog.</h1>
                <Query query={BLOG_COLLECTION_QUERY} id={null}>
                    {({ data: { blogposts } }) => {
                        return (
                            <div className="post-wrapper">
                                {blogposts.data.map((blogpost) => {
                                    return (
                                        <PostCreator blogpost={blogpost}></PostCreator>
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

export default Blog