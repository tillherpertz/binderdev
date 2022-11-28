import React from "react";
import Query from "../Query/query";
import Header from '../header/header';
import Post from '../blog/post/post.js'
import Footer from '../footer/footer';
import BLOG_QUERY from "../../queries/blog_query";

import { Link } from "react-router-dom";

function Blog() {
    return (
        <div>
            <Header></Header>
            <div className="content-wrap is-blog">
                <h1 className="hero-headline">Blog.</h1>
                <Query query={BLOG_QUERY} id={null}>
                    {({ data: { blogposts } }) => {
                        return (
                            <div className="blogpost-wrapper">
                                {blogposts.data.map((blogpost) => {
                                    return (
                                        <div className="blogpost-listing">
                                            <div className="blog-image-wrap">
                                                <img src={process.env.REACT_APP_BACKEND_URL + blogpost.attributes.Image.data.attributes.url} />
                                            </div>
                                            <div className="blog-desc">
                                                <h2>{blogpost.attributes.Title}</h2>
                                                <p>{blogpost.attributes.Description}</p>
                                                <Link to={'/blog/' + blogpost.attributes.Slug}>read more.</Link>
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

export default Blog