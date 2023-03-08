import React from "react";
import Query from "../Query/query";
import Header from '../header/header';
import Footer from '../footer/footer';
import BLOG_COLLECTION_QUERY from "../../queries/blog_collection_query";
import PostCreator from "./postCreator";

function Blog() {
    return (
        <div>
            <Header></Header>
            <div className="content-wrap is-blog">
                <h1 className="hero-headline">Blog.</h1>
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